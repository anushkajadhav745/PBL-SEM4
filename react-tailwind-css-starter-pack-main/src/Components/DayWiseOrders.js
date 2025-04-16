// // // import React, { useState, useEffect } from "react";

// // // const DayOrdersPage = () => {
// // //   const [orders, setOrders] = useState([]);
// // //   const [date, setDate] = useState('');
// // //   const [error, setError] = useState(null);

// // //   useEffect(() => {
// // //     if (date) {
// // //       fetchDayOrders(date);
// // //     }
// // //   }, [date]);

// // //   // Fetch orders for the selected day
// // //   const fetchDayOrders = async (date) => {
// // //     try {
// // //       const response = await fetch(`http://localhost:4000/api/order/filter-orders?date=${date}`, {
// // //         method: "GET",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           "Authorization": `Bearer ${localStorage.getItem("token")}`
// // //         }
// // //       });

// // //       const data = await response.json();
// // //       if (response.ok) {
// // //         setOrders(data.orders);
// // //       } else {
// // //         setError(data.message);
// // //       }
// // //     } catch (err) {
// // //       setError('Failed to fetch orders');
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Day-Wise Orders</h1>

// // //       {/* Date Picker */}
// // //       <input
// // //         type="date"
// // //         className="mb-6 p-2 border rounded"
// // //         value={date}
// // //         onChange={(e) => setDate(e.target.value)}
// // //       />

// // //       {/* Orders Display */}
// // //       {error ? (
// // //         <p className="text-red-500">{error}</p>
// // //       ) : (
// // //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //           {orders.map((order) => (
// // //             <div key={order.orderId} className="bg-white p-6 rounded-lg shadow-lg">
// // //               <h2 className="text-2xl font-semibold text-teal-600">{order.orderId}</h2>
// // //               <p className="text-sm text-gray-600 font-bold">{new Date(order.orderedAt).toLocaleDateString()}</p>
// // //               <p className="text-lg text-orange-600 font-semibold">Total: ₹{order.totalAmount}</p>
// // //               <p className={`text-sm font-semibold ${order.status === "Pending" ? "text-yellow-500" : "text-green-600"}`}>
// // //                 {order.status}
// // //               </p>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default DayOrdersPage;



// // import React, { useState, useEffect } from "react";

// // const DayOrdersPage = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [date, setDate] = useState('');
// //   const [error, setError] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   useEffect(() => {
// //     if (date) {
// //       fetchDayOrders(date);
// //     }
// //   }, [date]);

// //   // Fetch orders for the selected day
// //   const fetchDayOrders = async (date) => {
// //     try {
// //       setLoading(true);
// //       setError(null);
// //       const response = await fetch(`http://localhost:4000/api/order/filter-orders?date=${date}`, {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${localStorage.getItem("token")}`
// //         }
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         setOrders(data.orders);
// //       } else {
// //         setError(data.message);
// //       }
// //     } catch (err) {
// //       setError('Failed to fetch orders');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Define background colors for statuses
// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "Pending":
// //         return "bg-yellow-100 border-yellow-400 text-yellow-700";
// //       case "Processing":
// //         return "bg-blue-100 border-blue-400 text-blue-700";
// //       case "Completed":
// //         return "bg-green-100 border-green-400 text-green-700";
// //       case "Cancelled":
// //         return "bg-red-100 border-red-400 text-red-700";
// //       default:
// //         return "bg-gray-100 border-gray-400 text-gray-700";
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Day-Wise Orders</h1>

// //       {/* Date Picker */}
// //       <div className="flex justify-center mb-6">
// //         <input
// //           type="date"
// //           className="p-2 border rounded-lg shadow-md"
// //           value={date}
// //           onChange={(e) => setDate(e.target.value)}
// //         />
// //       </div>

// //       {/* Loading Indicator */}
// //       {loading && <p className="text-center text-blue-500">Loading orders...</p>}

// //       {/* Error Handling */}
// //       {error && (
// //         <div className="text-center text-red-600">
// //           <p>{error}</p>
// //           <button
// //             className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
// //             onClick={() => fetchDayOrders(date)}
// //           >
// //             Retry
// //           </button>
// //         </div>
// //       )}

// //       {/* Orders Display */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {orders.length > 0 ? (
// //           orders.map((order) => (
// //             <div key={order.orderId} className={`p-6 rounded-lg shadow-lg border-l-8 ${getStatusColor(order.status)}`}>
// //               <h2 className="text-2xl font-semibold">{order.orderId}</h2>
// //               {/* <p className="text-sm font-bold">{new Date(order.orderedAt).toLocaleDateString()}</p> */}
// //               {/* <p className="text-sm font-bold">{new Date(order.orderedAt).toLocaleDateString('en-GB')}</p> */}
// //               <p className="text-sm text-gray-600 font-bold">
// //   {new Date(order.orderedAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' })}
// // </p>

// //               <p className="text-lg font-semibold">Total: ₹{order.totalAmount}</p>
// //               <p className="text-sm font-semibold">{order.status}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center text-gray-500">No orders found for this date.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default DayOrdersPage;



// import React, { useState, useEffect } from "react";

