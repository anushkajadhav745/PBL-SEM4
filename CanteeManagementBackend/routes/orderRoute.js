const express = require("express");
const router = express.Router();
// const orderController = require("../controllers/orderControllers");
const { placeOrder, getCustomerOrders, getDailyOrdersAnalysis,getFilteredOrders } = require("../controllers/orderControllers");
const customerMiddeleware = require("../Middeleware/customerAuth");
const adminMiddleware = require("../Middeleware/adminAuth");

// 🛒 Place an Order (Customer)
router.post("/place-order", customerMiddeleware, placeOrder);

// 🛒 Get Orders for Logged-in Customer
router.get("/my-orders", customerMiddeleware, getCustomerOrders);

// 📊 Get Daily Order Analysis (Admin Only)
router.get("/daily-orders", adminMiddleware,  getDailyOrdersAnalysis);


router.get("/filter-orders", adminMiddleware, getFilteredOrders);
module.exports = router;
