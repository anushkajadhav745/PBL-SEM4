// // // // // const mongoose = require("mongoose");

// // // // // const customerSchema = new mongoose.Schema({
// // // // //     name: { type: String, required: true },
// // // // //     email: { type: String, required: true, unique: true },
// // // // //     password: { type: String, required: true },
// // // // //     phone: { type: String },
// // // // //     role: { type: String, default: "student" },
// // // // //     studentId: { type: String, unique: true, required: true }, 
// // // // //     department: { type: String, required: true },
// // // // //     year: { type: Number, required: true },
// // // // //     hostelResident: { type: Boolean, default: false },
// // // // //     profilePic: { type: String },
// // // // //     createdAt: { type: Date, default: Date.now },
// // // // //     lastLogin: { type: Date }
// // // // // });

// // // // // const Customer = mongoose.model("customer", customerSchema);
// // // // // module.exports = Customer;


// // // // // const mongoose = require("mongoose");

// // // // // const customerSchema = new mongoose.Schema({
// // // // //     name: { type: String, required: true },
// // // // //     email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// // // // //     password: { type: String, required: true },
// // // // //     phone: { type: String, match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] }, 
// // // // //     role: { 
// // // // //         type: String, 
// // // // //         enum: ["student", "teacher", "staff", "visitor"], 
// // // // //         required: true 
// // // // //     },  // Customer can be a student, teacher, staff, or visitor
    
// // // // //     // Only applicable to students
// // // // //     studentId: { type: String, unique: true, sparse: true }, 
// // // // //     department: { type: String }, 
// // // // //     year: { type: Number, min: 1, max: 5 },

// // // // //     // Only applicable to staff and teachers
// // // // //     employeeId: { type: String, unique: true, sparse: true }, 
// // // // //     designation: { type: String }, // E.g., "Professor", "Lab Assistant"

// // // // //     hostelResident: { type: Boolean, default: false },
// // // // //     profilePic: { type: String },

// // // // //     createdAt: { type: Date, default: Date.now },
// // // // //     lastLogin: { type: Date }
// // // // // });

// // // // // Indexing for faster lookups
// // // // // customerSchema.index({ email: 1 });
// // // // // customerSchema.index({ studentId: 1 }, { sparse: true });
// // // // // customerSchema.index({ employeeId: 1 }, { sparse: true });

// // // // const mongoose = require("mongoose");
// // // // const { v4: uuidv4 } = require("uuid");

// // // // const customerSchema = new mongoose.Schema({
// // // //     name: { type: String, required: true },
// // // //     email: { 
// // // //         type: String, 
// // // //         required: true, 
// // // //         unique: true, 
// // // //         lowercase: true, 
// // // //         trim: true 
// // // //     },
// // // //     password: { type: String, required: true },
// // // //     phone: { 
// // // //         type: String, 
// // // //         match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] 
// // // //     },
// // // //     role: { 
// // // //         type: String, 
// // // //         enum: ["student", "teacher", "staff", "visitor"], 
// // // //         required: true 
// // // //     },
// // // //     // Unique customer ID automatically generated using uuid.v4()
// // // //     customerId: { 
// // // //         type: String, 
// // // //         unique: true, 
// // // //         default: uuidv4 
// // // //     },
// // // //     // Fields applicable for students
// // // //     studentId: { type: String, unique: true, sparse: true },
// // // //     department: { type: String },
// // // //     year: { type: Number, min: 1, max: 5 },
// // // //     // Fields applicable for staff/teachers
// // // //     employeeId: { type: String, unique: true, sparse: true },
// // // //     designation: { type: String },
// // // //     hostelResident: { type: Boolean, default: false },
// // // //     profilePic: { type: String },
// // // //     createdAt: { type: Date, default: Date.now },
// // // //     lastLogin: { type: Date }
// // // // });

// // // // // const Customer = mongoose.model("Customer", customerSchema);
// // // // // module.exports = Customer;


// // // // const Customer = mongoose.model("Customer", customerSchema);
// // // // module.exports = Customer;


// // // const mongoose = require("mongoose");
// // // const { customAlphabet } = require("nanoid");
// // // // Create a nanoid generator for 5-character IDs using a suitable alphabet
// // // const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 5);

