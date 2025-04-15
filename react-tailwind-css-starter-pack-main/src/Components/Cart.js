import React, { useState, useEffect } from "react";
import ReceiptPage from "./Receipt";
import { useNavigate } from 'react-router-dom';





const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isConfirming, setIsConfirming] = useState(false);
    const navigate = useNavigate(); // ✅ Correct usage

    // const [selectedOrder, setSelectedOrder] = useState(null);

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
        setIsConfirming(true);
    };

    const confirmOrder = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/order/place-order", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({ cartItems, totalPrice })
          });
      
          const data = await response.json();
          if (response.ok) {
            setCartItems([]);
            setTotalPrice(0);
            
            // Assuming the backend returns the order object directly in data
            const { orderId, items, totalAmount, orderedAt, status } = data.order; // Adjust based on actual response
            
            navigate("/customer/Receipt", {
              state: {
                orderId: orderId,
                cartItems: items,
                totalPrice: totalAmount,
                orderedAt: orderedAt,
                status: status
              }
            });
          }
          // ... rest of the code
        } catch (error) {
          // ... error handling
        }
      };

    const cancelOrder = () => {
        setIsConfirming(false);
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

            {/* Confirm Order Modal (Optional) */}
            {isConfirming && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">Are you sure you want to place the order?</h3>
                        <div className="flex justify-end gap-4">
                            <button className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400" onClick={cancelOrder}>Cancel</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={confirmOrder}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;
