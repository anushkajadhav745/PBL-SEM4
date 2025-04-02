// // const Customer = require("../Model/customer");
// // const Menu = require("../Model/menu");
// // const mongoose = require('mongoose');


// // // 🛒 Add Item to Cart
// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Logged-in customer
// // //         const { itemId, name, price, quantity } = req.body;

// // //         if (!itemId || !name || !price || !quantity) {
// // //             return res.status(400).json({ message: "All fields are required." });
// // //         }

// // //         const customer = await Customer.findById(customerId);
// // //         if (!customer) {
// // //             return res.status(404).json({ message: "Customer not found" });
// // //         }

// // //          // Check if item already exists in the cart
// // //         const existingItem = customer.cart.find(item => item.itemId === itemId);
// // //         if (existingItem) {
// // //             existingItem.quantity += quantity; // Update quantity
// // //         } else {
// // //             customer.cart.push({ itemId, name, price, quantity });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });

// // //     } catch (error) {
// // //         console.error("Error adding to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };
// // // const Customer = require("../Model/customer");
// // // const Menu = require("../Model/menu"); // Assuming you have a Menu model

// // // 🛒 Add Item to Cart
// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Get logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         if (!menuId || quantity <= 0) {
// // //             return res.status(400).json({ message: "Invalid menu item or quantity" });
// // //         }

// // //         // Check if the menu item exists
// // //         const menuItem = await Menu.findOne({ menuId: menuId });
// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Fetch customer
// // //         const customer = await Customer.findById(customerId);

// // //         // Check if item already exists in cart
// // //         const existingItem = customer.cart.find(item => item.menuId.toString() === menuId);
// // //         if (existingItem) {
// // //             existingItem.quantity += quantity; // Update quantity if already in cart
// // //         } else {
// // //             customer.cart.push({
// // //                 menuId,
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };
// // // const Menu = require("../Model/Menu");
// // // const Customer = require("../Model/customer");

// // // addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         // Find the menu item using menuId (string)
// // //         const menuItem = await Menu.findOne({ menuId: menuId });

// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Find the customer
// // //         const customer = await Customer.findById(customerId);
// // //         if (!customer) {
// // //             return res.status(404).json({ message: "Customer not found" });
// // //         }

// // //         // Check if item is already in the cart
// // //         const existingItem = customer.cart.find(item => item.menuId === menuId);
// // //         if (existingItem) {
// // //             existingItem.quantity += quantity; // Increase quantity
// // //         } else {
// // //             customer.cart.push({
// // //                 menuId: menuId,  // Store menuId (string) instead of ObjectId
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity: quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };

// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         // Ensure menuId is an ObjectId for comparison
// // //         const menuObjectId = mongoose.Types.ObjectId(menuId); // Convert string to ObjectId

// // //         // Find the menu item using menuId (ObjectId)
// // //         const menuItem = await Menu.findOne({ menuId: menuObjectId });

// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Find the customer
// // //         const customer = await Customer.findById(customerId);
// // //         if (!customer) {
// // //             return res.status(404).json({ message: "Customer not found" });
// // //         }

// // //         // Check if item is already in the cart
// // //         const existingItem = customer.cart.find(item => item.menuId.equals(menuObjectId)); // Compare ObjectId

// // //         if (existingItem) {
// // //             // Increase quantity if item already exists
// // //             existingItem.quantity += quantity;
// // //         } else {
// // //             // Add new item to the cart
// // //             customer.cart.push({
// // //                 menuId: menuObjectId, // Store ObjectId
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity: quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };

// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         // Ensure menuId is an ObjectId for comparison
// // //         const menuObjectId = new mongoose.Types.ObjectId(menuId); // Instantiate ObjectId using 'new'

// // //         // Find the menu item using menuId (ObjectId)
// // //         const menuItem = await Menu.findOne({ menuId: menuObjectId });

// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Find the customer
// // //         const customer = await Customer.findById(customerId);
// // //         if (!customer) {
// // //             return res.status(404).json({ message: "Customer not found" });
// // //         }

// // //         // Check if item is already in the cart
// // //         const existingItem = customer.cart.find(item => item.menuId.equals(menuObjectId)); // Compare ObjectId

