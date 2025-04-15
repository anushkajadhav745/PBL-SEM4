const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Ensure this folder exists!
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

const upload = multer({ storage: storage });

// Upload endpoint
router.post("/image", upload.single("image"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const fileUrl = `http://localhost:4000/uploads/${req.file.filename}`;
  res.status(200).json({ message: "Image uploaded successfully", imageUrl: fileUrl });
});

module.exports = router;
