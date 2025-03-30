const express = require("express");
const { loginAdmin,addAdmin,addStaff,addMenuItem } = require("../controllers/adminAuthC");
const adminMiddleware = require("../Middeleware/adminAuth"); // Only another admin can add an admin

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Add Another Admin (Only Existing Admin Can Do This)
 router.post("/add-admin", adminMiddleware, addAdmin);

// Add a new staff member (Only Admin)
router.post("/add-staff", adminMiddleware, addStaff);

//add a menu
router.post("/menu/add-menu", adminMiddleware, addMenuItem);

module.exports = router;
