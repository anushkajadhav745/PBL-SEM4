// // // import React, { useState, useEffect } from "react";

// // // const OrdersPage = () => {
// // //   const [orders, setOrders] = useState([]);
// // //   const [selectedOrder, setSelectedOrder] = useState(null);

// // //   useEffect(() => {
// // //     fetchOrders();
// // //   }, []);

// // //   // Fetch all orders for the logged-in customer
// // //   const fetchOrders = async () => {
// // //     try {
// // //       const response = await fetch("http://localhost:4000/api/order/my-orders", {
// // //         method: "GET",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //           "Authorization": `Bearer ${localStorage.getItem("token")}` // Assuming token is in localStorage
// // //         }
// // //       });

// // //       const data = await response.json();
// // //       if (response.ok) {
// // //         setOrders(data.orders); // Save the fetched orders to state
// // //       } else {
// // //         console.error("Error fetching orders:", data.message);
// // //       }
// // //     } catch (error) {
// // //       console.error("Error fetching orders:", error);
// // //     }
// // //   };

// // //   // Handle clicking on an order to view its details
// // //   const handleOrderClick = (orderId) => {
// // //     const order = orders.find((order) => order.orderId === orderId);
// // //     setSelectedOrder(order); // Set the selected order to display its details
// // //   };

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h1 className="text-2xl font-bold mb-4">Your Orders</h1>

// // //       <div className="bg-white shadow-md rounded-lg p-4">
// // //         {orders.length > 0 ? (
// // //           <div>
// // //             {orders.map((order) => (
// // //               <div
// // //                 key={order.orderId}
// // //                 className="border-b py-4 cursor-pointer hover:bg-gray-200"
// // //                 onClick={() => handleOrderClick(order.orderId)}
// // //               >
// // //                 <div className="flex justify-between items-center">
// // //                   <h2 className="font-semibold">Order ID: {order.orderId}</h2>
// // //                   <span className="text-sm text-gray-600">
// // //                     {new Date(order.orderedAt).toLocaleDateString()}
// // //                   </span>
// // //                 </div>
// // //                 <div>
// // //                   <p className="text-sm text-gray-500">Total: ₹{order.totalAmount}</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         ) : (
// // //           <p className="text-gray-500">No orders found.</p>
// // //         )}
// // //       </div>

// // //       {/* Order Details Modal */}
// // //       {selectedOrder && (
// // //         <div
// // //           className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center"
// // //           onClick={() => setSelectedOrder(null)} // Close modal on click outside
// // //         >
// // //           <div
// // //             className="bg-white p-6 rounded-lg w-1/2"
// // //             onClick={(e) => e.stopPropagation()} // Prevent closing the modal on inner click
// // //           >
// // //             <h2 className="text-xl font-bold mb-4">Order Details</h2>
// // //             <p className="text-lg font-semibold">Order ID: {selectedOrder.orderId}</p>
// // //             <p className="text-sm text-gray-500 mb-4">
// // //               Status: {selectedOrder.status}
// // //             </p>

// // //             <div>
// // //               <h3 className="text-lg font-semibold mb-2">Items:</h3>
// // //               <ul>
// // //                 {selectedOrder.items.map((item, index) => (
// // //                   <li key={index} className="flex justify-between">
// // //                     <span>{item.name}</span>
// // //                     <span>
// // //                       {item.quantity} x ₹{item.price}
// // //                     </span>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>

// // //             <div className="mt-4 text-right">
// // //               <p className="font-bold">Total Amount: ₹{selectedOrder.totalAmount}</p>
// // //               <p className="text-xs text-gray-500 mt-2">
// // //                 Ordered on: {new Date(selectedOrder.orderedAt).toLocaleString()}
// // //               </p>
// // //             </div>

// // //             <button
// // //               className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
// // //               onClick={() => setSelectedOrder(null)} // Close modal
// // //             >
// // //               Close
// // //             </button>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default OrdersPage;



// // import React, { useState, useEffect } from "react";

// // const OrdersPage = () => {
// //   const [orders, setOrders] = useState([]);
// //   const [selectedOrder, setSelectedOrder] = useState(null);