// // // const customerSchema = new mongoose.Schema({
// // //     name: { type: String, required: true },
// // //     email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// // //     password: { type: String, required: true },
// // //     phone: { type: String, match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] },
// // //     role: {
// // //         type: String,
// // //         enum: ["student", "teacher", "staff", "visitor"],
// // //         required: true
// // //     },
// // //     customerId: {
// // //         type: String,
// // //         unique: true,
// // //         default: nanoid // This will generate a 5-character unique ID
// // //     },
// // //     studentId: { type: String, unique: true, sparse: true },
// // //     department: { type: String },
// // //     year: { type: Number, min: 1, max: 5 },
// // //     employeeId: { type: String, unique: true, sparse: true },
// // //     designation: { type: String },
// // //     hostelResident: { type: Boolean, default: false },
// // //     profilePic: { type: String },
// // //     createdAt: { type: Date, default: Date.now },
// // //     lastLogin: { type: Date }
// // // });

// // // const Customer = mongoose.model("Customer", customerSchema);
// // // module.exports = Customer;


// // // // const mongoose = require("mongoose");

// // // // const customerSchema = new mongoose.Schema({
// // // //     name: { type: String, required: true },
// // // //     email: { type: String, required: true, unique: true },
// // // //     password: { type: String, required: true },
// // // //     phone: { type: String },
// // // //     role: { type: String, default: "student" },
// // // //     studentId: { type: String, unique: true, required: true }, 
// // // //     department: { type: String, required: true },
// // // //     year: { type: Number, required: true },
// // // //     hostelResident: { type: Boolean, default: false },
// // // //     profilePic: { type: String },
// // // //     createdAt: { type: Date, default: Date.now },
// // // //     lastLogin: { type: Date }
// // // // });

// // // // const Customer = mongoose.model("customer", customerSchema);
// // // // module.exports = Customer;


// // // // const mongoose = require("mongoose");

// // // // const customerSchema = new mongoose.Schema({
// // // //     name: { type: String, required: true },
// // // //     email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// // // //     password: { type: String, required: true },
// // // //     phone: { type: String, match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] }, 
// // // //     role: { 
// // // //         type: String, 
// // // //         enum: ["student", "teacher", "staff", "visitor"], 
// // // //         required: true 
// // // //     },  // Customer can be a student, teacher, staff, or visitor
    
// // // //     // Only applicable to students
// // // //     studentId: { type: String, unique: true, sparse: true }, 
// // // //     department: { type: String }, 
// // // //     year: { type: Number, min: 1, max: 5 },

// // // //     // Only applicable to staff and teachers
// // // //     employeeId: { type: String, unique: true, sparse: true }, 
// // // //     designation: { type: String }, // E.g., "Professor", "Lab Assistant"

// // // //     hostelResident: { type: Boolean, default: false },
// // // //     profilePic: { type: String },

// // // //     createdAt: { type: Date, default: Date.now },
// // // //     lastLogin: { type: Date }
// // // // });

// // // // Indexing for faster lookups
// // // // customerSchema.index({ email: 1 });
// // // // customerSchema.index({ studentId: 1 }, { sparse: true });
// // // // customerSchema.index({ employeeId: 1 }, { sparse: true });

// // // const mongoose = require("mongoose");
// // // const { v4: uuidv4 } = require("uuid");

// // // const customerSchema = new mongoose.Schema({
// // //     name: { type: String, required: true },
// // //     email: { 
// // //         type: String, 
// // //         required: true, 
// // //         unique: true, 
// // //         lowercase: true, 
// // //         trim: true 
// // //     },
// // //     password: { type: String, required: true },
// // //     phone: { 
// // //         type: String, 
// // //         match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] 
// // //     },
// // //     role: { 
// // //         type: String, 
// // //         enum: ["student", "teacher", "staff", "visitor"], 
// // //         required: true 
// // //     },
// // //     // Unique customer ID automatically generated using uuid.v4()
// // //     customerId: { 
// // //         type: String, 
// // //         unique: true, 
// // //         default: uuidv4 
// // //     },
// // //     // Fields applicable for students
// // //     studentId: { type: String, unique: true, sparse: true },
// // //     department: { type: String },
// // //     year: { type: Number, min: 1, max: 5 },
// // //     // Fields applicable for staff/teachers
// // //     employeeId: { type: String, unique: true, sparse: true },
// // //     designation: { type: String },
// // //     hostelResident: { type: Boolean, default: false },
// // //     profilePic: { type: String },
// // //     createdAt: { type: Date, default: Date.now },
// // //     lastLogin: { type: Date }
// // // });

// // // // const Customer = mongoose.model("Customer", customerSchema);
// // // // module.exports = Customer;


// // // const Customer = mongoose.model("Customer", customerSchema);
// // // module.exports = Customer;


