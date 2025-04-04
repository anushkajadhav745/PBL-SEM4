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
// const getDailyOrdersAnalysis = async (req, res) => {
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


// const getDailyOrdersAnalysis = async (req, res) => {
//     try {
//         const now = new Date();
//         const todayStartUTC = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0));
//         const tomorrowStartUTC = new Date(todayStartUTC);
//         tomorrowStartUTC.setUTCDate(tomorrowStartUTC.getUTCDate() + 1);

//         // Fetch orders placed today in UTC time
//         const dailyOrders = await Order.find({
//             orderedAt: { $gte: todayStartUTC, $lt: tomorrowStartUTC }
//         });

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


// const getDailyOrdersAnalysis = async (req, res) => {
//     try {
//         const { date } = req.query;
//         if (!date) return res.status(400).json({ message: "Date is required" });

//         const selectedDate = new Date(date);
//         selectedDate.setHours(0, 0, 0, 0);
//         const nextDay = new Date(selectedDate);
//         nextDay.setDate(nextDay.getDate() + 1);

//         const dailyOrders = await Order.find({
//             orderedAt: { $gte: selectedDate, $lt: nextDay }
//         });

//         res.json({ orders: dailyOrders });
//     } catch (error) {
//         console.error("Error fetching daily orders:", error);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

const getDailyOrdersAnalysis = async (req, res) => {
    try {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Reset time to 00:00:00

        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1); // Next day boundary

        const dailyOrders = await Order.find({
            orderedAt: {
                $gte: today,   // Start of today (00:00:00)
                $lt: tomorrow, // Before start of next day (00:00:00)
            },
        });

        const totalRevenue = dailyOrders.reduce((sum, order) => sum + order.totalAmount, 0);
        const statusCounts = dailyOrders.reduce((acc, order) => {
            acc[order.status] = (acc[order.status] || 0) + 1;
            return acc;
        }, {});

        res.json({
            totalOrders: dailyOrders.length,
            totalRevenue,
            statusCounts,
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


const getPendingOrders = async (req, res) => {
    try {
        if (req.user.role !== "staff") {
            return res.status(403).json({ success: false, message: "Access denied" });
        }
        
        const orders = await Order.find({ status: { $in: ["Pending", "Processing"] } }).sort({ orderedAt: -1 });

        res.json({ success: true, orders });
    } catch (error) {
        console.error("Error fetching pending orders:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
// ✅ Update Order Status (For Staff)
// const updateOrderStatus = async (req, res) => {
//     try {
//         const { id } = req.params;  // ✅ Use MongoDB `_id`
//         const { status } = req.body;

//         // ✅ Find by `_id` instead of `orderId`
//         const updatedOrder = await Order.findByIdAndUpdate(
//             id,  // ✅ Correct way
//             { status },
//             { new: true }
//         );

//         if (!updatedOrder) {
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         res.json({ success: true, message: "Order status updated successfully", order: updatedOrder });
//     } catch (error) {
//         console.error("Error updating order status:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };


// const updateOrderStatus = async (req, res) => {
//     try {
//         const { id } = req.params; // ✅ This is actually orderId
//         const { status } = req.body;

//         // ✅ Find order using orderId instead of _id
//         const updatedOrder = await Order.findOneAndUpdate(
//             { orderId: id }, // ✅ Match by orderId, not _id
//             { status },
//             { new: true }
//         );

//         if (!updatedOrder) {
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         res.json({ success: true, message: "Order status updated successfully", order: updatedOrder });
//     } catch (error) {
//         console.error("Error updating order status:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };


// const updateOrderStatus = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { status } = req.body;

//         console.log("Received Order ID:", id); // ✅ Debugging line
//         console.log("New Status:", status);

//         const updatedOrder = await Order.findOneAndUpdate(
//             { orderId: id }, // ✅ Searching by orderId
//             { status },
//             { new: true }
//         );

//         if (!updatedOrder) {
//             console.log("❌ Order Not Found in Database");
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         console.log("✅ Order Updated:", updatedOrder);
//         res.json({ success: true, message: "Order status updated", order: updatedOrder });

//     } catch (error) {
//         console.error("🔥 Error updating order:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };

// const updateOrderStatus = async (req, res) => {
//     try {
//         if (req.user.role !== "staff") {
//             return res.status(403).json({ success: false, message: "Access denied" });
//         }

//         const { id } = req.params; // Either ObjectId or orderId
//         const { status } = req.body; // New status from frontend

//         // Validate status
//         const validStatuses = ["Pending", "Processing", "Completed", "Cancelled"];
//         if (!validStatuses.includes(status)) {
//             return res.status(400).json({ success: false, message: "Invalid status value" });
//         }

//         // Find order by _id or orderId
//         const order = await Order.findOne({ $or: [{ _id: id }, { orderId: id }] });

//         if (!order) {
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         // Update status
//         order.status = status;
//         await order.save();

//         res.json({ success: true, message: "Order status updated successfully", order });
//     } catch (error) {
//         console.error("Error updating order status:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
// };


// ✅ Update order status using either `orderId` or `_id`
//  const updateOrderStatus = async (req, res) => {
//     try {
//         if (req.user.role !== "staff") {
//             return res.status(403).json({ success: false, message: "Access denied" });
//         }

//         const { id } = req.params; // Extract `_id` from request URL
//         const { status } = req.body; // Get the new status

//         const updatedOrder = await Order.findByIdAndUpdate(
//             id, 
//             { status }, 
//             { new: true } // Return the updated document
//         );

//         if (!updatedOrder) {
//             return res.status(404).json({ success: false, message: "Order not found" });
//         }

//         res.json({ success: true, message: "Order status updated successfully", order: updatedOrder });
//     } catch (error) {
//         console.error("Error updating order status:", error);
//         res.status(500).json({ success: false, message: "Internal server error" });
//     }
//  };


const updateOrderStatus = async (req, res) => {
    try {
        // Ensure only staff can update order status
        if (req.user.role !== "staff") {
            return res.status(403).json({ success: false, message: "Access denied" });
        }

        const { id } = req.params; // Extract MongoDB `_id`
        const { status } = req.body; // Get new status

        // Ensure the status is valid
        const validStatuses = ["Pending", "Processing", "Completed", "Cancelled"];
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ success: false, message: "Invalid status value" });
        }

        // Find and update the order
        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { status },
            { new: true } // Return updated document
        );

        if (!updatedOrder) {
            return res.status(404).json({ success: false, message: "Order not found" });
        }

        // ✅ Emit a real-time update to all connected clients
        global.io.emit("orderUpdated", {
            orderId: updatedOrder._id,   // MongoDB `_id`
            customOrderId: updatedOrder.orderId,  // Manually created order ID
            status: updatedOrder.status
        });

        res.json({ success: true, message: "Order status updated successfully", order: updatedOrder });
    } catch (error) {
        console.error("Error updating order status:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
// ✅ Export all controllers at once
module.exports = {
    placeOrder,
    getCustomerOrders,
    getDailyOrdersAnalysis,getFilteredOrders,
    getPendingOrders,
    updateOrderStatus,
};
