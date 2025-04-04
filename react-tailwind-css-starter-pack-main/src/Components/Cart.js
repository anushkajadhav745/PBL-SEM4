// // // // // // // import React from "react";

// // // // // // // const Cart = ({ cart, onRemoveFromCart, onPlaceOrder }) => {
// // // // // // //     const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

// // // // // // //     return (
// // // // // // //         <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
// // // // // // //             <h2 className="text-xl font-bold mb-4 text-center">🛒 Your Cart</h2>

// // // // // // //             {cart.length > 0 ? (
// // // // // // //                 <div className="space-y-4">
// // // // // // //                     {cart.map(item => (
// // // // // // //                         <div key={item.menuId} className="flex justify-between items-center border-b pb-2">
// // // // // // //                             <div>
// // // // // // //                                 <h3 className="text-lg font-semibold">{item.name}</h3>
// // // // // // //                                 <p className="text-gray-600">Qty: {item.quantity}</p>
// // // // // // //                                 <p className="text-gray-700 font-semibold">₹{item.price * item.quantity}</p>
// // // // // // //                             </div>
// // // // // // //                             <button
// // // // // // //                                 onClick={() => onRemoveFromCart(item.menuId)}
// // // // // // //                                 className="px-3 py-1 text-white font-bold bg-red-500 hover:bg-red-600 rounded-md"
// // // // // // //                             >
// // // // // // //                                 Remove
// // // // // // //                             </button>
// // // // // // //                         </div>
// // // // // // //                     ))}
// // // // // // //                     <div className="flex justify-between mt-4 font-bold text-lg">
// // // // // // //                         <span>Total:</span>
// // // // // // //                         <span>₹{totalPrice}</span>
// // // // // // //                     </div>

// // // // // // //                     <button
// // // // // // //                         className="w-full mt-4 px-4 py-2 bg-green-500 text-white rounded-md text-lg font-semibold hover:bg-green-600"
// // // // // // //                         onClick={onPlaceOrder}
// // // // // // //                     >
// // // // // // //                         Place Order
// // // // // // //                     </button>
// // // // // // //                 </div>
// // // // // // //             ) : (
// // // // // // //                 <p className="text-center text-gray-500">Your cart is empty.</p>
// // // // // // //             )}
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Cart;

// // // // // // import React, { useState, useEffect } from "react";

// // // // // // const CartPage = () => {
// // // // // //     const [cartItems, setCartItems] = useState([]);
// // // // // //     const [totalPrice, setTotalPrice] = useState(0);

// // // // // //     useEffect(() => {
// // // // // //         fetchCart();
// // // // // //     }, []);

// // // // // //     const fetchCart = async () => {
// // // // // //         try {
// // // // // //             const response = await fetch("http://localhost:4000/api/customer/cart", {
// // // // // //                 method: "GET",
// // // // // //                 headers: {
// // // // // //                     "Content-Type": "application/json",
// // // // // //                     "Authorization": `Bearer ${localStorage.getItem("token")}` // Assuming token is stored in localStorage
// // // // // //                 }
// // // // // //             });

// // // // // //             const data = await response.json();
// // // // // //             if (response.ok) {
// // // // // //                 setCartItems(data.cart);
// // // // // //                 calculateTotal(data.cart);
// // // // // //             } else {
// // // // // //                 console.error("Error fetching cart:", data.message);
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             console.error("Fetch cart error:", error);
// // // // // //         }
// // // // // //     };

// // // // // //     const calculateTotal = (cart) => {
// // // // // //         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // // // // //         setTotalPrice(total);
// // // // // //     };

// // // // // //     return (
// // // // // //         <div className="p-6 bg-gray-100 min-h-screen">
// // // // // //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // // // //             <div className="bg-white shadow-md rounded-lg p-4">
// // // // // //                 {cartItems.length > 0 ? (
// // // // // //                     cartItems.map((item, index) => (
// // // // // //                         <div key={index} className="flex justify-between items-center border-b py-2">
// // // // // //                             <span>{item.name} (x{item.quantity})</span>
// // // // // //                             <span className="font-semibold">₹{item.price * item.quantity}</span>
// // // // // //                         </div>
// // // // // //                     ))
// // // // // //                 ) : (
// // // // // //                     <p className="text-gray-500">Your cart is empty.</p>
// // // // // //                 )}
// // // // // //                 <div className="mt-4 text-right">
// // // // // //                     <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
// // // // // //                     <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md">Order Now</button>
// // // // // //                 </div>
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default CartPage;


