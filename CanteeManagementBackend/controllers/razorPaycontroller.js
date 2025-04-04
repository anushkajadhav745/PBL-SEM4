// // // const Razorpay = require("razorpay");
// // // const crypto = require("crypto");

// // // const razorpay = new Razorpay({
// // //     key_id: process.env.RAZORPAY_KEY_ID,
// // //     key_secret: process.env.RAZORPAY_KEY_SECRET,
// // // });
// // // console.log("Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);
// // // console.log("Razorpay Secret:", process.env.RAZORPAY_SECRET);


// // // // Create an order
// // // const createOrder = async (req, res) => {
// // //     try {
// // //         const { amount, currency } = req.body;

// // //         const options = {
// // //             amount: amount * 100, // Amount in paise (₹1 = 100 paise)
// // //             currency: currency || "INR",
// // //             receipt: `receipt_${Date.now()}`,
// // //         };

// // //         const order = await razorpay.orders.create(options);
// // //         res.json({ success: true, order });
// // //     } catch (error) {
// // //         console.error("Razorpay order creation failed:", error);
// // //         res.status(500).json({ success: false, message: "Server error" });
// // //     }
// // // };

// // // // Verify Payment
// // // const verifyPayment = async (req, res) => {
// // //     try {
// // //         const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
// // //         const sign = razorpay_order_id + "|" + razorpay_payment_id;
// // //         const expectedSignature = crypto
// // //             .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
// // //             .update(sign)
// // //             .digest("hex");

// // //         if (expectedSignature === razorpay_signature) {
// // //             res.json({ success: true, message: "Payment verified" });
// // //         } else {
// // //             res.status(400).json({ success: false, message: "Invalid payment signature" });
// // //         }
// // //     } catch (error) {
// // //         res.status(500).json({ success: false, message: "Payment verification failed" });
// // //     }
// // // };

// // // module.exports = {
// // //     verifyPayment,createOrder
// // // };


// // const Razorpay = require("razorpay");
// // const crypto = require("crypto");

// // const razorpay = new Razorpay({
// //     key_id: process.env.RAZORPAY_KEY_ID,
// //     key_secret: process.env.RAZORPAY_SECRET, // ✅ Fixed env variable name
// // });

// // console.log("🔑 Razorpay Key ID:", process.env.RAZORPAY_KEY_ID); // Debugging
// // console.log("🔒 Razorpay Secret:", process.env.RAZORPAY_SECRET ? "Loaded" : "Not Loaded"); // Debugging

// // // ✅ Create an Order
// // // const createOrder = async (req, res) => {
// // //     try {
// // //         const { amount, currency } = req.body;

// // //         if (!amount) {
// // //             return res.status(400).json({ success: false, message: "Amount is required" });
// // //         }

// // //         const options = {
// // //             amount: amount * 100, // Convert ₹ to paise
// // //             currency: currency || "INR",
// // //             receipt: `receipt_${Date.now()}`,
// // //         };

// // //         const order = await razorpay.orders.create(options);
// // //         res.json({ success: true, order });

// // //     } catch (error) {
// // //         console.error("🔥 Razorpay order creation failed:", error);
// // //         res.status(500).json({ success: false, message: "Razorpay order creation failed", error: error.message });
// // //     }
// // // };


// // const createOrder = async (req, res) => {
// //     try {
// //         const { amount, currency } = req.body;
// //         console.log("Received amount:", amount, "Currency:", currency); // ✅ Debugging

// //         const options = {
// //             amount: amount * 100, // Convert ₹ to paise
// //             currency: currency || "INR",
// //             receipt: `receipt_${Date.now()}`,
// //         };

// //         console.log("Creating order with options:", options); // ✅ Debugging

// //         const order = await razorpay.orders.create(options);
// //         console.log("✅ Order created successfully:", order); // ✅ Debugging

// //         res.json({ success: true, order });
// //     } catch (error) {
// //         console.error("❌ Razorpay order creation failed:", error);
// //         res.status(500).json({ success: false, message: error.message || "Server error" });
// //     }
// // };

// // // ✅ Verify Payment
// // const verifyPayment = async (req, res) => {
// //     try {
// //         const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

// //         if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
// //             return res.status(400).json({ success: false, message: "Missing payment details" });
// //         }

// //         const sign = razorpay_order_id + "|" + razorpay_payment_id;
// //         const expectedSignature = crypto
// //             .createHmac("sha256", process.env.RAZORPAY_SECRET)
// //             .update(sign)
// //             .digest("hex");

// //         if (expectedSignature === razorpay_signature) {
// //             console.log("✅ Payment Verified!");
// //             return res.json({ success: true, message: "Payment verified successfully" });
// //         } else {
// //             console.warn("⚠️ Payment Verification Failed: Invalid Signature");
// //             return res.status(400).json({ success: false, message: "Invalid payment signature" });
// //         }

// //     } catch (error) {
// //         console.error("🔥 Payment verification failed:", error);
// //         res.status(500).json({ success: false, message: "Payment verification failed", error: error.message });
// //     }
// // };

// // module.exports = {
// //     createOrder,
// //     verifyPayment
// // };


