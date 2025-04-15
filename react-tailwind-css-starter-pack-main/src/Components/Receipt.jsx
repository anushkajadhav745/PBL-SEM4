import React from "react";
import { useLocation } from "react-router-dom";
 


const Receipt = () => {
  const location = useLocation();
  //const { cartItems, customer, orderId } = location.state || {};

  const { orderId, cartItems, totalPrice, orderedAt, status } = location.state || {};

//  Function to format order ID
  const formatOrderId = (id) => {
    if (!id) return "";
    const first7 = id.slice(0, 7).toLowerCase();
    const last3 = id.slice(-3).toUpperCase();
    return `${first7}${last3}`;
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-10">
      <div className="bg-gray-100 shadow-xl p-10 rounded-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-4">
          Order Receipt
        </h1>

        <div className="text-center text-gray-700 mb-6">
          <p className="text-lg font-semibold">
            Order ID:{" "}
            <span className="text-black tracking-wide">
              {formatOrderId(orderId)}
            </span>
          </p>
          {/* <p className="text-md mt-2">
            Customer: <span className="font-medium">{customer?.name}</span>
          </p>
          <p className="text-md">
            Email: <span className="font-medium">{customer?.email}</span>
          </p> */}
        </div>

        <div className="border-t pt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">Items</h2>
          <ul className="space-y-2">
            {cartItems?.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between text-md font-medium text-gray-600"
              >
                <span>{item.name}</span>
                <span>Qty: {item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Thank you for your order! 😊
          </p>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
