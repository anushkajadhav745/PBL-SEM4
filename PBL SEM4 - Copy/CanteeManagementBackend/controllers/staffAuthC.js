const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const Staff = require("../Model/staff");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Staff Login Controller
const loginStaff = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if Staff Exists
        const staff = await Staff.findOne({ email });
        if (!staff) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Compare Hashed Password
        const isMatch = await bcrypt.compare(password, staff.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { id: staff._id, role: "staff" },
            JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.json({ token, message: "Staff login successful" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error });
    }
};

module.exports = { loginStaff };

