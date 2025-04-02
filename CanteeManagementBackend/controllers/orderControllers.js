// const Order = require("../Model/Orders");
// const Customer = require("../Model/customer");

// // 🛒 Place an Order
// exports.placeOrder = async (req, res) => {
//     try {
//         const customerId = req.user.id; // Get logged-in user ID
//         const customer = await Customer.findById(customerId);

//         if (!customer || !customer.cart.length) {
//             return res.status(400).json({ message: "Cart is empty or user not found" });
//         }

//         const totalAmount = customer.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

//         // Create an order
//         const newOrder = new Order({
//             customerId,
//             items: customer.cart,
//             totalAmount
//         });

//         await newOrder.save();

//         // Clear the cart after placing the order
//         customer.cart = [];
//         await customer.save();

//         res.status(201).json({ message: "Order placed successfully", order: newOrder });
//     } catch (error) {
//         console.error("Error placing order:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// // 🛒 Get Orders for Logged-in Customer
// exports.getCustomerOrders = async (req, res) => {
//     try {
//         const customerId = req.user.id;
//         const orders = await Order.find({ customerId }).sort({ orderedAt: -1 });

//         res.json({ orders });
//     } catch (error) {
//         console.error("Error fetching orders:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// // 📊 Get Daily Orders Analysis for Admin
// exports.getDailyOrdersAnalysis = async (req, res) => {
//     try {
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);

//         const dailyOrders = await Order.find({ orderedAt: { $gte: today } });

//         const totalRevenue = dailyOrders.reduce((sum, order) => sum + order.totalAmount, 0);
//         const statusCounts = dailyOrders.reduce((acc, order) => {
//             acc[order.status] = (acc[order.status] || 0) + 1;
//             return acc;
//         }, {});

//         res.json({
//             totalOrders: dailyOrders.length,
//             totalRevenue,
//             statusCounts
//         });
//     } catch (error) {
//         console.error("Error fetching daily orders:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };


const Order = require("../Model/Orders");
const Customer = require("../Model/customer");

// 🛒 Place an Order
const placeOrder = async (req, res) => {
    try {
        const customerId = req.customer.id;

        const customer = await Customer.findById(customerId);

        if (!customer || !customer.cart.length) {
            return res.status(400).json({ message: "Cart is empty or user not found" });
        }

        const totalAmount = customer.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

        // Create an order
        const newOrder = new Order({
            customerId,
            items: customer.cart,
            totalAmount
        });

        await newOrder.save();

        // Clear the cart after placing the order
        customer.cart = [];
        await customer.save();

        res.status(201).json({ message: "Order placed successfully", order: newOrder });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// 🛒 Get Orders for Logged-in Customer
const getCustomerOrders = async (req, res) => {
    try {
        const customerId = req.customer.id;

        const orders = await Order.find({ customerId }).sort({ orderedAt: -1 });

        res.json({ orders });
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// 📊 Get Daily Orders Analysis for Admin
const getDailyOrdersAnalysis = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const dailyOrders = await Order.find({ orderedAt: { $gte: today } });

        const totalRevenue = dailyOrders.reduce((sum, order) => sum + order.totalAmount, 0);
        const statusCounts = dailyOrders.reduce((acc, order) => {
            acc[order.status] = (acc[order.status] || 0) + 1;
            return acc;
        }, {});

        res.json({
            totalOrders: dailyOrders.length,
            totalRevenue,
            statusCounts
        });
    } catch (error) {
        console.error("Error fetching daily orders:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// const Order = require("../models/orderModel");

// Get all orders (filtered by month or day)
// const getFilteredOrders = async (req, res) => {
//     try {
//         const { month, day } = req.query; // Get month and day from request query

//         let filter = {};

//         if (month) {
//             const startDate = new Date(`${month}-01`); // Start of month
//             const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0); // End of month
//             filter.orderedAt = { $gte: startDate, $lte: endDate };
//         }

//         if (day) {
//             const selectedDate = new Date(day);
//             const nextDay = new Date(selectedDate);
//             nextDay.setDate(selectedDate.getDate() + 1);
//             filter.orderedAt = { $gte: selectedDate, $lt: nextDay };
//         }

//         const orders = await Order.find(filter).sort({ orderedAt: -1 });

//         res.status(200).json({ success: true, orders });
//     } catch (error) {
//         res.status(500).json({ success: false, message: "Error fetching orders", error });
//     }
// };


// const getFilteredOrders = async (req, res) => {
//     try {
//         const { month, date } = req.query; // Get month and date from request

//         let query = {}; // Empty filter object

//         if (month) {
//             const startDate = new Date(`${month}-01`); // First day of the month
//             const endDate = new Date(startDate);
//             endDate.setMonth(endDate.getMonth() + 1); // Next month

//             query.orderedAt = { $gte: startDate, $lt: endDate };
//         }

//         if (date) {
//             const startDate = new Date(date);
//             const endDate = new Date(date);
//             endDate.setDate(endDate.getDate() + 1); // Next day

//             query.orderedAt = { $gte: startDate, $lt: endDate };
//         }

//         const orders = await Order.find(query).sort({ orderedAt: -1 }); // Get filtered orders
//         res.json({ orders });
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching orders", error });
//     }
// };


// const getFilteredOrders = async (req, res) => {
//     try {
//         const { month, date } = req.query;
//         let filter = {};

//         // ✅ Filter by Month (Format: YYYY-MM)
//         if (month) {
//             const startOfMonth = new Date(`${month}-01T00:00:00.000Z`);
//             const endOfMonth = new Date(startOfMonth);
//             endOfMonth.setMonth(endOfMonth.getMonth() + 1);

//             filter.orderedAt = { $gte: startOfMonth, $lt: endOfMonth };
//         }

//         // ✅ Filter by Specific Date (Format: YYYY-MM-DD)
//         if (date) {
//             const startOfDay = new Date(`${date}T00:00:00.000Z`);
//             const endOfDay = new Date(`${date}T23:59:59.999Z`);
            
//             filter.orderedAt = { $gte: startOfDay, $lt: endOfDay };
//         }

//         // ✅ Fetch Orders with Applied Filters
//         const orders = await Order.find(filter).sort({ orderedAt: -1 });

//         res.json({ success: true, orders });
//     } catch (error) {
//         console.error("Error fetching filtered orders:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };


const getFilteredOrders = async (req, res) => {
    try {
        const { month, date } = req.query;
        let filter = {};

        // ✅ Filter by Month (Format: YYYY-MM)
        if (month) {
            const startOfMonth = new Date(`${month}-01T00:00:00.000Z`);
            const endOfMonth = new Date(startOfMonth);
            endOfMonth.setMonth(endOfMonth.getMonth() + 1); // Next month
            
            filter.orderedAt = { $gte: startOfMonth, $lt: endOfMonth };
        }

        // ✅ Filter by Specific Date (Format: YYYY-MM-DD)
        if (date) {
            const startOfDay = new Date(`${date}T00:00:00.000Z`); // Start of the day
            const endOfDay = new Date(`${date}T23:59:59.999Z`);  // End of the day
            
            filter.orderedAt = { $gte: startOfDay, $lt: endOfDay };
        }

        // ✅ Fetch Orders with Applied Filters
        const orders = await Order.find(filter).sort({ orderedAt: -1 });

        res.json({ success: true, orders });
    } catch (error) {
        console.error("Error fetching filtered orders:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


// module.exports = { getFilteredOrders };


// ✅ Export all controllers at once
module.exports = {
    placeOrder,
    getCustomerOrders,
    getDailyOrdersAnalysis,getFilteredOrders
};
