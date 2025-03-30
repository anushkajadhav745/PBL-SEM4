const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Admin = require("../Model/admin");
const generateToken = require("../utils/generateToken");
const { customAlphabet } = require("nanoid");
const Staff = require("../Model/staff");
const Menu = require("../Model/menu"); // Adjust the path if needed



const nanoid = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ123456789", 6);
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Admin Login Controller
// const loginAdmin = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // Check if Admin Exists
//         const admin = await Admin.findOne({ email });
//         if (!admin) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         // Compare Hashed Password
//         const isMatch = await bcrypt.compare(password, admin.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: "Invalid email or password" });
//         }

//         // Generate JWT Token
//         const token = jwt.sign(
//             { id: admin._id, role: "admin" },
//             JWT_SECRET,
//             { expiresIn: "1d" }
//         );

//         res.json({ token, message: "Admin login successful" });

//     } catch (error) {
//         res.status(500).json({ message: "Server Error", error });
//     }
// };

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Normalize email for consistency
        const normalizedEmail = email.toLowerCase().trim();

        // Check if Admin exists
        const admin = await Admin.findOne({ email: normalizedEmail });
        if (!admin) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare hashed password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: admin._id, role: "admin" },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ token, message: "Admin login successful" });
    } catch (error) {
        console.error("Admin login error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

//add another admin
// const addAdmin = async (req, res) => {
//     try {
//       // Destructure the required fields from the request body
//       const { name, email, password, phone, profilePic } = req.body;
//       console.log("Received addAdmin request:", req.body);
  
//       // Normalize email
//       const normalizedEmail = email.toLowerCase().trim();
  
//       // Check if an admin with this email already exists
//       const existingAdmin = await Admin.findOne({ email: normalizedEmail });
//       if (existingAdmin) {
//         console.log("Admin already exists for email:", normalizedEmail);
//         return res.status(400).json({ message: "Admin already exists" });
//       }
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10);
//       console.log("Password hashed successfully.");
  
//       // Generate a unique adminId using nanoid
//       const adminId = nanoid();
//       console.log("Generated adminId:", adminId);
  
//       // Build the admin object
//       const newAdminData = {
//         name,
//         email: normalizedEmail,
//         password: hashedPassword,
//         phone,
//         profilePic,
//         role: "admin", // Ensuring the role is admin
//         adminId
//       };
//       console.log("New admin data prepared:", newAdminData);
  
//       // Create a new admin document
//       const newAdmin = new Admin(newAdminData);
//       console.log("Saving new admin to DB...");
//       await newAdmin.save();
//       console.log("New admin saved to DB successfully:", newAdmin);
  
//       // Optionally, generate a JWT token for the new admin
//       const token = jwt.sign({ id: newAdmin._id, role: newAdmin.role }, JWT_SECRET, { expiresIn: "7d" });
//       console.log("JWT token generated.");
  
//       res.status(201).json({ message: "Admin added successfully", admin: newAdmin, token });
//     } catch (error) {
//       console.error("Error adding admin:", error);
//       res.status(500).json({ message: "Server error", error: error.message });
//     }
//   };




const addAdmin = async (req, res) => {
  try {
      // Destructure the required fields from the request body
      const { name, email, password, phone, profilePic } = req.body;
      console.log("Received addAdmin request:", req.body);

      // Normalize email
      const normalizedEmail = email.toLowerCase().trim();

      // Check if an admin with this email already exists
      const existingAdmin = await Admin.findOne({ email: normalizedEmail });
      if (existingAdmin) {
          console.log("Admin already exists for email:", normalizedEmail);
          return res.status(400).json({ message: "Admin already exists" });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("Password hashed successfully.");

      // Generate a unique adminId (7 characters, starts with 'A')
      const adminId = `A${nanoid()}`;
      console.log("Generated adminId:", adminId);

      // Build the admin object
      const newAdminData = {
          name,
          email: normalizedEmail,
          password: hashedPassword,
          phone,
          profilePic,
          role: "admin", // Ensuring the role is admin
          adminId
      };
      console.log("New admin data prepared:", newAdminData);

      // Create a new admin document
      const newAdmin = new Admin(newAdminData);
      console.log("Saving new admin to DB...");
      await newAdmin.save();
      console.log("New admin saved to DB successfully:", newAdmin);

      // Optionally, generate a JWT token for the new admin
      const token = jwt.sign({ id: newAdmin._id, role: newAdmin.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
      console.log("JWT token generated.");

      res.status(201).json({ message: "Admin added successfully", admin: newAdmin, token });
  } catch (error) {
      console.error("Error adding admin:", error);
      res.status(500).json({ message: "Server error", error: error.message });
  }
};




  // const addStaff = async (req, res) => {
  //   try {
  //     console.log("Received addStaff request:", req.body);
  
  //     const { name, email, password, phone, position, profilePic } = req.body;
  
  //     // Normalize email
  //     const normalizedEmail = email.toLowerCase().trim();
  
  //     // Check if a staff member with the provided email already exists
  //     const existingStaff = await Staff.findOne({ email: normalizedEmail });
  //     if (existingStaff) {
  //       console.log("Staff already exists for email:", normalizedEmail);
  //       return res.status(400).json({ message: "Staff member already exists." });
  //     }
  
  //     // Hash the password
  //     const hashedPassword = await bcrypt.hash(password, 10);
  //     console.log("Password hashed successfully.");
  
  //     // Generate a unique staffId (5 characters)
  //     const staffId = nanoid();
  //     console.log("Generated staffId:", staffId);
  
  //     // Create the new staff object
  //     const newStaffData = {
  //       name,
  //       email: normalizedEmail,
  //       password: hashedPassword,
  //       phone,
  //       role: "staff", // Ensure role is staff
  //       staffId,
  //       position,
  //       profilePic
  //     };
  //     console.log("New staff data:", newStaffData);
  
  //     // Create and save the staff document
  //     const newStaff = new Staff(newStaffData);
  //     console.log("Saving new staff to DB...");
  //     await newStaff.save();
  //     console.log("New staff created:", newStaff);
  
  //     // Optionally, generate a JWT token for the new staff
  //     const token = jwt.sign({ id: newStaff._id, role: newStaff.role }, JWT_SECRET, { expiresIn: "7d" });
  //     console.log("JWT token generated.");
  
  //     res.status(201).json({ message: "Staff added successfully", staff: newStaff, token });
  //   } catch (error) {
  //     console.error("Error adding staff:", error);
  //     res.status(500).json({ message: "Server error", error: error.message });
  //   }
  // };
  
  const addStaff = async (req, res) => {
    try {
        console.log("Received addStaff request:", req.body);

        const { name, email, password, phone, position, profilePic } = req.body;

        // Normalize email
        const normalizedEmail = email.toLowerCase().trim();

        // Check if a staff member with the provided email already exists
        const existingStaff = await Staff.findOne({ email: normalizedEmail });
        if (existingStaff) {
            console.log("Staff already exists for email:", normalizedEmail);
            return res.status(400).json({ message: "Staff member already exists." });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("Password hashed successfully.");

        // Generate a unique staffId starting with "S" and followed by 6 random characters
        let staffId;
        let isUnique = false;

        while (!isUnique) {
            staffId = "S" + nanoid(); // Example: S4KJ5ZP
            const existingStaffId = await Staff.findOne({ staffId });
            if (!existingStaffId) isUnique = true;
        }

        console.log("Generated staffId:", staffId);

        // Create the new staff object
        const newStaffData = {
            name,
            email: normalizedEmail,
            password: hashedPassword,
            phone,
            role: "staff", // Ensure role is staff
            staffId,
            position,
            profilePic
        };
        console.log("New staff data:", newStaffData);

        // Create and save the staff document
        const newStaff = new Staff(newStaffData);
        console.log("Saving new staff to DB...");
        await newStaff.save();
        console.log("New staff created:", newStaff);

        // Optionally, generate a JWT token for the new staff
        const token = jwt.sign({ id: newStaff._id, role: newStaff.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        console.log("JWT token generated.");

        res.status(201).json({ message: "Staff added successfully", staff: newStaff, token });
    } catch (error) {
        console.error("Error adding staff:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};



  const addMenuItem = async (req, res) => {
    try {
        const { name, description, price, category, available, imageUrl, preparationTime, rating } = req.body;

        // Validate required fields
        if (!name || !price || !category) {
            return res.status(400).json({ message: "Name, price, and category are required" });
        }

        // Check if menu item with the same name already exists
        const existingMenu = await Menu.findOne({ name });
        if (existingMenu) {
            return res.status(400).json({ message: "Menu item already exists" });
        }

        // Generate unique menuId starting with "I" + 6 random characters
        let menuId;
        let isUnique = false;

        while (!isUnique) {
            menuId = "I" + nanoid(); // Example: I3FJ8ZP
            const existingMenuId = await Menu.findOne({ menuId });
            if (!existingMenuId) isUnique = true;
        }

        // Create new menu item
        const newMenuItem = new Menu({
            menuId,
            name,
            description,
            price,
            category,
            available: available !== undefined ? available : true, // Default: true
            imageUrl,
            preparationTime: preparationTime || 10, // Default: 10 minutes
            rating: rating || 0 // Default: 0 rating
        });

        // Save to database
        await newMenuItem.save();

        res.status(201).json({ message: "Menu item added successfully", menu: newMenuItem });

    } catch (error) {
        console.error("Error adding menu item:", error);
        res.status(500).json({ message: "Server error", error });
    }
};









// Ensure at least one admin exists
// const createInitialAdmin = async () => {
//     const existingAdmin = await Admin.findOne();
//     if (!existingAdmin) {
//         const hashedPassword = await bcrypt.hash("abcd", 10);
//         const newAdmin = new Admin({
//             name: "Super Admin",
//             email: "admin@example.com",
//             password: hashedPassword,
//             role: "admin",
//         });
//         await newAdmin.save();
//         console.log("Initial admin created.");
//     }
// };

module.exports = { loginAdmin,addAdmin,addStaff,addMenuItem };