// //   useEffect(() => {
// //     fetchOrders();
// //   }, []);

// //   // Fetch all orders for the logged-in customer
// //   const fetchOrders = async () => {
// //     try {
// //       const response = await fetch("http://localhost:4000/api/order/my-orders", {
// //         method: "GET",
// //         headers: {
// //           "Content-Type": "application/json",
// //           "Authorization": `Bearer ${localStorage.getItem("token")}` // Assuming token is in localStorage
// //         }
// //       });

// //       const data = await response.json();
// //       if (response.ok) {
// //         setOrders(data.orders); // Save the fetched orders to state
// //       } else {
// //         console.error("Error fetching orders:", data.message);
// //       }
// //     } catch (error) {
// //       console.error("Error fetching orders:", error);
// //     }
// //   };

// //   // Handle clicking on an order to view its details
// //   const handleOrderClick = (orderId) => {
// //     const order = orders.find((order) => order.orderId === orderId);
// //     setSelectedOrder(order); // Set the selected order to display its details
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Your Orders</h1>

// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {orders.length > 0 ? (
// //           orders.map((order) => (
// //             <div
// //               key={order.orderId}
// //               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
// //               onClick={() => handleOrderClick(order.orderId)}
// //             >
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-2xl font-semibold text-indigo-700">{order.orderId}</h2>
// //                 <span className="text-sm text-gray-600">
// //                   {new Date(order.orderedAt).toLocaleDateString()}{" "}
// //                   {new Date(order.orderedAt).toLocaleTimeString()}
// //                 </span>
// //               </div>
// //               <div className="flex justify-between mb-4">
// //                 <p className="text-lg text-green-600 font-semibold">Total: ₹{order.totalAmount}</p>
// //                 <p
// //                   className={`text-sm font-semibold ${
// //                     order.status === "Pending"
// //                       ? "text-yellow-500"
// //                       : order.status === "Completed"
// //                       ? "text-green-500"
// //                       : order.status === "Cancelled"
// //                       ? "text-red-500"
// //                       : "text-blue-500"
// //                   }`}
// //                 >
// //                   {order.status}
// //                 </p>
// //               </div>
// //               <div className="text-sm text-gray-600">
// //                 {order.items.slice(0, 2).map((item, index) => (
// //                   <div key={index} className="flex justify-between mb-2">
// //                     <span>{item.name}</span>
// //                     <span>{item.quantity} x ₹{item.price}</span>
// //                   </div>
// //                 ))}
// //                 {order.items.length > 2 && (
// //                   <p className="text-sm text-gray-500">+{order.items.length - 2} more item(s)</p>
// //                 )}
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-gray-500">No orders found.</p>
// //         )}
// //       </div>

// //       {/* Order Details Modal */}
// //       {selectedOrder && (
// //         <div
// //           className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center"
// //           onClick={() => setSelectedOrder(null)} // Close modal on click outside
// //         >
// //           <div
// //             className="bg-white p-6 rounded-lg w-1/2 overflow-y-auto"
// //             onClick={(e) => e.stopPropagation()} // Prevent closing the modal on inner click
// //           >
// //             <h2 className="text-3xl font-bold text-indigo-600 mb-4">Order Details</h2>
// //             <p className="text-xl font-semibold mb-2">Order ID: {selectedOrder.orderId}</p>
// //             <p className="text-md text-gray-600 mb-4">
// //               Status:{" "}
// //               <span
// //                 className={`${
// //                   selectedOrder.status === "Pending"
// //                     ? "text-yellow-500"
// //                     : selectedOrder.status === "Completed"
// //                     ? "text-green-500"
// //                     : selectedOrder.status === "Cancelled"
// //                     ? "text-red-500"
// //                     : "text-blue-500"
// //                 }`}
// //               >
// //                 {selectedOrder.status}
// //               </span>
// //             </p>