// // // // // import React, { useState, useEffect } from "react";

// // // // // const CartPage = () => {
// // // // //     const [cartItems, setCartItems] = useState([]);
// // // // //     const [totalPrice, setTotalPrice] = useState(0);

// // // // //     useEffect(() => {
// // // // //         fetchCart();
// // // // //     }, []);

// // // // //     // Fetch cart items from the backend
// // // // //     const fetchCart = async () => {
// // // // //         try {
// // // // //             const response = await fetch("http://localhost:4000/api/cart/get-all-cart", {
// // // // //                 method: "GET",
// // // // //                 headers: {
// // // // //                     "Content-Type": "application/json",
// // // // //                     "Authorization": `Bearer ${localStorage.getItem("token")}` // Token stored in localStorage
// // // // //                 }
// // // // //             });

// // // // //             const data = await response.json();
// // // // //             if (response.ok) {
// // // // //                 setCartItems(data.cart);
// // // // //                 calculateTotal(data.cart);
// // // // //             } else {
// // // // //                 console.error("Error fetching cart:", data.message);
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error("Error fetching cart items:", error);
// // // // //         }
// // // // //     };

// // // // //     // Calculate total price of cart items
// // // // //     const calculateTotal = (cart) => {
// // // // //         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // // // //         setTotalPrice(total);
// // // // //     };

// // // // //     // Function to handle placing the order
// // // // //     const handleOrderNow = () => {
// // // // //         // Here, you can send an API request to place the order, or display a success message
// // // // //         alert("Order placed successfully!");
// // // // //         setCartItems([]); // Clear the cart after the order is placed
// // // // //         setTotalPrice(0); // Reset total price
// // // // //     };

// // // // //     return (
// // // // //         <div className="p-6 bg-gray-100 min-h-screen">
// // // // //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // // //             <div className="bg-white shadow-md rounded-lg p-4">
// // // // //                 {cartItems.length > 0 ? (
// // // // //                     cartItems.map((item, index) => (
// // // // //                         <div key={index} className="flex justify-between items-center border-b py-2">
// // // // //                             <span>{item.name} (x{item.quantity})</span>
// // // // //                             <span className="font-semibold">₹{item.price * item.quantity}</span>
// // // // //                         </div>
// // // // //                     ))
// // // // //                 ) : (
// // // // //                     <p className="text-gray-500">Your cart is empty.</p>
// // // // //                 )}
// // // // //                 <div className="mt-4 text-right">
// // // // //                     <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
// // // // //                     <button
// // // // //                         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
// // // // //                         onClick={handleOrderNow}
// // // // //                     >
// // // // //                         Order Now
// // // // //                     </button>
// // // // //                 </div>
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default CartPage;


// // // // import React, { useState, useEffect } from "react";

// // // // // CartItem Component
// // // // const CartItem = ({ item, onRemove }) => {
// // // //     return (
// // // //         <div className="flex justify-between items-center border-b py-2">
// // // //             <span>{item.name} (x{item.quantity})</span>
// // // //             <div className="flex items-center gap-4">
// // // //                 <span className="font-semibold">₹{item.price * item.quantity}</span>
// // // //                 <button
// // // //                     className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
// // // //                     onClick={() => onRemove(item.menuId)}
// // // //                 >
// // // //                     Remove
// // // //                 </button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // // Main Cart Page Component
// // // // const CartPage = () => {
// // // //     const [cartItems, setCartItems] = useState([]);
// // // //     const [totalPrice, setTotalPrice] = useState(0);

// // // //     useEffect(() => {
// // // //         fetchCart();
// // // //     }, []);

// // // //     // Fetch cart items from the backend
// // // //     const fetchCart = async () => {
// // // //         try {
// // // //             const response = await fetch("http://localhost:4000/api/cart/get-all-cart", {
// // // //                 method: "GET",
// // // //                 headers: {
// // // //                     "Content-Type": "application/json",
// // // //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// // // //                 }
// // // //             });
// // // //             const data = await response.json();
// // // //             if (response.ok) {
// // // //                 setCartItems(data.cart);
// // // //                 calculateTotal(data.cart);
// // // //             } else {
// // // //                 console.error("Error fetching cart:", data.message);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Error fetching cart items:", error);
// // // //         }
// // // //     };

