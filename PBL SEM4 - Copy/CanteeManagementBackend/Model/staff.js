const mongoose = require("mongoose");

const staffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, default: "staff" },
    staffId: { type: String, unique: true, required: true }, 
    position: { type: String, required: true }, // Chef, Cashier, etc.
    profilePic: { type: String },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date }
});

const Staff = mongoose.model("Staff", staffSchema);
module.exports = Staff;