// //             <div className="mb-6">
// //               <h3 className="text-lg font-semibold mb-2">Items:</h3>
// //               <ul>
// //                 {selectedOrder.items.map((item, index) => (
// //                   <li key={index} className="flex justify-between mb-2">
// //                     <span>{item.name}</span>
// //                     <span>
// //                       {item.quantity} x ₹{item.price}
// //                     </span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>

// //             <div className="mt-4 text-right">
// //               <p className="font-bold">Total Amount: ₹{selectedOrder.totalAmount}</p>
// //               <p className="text-xs text-gray-500 mt-2">
// //                 Ordered on: {new Date(selectedOrder.orderedAt).toLocaleString()}
// //               </p>
// //             </div>

// //             <button
// //               className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
// //               onClick={() => setSelectedOrder(null)} // Close modal
// //             >
// //               Close
// //             </button>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default OrdersPage;




// import React, { useState, useEffect } from "react";

// const OrdersPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   // Fetch all orders for the logged-in customer
//   const fetchOrders = async () => {
//     try {
//       const response = await fetch("http://localhost:4000/api/orders", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           "Authorization": `Bearer ${localStorage.getItem("token")}` // Assuming token is in localStorage
//         }
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setOrders(data.orders); // Save the fetched orders to state
//       } else {
//         console.error("Error fetching orders:", data.message);
//       }
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   // Handle clicking on an order to view its details
//   const handleOrderClick = (orderId) => {
//     const order = orders.find((order) => order.orderId === orderId);
//     setSelectedOrder(order); // Set the selected order to display its details
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Your Orders</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {orders.length > 0 ? (
//           orders.map((order) => (
//             <div
//               key={order.orderId}
//               className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
//               onClick={() => handleOrderClick(order.orderId)}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-semibold text-teal-600">{order.orderId}</h2>
//                 <span className="text-sm text-gray-600 font-bold">
//                   {new Date(order.orderedAt).toLocaleDateString()}{" "}
//                   <span className="font-bold text-purple-700">
//                     {new Date(order.orderedAt).toLocaleTimeString().slice(0, 5)}
//                   </span>
//                 </span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <p className="text-lg text-orange-600 font-semibold">Total: ₹{order.totalAmount}</p>
//                 <p
//                   className={`text-sm font-semibold ${
//                     order.status === "Pending"
//                       ? "text-yellow-500"
//                       : order.status === "Completed"
//                       ? "text-green-600"
//                       : order.status === "Cancelled"
//                       ? "text-red-600"
//                       : "text-blue-500"
//                   }`}
//                 >
//                   {order.status}
//                 </p>
//               </div>
//               <div className="text-sm text-gray-600">
//                 {order.items.slice(0, 2).map((item, index) => (
//                   <div key={index} className="flex justify-between mb-2">
//                     <span>{item.name}</span>
//                     <span>{item.quantity} x ₹{item.price}</span>
//                   </div>
//                 ))}
//                 {order.items.length > 2 && (
//                   <p className="text-sm text-gray-500">+{order.items.length - 2} more item(s)</p>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-gray-500">No orders found.</p>
//         )}
//       </div>

//       {/* Order Details Modal */}
//       {selectedOrder && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center"
//           onClick={() => setSelectedOrder(null)} // Close modal on click outside
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-1/2 overflow-y-auto"
//             onClick={(e) => e.stopPropagation()} // Prevent closing the modal on inner click
//           >
//             <h2 className="text-3xl font-bold text-indigo-600 mb-4">Order Details</h2>
//             <p className="text-xl font-semibold mb-2">Order ID: {selectedOrder.orderId}</p>
//             <p className="text-md text-gray-600 mb-4">
//               Status:{" "}
//               <span
//                 className={`${
//                   selectedOrder.status === "Pending"
//                     ? "text-yellow-500"
//                     : selectedOrder.status === "Completed"
//                     ? "text-green-600"
//                     : selectedOrder.status === "Cancelled"
//                     ? "text-red-600"
//                     : "text-blue-500"
//                 }`}
//               >
//                 {selectedOrder.status}
//               </span>
//             </p>

//             <div className="mb-6">
//               <h3 className="text-lg font-semibold mb-2">Items:</h3>
//               <ul>
//                 {selectedOrder.items.map((item, index) => (
//                   <li key={index} className="flex justify-between mb-2">
//                     <span>{item.name}</span>
//                     <span>
//                       {item.quantity} x ₹{item.price}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="mt-4 text-right">
//               <p className="font-bold text-xl">Total Amount: ₹{selectedOrder.totalAmount}</p>
//               <p className="text-xs text-gray-500 mt-2">
//                 Ordered on: {new Date(selectedOrder.orderedAt).toLocaleString()}
//               </p>
//             </div>

//             <button
//               className="mt-4 px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
//               onClick={() => setSelectedOrder(null)} // Close modal
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrdersPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Step 1

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const navigate = useNavigate(); // ✅ Step 2

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/order/my-orders", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();
      if (response.ok) {
        setOrders(data.orders);
      } else {
        console.error("Error fetching orders:", data.message);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleOrderClick = (orderId) => {
    const order = orders.find((order) => order.orderId === orderId);
    setSelectedOrder(order);
  };

  const formatTime = (date) => {
    const options = { hour: "numeric", minute: "numeric", hour12: true };
    return new Date(date).toLocaleTimeString([], options);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">Your Orders</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.orderId}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer"
              onClick={() => handleOrderClick(order.orderId)}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-semibold text-teal-600">{order.orderId}</h2>
                <span className="text-sm text-gray-600 font-bold">
                  {new Date(order.orderedAt).toLocaleDateString()}{" "}
                  <span className="font-bold text-purple-700">
                    {formatTime(order.orderedAt)}
                  </span>
                </span>
              </div>
              <div className="flex justify-between mb-4">
                <p className="text-lg text-orange-600 font-semibold">Total: ₹{order.totalAmount}</p>
                <p
                  className={`text-sm font-semibold ${
                    order.status === "Pending"
                      ? "text-yellow-500"
                      : order.status === "Completed"
                      ? "text-green-600"
                      : order.status === "Cancelled"
                      ? "text-red-600"
                      : "text-blue-500"
                  }`}
                >
                  {order.status}
                </p>
              </div>
              <div className="text-sm text-gray-600">
                {order.items.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex justify-between mb-2">
                    <span>{item.name}</span>
                    <span>{item.quantity} x ₹{item.price}</span>
                  </div>
                ))}
                {order.items.length > 2 && (
                  <p className="text-sm text-gray-500">+{order.items.length - 2} more item(s)</p>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No orders found.</p>
        )}
      </div>

      {selectedOrder && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setSelectedOrder(null)}
        >
          <div
            className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold text-indigo-600 mb-4">Order Details</h2>
            <p className="text-xl font-semibold mb-2">Order ID: {selectedOrder.orderId}</p>
            <p className="text-md text-gray-600 mb-4">
              Status:{" "}
              <span
                className={`${
                  selectedOrder.status === "Pending"
                    ? "text-yellow-500"
                    : selectedOrder.status === "Completed"
                    ? "text-green-600"
                    : selectedOrder.status === "Cancelled"
                    ? "text-red-600"
                    : "text-blue-500"
                }`}
              >
                {selectedOrder.status}
              </span>
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Items:</h3>
              <ul>
                {selectedOrder.items.map((item, index) => (
                  <li key={index} className="flex justify-between mb-2">
                    <span>{item.name}</span>
                    <span>
                      {item.quantity} x ₹{item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 text-right">
              <p className="font-bold text-xl">Total Amount: ₹{selectedOrder.totalAmount}</p>
              <p className="text-xs text-gray-500 mt-2">
                Ordered on: {new Date(selectedOrder.orderedAt).toLocaleString()}
              </p>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                
                onClick={() =>
                  navigate("/customer/Receipt", {
                    state: {
                      orderId: selectedOrder.orderId,
                      cartItems: selectedOrder.items,
                      totalPrice: selectedOrder.totalAmount,
                      orderedAt: selectedOrder.orderedAt,
                      status: selectedOrder.status
                    },
                  })
                  
                }
              >
                View Receipt
              </button>
              <button
                className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                onClick={() => setSelectedOrder(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