// // // //     // Calculate total price of cart items
// // // //     const calculateTotal = (cart) => {
// // // //         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // // //         setTotalPrice(total);
// // // //     };

// // // //     // Function to remove item from cart
// // // //     const handleRemoveItem = async (menuId) => {
// // // //         try {
// // // //             const response = await fetch("http://localhost:4000/api/cart/remove", {
// // // //                 method: "POST",
// // // //                 headers: {
// // // //                     "Content-Type": "application/json",
// // // //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// // // //                 },
// // // //                 body: JSON.stringify({ menuId })
// // // //             });
// // // //             const data = await response.json();
// // // //             if (response.ok) {
// // // //                 setCartItems(data.cart);
// // // //                 calculateTotal(data.cart);
// // // //             } else {
// // // //                 console.error("Error removing item:", data.message);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error("Error removing item from cart:", error);
// // // //         }
// // // //     };

// // // //     // Function to handle placing the order
// // // //     const handleOrderNow = () => {
// // // //         alert("Order placed successfully!");
// // // //         setCartItems([]);
// // // //         setTotalPrice(0);
// // // //     };

// // // //     return (
// // // //         <div className="p-6 bg-gray-100 min-h-screen">
// // // //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // // //             <div className="bg-white shadow-md rounded-lg p-4">
// // // //                 {cartItems.length > 0 ? (
// // // //                     cartItems.map((item) => (
// // // //                         <CartItem key={item.menuId} item={item} onRemove={handleRemoveItem} />
// // // //                     ))
// // // //                 ) : (
// // // //                     <p className="text-gray-500">Your cart is empty.</p>
// // // //                 )}
// // // //                 <div className="mt-4 text-right">
// // // //                     <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
// // // //                     <button
// // // //                         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
// // // //                         onClick={handleOrderNow}
// // // //                     >
// // // //                         Order Now
// // // //                     </button>
// // // //                 </div>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CartPage;


// // import React, { useState, useEffect } from "react";

// // const CartPage = () => {
// //     const [cartItems, setCartItems] = useState([]);
// //     const [totalPrice, setTotalPrice] = useState(0);

// //     useEffect(() => {
// //         fetchCart();
// //     }, []);

// //     // Fetch cart items from the backend
// //     const fetchCart = async () => {
// //         try {
// //             const response = await fetch("http://localhost:4000/api/cart/get-all-cart", {
// //                 method: "GET",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// //                 }
// //             });

// //             const data = await response.json();
// //             if (response.ok) {
// //                 setCartItems(data.cart);
// //                 calculateTotal(data.cart);
// //             } else {
// //                 console.error("Error fetching cart:", data.message);
// //             }
// //         } catch (error) {
// //             console.error("Error fetching cart items:", error);
// //         }
// //     };

// //     // Calculate total price of cart items
// //     const calculateTotal = (cart) => {
// //         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// //         setTotalPrice(total);
// //     };

// //     // Update quantity in the backend
// //     const updateQuantityInBackend = async (menuId, quantity) => {
// //         try {
// //             const response = await fetch("http://localhost:4000/api/cart/update-cart", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// //                 },
// //                 body: JSON.stringify({ menuId, quantity })
// //             });

// //             if (!response.ok) {
// //                 console.error("Error updating cart:", await response.json());
// //             }
// //         } catch (error) {
// //             console.error("Error:", error);
// //         }
// //     };

// //     // Increase item quantity
// //     const increaseQuantity = (menuId) => {
// //         const updatedCart = cartItems.map(item =>
// //             item.menuId === menuId ? { ...item, quantity: item.quantity + 1 } : item
// //         );
// //         setCartItems(updatedCart);
// //         calculateTotal(updatedCart);
// //         updateQuantityInBackend(menuId, updatedCart.find(item => item.menuId === menuId).quantity);
// //     };

// //     // Decrease item quantity
// //     const decreaseQuantity = (menuId) => {
// //         const updatedCart = cartItems.map(item =>
// //             item.menuId === menuId && item.quantity > 1
// //                 ? { ...item, quantity: item.quantity - 1 }
// //                 : item
// //         );
// //         setCartItems(updatedCart);
// //         calculateTotal(updatedCart);
// //         updateQuantityInBackend(menuId, updatedCart.find(item => item.menuId === menuId).quantity);
// //     };

