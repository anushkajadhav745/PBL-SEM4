const express = require("express");
const router = express.Router();
const { addToCart,getCartItems,removeFromCart ,updateCartQuantity} = require("../controllers/cartController");
const customerAuth = require("../Middeleware/customerAuth");

// Cart Routes
router.post("/add", customerAuth, addToCart);          // Add item to cart
router.get("/get-all-cart", customerAuth, getCartItems);               // View cart items
router.post("/remove", customerAuth, removeFromCart);
router.post("/update-cart", customerAuth, updateCartQuantity);
// router.put("/update", customerAuth, updateCartItem);  // Update cart item quantity
// router.delete("/remove/:itemId", customerAuth, removeFromCart);  // Remove item
// router.delete("/clear", customerAuth, clearCart);     // Clear cart

module.exports = router;


// removeFromCart, getCart, updateCartItem, clearCart 