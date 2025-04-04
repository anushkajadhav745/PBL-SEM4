// // const jwt = require("jsonwebtoken");
// // const dotenv = require("dotenv");

// // dotenv.config();
// // const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// // module.exports = (req, res, next) => {
// //   try {
// //     const token = req.header("Authorization");

// //     if (!token) {
// //       return res.status(401).json({ message: "Access denied. No token provided." });
// //     }

// //     // Verify Token
// //     const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);

// //     // Ensure it's a Customer
// //     if (decoded.role !== "customer") {
// //       return res.status(403).json({ message: "Access denied. Only Customers are allowed." });
// //     }

// //     req.customer = decoded; // Store Customer details in request
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

//     // Ensure it's a Customer
//     if (decoded.role !== "customer") {
//       return res.status(403).json({ message: "Access denied. Only customers are allowed." });
//     }

//     req.customer = decoded; // Store customer details in request
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
      console.log("❌ No token provided.");
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    // Verify Token
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET);
    console.log("🔍 Decoded Token:", decoded); // Log decoded token

    if (decoded.role !== "customer") {
      console.log(`❌ Access Denied. Role is: ${decoded.role}`);
      return res.status(403).json({ message: "Access denied. Only customers are allowed." });
    }

    req.customer = decoded; // Attach customer data to request
    console.log("✅ Customer authentication successful!");
    console.log("🔑 Customer Data:", req.customer); // Log customer data
    next();
  } catch (error) {
    console.error("🚨 JWT Verification Error:", error);
    res.status(401).json({ message: "Invalid or expired token." });
  }
};