// //     // Remove item from cart
// //     const removeFromCart = async (menuId) => {
// //         try {
// //             const response = await fetch("http://localhost:4000/api/cart/remove", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// //                 },
// //                 body: JSON.stringify({ menuId })
// //             });

// //             const data = await response.json();
// //             if (response.ok) {
// //                 const updatedCart = cartItems.filter(item => item.menuId !== menuId);
// //                 setCartItems(updatedCart);
// //                 calculateTotal(updatedCart);
// //             } else {
// //                 console.error("Error removing item:", data.message);
// //             }
// //         } catch (error) {
// //             console.error("Error removing cart item:", error);
// //         }
// //     };

// //     // Handle placing an order
// //     const handleOrderNow = () => {
// //         alert("Order placed successfully!");
// //         setCartItems([]);
// //         setTotalPrice(0);
// //     };

// //     return (
// //         <div className="p-6 bg-gray-100 min-h-screen">
// //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// //             <div className="bg-white shadow-md rounded-lg p-4">
// //                 {cartItems.length > 0 ? (
// //                     cartItems.map((item, index) => (
// //                         <div key={index} className="flex justify-between items-center border-b py-4">
// //                             <div>
// //                                 <h2 className="font-semibold">{item.name}</h2>
// //                                 <p className="text-gray-600">₹{item.price} per item</p>
// //                             </div>
// //                             <div className="flex items-center">
// //                                 <button
// //                                     className="px-3 py-1 bg-gray-300 text-black rounded-l-md hover:bg-gray-400"
// //                                     onClick={() => decreaseQuantity(item.menuId)}
// //                                 >
// //                                     -
// //                                 </button>
// //                                 <span className="px-4 py-1 bg-gray-200 text-black">{item.quantity}</span>
// //                                 <button
// //                                     className="px-3 py-1 bg-gray-300 text-black rounded-r-md hover:bg-gray-400"
// //                                     onClick={() => increaseQuantity(item.menuId)}
// //                                 >
// //                                     +
// //                                 </button>
// //                             </div>
// //                             <span className="font-semibold">₹{item.price * item.quantity}</span>
// //                             <button
// //                                 className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
// //                                 onClick={() => removeFromCart(item.menuId)}
// //                             >
// //                                 Remove
// //                             </button>
// //                         </div>
// //                     ))
// //                 ) : (
// //                     <p className="text-gray-500">Your cart is empty.</p>
// //                 )}
// //                 <div className="mt-4 text-right">
// //                     <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
// //                     <button
// //                         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
// //                         onClick={handleOrderNow}
// //                     >
// //                         Order Now
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default CartPage;



// // // import React, { useState, useEffect } from "react";

// // // const CartPage = () => {
// // //     const [cartItems, setCartItems] = useState([]);
// // //     const [totalPrice, setTotalPrice] = useState(0);

// // //     useEffect(() => {
// // //         fetchCart();
// // //     }, []);

// // //     // Fetch cart items from the backend
// // //     const fetchCart = async () => {
// // //         try {
// // //             const response = await fetch("http://localhost:4000/api/cart/get-all-cart", {
// // //                 method: "GET",
// // //                 headers: {
// // //                     "Content-Type": "application/json",
// // //                     "Authorization": `Bearer ${localStorage.getItem("token")}` // Token stored in localStorage
// // //                 }
// // //             });

// // //             const data = await response.json();
// // //             if (response.ok) {
// // //                 setCartItems(data.cart);
// // //                 calculateTotal(data.cart);
// // //             } else {
// // //                 console.error("Error fetching cart:", data.message);
// // //             }
// // //         } catch (error) {
// // //             console.error("Error fetching cart items:", error);
// // //         }
// // //     };

// // //     // Calculate total price of cart items
// // //     const calculateTotal = (cart) => {
// // //         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
// // //         setTotalPrice(total);
// // //     };

// // //     // Function to handle removing an item from the cart
// // //     const handleRemoveItem = async (menuId) => {
// // //         try {
// // //             const response = await fetch("http://localhost:4000/api/cart/remove-item", {
// // //                 method: "DELETE",
// // //                 headers: {
// // //                     "Content-Type": "application/json",
// // //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// // //                 },
// // //                 body: JSON.stringify({ menuId })
// // //             });

