// // // // // // import React, { useState, useEffect } from "react";

// // // // // // const StaffDashboard = () => {
// // // // // //   const [orders, setOrders] = useState([]);

// // // // // //   useEffect(() => {
// // // // // //     fetchPendingOrders();
// // // // // //   }, []);

// // // // // //   const fetchPendingOrders = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch("http://localhost:4000/api/orders/pending", {
// // // // // //         method: "GET",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //         },
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       if (response.ok) {
// // // // // //         setOrders(data.orders);
// // // // // //       } else {
// // // // // //         console.error("Error fetching orders:", data.message);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error fetching orders:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const updateOrderStatus = async (orderId, newStatus) => {
// // // // // //     try {
// // // // // //       const response = await fetch(`http://localhost:4000/api/orders/update/${orderId}`, {
// // // // // //         method: "PATCH",
// // // // // //         headers: {
// // // // // //           "Content-Type": "application/json",
// // // // // //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //         },
// // // // // //         body: JSON.stringify({ status: newStatus }),
// // // // // //       });

// // // // // //       const data = await response.json();
// // // // // //       if (response.ok) {
// // // // // //         setOrders(orders.map(order => order.orderId === orderId ? { ...order, status: newStatus } : order));
// // // // // //       } else {
// // // // // //         console.error("Error updating order status:", data.message);
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error updating order status:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // // //       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard - Pending Orders</h1>

// // // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // // //         {orders.length > 0 ? (
// // // // // //           orders.map(order => (
// // // // // //             <div
// // // // // //               key={order.orderId}
// // // // // //               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
// // // // // //             >
// // // // // //               <h2 className="text-2xl font-semibold text-red-600">{order.orderId}</h2>
// // // // // //               <p className="text-sm text-gray-700 font-bold">
// // // // // //                 {new Date(order.orderedAt).toLocaleDateString()} -
// // // // // //                 <span className="font-bold text-green-700 ml-1">
// // // // // //                   {new Date(order.orderedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
// // // // // //                 </span>
// // // // // //               </p>
// // // // // //               <p className="text-lg font-semibold text-orange-600">Total: ₹{order.totalAmount}</p>
// // // // // //               <p className="text-gray-700">Items:</p>
// // // // // //               <ul className="list-disc ml-4">
// // // // // //                 {order.items.map((item, index) => (
// // // // // //                   <li key={index} className="text-gray-800">
// // // // // //                     {item.name} - {item.quantity} x ₹{item.price}
// // // // // //                   </li>
// // // // // //                 ))}
// // // // // //               </ul>
// // // // // //               <div className="mt-4">
// // // // // //                 <button
// // // // // //                   className="px-4 py-2 bg-yellow-500 text-white rounded-md mr-2 hover:bg-yellow-600"
// // // // // //                   onClick={() => updateOrderStatus(order.orderId, "Processing")}
// // // // // //                 >
// // // // // //                   Processing
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   className="px-4 py-2 bg-green-500 text-white rounded-md mr-2 hover:bg-green-600"
// // // // // //                   onClick={() => updateOrderStatus(order.orderId, "Completed")}
// // // // // //                 >
// // // // // //                   Completed
// // // // // //                 </button>
// // // // // //                 <button
// // // // // //                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
// // // // // //                   onClick={() => updateOrderStatus(order.orderId, "Cancelled")}
// // // // // //                 >
// // // // // //                   Cancel
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           ))
// // // // // //         ) : (
// // // // // //           <p className="text-gray-500">No pending orders found.</p>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default StaffDashboard;


// // // // // import React, { useEffect, useState } from "react";

// // // // // const StaffDashboard = () => {
// // // // //   const [orders, setOrders] = useState([]);
// // // // //   const [loading, setLoading] = useState(true);
// // // // //   const [error, setError] = useState(null);

// // // // //   // ✅ Fetch pending orders
// // // // //   useEffect(() => {
// // // // //     fetchPendingOrders();
// // // // //   }, []);

// // // // //   const fetchPendingOrders = async () => {
// // // // //     try {
// // // // //         const token = localStorage.getItem("token");
        
// // // // //         if (!token) {
// // // // //             console.error("No token found in localStorage. Please log in.");
// // // // //             return;
// // // // //         }

