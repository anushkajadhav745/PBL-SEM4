// import React, { useState, useEffect } from "react";

// const DayOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [date, setDate] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (date) {
//       fetchDayOrders(date);
//     }
//   }, [date]);

//   // Fetch orders for the selected day
//   const fetchDayOrders = async (date) => {
//     try {
//       const response = await fetch(`http://localhost:4000/api/order/filter-orders?date=${date}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.getItem("token")}`
//         }
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setOrders(data.orders);
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError('Failed to fetch orders');
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Day-Wise Orders</h1>

//       {/* Date Picker */}
//       <input
//         type="date"
//         className="mb-6 p-2 border rounded"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />

//       {/* Orders Display */}
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {orders.map((order) => (
//             <div key={order.orderId} className="bg-white p-6 rounded-lg shadow-lg">
//               <h2 className="text-2xl font-semibold text-teal-600">{order.orderId}</h2>
//               <p className="text-sm text-gray-600 font-bold">{new Date(order.orderedAt).toLocaleDateString()}</p>
//               <p className="text-lg text-orange-600 font-semibold">Total: ₹{order.totalAmount}</p>
//               <p className={`text-sm font-semibold ${order.status === "Pending" ? "text-yellow-500" : "text-green-600"}`}>
//                 {order.status}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DayOrdersPage;



import React, { useState, useEffect } from "react";

const DayOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [date, setDate] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (date) {
      fetchDayOrders(date);
    }
  }, [date]);

  // Fetch orders for the selected day
  const fetchDayOrders = async (date) => {
    try {
      setLoading(true);
      setError(null);
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
    } finally {
      setLoading(false);
    }
  };

  // Define background colors for statuses
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 border-yellow-400 text-yellow-700";
      case "Processing":
        return "bg-blue-100 border-blue-400 text-blue-700";
      case "Completed":
        return "bg-green-100 border-green-400 text-green-700";
      case "Cancelled":
        return "bg-red-100 border-red-400 text-red-700";
      default:
        return "bg-gray-100 border-gray-400 text-gray-700";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Day-Wise Orders</h1>

      {/* Date Picker */}
      <div className="flex justify-center mb-6">
        <input
          type="date"
          className="p-2 border rounded-lg shadow-md"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-blue-500">Loading orders...</p>}

      {/* Error Handling */}
      {error && (
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={() => fetchDayOrders(date)}
          >
            Retry
          </button>
        </div>
      )}

      {/* Orders Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.orderId} className={`p-6 rounded-lg shadow-lg border-l-8 ${getStatusColor(order.status)}`}>
              <h2 className="text-2xl font-semibold">{order.orderId}</h2>
              {/* <p className="text-sm font-bold">{new Date(order.orderedAt).toLocaleDateString()}</p> */}
              {/* <p className="text-sm font-bold">{new Date(order.orderedAt).toLocaleDateString('en-GB')}</p> */}
              <p className="text-sm text-gray-600 font-bold">
  {new Date(order.orderedAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' })}
</p>

              <p className="text-lg font-semibold">Total: ₹{order.totalAmount}</p>
              <p className="text-sm font-semibold">{order.status}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found for this date.</p>
        )}
      </div>
    </div>
  );
};

export default DayOrdersPage;
