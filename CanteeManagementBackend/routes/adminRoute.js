const express = require("express");
const { loginAdmin,addAdmin,addStaff,addMenuItem,deleteMenuItem,getAllMenuItems,updateMenuItem } = require("../controllers/adminAuthC");
const adminMiddleware = require("../Middeleware/adminAuth"); // Only another admin can add an admin
const upload=require("../utils/uploadDishImage");

const router = express.Router();

// Admin Login
router.post("/login", loginAdmin);

// Add Another Admin (Only Existing Admin Can Do This)
 router.post("/add-admin", adminMiddleware, addAdmin);

// Add a new staff member (Only Admin)
router.post("/add-staff", adminMiddleware, addStaff);

//get all menu Items
router.get("/all-items", adminMiddleware, getAllMenuItems);

//add a menu
//router.post("/menu/add-menu", adminMiddleware, addMenuItem);
router.post("/add-menu-item", upload.single("image"),adminMiddleware, addMenuItem);

//delete the menu item
router.delete("/delete-menu/:menuId",adminMiddleware, deleteMenuItem);

// PUT request to update a menu item
router.put("/update-menu/:menuId", adminMiddleware, updateMenuItem);

module.exports = router;
