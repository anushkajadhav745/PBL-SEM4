// // const express=require('express');
// // const router=express.Router()
// // const customer = require("../Middeleware/customerAuth");

// // // Customer Signup
// // router.post("/signup", customerSignup);

// // // Customer Login
// // router.post("/login", customerLogin);

// // module.exports=router


// const express = require("express");
// const { customerSignup, customerLogin } = require("../controllers/customerAuthC");

// const router = express.Router();

// // Customer Signup
// router.post("/signup", customerSignup);

// // Customer Login
// router.post("/login", customerLogin);

// module.exports = router;


const express = require("express");
const { customerSignup, customerLogin,getAllMenuItems } = require("../controllers/customerAuthC");  // ✅ Correct import

const router = express.Router();

// Customer Signup
router.post("/signup", customerSignup);

// Customer Login
router.post("/login", customerLogin);
//get all menu items
router.get("/menu", getAllMenuItems);

module.exports = router;
