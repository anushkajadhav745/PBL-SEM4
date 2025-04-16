



import React, { useEffect, useState } from "react";

const CheckoutPage = () => {
    const [user, setUser] = useState({ name: "", email: "", contact: "" });
    const [razorpayKey, setRazorpayKey] = useState("");

    // Fetch Razorpay Key from Backend
    useEffect(() => {
        const fetchRazorpayKey = async () => {
            try {
                const response = await fetch("http://localhost:4000/api/razorpay/key");
                if (!response.ok) throw new Error("Failed to fetch key");
                const data = await response.json();
                setRazorpayKey(data.key);
            } catch (error) {
                console.error("Failed to fetch Razorpay key:", error);
            }
        };

        fetchRazorpayKey();

        // Fetch user details from localStorage
        const storedUser = JSON.parse(localStorage.getItem("user"));
        if (storedUser) {
            setUser({
                name: storedUser.name || "Guest",
                email: storedUser.email || "",
                contact: storedUser.contact || "",
            });
        }
    }, []);

    const handlePayment = async () => {
        if (!razorpayKey) {
            alert("Razorpay key not loaded. Please try again.");
            return;
        }

        try {
            // Step 1: Create Order in Backend
            const response = await fetch("http://localhost:4000/api/razorpay/create-order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                },
                body: JSON.stringify({ amount: 100, currency: "INR" }),
            });

            const data = await response.json();
            if (!data.success) {
                alert("Order creation failed!");
                return;
            }

            // Step 2: Open Razorpay Checkout
            const options = {
                key: razorpayKey, // Fetched from backend
                amount: data.order.amount,
                currency: data.order.currency,
                name: "Canteen Management System",
                description: "Payment for your order",
                order_id: data.order.id,
                handler: async function (response) {
                    // Step 3: Verify Payment
                    const verifyRes = await fetch("http://localhost:4000/api/razorpay/verify-payment", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(response),
                    });

                    const verifyData = await verifyRes.json();
                    if (verifyData.success) {
                        alert("Payment successful!");
                    } else {
                        alert("Payment verification failed.");
                    }
                },
                prefill: {
                    name: user.name,
                    email: user.email,
                    contact: user.contact,
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.error("Payment error:", error);
            alert("Something went wrong!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-xl font-bold mb-4">Proceed to Payment</h1>
            <button onClick={handlePayment} className="px-6 py-3 bg-blue-600 text-white rounded">
                Pay ₹1.00
            </button>
        </div>
    );
};

export default CheckoutPage;