// // //         if (existingItem) {
// // //             // Increase quantity if item already exists
// // //             existingItem.quantity += quantity;
// // //         } else {
// // //             // Add new item to the cart
// // //             customer.cart.push({
// // //                 menuId: menuObjectId, // Store ObjectId
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity: quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };

// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         console.log("Received menuId:", menuId); // Log menuId to check format

// // //         // Ensure menuId is an ObjectId for comparison
// // //         const menuObjectId = new mongoose.Types.ObjectId(menuId); // Instantiate ObjectId using 'new'

// // //         // Find the menu item using menuId (ObjectId)
// // //         const menuItem = await Menu.findOne({ _id: menuObjectId });

// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Find the customer
// // //         const customer = await Customer.findById(customerId);
// // //         if (!customer) {
// // //             return res.status(404).json({ message: "Customer not found" });
// // //         }

// // //         // Check if item is already in the cart
// // //         const existingItem = customer.cart.find(item => item.menuId.equals(menuObjectId)); // Compare ObjectId

// // //         if (existingItem) {
// // //             // Increase quantity if item already exists
// // //             existingItem.quantity += quantity;
// // //         } else {
// // //             // Add new item to the cart
// // //             customer.cart.push({
// // //                 menuId: menuObjectId, // Store ObjectId
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity: quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };


// // // const Customer = require("../Model/customer");
// // // const Menu = require("../Model/Menu"); // Assuming you have a Menu model

// // // 🛒 Add Item to Cart
// // // addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Get logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         if (!menuId || quantity <= 0) {
// // //             return res.status(400).json({ message: "Invalid menu item or quantity" });
// // //         }

// // //         // Check if the menu item exists
// // //         const menuItem = await Menu.findById(menuId);
// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Fetch customer
// // //         const customer = await Customer.findById(customerId);

// // //         // Check if item already exists in cart
// // //         const existingItem = customer.cart.find(item => item.menuId.toString() === menuId);
// // //         if (existingItem) {
// // //             existingItem.quantity += quantity; // Update quantity if already in cart
// // //         } else {
// // //             customer.cart.push({
// // //                 menuId,
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };

// // // const addToCart = async (req, res) => {
// // //     try {
// // //         const customerId = req.customer.id; // Get logged-in customer ID
// // //         const { menuId, quantity } = req.body;

// // //         if (!menuId || quantity <= 0) {
// // //             return res.status(400).json({ message: "Invalid menu item or quantity" });
// // //         }

// // //         // Check if the menu item exists using manually created menuId (string)
// // //         const menuItem = await Menu.findOne({ menuId: menuId });
// // //         if (!menuItem) {
// // //             return res.status(404).json({ message: "Menu item not found" });
// // //         }

// // //         // Fetch customer
// // //         const customer = await Customer.findById(customerId);

// // //         // Check if item already exists in cart
// // //         const existingItem = customer.cart.find(item => item.menuId === menuId);
// // //         if (existingItem) {
// // //             existingItem.quantity += quantity; // Update quantity if already in cart
// // //         } else {
// // //             customer.cart.push({
// // //                 menuId,
// // //                 name: menuItem.name,
// // //                 price: menuItem.price,
// // //                 quantity
// // //             });
// // //         }

// // //         await customer.save();
// // //         res.status(200).json({ message: "Item added to cart", cart: customer.cart });
// // //     } catch (error) {
// // //         console.error("Error adding item to cart:", error);
// // //         res.status(500).json({ message: "Internal Server Error" });
// // //     }
// // // };


// // const addToCart = async (req, res) => {
// //     try {
// //         const { menuId, quantity } = req.body;  // Get menuId from request body
// //         if (!menuId) {
// //             return res.status(400).json({ message: "Menu ID is required" });
// //         }

// //         const customer = await Customer.findById(req.customer.id);
// //         if (!customer) {
// //             return res.status(404).json({ message: "Customer not found" });
// //         }

// //         // Create the cart item
// //         const newCartItem = {
// //             menuId, // Ensure menuId is valid here
// //             quantity,
// //         };

// //         // Add item to the cart
// //         customer.cart.push(newCartItem);
// //         await customer.save();

// //         res.status(200).json({ message: "Item added to cart" });
// //     } catch (error) {
// //         console.error(error);
// //         res.status(500).json({ message: "Error adding item to cart" });
// //     }
// // };

// // // 🗑️ Remove Item from Cart
// // const removeFromCart = async (req, res) => {
// //     try {
// //         const customerId = req.customer.id;
// //         const { itemId } = req.params;