// // // // //         const response = await fetch("http://localhost:4000/api/order/pending", {
// // // // //             method: "GET",
// // // // //             headers: {
// // // // //                 "Authorization": `Bearer ${token}`,  // ✅ Ensure it's properly formatted
// // // // //                 "Content-Type": "application/json"
// // // // //             }
// // // // //         });

// // // // //         if (!response.ok) {
// // // // //             const errorData = await response.json();
// // // // //             throw new Error(`Error ${response.status}: ${errorData.message}`);
// // // // //         }

// // // // //         const data = await response.json();
// // // // //         console.log("Fetched Orders:", data.orders); // ✅ Debugging
// // // // //         setOrders(data.orders);
// // // // //     } catch (error) {
// // // // //         console.error("Failed to fetch orders:", error.message);
// // // // //         setError(error.message);
// // // // //     }
// // // // // };

 

// // // // // const updateOrderStatus = async (orderId, newStatus) => {
// // // // //   try {
// // // // //       const token = localStorage.getItem("token");

// // // // //       const response = await fetch(`http://localhost:4000/api/order/update-status/${orderId}`, {
// // // // //           method: "PATCH",
// // // // //           headers: {
// // // // //               "Content-Type": "application/json",
// // // // //               "Authorization": `Bearer ${token}`
// // // // //           },
// // // // //           body: JSON.stringify({ status: newStatus }),
// // // // //       });

// // // // //       if (!response.ok) {
// // // // //           throw new Error(`Failed to update order: ${response.statusText}`);
// // // // //       }

// // // // //       const data = await response.json();
// // // // //       console.log("Order updated:", data);
// // // // //       alert("Order status updated successfully!");

// // // // //   } catch (error) {
// // // // //       console.error("Failed to update order:", error);
// // // // //       alert("Failed to update order. Please try again.");
// // // // //   }
// // // // // };



// // // // //   return (
// // // // //     <div className="p-6 bg-gray-100 min-h-screen">
// // // // //       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard</h1>

// // // // //       {loading && <p className="text-center">Loading orders...</p>}
// // // // //       {error && <p className="text-center text-red-600">{error}</p>}

// // // // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // // //         {orders.length > 0 ? (
// // // // //           orders.map((order) => (
// // // // //             <div key={order.orderId} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// // // // //               <h2 className="text-xl font-semibold text-teal-700">Order ID: {order.orderId}</h2>
// // // // //               <p className="text-gray-600 font-bold">
// // // // //                 Ordered At: <span className="text-purple-700">{new Date(order.orderedAt).toLocaleString()}</span>
// // // // //               </p>

// // // // //               <div className="mt-4">
// // // // //                 <h3 className="font-bold text-lg">Items:</h3>
// // // // //                 {order.items.map((item, index) => (
// // // // //                   <p key={index} className="text-sm text-gray-700">{item.quantity} x {item.name} - ₹{item.price}</p>
// // // // //                 ))}
// // // // //               </div>

// // // // //               <div className="mt-4">
// // // // //                 <p className="text-lg font-bold text-orange-600">Total: ₹{order.totalAmount}</p>
// // // // //                 <p className="text-md font-bold text-yellow-500">Status: {order.status}</p>
// // // // //               </div>

// // // // //               <div className="mt-4 flex gap-2">
// // // // //                 <button 
// // // // //                   className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
// // // // //                   onClick={() => updateOrderStatus(order.orderId, "Completed")}
// // // // //                 >
// // // // //                   Mark as Completed
// // // // //                 </button>
// // // // //                 <button 
// // // // //                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
// // // // //                   onClick={() => updateOrderStatus(order.orderId, "Cancelled")}
// // // // //                 >
// // // // //                   Cancel Order
// // // // //                 </button>
// // // // //               </div>
// // // // //             </div>
// // // // //           ))
// // // // //         ) : (
// // // // //           <p className="text-center text-gray-500">No pending orders.</p>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default StaffDashboard;


// // // // import React, { useEffect, useState } from "react";

// // // // const StaffDashboard = () => {
// // // //     const [orders, setOrders] = useState([]);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [error, setError] = useState(null);
// // // //     const [updatingOrder, setUpdatingOrder] = useState(null); // Track updating orders

// // // //     // ✅ Fetch pending orders on component mount
// // // //     useEffect(() => {
// // // //         fetchPendingOrders();
// // // //     }, []);

