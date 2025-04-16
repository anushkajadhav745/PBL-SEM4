require("dotenv").config();
console.log("🔑 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
console.log("🔑 RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);






require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const path=require('path');

const Admin = require("./Model/admin");
const customerRoutes = require("./routes/customerRoute");
const staffRoutes = require("./routes/staffRoute");
const adminRoutes = require("./routes/adminRoute");
const orderRoutes = require("./routes/orderRoute");
const cartRoutes = require("./routes/cartRoutes");
const razorpayRoutes = require("./routes/payment");


const dbconnect = require("./Config/database");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});

// ✅ Make `io` available for order controllers
global.io = io;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

dbconnect();

// Routes
app.use("/api/customer", customerRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/cart", cartRoutes);
//app.use("/api/razorpay", razorpayRoutes);
//app.use("/api/payment", require("./routes/payment"));


app.use("/api/payment", require("./routes/payment"));




//Image 
app.use('/dish_images', express.static(path.join(__dirname, 'Uploads/DishImages')));

mongoose.connection.once("open", async () => {
    await Admin.initializeAdmin(); // Initialize default admin
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
