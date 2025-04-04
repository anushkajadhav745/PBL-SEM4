import React, { useEffect, useState } from "react";

const ReceiptPage = () => {
    const [order, setOrder] = useState(null);

    useEffect(() => {
        fetchLatestOrder();
    }, []);

    const fetchLatestOrder = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/order/place-order", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            const data = await response.json();
            if (response.ok) {
                setOrder(data.order);
            } else {
                console.error("Error fetching order:", data.message);
            }
        } catch (error) {
            console.error("Error fetching latest order:", error);
        }
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString();
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-4">🧾 Receipt</h1>

                {order ? (
                    <>
                        <p className="text-sm text-gray-600 text-center mb-6">
                            Order Date: <span className="font-medium">{formatDate(order.createdAt)}</span>
                        </p>

                        <div className="divide-y divide-gray-200 mb-4">
                            {order.items.map((item, index) => (
                                <div key={index} className="flex justify-between py-2">
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-sm text-gray-500">
                                            ₹{item.price} × {item.quantity}
                                        </p>
                                    </div>
                                    <p className="font-medium">₹{item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-between items-center border-t pt-4 mt-4">
                            <span className="text-lg font-bold">Total</span>
                            <span className="text-lg font-bold text-green-600">₹{order.totalPrice}</span>
                        </div>

                        <div className="mt-6 text-center">
                            <button
                                onClick={() => window.print()}
                                className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition"
                            >
                                Print Receipt
                            </button>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500 text-center">Loading your receipt...</p>
                )}
            </div>
        </div>
    );
};

export default ReceiptPage;