// //         const customer = await Customer.findById(customerId);
// //         if (!customer) {
// //             return res.status(404).json({ message: "Customer not found" });
// //         }

// //         customer.cart = customer.cart.filter(item => item.itemId !== itemId);
// //         await customer.save();

// //         res.status(200).json({ message: "Item removed from cart", cart: customer.cart });

// //     } catch (error) {
// //         console.error("Error removing from cart:", error);
// //         res.status(500).json({ message: "Internal Server Error" });
// //     }
// // };

// // // 🛍️ Fetch Cart Items
// // const getCart = async (req, res) => {
// //     try {
// //         const customerId = req.customer.id;
// //         const customer = await Customer.findById(customerId);

// //         if (!customer) {
// //             return res.status(404).json({ message: "Customer not found" });
// //         }

// //         res.status(200).json({ cart: customer.cart });
// //     } catch (error) {
// //         console.error("Error fetching cart:", error);
// //         res.status(500).json({ message: "Internal Server Error" });
// //     }
// // };

// // // 🔄 Update Item Quantity
// // const updateCartItem = async (req, res) => {
// //     try {
// //         const customerId = req.customer.id;
// //         const { itemId, quantity } = req.body;

// //         const customer = await Customer.findById(customerId);
// //         if (!customer) {
// //             return res.status(404).json({ message: "Customer not found" });
// //         }

// //         const item = customer.cart.find(item => item.itemId === itemId);
// //         if (!item) {
// //             return res.status(404).json({ message: "Item not found in cart" });
// //         }

// //         item.quantity = quantity;
// //         await customer.save();

// //         res.status(200).json({ message: "Cart updated", cart: customer.cart });

// //     } catch (error) {
// //         console.error("Error updating cart:", error);
// //         res.status(500).json({ message: "Internal Server Error" });
// //     }
// // };

// // // 🧹 Clear Cart
// // const clearCart = async (req, res) => {
// //     try {
// //         const customerId = req.customer.id;
// //         const customer = await Customer.findById(customerId);

// //         if (!customer) {
// //             return res.status(404).json({ message: "Customer not found" });
// //         }

// //         customer.cart = [];
// //         await customer.save();

// //         res.status(200).json({ message: "Cart cleared" });

// //     } catch (error) {
// //         console.error("Error clearing cart:", error);
// //         res.status(500).json({ message: "Internal Server Error" });
// //     }
// // };

// // module.exports = { addToCart, removeFromCart, getCart, updateCartItem, clearCart };









































const Menu = require("../Model/menu");  // Your Menu model
const Customer = require("../Model/customer"); // Your Customer model

// // Add to Cart Controller
// const addToCart = async (req, res) => {
//   try {
//     // Step 1: Extract the menuId and quantity from the request body
//     const { menuId, quantity } = req.body;

//     // Step 2: Validate that menuId and quantity are provided
//     if (!menuId || !quantity) {
//       return res.status(400).json({ message: "Menu ID and quantity are required." });
//     }

//     // Step 3: Find the menu item by menuId
//     const menuItem = await Menu.findOne({ menuId });
//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found." });
//     }

//     // Step 4: Find the logged-in customer
//     const customerId = req.customer.customerId; // From the customer middleware (req.customer)
//     const customer = await Customer.findOne({ customerId });
//     if (!customer) {
//       return res.status(404).json({ message: "Customer not found." });
//     }

//     // Step 5: Check if the item is already in the cart
//     const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
    
//     if (itemIndex > -1) {
//       // Item already exists in the cart, update its quantity
//       customer.cart[itemIndex].quantity += quantity; // You can adjust this logic to avoid excessive quantities
//     } else {
//       // Item doesn't exist in the cart, so add it
//       customer.cart.push({
//         menuId,
//         name: menuItem.name,
//         price: menuItem.price,
//         quantity
//       });
//     }

//     // Step 6: Save the customer with the updated cart
//     await customer.save();

//     // Step 7: Return a response indicating success
//     return res.status(200).json({ message: "Item added to cart successfully!", cart: customer.cart });
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     return res.status(500).json({ message: "An error occurred while adding the item to the cart." });
//   }
// };
// module.exports = { addToCart };


// const addToCart = async (req, res) => {
//     try {
//       // Step 1: Extract the menuId and quantity from the request body
//       const { menuId, quantity } = req.body;
  