// // Component for each order card
// const OrderCard = ({ order }) => {
//   const getStatusColor = (status) => {
//     switch (status) {
//       case "Pending":
//         return "bg-yellow-100 border-yellow-400 text-yellow-700";
//       case "Processing":
//         return "bg-blue-100 border-blue-400 text-blue-700";
//       case "Completed":
//         return "bg-green-100 border-green-400 text-green-700";
//       case "Cancelled":
//         return "bg-red-100 border-red-400 text-red-700";
//       default:
//         return "bg-gray-100 border-gray-400 text-gray-700";
//     }
//   };

//   return (
//     <div className={`p-5 rounded-lg shadow-lg border-l-8 ${getStatusColor(order.status)}`}>
//       <div className="mb-2">
//         <h2 className="text-lg font-semibold break-all text-indigo-700">
//           Order ID: {order.orderId}
//         </h2>
//         <p className="text-sm text-gray-600 font-medium">
//           {new Date(order.orderedAt).toLocaleString("en-GB", { timeZone: "Asia/Kolkata" })}
//         </p>
//       </div>

//       <div className="mb-2">
//         <p className="text-sm">
//           <span className="font-semibold">Items:</span> {order.items?.length || 0}
//         </p>
//         <p className="text-sm">
//           <span className="font-semibold">User:</span> {order.userName || order.userEmail || "N/A"}
//         </p>
//       </div>

//       <div className="flex justify-between items-center mt-4">
//         <span className="text-md font-semibold text-orange-600">
//           ₹{order.totalAmount}
//         </span>
//         <span className="text-sm font-bold">{order.status}</span>
//       </div>
//     </div>
//   );
// };


// const DayOrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [date, setDate] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [revenue, setRevenue] = useState(0);

//   useEffect(() => {
//     if (date) fetchDayOrders(date);
//   }, [date]);

//   const fetchDayOrders = async (date) => {
//     try {
//       setLoading(true);
//       setError(null);
//       const response = await fetch(
//         `http://localhost:4000/api/order/filter-orders?date=${date}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       const data = await response.json();
//       if (response.ok) {
//         setOrders(data.orders);
//         const total = data.orders.reduce((sum, order) => sum + order.totalAmount, 0);
//         setRevenue(total);
//       } else {
//         setOrders([]);
//         setRevenue(0);
//         setError(data.message);
//       }
//     } catch (err) {
//       setOrders([]);
//       setRevenue(0);
//       setError("Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
//         <h1 className="text-3xl font-bold text-indigo-600">Day-Wise Orders</h1>

//         {date && (
//           <div className="bg-white p-4 shadow rounded-lg">
//             <h3 className="text-sm text-gray-500 font-medium">Daily Revenue</h3>
//             <p className="text-2xl font-bold text-green-600">₹{revenue}</p>
//           </div>
//         )}
//       </div>

//       {/* Date Picker */}
//       <div className="flex justify-start mb-6">
//         <input
//           type="date"
//           className="p-2 border rounded-lg shadow-md"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//       </div>

//       {/* Loading Indicator */}
//       {loading && (
//         <p className="text-center text-blue-500 font-semibold animate-pulse">
//           Loading orders...
//         </p>
//       )}

//       {/* Error Display */}
//       {error && (
//         <div className="text-center text-red-600">
//           <p>{error}</p>
//           <button
//             className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
//             onClick={() => fetchDayOrders(date)}
//           >
//             Retry
//           </button>
//         </div>
//       )}

//       {/* Orders */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {!loading && orders.length > 0 ? (
//           orders.map((order) => <OrderCard key={order.orderId} order={order} />)
//         ) : (
//           !loading &&
//           !error &&
//           date && (
//             <p className="text-center text-gray-500 col-span-full">
//               No orders found for this date.
//             </p>
//           )
//         )}
//       </div>
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
  const [dailyRevenue, setDailyRevenue] = useState(0); // Track daily revenue

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
        calculateDailyRevenue(data.orders); // Calculate daily revenue
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  // Calculate total revenue for the day
  const calculateDailyRevenue = (orders) => {
    const totalRevenue = orders.reduce((acc, order) => acc + order.totalAmount, 0);
    setDailyRevenue(totalRevenue);
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

      {/* Daily Revenue Display */}
      <div className="flex justify-end mb-6">
        <div className="p-4 bg-green-100 border-2 border-green-500 text-green-700 font-semibold rounded-lg shadow-lg">
          Daily Revenue: ₹{dailyRevenue.toFixed(2)}
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex justify-center mb-6">
        <input
          type="date"
          className="p-3 bg-white border-2 border-indigo-500 rounded-xl shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 hover:bg-indigo-50"
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
            <div
              key={order.orderId}
              className={`p-6 rounded-lg shadow-lg border-l-8 ${getStatusColor(order.status)}`}
            >
              <h2 className="text-2xl font-semibold">{order.orderId}</h2>
              <p className="text-sm font-bold text-gray-600">
                {new Date(order.orderedAt).toLocaleDateString('en-GB', { timeZone: 'Asia/Kolkata' })}
              </p>
              <p className="text-lg font-semibold">Total: ₹{order.totalAmount}</p>
              <p className="text-sm font-semibold">{order.status}</p>

              {/* Additional Order Details */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-gray-700">Order Details</h3>
                <ul className="list-disc pl-5">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-sm text-gray-600">
                      {item.name} (x{item.quantity}) - ₹{item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
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
