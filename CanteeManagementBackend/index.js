// // // require("dotenv").config();
// // // console.log("🔑 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// // // console.log("🔑 RAZORPAY_KEY_SECRET:", process.env.RAZORPAY_KEY_SECRET);


// // // const express=require("express");
// // // const mongoose = require("mongoose");
// // // const app=express();
// // // const Admin =require("./Model/admin");
// // // const cors = require("cors");
// // // app.use(cors({
// // //   origin: "http://localhost:3000", // Allow frontend
// // //   credentials: true // Allow cookies if needed
// // // }));

// // // require("dotenv").config();
// // // console.log("🔑 RAZORPAY_KEY_ID:", process.env.RAZORPAY_KEY_ID);
// // // console.log("🔑 RAZORPAY_SECRET:", process.env.RAZORPAY_KEY_SECRET);

// // // const customerRoutes = require("./routes/customerRoute");
// // // const staffRoutes = require("./routes/staffRoute");
// // // const adminRoutes = require("./routes/adminRoute");
// // // const orderRoutes = require("./routes/orderRoute");
// // // const cartRoutes = require ("./routes/cartRoutes");

// // // const razorpayRoutes = require("./routes/payment");


// // // require('dotenv').config();
// // // const PORT=process.env.PORT||4000;

// // // app.use(express.json());

// // // const dbconnect=require("./Config/database");
// // // dbconnect();


  


// // // const routers=require("./routes/routes");
// // // // app.use("/api/v1",routers)
// // // app.use("/api/customer", customerRoutes);
// // // app.use("/api/staff", staffRoutes);
// // // app.use("/api/admin", adminRoutes);
// // // app.use("/api/order", orderRoutes); 
// // // app.use("/api/cart", cartRoutes);

// // // app.use("/api/razorpay", razorpayRoutes);

// // // mongoose.connection.once("open", async () => {
// // //     await Admin.initializeAdmin(); //  Call the function to create a default admin
// // //   });


// // // app.listen(PORT,()=>{
// // //     console.log(`App is listing at ${PORT}`);
// // // })


// // require("dotenv").config(); // ✅ Load environment variables once
// // const express = require("express");
// // const mongoose = require("mongoose");
// // const http = require("http");
// // const { Server } = require("socket.io");
// // const cors = require("cors");
// // const Admin = require("./Model/admin");

// // // ✅ Setup Express and HTTP Server
// // const app = express();
// // const server = http.createServer(app);
// // const io = new Server(server, {
// //     cors: {
// //         origin: "http://localhost:3000", // Allow frontend access
// //         credentials: true // Allow cookies if needed
// //     }
// // });

// // // ✅ Connect to MongoDB
// // const dbconnect = require("./Config/database");
// // dbconnect();

// // // ✅ Middleware
// // app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// // app.use(express.json());

// // // ✅ Import Routes
// // const customerRoutes = require("./routes/customerRoute");
// // const staffRoutes = require("./routes/staffRoute");
// // const adminRoutes = require("./routes/adminRoute");
// // const orderRoutes = require("./routes/orderRoute");
// // const cartRoutes = require("./routes/cartRoutes");
// // const razorpayRoutes = require("./routes/payment");

// // // ✅ Mount Routes
// // app.use("/api/customer", customerRoutes);
// // app.use("/api/staff", staffRoutes);
// // app.use("/api/admin", adminRoutes);
// // app.use("/api/order", orderRoutes); 
// // app.use("/api/cart", cartRoutes);
// // app.use("/api/razorpay", razorpayRoutes);

// // // ✅ WebSocket (Real-Time Order Updates)
// // io.on("connection", (socket) => {
// //     console.log("🔗 A user connected:", socket.id);

// //     socket.on("disconnect", () => {
// //         console.log("❌ A user disconnected:", socket.id);
// //     });
// // });

// // // ✅ Expose io instance for use in other files
// // module.exports = { app, io, server };

// // // ✅ Ensure default admin is created
// // mongoose.connection.once("open", async () => {
// //     await Admin.initializeAdmin(); 
// //     console.log("✅ Admin initialized.");
// // });

// // // ✅ Start Server
// // const PORT = process.env.PORT || 4000;
// // server.listen(PORT, () => {
// //     console.log(`🚀 Server running at http://localhost:${PORT}`);
// // });



// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const http = require("http");
// const socketIo = require("socket.io");
// const cors = require("cors");

// const Admin = require("./Model/admin");
// const customerRoutes = require("./routes/customerRoute");
// const staffRoutes = require("./routes/staffRoute");
// const adminRoutes = require("./routes/adminRoute");
// const orderRoutes = require("./routes/orderRoute");
// const cartRoutes = require("./routes/cartRoutes");
// const razorpayRoutes = require("./routes/payment");

// const dbconnect = require("./Config/database");



// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const path = require("path");



// const app = express();
// const server = http.createServer(app);
// const io = socketIo(server, {
//     cors: {
//         origin: "http://localhost:3000",
//         credentials: true
//     }
// });

// // ✅ Make `io` available for order controllers
// global.io = io;

// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(express.json());

// dbconnect();

// // Routes
// app.use("/api/customer", customerRoutes);
// app.use("/api/staff", staffRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/order", orderRoutes);
// app.use("/api/cart", cartRoutes);
// app.use("/api/razorpay", razorpayRoutes);

// mongoose.connection.once("open", async () => {
//     await Admin.initializeAdmin(); // Initialize default admin
// });

// const PORT = process.env.PORT || 4000;
// server.listen(PORT, () => {
//     console.log(`🚀 Server running on port ${PORT}`);
// });

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const Admin = require("./Model/admin");
const customerRoutes = require("./routes/customerRoute");
const staffRoutes = require("./routes/staffRoute");
const adminRoutes = require("./routes/adminRoute");
const orderRoutes = require("./routes/orderRoute");
const cartRoutes = require("./routes/cartRoutes");
const razorpayRoutes = require("./routes/payment");
const uploadRoute = require("./routes/uploadRoute");

const dbconnect = require("./Config/database");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
});

global.io = io;

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Serve static files from /uploads
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath);
}
app.use("/uploads", express.static(uploadPath));

dbconnect();

app.use("/api/customer", customerRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/razorpay", razorpayRoutes);
app.use("/api/upload", uploadRoute); // ✅ Add upload route here

mongoose.connection.once("open", async () => {
    await Admin.initializeAdmin();
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