// // //             const data = await response.json();
// // //             if (response.ok) {
// // //                 setCartItems(data.cart);
// // //                 calculateTotal(data.cart);
// // //             } else {
// // //                 console.error("Error removing item:", data.message);
// // //             }
// // //         } catch (error) {
// // //             console.error("Error removing item:", error);
// // //         }
// // //     };

// // //     // Function to handle updating the quantity of an item
// // //     const handleUpdateQuantity = async (menuId, quantity) => {
// // //         if (quantity <= 0) return; // Do not allow zero or negative quantities

// // //         try {
// // //             const response = await fetch("http://localhost:4000/api/cart/update-cart", {
// // //                 method: "POST",
// // //                 headers: {
// // //                     "Content-Type": "application/json",
// // //                     "Authorization": `Bearer ${localStorage.getItem("token")}`
// // //                 },
// // //                 body: JSON.stringify({ menuId, quantity })
// // //             });

// // //             const data = await response.json();
// // //             if (response.ok) {
// // //                 setCartItems(data.cart);
// // //                 calculateTotal(data.cart);
// // //             } else {
// // //                 console.error("Error updating quantity:", data.message);
// // //             }
// // //         } catch (error) {
// // //             console.error("Error updating quantity:", error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="p-6 bg-gray-100 min-h-screen">
// // //             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
// // //             <div className="bg-white shadow-md rounded-lg p-4">
// // //                 {cartItems.length > 0 ? (
// // //                     <div className="space-y-4">
// // //                         {cartItems.map((item, index) => (
// // //                             <div key={index} className="flex flex-col bg-gray-50 rounded-lg p-4 border">
// // //                                 {/* Item Info */}
// // //                                 <div className="flex justify-between items-center mb-4">
// // //                                     <div className="flex items-center">
// // //                                         <img
// // //                                             src={item.image || "/default-image.jpg"}
// // //                                             alt={item.name}
// // //                                             className="w-20 h-20 object-cover rounded-md mr-4"
// // //                                         />
// // //                                         <div>
// // //                                             <h3 className="text-lg font-semibold">{item.name}</h3>
// // //                                             <span>₹{item.price}</span>
// // //                                         </div>
// // //                                     </div>

// // //                                     {/* Remove Item Button */}
// // //                                     <button
// // //                                         onClick={() => handleRemoveItem(item.menuId)}
// // //                                         className="px-4 py-2 bg-red-500 text-white rounded-lg"
// // //                                     >
// // //                                         Remove
// // //                                     </button>
// // //                                 </div>

// // //                                 {/* Quantity Adjustment Section */}
// // //                                 <div className="flex items-center justify-start space-x-4">
// // //                                     <span className="font-semibold">Quantity:</span>
// // //                                     <div className="flex flex-col items-center">
// // //                                         <button
// // //                                             onClick={() => handleUpdateQuantity(item.menuId, item.quantity - 1)}
// // //                                             className="px-3 py-1 bg-yellow-500 text-white rounded-full mb-2"
// // //                                         >
// // //                                             -
// // //                                         </button>
// // //                                         <span>{item.quantity}</span>
// // //                                         <button
// // //                                             onClick={() => handleUpdateQuantity(item.menuId, item.quantity + 1)}
// // //                                             className="px-3 py-1 bg-yellow-500 text-white rounded-full mt-2"
// // //                                         >
// // //                                             +
// // //                                         </button>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 ) : (
// // //                     <p className="text-gray-500">Your cart is empty.</p>
// // //                 )}

// // //                 {/* Total and Order Button */}
// // //                 <div className="mt-4 text-right">
// // //                     <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
// // //                     <button
// // //                         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
// // //                         onClick={() => alert("Order placed successfully!")}
// // //                     >
// // //                         Order Now
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default CartPage;

// import React, { useState, useEffect } from "react";

// const CartPage = () => {
//     const [cartItems, setCartItems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
//     const [isConfirming, setIsConfirming] = useState(false); // State for showing confirmation dialog

//     useEffect(() => {
//         fetchCart();
//     }, []);

