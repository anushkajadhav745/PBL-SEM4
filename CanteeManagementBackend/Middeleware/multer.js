// // /middleware/multer.js

// const multer = require('multer');
// const path = require('path');

// // Set up storage engine for Multer
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'uploads/dish-images');  // Save images to the "dish-images" folder inside "uploads"
//     },
//     filename: (req, file, cb) => {
//         // Save file with a timestamp to prevent name collisions
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// // File filter to accept only images
// const fileFilter = (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
//     if (allowedTypes.includes(file.mimetype)) {
//         cb(null, true);  // Accept the file
//     } else {
//         cb(new Error('Invalid file type. Only JPG, JPEG, and PNG are allowed.'));
//     }
// };

// // Initialize multer with storage and file filter options
// const upload = multer({
//     storage: storage,
//     fileFilter: fileFilter,
//     limits: { fileSize: 5 * 1024 * 1024 }, // Max file size of 5MB
// });

// module.exports = upload;


const multer = require("multer");
const path = require("path");

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/dish-images");  // Folder where images will be saved
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Save file with a timestamp to avoid name conflicts
    }
});

// Define file filter (only allow image files)
const fileFilter = (req, file, cb) => {
    const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error("Invalid file type. Only JPG, JPEG, and PNG are allowed."), false);
    }
};

// Initialize multer with storage and file filter
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 }  // Limit file size to 5MB
});

module.exports = upload;
