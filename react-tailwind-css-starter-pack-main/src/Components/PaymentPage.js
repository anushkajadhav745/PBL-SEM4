import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    useEffect(() => {
        if (cartItems.length === 0) {
            navigate("/customer/cart"); // Redirect if accessed incorrectly
        }
    }, [cartItems, navigate]);

    const handlePayment = async () => {
        try {
            // Simulating Payment (Replace with Razorpay/Stripe API call)
            alert("Redirecting to Payment Gateway...");

            // Mock success after 3 seconds
            setTimeout(async () => {
                setPaymentSuccess(true);

                // Place the order after payment success
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
                    alert("Payment successful! Order placed.");
                    navigate("/customer/orders"); // Redirect to orders page
                } else {
                    alert("Order failed! Try again.");
                    navigate("/customer/cart"); // Redirect back to cart
                }
            }, 3000);
        } catch (error) {
            console.error("Payment failed:", error);
            alert("Payment error. Try again.");
            navigate("/customer/cart");
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
                <h1 className="text-2xl font-bold mb-4">Payment for ₹{totalPrice}</h1>
                <button
                    onClick={handlePayment}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
