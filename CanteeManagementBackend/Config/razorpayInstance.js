// const Razorpay = require("razorpay");
// require("dotenv").config(); // Load environment variables

// // ✅ Debugging - Check if API keys are loaded
// console.log("🔑 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// console.log("🔑 RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

// if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     console.error("🚨 Missing Razorpay API keys. Check your .env file!");
//     process.exit(1); // Stop the server if API keys are missing
// }

// // ✅ Initialize Razorpay instance
// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID.trim(), // Ensure no extra spaces
//     key_secret: process.env.RAZORPAY_KEY_SECRET.trim(),
// });

// module.exports = razorpay;
const Razorpay = require("razorpay");
require("dotenv").config();

// Initialize Razorpay instance
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = razorpayInstance;