// // // //     // ✅ Fetch all pending orders
// // // //     const fetchPendingOrders = async () => {
// // // //         try {
// // // //             setLoading(true);
// // // //             const token = localStorage.getItem("token");
            
// // // //             if (!token) {
// // // //                 throw new Error("No authentication token found. Please log in.");
// // // //             }

// // // //             const response = await fetch("http://localhost:4000/api/order/pending", {
// // // //                 method: "GET",
// // // //                 headers: {
// // // //                     "Authorization": `Bearer ${token}`,
// // // //                     "Content-Type": "application/json"
// // // //                 }
// // // //             });

// // // //             if (!response.ok) {
// // // //                 const errorData = await response.json();
// // // //                 throw new Error(`Error ${response.status}: ${errorData.message}`);
// // // //             }

// // // //             const data = await response.json();
// // // //             setOrders(data.orders);
// // // //         } catch (error) {
// // // //             console.error("Failed to fetch orders:", error.message);
// // // //             setError(error.message);
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     // ✅ Update Order Status
// // // //     const updateOrderStatus = async (orderId, newStatus) => {
// // // //         try {
// // // //             setUpdatingOrder(orderId); // Disable buttons while updating
// // // //             const token = localStorage.getItem("token");

// // // //             const response = await fetch(`http://localhost:4000/api/order/update-status/${orderId}`, {
// // // //                 method: "PATCH",
// // // //                 headers: {
// // // //                     "Content-Type": "application/json",
// // // //                     "Authorization": `Bearer ${token}`
// // // //                 },
// // // //                 body: JSON.stringify({ status: newStatus }),
// // // //             });

// // // //             if (!response.ok) {
// // // //                 const errorData = await response.json();
// // // //                 throw new Error(`Failed to update order: ${errorData.message}`);
// // // //             }

// // // //             const data = await response.json();
// // // //             alert(`Order ${orderId} status updated to ${newStatus}!`);

// // // //             // ✅ Refresh pending orders after status update
// // // //             fetchPendingOrders();
// // // //         } catch (error) {
// // // //             console.error("Failed to update order:", error);
// // // //             alert("Failed to update order. Please try again.");
// // // //         } finally {
// // // //             setUpdatingOrder(null);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="p-6 bg-gray-100 min-h-screen">
// // // //             <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard</h1>

// // // //             {loading ? (
// // // //                 <p className="text-center">Loading orders...</p>
// // // //             ) : error ? (
// // // //                 <p className="text-center text-red-600">{error}</p>
// // // //             ) : orders.length === 0 ? (
// // // //                 <p className="text-center text-gray-500">No pending orders.</p>
// // // //             ) : (
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //                     {orders.map((order) => (
// // // //                         <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// // // //                             <h2 className="text-xl font-semibold text-teal-700">Order ID: {order.orderId}</h2>
// // // //                             <p className="text-gray-600 font-bold">
// // // //                                 Ordered At: <span className="text-purple-700">{new Date(order.orderedAt).toLocaleString()}</span>
// // // //                             </p>

// // // //                             <div className="mt-4">
// // // //                                 <h3 className="font-bold text-lg">Items:</h3>
// // // //                                 {order.items.map((item, index) => (
// // // //                                     <p key={index} className="text-sm text-gray-700">{item.quantity} x {item.name} - ₹{item.price}</p>
// // // //                                 ))}
// // // //                             </div>

// // // //                             <div className="mt-4">
// // // //                                 <p className="text-lg font-bold text-orange-600">Total: ₹{order.totalAmount}</p>
// // // //                                 <p className="text-md font-bold text-yellow-500">Status: {order.status}</p>
// // // //                             </div>

// // // //                             <div className="mt-4 flex gap-2">
// // // //                                 <button 
// // // //                                     className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50"
// // // //                                     onClick={() => updateOrderStatus(order.orderId, "Completed")}
// // // //                                     disabled={updatingOrder === order.orderId}
// // // //                                 >
// // // //                                     {updatingOrder === order.orderId ? "Updating..." : "Mark as Completed"}
// // // //                                 </button>
// // // //                                 <button 
// // // //                                     className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50"
// // // //                                     onClick={() => updateOrderStatus(order.orderId, "Cancelled")}
// // // //                                     disabled={updatingOrder === order.orderId}
// // // //                                 >
// // // //                                     {updatingOrder === order.orderId ? "Updating..." : "Cancel Order"}
// // // //                                 </button>
// // // //                             </div>
// // // //                         </div>
// // // //                     ))}
// // // //                 </div>
// // // //             )}
// // // //         </div>
// // // //     );
// // // // };

