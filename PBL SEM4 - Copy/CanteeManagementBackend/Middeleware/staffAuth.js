// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();
// const JWT_SECRET = process.env.JWT_SECRET || "babbar";

// module.exports = (req, res, next) => {
//   try {
//     const token = req.header("Authorization");

//     if (!token) {
//       return res.status(401).json({ message: "Access denied. No token provided." });
//     }

//     // Verify Token
//     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

//     // Ensure the user is a staff member
//     if (decoded.payload.role !== "staff") {
//       return res.status(403).json({ message: "Access denied. Only staff allowed." });
//     }

//     req.staff = decoded.payload; // Store staff details in request
//     next(); // Proceed to next middleware
//   } catch (error) {
//     res.status(401).json({ message: "Invalid or expired token." });
//   }
// };

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

    // Ensure it's Staff
    if (decoded.role !== "staff") {
      return res.status(403).json({ message: "Access denied. Only Staff are allowed." });
    }

    req.staff = decoded; // Store Staff details in request
    next(); // Proceed to next middleware
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