//       // Log the incoming data to debug
//       console.log("Adding to cart:", { menuId, quantity });
  
//       // Step 2: Validate that menuId and quantity are provided
//       if (!menuId || !quantity) {
//         return res.status(400).json({ message: "Menu ID and quantity are required." });
//       }
  
//       console.time("Find Menu");
//       // Step 3: Find the menu item by menuId
//       const menuItem = await Menu.findOne({ menuId });
//       console.timeEnd("Find Menu");
  
//       if (!menuItem) {
//         return res.status(404).json({ message: "Menu item not found." });
//       }
  
//       console.time("Find Customer");
//       // Step 4: Find the logged-in customer
//       const customerId = req.customer.customerId; // From the customer middleware (req.customer)
//       const customer = await Customer.findOne({ customerId });
//       console.timeEnd("Find Customer");
  
//       if (!customer) {
//         return res.status(404).json({ message: "Customer not found." });
//       }
  
//       // Step 5: Check if the item is already in the cart
//       const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
  
//       if (itemIndex > -1) {
//         // Item already exists in the cart, update its quantity
//         customer.cart[itemIndex].quantity += quantity;
//       } else {
//         // Item doesn't exist in the cart, so add it
//         customer.cart.push({
//           menuId,
//           name: menuItem.name,
//           price: menuItem.price,
//           quantity
//         });
//       }
  
//       console.time("Save Customer");
//       // Step 6: Save the customer with the updated cart
//       await customer.save();
//       console.timeEnd("Save Customer");
  
//       // Step 7: Return a response indicating success
//       return res.status(200).json({ message: "Item added to cart successfully!", cart: customer.cart });
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       return res.status(500).json({ message: "An error occurred while adding the item to the cart." });
//     }
//   };
  
//   module.exports = { addToCart };
// const addToCart = async (req, res) => {
//     try {
//       const { menuId, quantity } = req.body;
  
//       // Validate that menuId and quantity are provided
//       if (!menuId || !quantity) {
//         return res.status(400).json({ message: "Menu ID and quantity are required." });
//       }
  
//       console.log("Adding to cart:", { menuId, quantity });
  
//       // Find the menu item by menuId
//       console.time("Find Menu");
//       const menuItem = await Menu.findOne({ menuId });
//       console.timeEnd("Find Menu");
  
//       if (!menuItem) {
//         return res.status(404).json({ message: "Menu item not found." });
//       }
//       console.log("Item found:", menuItem);
  
//       // Find the logged-in customer
//       const customerId = req.customer.customerId;
//       const customer = await Customer.findOne({ customerId });
  
//       if (!customer) {
//         return res.status(404).json({ message: "Customer not found." });
//       }
  
//       console.log("Current customer cart:", customer.cart);
  
//       // Check if the item is already in the cart
//       const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
//       console.log("Item index in cart:", itemIndex);
  
//       if (itemIndex > -1) {
//         // Item already exists in the cart, update its quantity
//         console.log("Item exists, updating quantity");
//         customer.cart[itemIndex].quantity += quantity;
//       } else {
//         // Item doesn't exist in the cart, so add it
//         console.log("Item doesn't exist, adding new item");
//         customer.cart.push({
//           menuId,
//           name: menuItem.name,
//           price: menuItem.price,
//           quantity
//         });
//       }
  
//       console.log("Updated Cart:", customer.cart);
  
//       // Save the customer with the updated cart
//       console.time("Save Customer");
//       await customer.save();
//       console.timeEnd("Save Customer");
  
//       return res.status(200).json({ message: "Item added to cart successfully!", cart: customer.cart });
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       return res.status(500).json({ message: "An error occurred while adding the item to the cart." });
//     }
//   };
  
//   module.exports = { addToCart };
  

// const addToCart = async (req, res) => {
//     try {
//       const { menuId, quantity } = req.body;
  
//       // Validate that menuId and quantity are provided
//       if (!menuId || !quantity) {
//         return res.status(400).json({ message: "Menu ID and quantity are required." });
//       }
  
//       console.log("Adding to cart:", { menuId, quantity });
  
//       // Find the menu item by menuId
//       console.time("Find Menu");
//       const menuItem = await Menu.findOne({ menuId });
//       console.timeEnd("Find Menu");
  