// // // // export default StaffDashboard;



// // // import React, { useEffect, useState } from "react";

// // // const StaffDashboard = () => {
// // //   const [orders, setOrders] = useState([]);
// // //   const [error, setError] = useState(null);

// // //   // ✅ Fetch pending orders using `_id`
// // //   useEffect(() => {
// // //     fetchPendingOrders();
// // //   }, []);

// // //   const fetchPendingOrders = async () => {
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       if (!token) throw new Error("No authentication token found");

// // //       const response = await fetch("http://localhost:4000/api/order/pending", {
// // //         method: "GET",
// // //         headers: {
// // //           "Authorization": `Bearer ${token}`,
// // //           "Content-Type": "application/json",
// // //         },
// // //       });

// // //       if (!response.ok) {
// // //         const errorData = await response.json();
// // //         throw new Error(`Error ${response.status}: ${errorData.message}`);
// // //       }

// // //       const data = await response.json();
// // //       console.log("Fetched Orders:", data.orders);
// // //       setOrders(data.orders);
// // //     } catch (error) {
// // //       console.error("Failed to fetch orders:", error.message);
// // //       setError(error.message);
// // //     }
// // //   };

// // //   // ✅ Update order status using `_id`
// // //   const updateOrderStatus = async (id, newStatus) => {
// // //     try {
// // //       const token = localStorage.getItem("token");

// // //       const response = await fetch(`http://localhost:4000/api/order/update-status/${id}`, {
// // //         method: "PATCH",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           "Authorization": `Bearer ${token}`,
// // //         },
// // //         body: JSON.stringify({ status: newStatus }),
// // //       });

// // //       if (!response.ok) {
// // //         throw new Error(`Failed to update order: ${response.statusText}`);
// // //       }

// // //       const data = await response.json();
// // //       console.log("Order updated:", data);
// // //       alert("Order status updated successfully!");

// // //       // ✅ Update order list after status change
// // //       setOrders((prevOrders) =>
// // //         prevOrders.map((order) =>
// // //           order._id === id ? { ...order, status: newStatus } : order
// // //         )
// // //       );
// // //     } catch (error) {
// // //       console.error("Failed to update order:", error);
// // //       alert("Failed to update order. Please try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard</h1>

// // //       {error && <p className="text-center text-red-600">{error}</p>}

// // //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {orders.length > 0 ? (
// // //           orders.map((order) => (
// // //             <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// // //               <h2 className="text-xl font-semibold text-teal-700">Order ID: {order._id}</h2>
// // //               <p className="text-gray-600 font-bold">
// // //                 Ordered At: <span className="text-purple-700">{new Date(order.orderedAt).toLocaleString()}</span>
// // //               </p>

// // //               <div className="mt-4">
// // //                 <h3 className="font-bold text-lg">Items:</h3>
// // //                 {order.items.map((item, index) => (
// // //                   <p key={index} className="text-sm text-gray-700">{item.quantity} x {item.name} - ₹{item.price}</p>
// // //                 ))}
// // //               </div>

// // //               <div className="mt-4">
// // //                 <p className="text-lg font-bold text-orange-600">Total: ₹{order.totalAmount}</p>
// // //                 <p className="text-md font-bold text-yellow-500">Status: {order.status}</p>
// // //               </div>

// // //               <div className="mt-4 flex gap-2">
// // //                 <button 
// // //                   className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
// // //                   onClick={() => updateOrderStatus(order._id, "Completed")}
// // //                 >
// // //                   Mark as Completed
// // //                 </button>
// // //                 <button 
// // //                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
// // //                   onClick={() => updateOrderStatus(order._id, "Cancelled")}
// // //                 >
// // //                   Cancel Order
// // //                 </button>
// // //               </div>
// // //             </div>
// // //           ))
// // //         ) : (
// // //           <p className="text-center text-gray-500">No pending orders.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default StaffDashboard;


// // import React, { useEffect, useState } from "react";