// // const mongoose = require("mongoose");
// // const { customAlphabet } = require("nanoid");
// // // Create a nanoid generator for 5-character IDs using a suitable alphabet
// // const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 5);

// // const customerSchema = new mongoose.Schema({
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true, lowercase: true, trim: true },
// //     password: { type: String, required: true },
// //     phone: { type: String, match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] },
// //     role: {
// //         type: String,
// //         enum: ["student", "teacher", "staff", "visitor"],
// //         required: true
// //     },
// //     customerId: {
// //         type: String,
// //         unique: true,
// //         default: nanoid // This will generate a 5-character unique ID
// //     },
// //     studentId: { type: String, unique: true, sparse: true },
// //     department: { type: String },
// //     year: { type: Number, min: 1, max: 5 },
// //     employeeId: { type: String, unique: true, sparse: true },
// //     designation: { type: String },
// //     hostelResident: { type: Boolean, default: false },
// //     profilePic: { type: String },
// //     createdAt: { type: Date, default: Date.now },
// //     lastLogin: { type: Date }
// // });

// // const Customer = mongoose.model("Customer", customerSchema);
// // module.exports = Customer;
// const mongoose = require("mongoose");
// const { customAlphabet } = require("nanoid");

// // Create a nanoid generator for a 5-character unique ID
// const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 5);

// const customerSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { 
//         type: String, 
//         required: true, 
//         unique: true, 
//         lowercase: true, 
//         trim: true 
//     },
//     password: { type: String, required: true },
//     phone: { 
//         type: String, 
//         match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] 
//     },

//     // Every user is stored as a "customer"
//     role: { 
//         type: String, 
//         default: "customer", 
//         enum: ["customer"] 
//     }, 

//     // User Type: Distinguishes different customer types (student, teacher, etc.)
//     userType: { 
//         type: String, 
//         enum: ["student", "teacher", "staff", "visitor"], 
//         required: true 
//     },

//     // Unique Customer ID
//     customerId: { 
//         type: String, 
//         unique: true, 
//         default: nanoid 
//     },

//     // Student-specific fields
//     studentId: { type: String, unique: true, sparse: true },
//     department: { type: String },
//     year: { type: Number, min: 1, max: 5 },

//     // Teacher/Staff-specific fields
//     employeeId: { type: String, unique: true, sparse: true },
//     designation: { type: String },

//     hostelResident: { type: Boolean, default: false },
//     profilePic: { type: String },

//     createdAt: { type: Date, default: Date.now },
//     lastLogin: { type: Date }
// });

// // Create Indexes for faster lookups
// customerSchema.index({ email: 1 });
// customerSchema.index({ studentId: 1 }, { sparse: true });
// customerSchema.index({ employeeId: 1 }, { sparse: true });

// const Customer = mongoose.model("Customer", customerSchema);
// module.exports = Customer;


const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");

// Create nanoid generators
const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 5);
const orderIdGenerator = customAlphabet("0123456789", 5); // Generates 5-digit numbers

const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true, 
        trim: true 
    },
    password: { type: String, required: true },
    phone: { 
        type: String, 
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] 
    },

    // Every user is stored as a "customer"
    role: { 
        type: String, 
        default: "customer", 
        enum: ["customer"] 
    }, 

    // User Type: Distinguishes different customer types (student, teacher, etc.)
    userType: { 
        type: String, 
        enum: ["student", "teacher", "staff", "visitor"], 
        required: true 
    },

    // Unique Customer ID
    customerId: { 
        type: String, 
        unique: true, 
        default: nanoid 
    },

    // Cart: Stores active items before ordering
    cart: [{
        // menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
        menuId: { type: String, required: true },
        name: { type: String },
        price: { type: Number },
        quantity: { type: Number, required: true, default: 1 }
    }],

    // Orders: Stores past orders
    // orders: [{
    //     orderId: { type: String, required: true, unique: true, default: () => `ORD-${orderIdGenerator()}` }, // Unique Order ID
    //     items: [{
    //         menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu" },
    //         name: { type: String },
    //         price: { type: Number },
    //         quantity: { type: Number }
    //     }],
    //     totalAmount: { type: Number, required: true },
    //     status: { type: String, default: "Pending" }, // Pending, Completed, Cancelled
    //     createdAt: { type: Date, default: Date.now }
    // }],

    createdAt: { type: Date, default: Date.now },
    lastLogin: { type: Date }
});

// Create Indexes for faster lookups
customerSchema.index({ email: 1 });
customerSchema.index({ "orders.orderId": 1 }, { unique: true }); // Ensures orderId is unique

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
