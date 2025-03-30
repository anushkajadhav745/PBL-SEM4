// // const mongoose = require("mongoose");

// // const adminSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //     phone: { type: String },
// //     role: { type: String, default: "admin" },
// //     adminId: { type: String, unique: true, required: true }, 
// //     profilePic: { type: String },
// //     createdAt: { type: Date, default: Date.now },
// //     lastLogin: { type: Date }
// // });

// // const Admin = mongoose.model("Admin", adminSchema);
// // module.exports = Admin;


// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

// const adminSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     phone: { type: String },
//     role: { type: String, default: "admin" },
//     adminId: { type: String, unique: true, required: true }, 
//     profilePic: { type: String },
//     createdAt: { type: Date, default: Date.now },
//     lastLogin: { type: Date }
// });

// const Admin = mongoose.model("Admin", adminSchema);

// // Ensure at least one admin exists
// adminSchema.statics.createInitialAdmin = async function () {
//     try {
//         const existingAdmin = await this.findOne();
//         if (!existingAdmin) {
//             const hashedPassword = await bcrypt.hash("abcd", 10); // Default password
//             const newAdmin = new this({
//                 name: "Super Admin",
//                 email: "admin@example.com",
//                 password: hashedPassword,
//                 phone: "1234567890",
//                 adminId: "ADM001", // Change if required
//                 role: "admin"
//             });
//             await newAdmin.save();
//             console.log("Default admin created successfully.");
//         } else {
//             console.log("Admin already exists.");
//         }
//     } catch (error) {
//         console.error("Error creating default admin:", error);
//     }
// };

// module.exports = Admin;


const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String },
    role: { type: String, default: "admin" },
    adminId: { type: String, unique: true, required: true }, 
    profilePic: { type: String },
    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date }
});

// ✅ Function to create a default admin if none exists
// adminSchema.statics.initializeAdmin = async function () {
//     const existingAdmin = await this.findOne(); // Check if admin exists
//     if (!existingAdmin) {
//         const hashedPassword = await bcrypt.hash("abcd", 10);
//         const newAdmin = new this({
//             name: "Super Admin",
//             email: "admin@example.com",
//             password: hashedPassword,
//             role: "admin",
//             adminId: "ADMIN001", // Provide a default ID
//         });
//         await newAdmin.save();
//         console.log("Initial admin created.");
//     }
// };

adminSchema.statics.initializeAdmin = async function () {
    const existingAdmin = await this.findOne(); // Check if admin exists
    if (!existingAdmin) {
        const hashedPassword = await bcrypt.hash("abcd", 10);
        const newAdmin = new this({
            name: "Super Admin",
            email: "admin@example.com",
            password: hashedPassword,
            role: "admin",
            adminId: "ADMIN001", // Provide a default ID
        });
        await newAdmin.save();
        console.log("✅ Initial admin created.");
    } else {
        console.log("⚠️ Admin already exists. No new admin created.");
    }
};

// const Admin = mongoose.model("Admin", adminSchema);
// module.exports = Admin;


const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;