// // const StaffDashboard = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [error, setError] = useState(null);

// //   // ✅ Fetch pending orders using `_id`
// //   useEffect(() => {
// //     fetchPendingOrders();
// //   }, []);

// //   const fetchPendingOrders = async () => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       if (!token) throw new Error("No authentication token found");

// //       const response = await fetch("http://localhost:4000/api/order/pending", {
// //         method: "GET",
// //         headers: {
// //           "Authorization": `Bearer ${token}`,
// //           "Content-Type": "application/json",
// //         },
// //       });

// //       if (!response.ok) {
// //         const errorData = await response.json();
// //         throw new Error(`Error ${response.status}: ${errorData.message}`);
// //       }

// //       const data = await response.json();
// //       console.log("Fetched Orders:", data.orders);
// //       setOrders(data.orders);
// //     } catch (error) {
// //       console.error("Failed to fetch orders:", error.message);
// //       setError(error.message);
// //     }
// //   };

// //   // ✅ Update order status using `_id`
// //   const updateOrderStatus = async (id, newStatus) => {
// //     try {
// //       const token = localStorage.getItem("token");

// //       const response = await fetch(`http://localhost:4000/api/order/update-status/${id}`, {
// //         method: "PATCH",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ status: newStatus }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`Failed to update order: ${response.statusText}`);
// //       }

// //       const data = await response.json();
// //       console.log("Order updated:", data);
// //       alert("Order status updated successfully!");

// //       // ✅ Update order list after status change
// //       setOrders((prevOrders) =>
// //         prevOrders.map((order) =>
// //           order._id === id ? { ...order, status: newStatus } : order
// //         )
// //       );
// //     } catch (error) {
// //       console.error("Failed to update order:", error);
// //       alert("Failed to update order. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard</h1>

