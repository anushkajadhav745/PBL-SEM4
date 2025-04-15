// const express = require("express");
// const { loginAdmin,addAdmin,addStaff,addMenuItem,deleteMenuItem,getAllMenuItems,updateMenuItem } = require("../controllers/adminAuthC");
// const adminMiddleware = require("../Middeleware/adminAuth"); // Only another admin can add an admin

// const router = express.Router();

// // Admin Login
// router.post("/login", loginAdmin);

// // Add Another Admin (Only Existing Admin Can Do This)
//  router.post("/add-admin", adminMiddleware, addAdmin);

// // Add a new staff member (Only Admin)
// router.post("/add-staff", adminMiddleware, addStaff);

// //get all menu Items
// router.get("/all-items", adminMiddleware, getAllMenuItems);

// //add a menu
// router.post("/menu/add-menu", adminMiddleware, addMenuItem);

// //delete the menu item
// router.delete("/delete-menu/:menuId",adminMiddleware, deleteMenuItem);

// // PUT request to update a menu item
// router.put("/update-menu/:menuId", adminMiddleware, updateMenuItem);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const path = require("path");
const {
  loginAdmin,
  addAdmin,
  addStaff,
  addMenuItem,
  deleteMenuItem,
  getAllMenuItems,
  updateMenuItem
} = require("../controllers/adminAuthC");

const adminMiddleware = require("../Middeleware/adminAuth");
const router = express.Router();

// Set up multer for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this folder exists!
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});
const upload = multer({ storage });

// Admin Login
router.post("/login", loginAdmin);

// Add Another Admin (Only Existing Admin Can Do This)
router.post("/add-admin", adminMiddleware, addAdmin);

// Add a new staff member
router.post("/add-staff", adminMiddleware, addStaff);

// Get all menu items
router.get("/all-items", adminMiddleware, getAllMenuItems);

// ✅ Add a menu item with image upload support
router.post("/menu/add-menu", adminMiddleware, upload.single("image"), addMenuItem);

// Delete a menu item
router.delete("/delete-menu/:menuId", adminMiddleware, deleteMenuItem);

// Update a menu item
router.put("/update-menu/:menuId", adminMiddleware, updateMenuItem);

module.exports = router;
