const express=require("express");
const mongoose = require("mongoose");
const app=express();
const Admin =require("./Model/admin");
const cors = require("cors");
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend
  credentials: true // Allow cookies if needed
}));

const customerRoutes = require("./routes/customerRoute");
const staffRoutes = require("./routes/staffRoute");
const adminRoutes = require("./routes/adminRoute");

require('dotenv').config();
const PORT=process.env.PORT||4000;

app.use(express.json());

const dbconnect=require("./Config/database");
dbconnect();


  


const routers=require("./routes/routes");
// app.use("/api/v1",routers)
app.use("/api/customer", customerRoutes);
app.use("/api/staff", staffRoutes);
app.use("/api/admin", adminRoutes);

mongoose.connection.once("open", async () => {
    await Admin.initializeAdmin(); //  Call the function to create a default admin
  });


app.listen(PORT,()=>{
    console.log(`App is listing at ${PORT}`);
})