// //       {error && <p className="text-center text-red-600">{error}</p>}

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {orders.length > 0 ? (
// //           orders.map((order) => (
// //             <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
// //               <h2 className="text-xl font-semibold text-teal-700">Order ID: {order.orderId}</h2> 
// //               {/* ✅ Display manually created `orderId` */}

// //               <p className="text-gray-600 font-bold">
// //                 Ordered At: <span className="text-purple-700">{new Date(order.orderedAt).toLocaleString()}</span>
// //               </p>

// //               <div className="mt-4">
// //                 <h3 className="font-bold text-lg">Items:</h3>
// //                 {order.items.map((item, index) => (
// //                   <p key={index} className="text-sm text-gray-700">{item.quantity} x {item.name} - ₹{item.price}</p>
// //                 ))}
// //               </div>

// //               <div className="mt-4">
// //                 <p className="text-lg font-bold text-orange-600">Total: ₹{order.totalAmount}</p>
// //                 <p className="text-md font-bold text-yellow-500">Status: {order.status}</p>
// //               </div>

// //               <div className="mt-4 flex gap-2">
// //                 <button 
// //                   className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
// //                   onClick={() => updateOrderStatus(order._id, "Completed")}
// //                 >
// //                   Mark as Completed
// //                 </button>
// //                 <button 
// //                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
// //                   onClick={() => updateOrderStatus(order._id, "Cancelled")}
// //                 >
// //                   Cancel Order
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center text-gray-500">No pending orders.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default StaffDashboard;




// import React, { useEffect, useState } from "react";

// const StaffDashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [error, setError] = useState(null);

//   // ✅ Fetch pending orders using `_id`
//   useEffect(() => {
//     fetchPendingOrders();
//   }, []);

//   const fetchPendingOrders = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) throw new Error("No authentication token found");

//       const response = await fetch("http://localhost:4000/api/order/pending", {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(`Error ${response.status}: ${errorData.message}`);
//       }

//       const data = await response.json();
//       console.log("Fetched Orders:", data.orders);
//       setOrders(data.orders);
//     } catch (error) {
//       console.error("Failed to fetch orders:", error.message);
//       setError(error.message);
//     }
//   };

//   // ✅ Update order status using `_id`
//   const updateOrderStatus = async (id, newStatus) => {
//     try {
//       const token = localStorage.getItem("token");

//       const response = await fetch(`http://localhost:4000/api/order/update-status/${id}`, {
//         method: "PATCH",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${token}`,
//         },
//         body: JSON.stringify({ status: newStatus }),
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to update order: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Order updated:", data);
//       alert(`Order status updated to ${newStatus}!`);

//       // ✅ Update order list after status change
//       setOrders((prevOrders) =>
//         prevOrders.map((order) =>
//           order._id === id ? { ...order, status: newStatus } : order
//         )
//       );
//     } catch (error) {
//       console.error("Failed to update order:", error);
//       alert("Failed to update order. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard</h1>

//       {error && <p className="text-center text-red-600">{error}</p>}

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {orders.length > 0 ? (
//           orders.map((order) => (
//             <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
//               <h2 className="text-xl font-semibold text-teal-700">Order ID: {order.orderId}</h2> 
//               {/* ✅ Display manually created `orderId` */}

//               <p className="text-gray-600 font-bold">
//                 Ordered At: <span className="text-purple-700">{new Date(order.orderedAt).toLocaleString()}</span>
//               </p>

//               <div className="mt-4">
//                 <h3 className="font-bold text-lg">Items:</h3>
//                 {order.items.map((item, index) => (
//                   <p key={index} className="text-sm text-gray-700">{item.quantity} x {item.name} - ₹{item.price}</p>
//                 ))}
//               </div>

//               <div className="mt-4">
//                 <p className="text-lg font-bold text-orange-600">Total: ₹{order.totalAmount}</p>
//                 <p className="text-md font-bold text-yellow-500">Status: {order.status}</p>
//               </div>

//               <div className="mt-4 flex flex-wrap gap-2">
//                 <button 
//                   className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                   onClick={() => updateOrderStatus(order._id, "Processing")}
//                 >
//                   Mark as In Progress
//                 </button>
//                 <button 
//                   className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//                   onClick={() => updateOrderStatus(order._id, "Completed")}
//                 >
//                   Mark as Completed
//                 </button>
//                 <button 
//                   className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
//                   onClick={() => updateOrderStatus(order._id, "Cancelled")}
//                 >
//                   Cancel Order
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No pending orders.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StaffDashboard;


import React, { useEffect, useState } from "react";

const StaffDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No authentication token found");

      const response = await fetch("http://localhost:4000/api/order/pending", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message}`);
      }

      const data = await response.json();
      console.log("Fetched Orders:", data.orders);
      setOrders(data.orders);
    } catch (error) {
      console.error("Failed to fetch orders:", error.message);
      setError(error.message);
    }
  };

  const updateOrderStatus = async (id, newStatus) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`http://localhost:4000/api/order/update-status/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!response.ok) {
        throw new Error(`Failed to update order: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Order updated:", data);
      //alert(`Order status updated to ${newStatus}!`);

      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === id ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Failed to update order:", error);
      //alert("Failed to update order. Please try again.");
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case "Pending":
        return "text-yellow-400";
      case "Processing":
        return "text-blue-600";
      case "Completed":
        return "text-green-600";
      case "Cancelled":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">Staff Dashboard</h1>

      {error && <p className="text-center text-red-600">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold text-teal-700">Order ID: {order.orderId}</h2>

              <p className="text-gray-600 font-bold">
                Ordered At:{" "}
                <span className="text-purple-700">{new Date(order.orderedAt).toLocaleString()}</span>
              </p>

              <div className="mt-4">
                <h3 className="font-bold text-lg">Items:</h3>
                {order.items.map((item, index) => (
                  <p key={index} className="text-sm text-gray-700">
                    {item.quantity} x {item.name} - ₹{item.price}
                  </p>
                ))}
              </div>

              <div className="mt-4">
                <p className="text-lg font text-black-400">Total: ₹{order.totalAmount}</p>
                <p className={`text-md font-bold ${getStatusTextColor(order.status)}`}>
                  Status: {order.status}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {order.status === "Pending" && (
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    onClick={() => updateOrderStatus(order._id, "Processing")}
                  >
                    Mark as In Progress
                  </button>
                )}

                {order.status === "Processing" && (
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                    onClick={() => updateOrderStatus(order._id, "Completed")}
                  >
                    Mark as Completed
                  </button>
                )}

                {order.status !== "Completed" && order.status !== "Cancelled" && (
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => updateOrderStatus(order._id, "Cancelled")}
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders to display.</p>
        )}
      </div>
    </div>
  );
};

export default StaffDashboard;

