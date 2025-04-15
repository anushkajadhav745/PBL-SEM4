const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Admin = require("../Model/admin");
const generateToken = require("../utils/generateToken");
const { customAlphabet } = require("nanoid");
const Staff = require("../Model/staff");
const Menu = require("../Model/menu"); // Adjust the path if needed

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";
const nanoid = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ123456789", 6);

// --------------------- Admin Login ---------------------
const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const normalizedEmail = email.toLowerCase().trim();

        const admin = await Admin.findOne({ email: normalizedEmail });
        if (!admin) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        const token = jwt.sign({ id: admin._id, role: "admin" }, JWT_SECRET, { expiresIn: "1d" });
        res.json({ token, message: "Admin login successful" });
    } catch (error) {
        console.error("Admin login error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// --------------------- Add Admin ---------------------
const addAdmin = async (req, res) => {
    try {
        const { name, email, password, phone, profilePic } = req.body;
        const normalizedEmail = email.toLowerCase().trim();

        const existingAdmin = await Admin.findOne({ email: normalizedEmail });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const adminId = `A${nanoid()}`;

        const newAdminData = {
            name,
            email: normalizedEmail,
            password: hashedPassword,
            phone,
            profilePic,
            role: "admin",
            adminId
        };

        const newAdmin = new Admin(newAdminData);
        await newAdmin.save();

        const token = jwt.sign({ id: newAdmin._id, role: newAdmin.role }, JWT_SECRET, { expiresIn: "7d" });
        res.status(201).json({ message: "Admin added successfully", admin: newAdmin, token });
    } catch (error) {
        console.error("Error adding admin:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// --------------------- Add Staff ---------------------
const addStaff = async (req, res) => {
    try {
        const { name, email, password, phone, position, profilePic } = req.body;
        const normalizedEmail = email.toLowerCase().trim();

        const existingStaff = await Staff.findOne({ email: normalizedEmail });
        if (existingStaff) {
            return res.status(400).json({ message: "Staff member already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let staffId;
        let isUnique = false;
        while (!isUnique) {
            staffId = "S" + nanoid();
            const existingStaffId = await Staff.findOne({ staffId });
            if (!existingStaffId) isUnique = true;
        }

        const newStaffData = {
            name,
            email: normalizedEmail,
            password: hashedPassword,
            phone,
            role: "staff",
            staffId,
            position,
            profilePic
        };

        const newStaff = new Staff(newStaffData);
        await newStaff.save();

        const token = jwt.sign({ id: newStaff._id, role: newStaff.role }, JWT_SECRET, { expiresIn: "7d" });
        res.status(201).json({ message: "Staff added successfully", staff: newStaff, token });
    } catch (error) {
        console.error("Error adding staff:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// --------------------- Add Menu Item ---------------------
const addMenuItem = async (req, res) => {
    try {
        const { name, description, price, category, available, preparationTime, rating } = req.body;
        const image = req.file ? req.file.filename : null;

        if (!name || !price || !category) {
            return res.status(400).json({ message: "Name, price, and category are required" });
        }

        const existingMenu = await Menu.findOne({ name });
        if (existingMenu) {
            return res.status(400).json({ message: "Menu item already exists" });
        }

        let menuId;
        let isUnique = false;
        while (!isUnique) {
            menuId = "I" + nanoid();
            const existingMenuId = await Menu.findOne({ menuId });
            if (!existingMenuId) isUnique = true;
        }

        const newMenuItem = new Menu({
            menuId,
            name,
            description,
            price,
            category,
            available: available !== undefined ? available : true,
            imageUrl: image ? `http://localhost:4000/uploads/${image}` : null,
            preparationTime: preparationTime || 10,
            rating: rating || 0
        });

        await newMenuItem.save();
        res.status(201).json({ message: "Menu item added successfully", menu: newMenuItem });

    } catch (error) {
        console.error("Error adding menu item:", error);
        res.status(500).json({ message: "Server error", error });
    }
};

// --------------------- Delete Menu Item ---------------------
const deleteMenuItem = async (req, res) => {
    try {
        const { menuId } = req.params;
        const deletedMenu = await Menu.findOneAndDelete({ menuId });

        if (!deletedMenu) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json({ message: "Menu item deleted successfully", deletedMenu });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// --------------------- Get All Menu Items ---------------------
const getAllMenuItems = async (req, res) => {
    try {
        const menuItems = await Menu.find();

        if (!menuItems || menuItems.length === 0) {
            return res.status(404).json({ message: "No menu items found" });
        }

        res.status(200).json({ message: "Menu items retrieved successfully", menuItems });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

// --------------------- Update Menu Item ---------------------
const updateMenuItem = async (req, res) => {
    try {
        const { menuId } = req.params;
        const updatedData = req.body;

        const updatedMenu = await Menu.findOneAndUpdate({ menuId }, updatedData, { new: true });

        if (!updatedMenu) {
            return res.status(404).json({ message: "Menu item not found" });
        }

        res.status(200).json({ message: "Menu item updated successfully", updatedMenu });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

module.exports = {
    loginAdmin,
    addAdmin,
    addStaff,
    addMenuItem,
    deleteMenuItem,
    getAllMenuItems,
    updateMenuItem
};