// const Razorpay = require("razorpay");
// const crypto = require("crypto");

// // Load environment variables
// require("dotenv").config();

// console.log("🔑 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// console.log("🔑 RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

// // ✅ Check if API keys are loaded
// if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
//     console.error("🚨 Missing Razorpay API keys. Check your .env file!");
//     process.exit(1); // Stop the server if keys are missing
// }

// // ✅ Initialize Razorpay instance
// const razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// console.log("🔑 Razorpay Key ID:", process.env.RAZORPAY_KEY_ID);

// // ✅ Create Order API
// const createOrder = async (req, res) => {
//     try {
//         const { amount, currency } = req.body;

//         // ✅ Input validation
//         if (!amount || isNaN(amount) || amount <= 0) {
//             console.error("🚨 Invalid amount received:", amount);
//             return res.status(400).json({ success: false, message: "Invalid amount" });
//         }

//         console.log("✅ Received amount:", amount, "Currency:", currency || "INR");

//         const options = {
//             amount: amount * 100, // Convert ₹ to paise
//             currency: currency || "INR",
//             receipt: `receipt_${Date.now()}`,
//         };

//         console.log("🚀 Creating Razorpay order with options:", options);

//         const order = await razorpay.orders.create(options);

//         console.log("✅ Order created successfully:", order);

//         res.json({ success: true, order });
//     } catch (error) {
//         console.error("🔥 Razorpay order creation failed:", error);
//         res.status(500).json({
//             success: false,
//             message: "Failed to create order",
//             error: error.message,
//         });
//     }
// };

// // ✅ Verify Payment API
// const verifyPayment = async (req, res) => {
//     try {
//         const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//         console.log("🔍 Verifying Payment...");
//         console.log("🆔 Order ID:", razorpay_order_id);
//         console.log("💳 Payment ID:", razorpay_payment_id);
//         console.log("🔏 Signature:", razorpay_signature);

//         // ✅ Validate request data
//         if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
//             console.error("🚨 Missing payment details in request!");
//             return res.status(400).json({ success: false, message: "Missing payment details" });
//         }

//         const sign = razorpay_order_id + "|" + razorpay_payment_id;
//         const expectedSignature = crypto
//             .createHmac("sha256", process.env.RAZORPAY_SECRET)
//             .update(sign)
//             .digest("hex");

//         console.log("📝 Expected Signature:", expectedSignature);

//         if (expectedSignature === razorpay_signature) {
//             console.log("✅ Payment Verified Successfully!");
//             return res.json({ success: true, message: "Payment verified successfully" });
//         } else {
//             console.warn("⚠️ Payment Verification Failed: Invalid Signature");
//             return res.status(400).json({ success: false, message: "Invalid payment signature" });
//         }
//     } catch (error) {
//         console.error("🔥 Payment verification failed:", error);
//         res.status(500).json({
//             success: false,
//             message: "Payment verification failed",
//             error: error.message,
//         });
//     }
// };

// // ✅ Export routes
// module.exports = {
//     createOrder,
//     verifyPayment,
// };

// const Razorpay = require("razorpay");
const razorpayInstance = require("../Config/razorpayInstance"); // Import initialized Razorpay instance

const crypto = require("crypto");

// ✅ Create Order API
// const createOrder = async (req, res) => {
//     try {
//         const { amount, currency } = req.body;
//         console.log("✅ Received amount:", amount, "Currency:", currency);

//         const options = {
//             amount: amount * 100, // Convert ₹ to paise
//             currency: currency || "INR",
//             receipt: `receipt_${Date.now()}`,
//         };

//         console.log("🚀 Creating Razorpay order with options:", options);

//         const order = await razorpay.orders.create(options);
//         console.log("✅ Order created successfully:", order);

//         res.json({ success: true, order });
//     } catch (error) {
//         console.error("🔥 Razorpay order creation failed:", error);
//         res.status(500).json({ success: false, message: error.message || "Server error" });
//     }
// };


const createOrder = async (req, res) => {
    try {
      console.log("🔑 Using Razorpay Key:", process.env.RAZORPAY_KEY_ID); // Debugging
  
      const options = {
        amount: req.body.amount * 100, // Amount should be in paisa
        currency: "INR",
        receipt: `receipt_${Date.now()}`,
      };
  
      const order = await razorpayInstance.orders.create(options);
      console.log("🚀 Order Created Successfully:", order);
  
      res.json({ success: true, order });
    } catch (error) {
      console.error("🔥 Razorpay Order Creation Failed:", error);
      res.status(500).json({ success: false, error: error.error });
    }
  };
  
// ✅ Verify Payment API
const verifyPayment = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ success: false, message: "Missing payment details" });
        }

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign)
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            console.log("✅ Payment Verified!");
            return res.json({ success: true, message: "Payment verified successfully" });
        } else {
            console.warn("⚠️ Payment Verification Failed: Invalid Signature");
            return res.status(400).json({ success: false, message: "Invalid payment signature" });
        }
    } catch (error) {
        console.error("🔥 Payment verification failed:", error);
        res.status(500).json({ success: false, message: "Payment verification failed", error: error.message });
    }
};

module.exports = {
    createOrder,
    verifyPayment
};
