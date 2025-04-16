const razorpay = require("../Config/razorpayInstance");

exports.createOrder = async (req, res) => {
  try {
    const { totalPrice } = req.body;

    const options = {
      amount: totalPrice * 100, // amount in paise
      currency: "INR",
      receipt: "order_rcptid_" + Math.floor(Math.random() * 10000),
    };

    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (err) {
    console.error("Razorpay Error:", err);
    res.status(500).json({ message: "Failed to create Razorpay order" });
  }
};