//       if (!menuItem) {
//         return res.status(404).json({ message: "Menu item not found." });
//       }
//       console.log("Item found:", menuItem);
  
//       // Find the logged-in customer
//       const customerId = req.customer.customerId;
//       const customer = await Customer.findOne({ customerId });
  
//       if (!customer) {
//         return res.status(404).json({ message: "Customer not found." });
//       }
  
//       console.log("Current customer cart:", customer.cart);
  
//       // Check if the item is already in the cart
//       const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
//       console.log("Item index in cart:", itemIndex);
  
//       if (itemIndex > -1) {
//         // Item already exists in the cart, update its quantity
//         console.log("Item exists, updating quantity");
//         customer.cart[itemIndex].quantity += quantity;
//       } else {
//         // Item doesn't exist in the cart, so add it
//         console.log("Item doesn't exist, adding new item");
//         customer.cart.push({
//           menuId,
//           name: menuItem.name,
//           price: menuItem.price,
//           quantity
//         });
//       }
  
//       console.log("Updated Cart:", customer.cart);
  
//       // Save the customer with the updated cart
//       console.time("Save Customer");
//       const updatedCustomer = await customer.save();
//       console.timeEnd("Save Customer");
  
//       if (updatedCustomer) {
//         console.log("Customer saved successfully!");
//         return res.status(200).json({ message: "Item added to cart successfully!", cart: updatedCustomer.cart });
//       } else {
//         console.error("Error while saving customer.");
//         return res.status(500).json({ message: "Failed to save customer." });
//       }
//     } catch (error) {
//       console.error("Error adding to cart:", error);
//       return res.status(500).json({ message: "An error occurred while adding the item to the cart." });
//     }
//   };
  
//   module.exports = { addToCart };
const mongoose = require("mongoose");

// const addToCart = async (req, res) => {
//   try {
//     const { menuId, quantity } = req.body;

//     // Validate that menuId and quantity are provided
//     if (!menuId || !quantity) {
//       return res.status(400).json({ message: "Menu ID and quantity are required." });
//     }

//     console.log("Adding to cart:", { menuId, quantity });

//     // Find the menu item by menuId
//     console.time("Find Menu");
//     const menuItem = await Menu.findOne({ menuId });
//     console.timeEnd("Find Menu");

//     if (!menuItem) {
//       return res.status(404).json({ message: "Menu item not found." });
//     }
//     console.log("Item found:", menuItem);

//     // Find the logged-in customer using ObjectId from the token
//     const customerId = req.customer.id; // The id in the token is the customerId (ObjectId)
//     const customer = await Customer.findById(mongoose.Types.ObjectId(customerId));

//     if (!customer) {
//       return res.status(404).json({ message: "Customer not found." });
//     }

//     console.log("Current customer cart:", customer.cart);

//     // Check if the item is already in the cart
//     const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
//     console.log("Item index in cart:", itemIndex);

//     if (itemIndex > -1) {
//       // Item already exists in the cart, update its quantity
//       console.log("Item exists, updating quantity");
//       customer.cart[itemIndex].quantity += quantity;
//     } else {
//       // Item doesn't exist in the cart, so add it
//       console.log("Item doesn't exist, adding new item");
//       customer.cart.push({
//         menuId,
//         name: menuItem.name,
//         price: menuItem.price,
//         quantity
//       });
//     }

//     console.log("Updated Cart:", customer.cart);

//     // Save the customer with the updated cart
//     console.time("Save Customer");
//     const updatedCustomer = await customer.save();
//     console.timeEnd("Save Customer");

//     if (updatedCustomer) {
//       console.log("Customer saved successfully!");
//       return res.status(200).json({ message: "Item added to cart successfully!", cart: updatedCustomer.cart });
//     } else {
//       console.error("Error while saving customer.");
//       return res.status(500).json({ message: "Failed to save customer." });
//     }
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     return res.status(500).json({ message: "An error occurred while adding the item to the cart." });
//   }
// };

// module.exports = { addToCart };


