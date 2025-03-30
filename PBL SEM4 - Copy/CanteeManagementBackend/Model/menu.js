// const mongoose = require("mongoose");

// const menuSchema = new mongoose.Schema({
//     name: { type: String, required: true, unique: true },
//     description: { type: String },
//     price: { type: Number, required: true },
//     category: { type: String, required: true, enum: ["Snacks", "Beverages", "Main Course", "Desserts"] },
//     available: { type: Boolean, default: true }, // Whether item is available or not
//     imageUrl: { type: String }, // URL to the item's image
//     preparationTime: { type: Number, default: 10 }, // Time in minutes
//     rating: { type: Number, min: 0, max: 5, default: 0 }, // Average rating
//     createdAt: { type: Date, default: Date.now },
//     updatedAt: { type: Date, default: Date.now }
// });

// // Middleware to update `updatedAt` on modification
// menuSchema.pre("save", function (next) {
//     this.updatedAt = Date.now();
//     next();
// });

// const Menu = mongoose.model("Menu", menuSchema);
// module.exports = Menu;

const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid"); // Import UUID for unique menuId

const menuSchema = new mongoose.Schema({
    menuId: { type: String, unique: true, required: true }, // Unique identifier for menu item
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { 
        type: String, 
        required: true, 
        enum: ["Snacks", "Beverages", "Main Course", "Desserts"] 
    },
    available: { type: Boolean, default: true }, // Whether item is available or not
    imageUrl: { type: String }, // URL to the item's image
    preparationTime: { type: Number, default: 10 }, // Time in minutes
    rating: { type: Number, min: 0, max: 5, default: 0 }, // Average rating
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware to generate unique menuId before saving
menuSchema.pre("save", function (next) {
    if (!this.menuId) {
        this.menuId = "MENU-" + uuidv4().split("-")[0]; // Generates a short unique menuId
    }
    this.updatedAt = Date.now();
    next();
});

const Menu = mongoose.model("Menu", menuSchema);
module.exports = Menu;