//     // Fetch cart items from the backend
//     const fetchCart = async () => {
//         try {
//             const response = await fetch("http://localhost:4000/api/cart/get-all-cart", {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}` // Token stored in localStorage
//                 }
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 setCartItems(data.cart);
//                 calculateTotal(data.cart);
//             } else {
//                 console.error("Error fetching cart:", data.message);
//             }
//         } catch (error) {
//             console.error("Error fetching cart items:", error);
//         }
//     };

//     // Calculate total price of cart items
//     const calculateTotal = (cart) => {
//         const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//         setTotalPrice(total);
//     };

//     // Update quantity in the backend
//     const updateQuantityInBackend = async (menuId, quantity) => {
//         try {
//             const response = await fetch("http://localhost:4000/api/cart/update-cart", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`
//                 },
//                 body: JSON.stringify({ menuId, quantity })
//             });

//             if (!response.ok) {
//                 console.error("Error updating cart:", await response.json());
//             }
//         } catch (error) {
//             console.error("Error:", error);
//         }
//     };

//     // Increase item quantity
//     const increaseQuantity = (menuId) => {
//         const updatedCart = cartItems.map(item =>
//             item.menuId === menuId ? { ...item, quantity: item.quantity + 1 } : item
//         );
//         setCartItems(updatedCart);
//         calculateTotal(updatedCart);
//         updateQuantityInBackend(menuId, updatedCart.find(item => item.menuId === menuId).quantity);
//     };

//     // Decrease item quantity
//     const decreaseQuantity = (menuId) => {
//         const updatedCart = cartItems.map(item =>
//             item.menuId === menuId && item.quantity > 1
//                 ? { ...item, quantity: item.quantity - 1 }
//                 : item
//         );
//         setCartItems(updatedCart);
//         calculateTotal(updatedCart);
//         updateQuantityInBackend(menuId, updatedCart.find(item => item.menuId === menuId).quantity);
//     };

//     // Remove item from cart
//     const removeFromCart = async (menuId) => {
//         try {
//             const response = await fetch("http://localhost:4000/api/cart/remove", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`
//                 },
//                 body: JSON.stringify({ menuId })
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 const updatedCart = cartItems.filter(item => item.menuId !== menuId);
//                 setCartItems(updatedCart);
//                 calculateTotal(updatedCart);
//             } else {
//                 console.error("Error removing item:", data.message);
//             }
//         } catch (error) {
//             console.error("Error removing cart item:", error);
//         }
//     };

//     // Handle placing an order (trigger confirmation dialog)
//     const handleOrderNow = () => {
//         setIsConfirming(true); // Show the confirmation dialog
//     };

//     // Confirm and place the order
//     const confirmOrder = async () => {
//         try {
//             const response = await fetch("http://localhost:4000/api/order/place-order", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${localStorage.getItem("token")}`
//                 },
//                 body: JSON.stringify({ cartItems, totalPrice })
//             });

//             const data = await response.json();
//             if (response.ok) {
//                 // Order placed successfully, clear the cart and reset total
//                 setCartItems([]);
//                 setTotalPrice(0);
//                 alert("Order placed successfully!");
//             } else {
//                 console.error("Error placing order:", data.message);
//                 alert("There was an issue placing your order.");
//             }
//         } catch (error) {
//             console.error("Error placing order:", error);
//             alert("An error occurred while placing your order.");
//         } finally {
//             setIsConfirming(false); // Close the confirmation dialog
//         }
//     };

//     // Cancel the order placement
//     const cancelOrder = () => {
//         setIsConfirming(false); // Close the confirmation dialog
//     };

//     return (
//         <div className="p-6 bg-gray-100 min-h-screen">
//             <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//             <div className="bg-white shadow-md rounded-lg p-4">
//                 {cartItems.length > 0 ? (
//                     cartItems.map((item, index) => (
//                         <div key={index} className="flex justify-between items-center border-b py-4">
//                             <div>
//                                 <h2 className="font-semibold">{item.name}</h2>
//                                 <p className="text-gray-600">₹{item.price} per item</p>
//                             </div>
//                             <div className="flex items-center">
//                                 <button
//                                     className="px-3 py-1 bg-gray-300 text-black rounded-l-md hover:bg-gray-400"
//                                     onClick={() => decreaseQuantity(item.menuId)}
//                                 >
//                                     -
//                                 </button>
//                                 <span className="px-4 py-1 bg-gray-200 text-black">{item.quantity}</span>
//                                 <button
//                                     className="px-3 py-1 bg-gray-300 text-black rounded-r-md hover:bg-gray-400"
//                                     onClick={() => increaseQuantity(item.menuId)}
//                                 >
//                                     +
//                                 </button>
//                             </div>
//                             <span className="font-semibold">₹{item.price * item.quantity}</span>
//                             <button
//                                 className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
//                                 onClick={() => removeFromCart(item.menuId)}
//                             >
//                                 Remove
//                             </button>
//                         </div>
//                     ))
//                 ) : (
//                     <p className="text-gray-500">Your cart is empty.</p>
//                 )}
//                 <div className="mt-4 text-right">
//                     <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
//                     <button
//                         className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
//                         onClick={handleOrderNow}
//                     >
//                         Order Now
//                     </button>
//                 </div>
//             </div>

