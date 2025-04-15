




const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { customAlphabet } = require("nanoid");
const Customer = require("../Model/customer");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET not set in environment variables");
}

const nanoid = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ123456789", 6); // 6 random characters

const customerSignup = async (req, res) => {
    try {
        console.log("Received signup request:", req.body);

        const { name, email, password, phone, userType, studentId, department, year, employeeId, designation, hostelResident, profilePic } = req.body;

        // Normalize email
        const normalizedEmail = email.toLowerCase().trim();
        console.log("Normalized email:", normalizedEmail);

        // Check if customer already exists
        const existingCustomer = await Customer.findOne({ email: normalizedEmail });
        if (existingCustomer) {
            console.log("Customer already exists");
            return res.status(400).json({ message: "User already exists. Please login." });
        }
        console.log("No existing customer found, proceeding with signup.");

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully.");

        // Generate a unique customerId (7 characters, starts with 'C')
        const customerId = `C${nanoid()}`;
        console.log("Generated customerId:", customerId);

        // Build the customer data object
        let newCustomerData = {
            name,
            email: normalizedEmail,
            password: hashedPassword,
            phone,
            userType: userType || "student",  // Default to "student" if not provided
            role: "customer", // Always set to "customer"
            profilePic,
            hostelResident,
            customerId
        };

        // Assign userType-specific fields
        if (userType === "student") {
            newCustomerData.studentId = studentId || customerId; // Optionally use customerId if not provided
            newCustomerData.department = department;
            newCustomerData.year = year;
        } else if (userType === "teacher" || userType === "staff") {
            newCustomerData.employeeId = employeeId || customerId; // Optionally use customerId if not provided
            newCustomerData.designation = designation;
        }
        console.log("Prepared new customer data:", newCustomerData);

        // Create and save the new customer document
        const newCustomer = new Customer(newCustomerData);
        console.log("Saving new customer to DB...");
        await newCustomer.save();
        console.log("Customer saved to DB successfully:", newCustomer);

        // Generate JWT token for auto-login
        console.log("Generating JWT token.");

        const token = jwt.sign({ id: newCustomer._id, userType: newCustomer.userType, role : "customer" }, JWT_SECRET, { expiresIn: "7d" });

        console.log("JWT token generated:", token);

        res.status(201).json({ message: "Signup successful", customer: newCustomer, token });
        console.log("Response sent to client.");
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};


const customerLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Convert email to lowercase
        const customer = await Customer.findOne({ email: email.toLowerCase() });
        if (!customer) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare Password
        const isMatch = await bcrypt.compare(password, customer.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // ✅ Fix: Include "role: customer" in JWT Token
        const token = jwt.sign(
            { id: customer._id, role: "customer", userType: customer.userType },  
            JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Update Last Login Timestamp
        customer.lastLogin = new Date();
        await customer.save();

        console.log("✅ Customer Login Successful! Token Generated:", token);

        res.json({ token, message: "Customer login successful" });

    } catch (error) {
        console.error("🚨 Error during login:", error);
        res.status(500).json({ message: "Server Error", error });
    }
};


const Menu = require("../Model/menu"); // Import Menu schema

// Fetch all menu items with filtering, pagination, and sorting
const getAllMenuItems = async (req, res) => {
    try {
        // Extract query parameters
        const { category, available, minPrice, maxPrice, sortBy, page = 1, limit = 10 } = req.query;

        // Build query object
        let query = {};
        if (category) query.category = category; // Filter by category
        if (available !== undefined) query.available = available === "true"; // Filter by availability
        if (minPrice) query.price = { ...query.price, $gte: parseFloat(minPrice) }; // Min price filter
        if (maxPrice) query.price = { ...query.price, $lte: parseFloat(maxPrice) }; // Max price filter

        // Sorting options
        let sortOptions = {};
        if (sortBy) {
            const [field, order] = sortBy.split(":"); // Example: "price:asc"
            sortOptions[field] = order === "desc" ? -1 : 1;
        } else {
            sortOptions.createdAt = -1; // Default: Sort by latest added
        }

        // Pagination
        const skip = (parseInt(page) - 1) * parseInt(limit);

        // Fetch menu items
        const menuItems = await Menu.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(parseInt(limit));

        // Count total items
        const totalItems = await Menu.countDocuments(query);

        // Response
        res.status(200).json({
            message: "Menu items fetched successfully",
            menu: menuItems,
            totalItems,
            totalPages: Math.ceil(totalItems / limit),
            currentPage: parseInt(page),
        });
    } catch (error) {
        console.error("Error fetching menu items:", error);
        res.status(500).json({ message: "Server error", error });
    }
};




module.exports = { customerSignup, customerLogin,getAllMenuItems};
