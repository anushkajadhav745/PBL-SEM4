// // const jwt = require("jsonwebtoken");
// // const dotenv = require("dotenv");

// // dotenv.config();
// // const JWT_SECRET = process.env.JWT_SECRET || "babbar";

// // module.exports = (req, res, next) => {
// //   try {
// //     const token = req.header("Authorization");

// //     if (!token) {
// //       return res.status(401).json({ message: "Access denied. No token provided." });
// //     }

// //     // Verify Token
// //     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

// //     // Ensure the user is a staff member
// //     if (decoded.payload.role !== "staff") {
// //       return res.status(403).json({ message: "Access denied. Only staff allowed." });
// //     }

// //     req.staff = decoded.payload; // Store staff details in request
// //     next(); // Proceed to next middleware
// //   } catch (error) {
// //     res.status(401).json({ message: "Invalid or expired token." });
// //   }
// // };

// const jwt = require("jsonwebtoken");
// const dotenv = require("dotenv");

// dotenv.config();
// const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// module.exports = (req, res, next) => {
//   try {
//     const token = req.header("Authorization");

//     if (!token) {
//       return res.status(401).json({ message: "Access denied. No token provided." });
//     }

//     // Verify Token
//     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

//     // Ensure it's Staff
//     if (decoded.role !== "staff") {
//       return res.status(403).json({ message: "Access denied. Only Staff are allowed." });
//     }

//     req.staff = decoded; // Store Staff details in request
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
    // 🔹 Get token from Authorization header
    const authHeader = req.header("Authorization");
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]; // Extract token

    // 🔹 Verify Token
    const decoded = jwt.verify(token, JWT_SECRET);

    // 🔹 Ensure it's a staff member
    if (decoded.role !== "staff") {
      return res.status(403).json({ message: "Access denied. Only staff are allowed." });
    }

    req.user = decoded; // Store user info (more generic than req.staff)
    next(); // Proceed to next middleware
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Session expired. Please log in again." });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token. Authentication failed." });
    } else {
      return res.status(401).json({ message: "Unauthorized request." });
    }
  }
};
