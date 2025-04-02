const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

module.exports = (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // Verify Token
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

    // Ensure it's an Admin
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Only Admins are allowed." });
    }

    req.admin = decoded; // Store Admin details in request
    next(); // Proceed to next middleware
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
