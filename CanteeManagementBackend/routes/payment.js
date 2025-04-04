// import express from "express";
// import Razorpay from "razorpay";
// import crypto from "crypto";
// import Order from "../models/orderModel.js";

// const router = express.Router();

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // Create Order
// router.post("/create-order", async (req, res) => {
//   try {
//     const { amount, currency } = req.body;

//     const options = {
//       amount: amount * 100, // Convert to smallest currency unit (paise)
//       currency: currency || "INR",
//       receipt: `order_rcptid_${Date.now()}`,
//     };

//     const order = await razorpay.orders.create(options);
//     res.json({ success: true, order });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// });

// // Verify Payment
// router.post("/verify-payment", async (req, res) => {
//   const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

//   const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
//   hmac.update(`${razorpay_order_id}|${razorpay_payment_id}`);
//   const generatedSignature = hmac.digest("hex");

//   if (generatedSignature === razorpay_signature) {
//     const order = new Order({
//       orderId: razorpay_order_id,
//       paymentId: razorpay_payment_id,
//       amount: req.body.amount,
//       status: "Completed",
//     });

//     await order.save();
//     res.json({ success: true, message: "Payment verified successfully" });
//   } else {
//     res.status(400).json({ success: false, message: "Invalid signature" });
//   }
// });

// export default router;


const express = require("express");
const router = express.Router();
const { createOrder, verifyPayment } = require("../controllers/razorPaycontroller");

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);


require("dotenv").config();

// API to send Razorpay key to frontend
router.get("/key", (req, res) => {
    res.json({ key: process.env.RAZORPAY_KEY_ID });
});
module.exports = router;