const addToCart = async (req, res) => {
    try {
      const { menuId, quantity } = req.body;
  
      // Validate that menuId and quantity are provided
      if (!menuId || !quantity) {
        return res.status(400).json({ message: "Menu ID and quantity are required." });
      }
  
      console.log("Adding to cart:", { menuId, quantity });
  
      // Find the menu item by menuId
      console.time("Find Menu");
      const menuItem = await Menu.findOne({ menuId });
      console.timeEnd("Find Menu");
  
      if (!menuItem) {
        return res.status(404).json({ message: "Menu item not found." });
      }
      console.log("Item found:", menuItem);
  
      // Find the logged-in customer using ObjectId from the token
      const customerId = req.customer.id; // The id in the token is the customerId (ObjectId)
      const customer = await Customer.findById(new mongoose.Types.ObjectId(customerId));  // Use 'new'
  
      if (!customer) {
        return res.status(404).json({ message: "Customer not found." });
      }
  
      console.log("Current customer cart:", customer.cart);
  
      // Check if the item is already in the cart
      const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
      console.log("Item index in cart:", itemIndex);
  
      if (itemIndex > -1) {
        // Item already exists in the cart, update its quantity
        console.log("Item exists, updating quantity");
        customer.cart[itemIndex].quantity += quantity;
      } else {
        // Item doesn't exist in the cart, so add it
        console.log("Item doesn't exist, adding new item");
        customer.cart.push({
          menuId,
          name: menuItem.name,
          price: menuItem.price,
          quantity
        });
      }
  
      console.log("Updated Cart:", customer.cart);
  
      // Save the customer with the updated cart
      console.time("Save Customer");
      const updatedCustomer = await customer.save();
      console.timeEnd("Save Customer");
  
      if (updatedCustomer) {
        console.log("Customer saved successfully!");
        return res.status(200).json({ message: "Item added to cart successfully!", cart: updatedCustomer.cart });
      } else {
        console.error("Error while saving customer.");
        return res.status(500).json({ message: "Failed to save customer." });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      return res.status(500).json({ message: "An error occurred while adding the item to the cart." });
    }
  };


  const getCartItems = async (req, res) => {
    try {
      const customerId = req.customer.id; // Extract customer ID from the JWT
  
      // Find the customer and their cart
      const customer = await Customer.findById(customerId).select("cart");
      if (!customer) {
        return res.status(404).json({ message: "Customer not found." });
      }
  
      res.status(200).json({ cart: customer.cart });
    } catch (error) {
      console.error("Error fetching cart items:", error);
      res.status(500).json({ message: "An error occurred while fetching the cart items." });
    }
  };
  



  const removeFromCart = async (req, res) => {
    try {
        const { menuId } = req.body; // Get menuId from request body

        if (!menuId) {
            return res.status(400).json({ message: "Menu ID is required." });
        }

        // Extract customer ID from JWT token
        const customerId = req.customer.id;

        // Find the customer
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found." });
        }

        console.log("Current Cart Before Removal:", customer.cart);

        // Check if the item exists in the cart
        const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
        if (itemIndex === -1) {
            return res.status(404).json({ message: "Item not found in cart." });
        }

        // Remove the item from the cart
        customer.cart.splice(itemIndex, 1);

        // Save the updated customer document
        await customer.save();

        console.log("Updated Cart After Removal:", customer.cart);

        res.status(200).json({ message: "Item removed from cart successfully!", cart: customer.cart });

    } catch (error) {
        console.error("Error removing item from cart:", error);
        res.status(500).json({ message: "An error occurred while removing the item from the cart." });
    }
};


const updateCartQuantity = async (req, res) => {
  try {
      const { menuId, quantity } = req.body;  // Get menuId and new quantity from request body
      if (!menuId || quantity < 1) {
          return res.status(400).json({ message: "Valid menu ID and quantity are required." });
      }

      const customerId = req.customer.id;  // Extract customer ID from JWT token
      const customer = await Customer.findById(customerId);
      if (!customer) {
          return res.status(404).json({ message: "Customer not found." });
      }

      // Find the item in the cart
      const itemIndex = customer.cart.findIndex(item => item.menuId === menuId);
      if (itemIndex === -1) {
          return res.status(404).json({ message: "Item not found in cart." });
      }

      // Update the quantity
      customer.cart[itemIndex].quantity = quantity;

      // Save the updated customer data
      await customer.save();

      return res.status(200).json({ message: "Cart updated successfully!", cart: customer.cart });
  } catch (error) {
      console.error("Error updating cart quantity:", error);
      return res.status(500).json({ message: "An error occurred while updating the cart." });
  }
};



module.exports = { addToCart ,getCartItems,removeFromCart,updateCartQuantity};
  