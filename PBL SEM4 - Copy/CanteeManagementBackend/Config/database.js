const mongoose=require("mongoose");

require('dotenv').config();

const dbconnect=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        
    })
    .then(()=>{console.log("DB connection successful")})
    .catch((err)=>{
        console.log("DB connection Issue");
        console.error(err);
        process.exit();
    });
}
module.exports = dbconnect;