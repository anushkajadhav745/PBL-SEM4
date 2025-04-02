import React, { useState, useEffect } from "react";

const DayOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (date) {
      fetchDayOrders(date);
    }
  }, [date]);

  // Fetch orders for the selected day
  const fetchDayOrders = async (date) => {
    try {
      const response = await fetch(`http://localhost:4000/api/order/filter-orders?date=${date}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setOrders(data.orders);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch orders');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Day-Wise Orders</h1>

      {/* Date Picker */}
      <input
        type="date"
        className="mb-6 p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {/* Orders Display */}
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.orderId} className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-teal-600">{order.orderId}</h2>
              <p className="text-sm text-gray-600 font-bold">{new Date(order.orderedAt).toLocaleDateString()}</p>
              <p className="text-lg text-orange-600 font-semibold">Total: ₹{order.totalAmount}</p>
              <p className={`text-sm font-semibold ${order.status === "Pending" ? "text-yellow-500" : "text-green-600"}`}>
                {order.status}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DayOrdersPage;
