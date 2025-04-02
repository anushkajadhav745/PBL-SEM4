// const express = require("express");
// const { staffLogin } = require("../controllers/staffAuthC");
// const adminMiddleware = require("../Middeleware/adminAuth"); // Only admin can add staff

// const router = express.Router();

// // Staff Login
// router.post("/login", staffLogin);

// // Add Staff (Only Admin Can Do This)
// // router.post("/add", adminMiddleware, require("../controllers/staffController").addStaff);

// module.exports = router;


const express = require("express");
const { loginStaff } = require("../controllers/staffAuthC"); // ✅ Corrected import

const router = express.Router();

// Staff Login Route
router.post("/login", loginStaff); // ✅ Use loginStaff

module.exports = router;
