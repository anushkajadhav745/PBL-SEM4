// // // // // import express from "express";
// // // // // import Razorpay from "razorpay";
// // // // // import crypto from "crypto";
// // // // // import Order from "../models/orderModel.js";

// // // // // const router = express.Router();

// // // // // const razorpay = new Razorpay({
// // // // //   key_id: process.env.RAZORPAY_KEY_ID,
// // // // //   key_secret: process.env.RAZORPAY_KEY_SECRET,
// // // // // });

// // // // // // Create Order
// // // // // router.post("/create-order", async (req, res) => {
// // // // //   try {
// // // // //     const { amount, currency } = req.body;

// // // // //     const options = {
// // // // //       amount: amount * 100, // Convert to smallest currency unit (paise)
// // // // //       currency: currency || "INR",
// // // // //       receipt: `order_rcptid_${Date.now()}`,
// // // // //     };

// // // // //     const order = await razorpay.orders.create(options);
// // // // //     res.json({ success: true, order });
// // // // //   } catch (error) {
// // // // //     res.status(500).json({ success: false, message: error.message });
// // // // //   }
// // // // // });

// // // // // // Verify Payment
// // // // // router.post("/verify-payment", async (req, res) => {
// // // // //   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

// // // // //   const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
// // // // //   hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
// // // // //   const generatedSignature = hmac.digest("hex");

// // // // //   if (generatedSignature === razorpay_signature) {
// // // // //     const order = new Order({
// // // // //       orderId: razorpay_order_id,
// // // // //       paymentId: razorpay_payment_id,
// // // // //       amount: req.body.amount,
// // // // //       status: "Completed",
// // // // //     });

// // // // //     await order.save();
// // // // //     res.json({ success: true, message: "Payment verified successfully" });
// // // // //   } else {
// // // // //     res.status(400).json({ success: false, message: "Invalid signature" });
// // // // //   }
// // // // // });

// // // // // export default router;


// // // // const express = require("express");
// // // // const router = express.Router();
// // // // const { createOrder, verifyPayment } = require("../controllers/razorPaycontroller");

// // // // router.post("/create-order", createOrder);
// // // // router.post("/verify-payment", verifyPayment);


// // // // require("dotenv").config();

// // // // // API to send Razorpay key to frontend
// // // // router.get("/key", (req, res) => {
// // // //     res.json({ key: process.env.RAZORPAY_KEY_ID });
// // // // });
// // // // module.exports = router;




// // // const express = require("express");
// // // const router = express.Router();
// // // require("dotenv").config();

// // // // ✅ API to send Razorpay key to frontend
// // // router.get("/key", (req, res) => {
// // //     res.json({ key: process.env.RAZORPAY_KEY_ID });
// // // });

// // // module.exports = router;



// // const express = require("express");
// // const router = express.Router();
// // const { createOrder, verifyPayment } = require("../controllers/razorPaycontroller");

// // require("dotenv").config();

// // // ✅ API to create Razorpay order
// // router.post("/create-order", createOrder);

// // // ✅ API to verify Razorpay payment
// // router.post("/verify-payment", verifyPayment);

// // // ✅ API to send Razorpay key to frontend
// // router.get("/key", (req, res) => {
// //     res.json({ key: process.env.RAZORPAY_KEY_ID });
// // });

// // module.exports = router;



// // const express = require("express");
// // const { getRazorpayKey, createOrder, verifyPayment } = require("../controllers/razorPaycontroller");

// // const router = express.Router();

// // router.get("/key", getRazorpayKey); // ✅ Fetch Razorpay Key
// // router.post("/create-order", createOrder); // ✅ Create Order
// // router.post("/verify-payment", verifyPayment); // ✅ Verify Payment

// // module.exports = router;


// const express = require("express");
// const Razorpay = require("razorpay");
// const router = express.Router();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET,
// });

// // Create Razorpay order
// router.post("/create-order", async (req, res) => {
//   const { amount } = req.body;

//   try {
//     const options = {
//       amount: amount * 100, // Razorpay works in paise
//       currency: "INR",
//       receipt: "receipt_" + Math.floor(Math.random() * 10000),
//     };

//     const order = await razorpay.orders.create(options);
//     res.status(200).json(order);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Error creating Razorpay order" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/razorpayController");
const customerAuth = require("../Middeleware/customerAuth");

router.post("/create-order", customerAuth, createOrder);

module.exports = router;