//             {/* Confirmation Dialog */}
//             {isConfirming && (
//                 <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50 z-50">
//                     <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
//                         <h3 className="text-xl font-semibold mb-4">Confirm Your Order</h3>
//                         <p className="mb-4">Are you sure you want to place the order for ₹{totalPrice}?</p>
//                         <div className="flex justify-between">
//                             <button
//                                 onClick={confirmOrder}
//                                 className="px-4 py-2 bg-green-500 text-white rounded-md"
//                             >
//                                 Confirm
//                             </button>
//                             <button
//                                 onClick={cancelOrder}
//                                 className="px-4 py-2 bg-red-500 text-white rounded-md"
//                             >
//                                 Cancel
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default CartPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isConfirming, setIsConfirming] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/cart/get-all-cart", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setCartItems(data.cart);
                calculateTotal(data.cart);
            } else {
                console.error("Error fetching cart:", data.message);
            }
        } catch (error) {
            console.error("Error fetching cart items:", error);
        }
    };

    const calculateTotal = (cart) => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotalPrice(total);
    };

    const updateQuantityInBackend = async (menuId, quantity) => {
        try {
            await fetch("http://localhost:4000/api/cart/update-cart", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ menuId, quantity })
            });
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const increaseQuantity = (menuId) => {
        const updatedCart = cartItems.map(item =>
            item.menuId === menuId ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
        updateQuantityInBackend(menuId, updatedCart.find(item => item.menuId === menuId).quantity);
    };

    const decreaseQuantity = (menuId) => {
        const updatedCart = cartItems.map(item =>
            item.menuId === menuId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updatedCart);
        calculateTotal(updatedCart);
        updateQuantityInBackend(menuId, updatedCart.find(item => item.menuId === menuId).quantity);
    };

    const removeFromCart = async (menuId) => {
        try {
            const response = await fetch("http://localhost:4000/api/cart/remove", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ menuId })
            });

            const data = await response.json();
            if (response.ok) {
                const updatedCart = cartItems.filter(item => item.menuId !== menuId);
                setCartItems(updatedCart);
                calculateTotal(updatedCart);
            } else {
                console.error("Error removing item:", data.message);
            }
        } catch (error) {
            console.error("Error removing cart item:", error);
        }
    };

    const handleOrderNow = () => {
        navigate("/customer/checkout", { state: { cartItems, totalPrice } });
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            <div className="bg-white shadow-md rounded-lg p-4">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="flex justify-between items-center border-b py-4">
                            <div>
                                <h2 className="font-semibold">{item.name}</h2>
                                <p className="text-gray-600">₹{item.price} per item</p>
                            </div>
                            <div className="flex items-center">
                                <button className="px-3 py-1 bg-gray-300 text-black rounded-l-md hover:bg-gray-400" onClick={() => decreaseQuantity(item.menuId)}>-</button>
                                <span className="px-4 py-1 bg-gray-200 text-black">{item.quantity}</span>
                                <button className="px-3 py-1 bg-gray-300 text-black rounded-r-md hover:bg-gray-400" onClick={() => increaseQuantity(item.menuId)}>+</button>
                            </div>
                            <span className="font-semibold">₹{item.price * item.quantity}</span>
                            <button className="ml-4 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => removeFromCart(item.menuId)}>Remove</button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
                <div className="mt-4 text-right">
                    <h2 className="text-lg font-bold">Total: ₹{totalPrice}</h2>
                    <button className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition" onClick={handleOrderNow}>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
