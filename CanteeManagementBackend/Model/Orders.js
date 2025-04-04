// const mongoose = require("mongoose");
// const { customAlphabet } = require("nanoid");

// // Generate unique order ID (ORD-XXXXX)
// const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);

// const orderSchema = new mongoose.Schema({
//     orderId: { 
//         type: String, 
//         unique: true, 
//         default: () => `ORD-${nanoid()}` // Example: ORD-A1B2C
//     },
//     customerId: { 
//         type: mongoose.Schema.Types.ObjectId, 
//         ref: "Customer", 
//         required: true 
//     },
//     items: [
//         {
//             menuId: String,
//             name: String,
//             quantity: Number,
//             price: Number
//         }
//     ],
//     totalAmount: { type: Number, required: true },
//     status: { 
//         type: String, 
//         enum: ["Pending", "Processing", "Completed", "Cancelled"], 
//         default: "Pending" 
//     },
//     orderedAt: { type: Date, default: Date.now }
// });

// const Order = mongoose.model("Order", orderSchema);
// module.exports = Order;


const mongoose = require("mongoose");
const { customAlphabet } = require("nanoid");

// Generate unique order ID (ORD-XXXXX)
const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 5);

const orderSchema = new mongoose.Schema({
    orderId: { 
        type: String, 
        unique: true, 
        default: () => `ORD-${nanoid()}` 
    },
    customerId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Customer", 
        required: true 
    },
    items: [
        {
            menuId: String,// Reference Menu model
            name: String,
            quantity: { type: Number, required: true, min: 1 }, // Ensure min quantity is 1
            price: { type: Number, required: true, min: 0 } // Ensure price is non-negative
        }
    ],
    totalAmount: { type: Number, required: true },
    status: { 
        type: String, 
        enum: ["Pending", "Processing", "Completed", "Cancelled"], 
        default: "Pending" 
    },
    paymentStatus: { 
        type: String, 
        enum: ["Pending", "Paid", "Failed", "Refunded"], 
        default: "Pending" 
    },
    orderedAt: { type: Date, default: Date.now }
});

// Auto-calculate totalAmount before saving
orderSchema.pre("save", function(next) {
    this.totalAmount = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
