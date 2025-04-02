// // // // import React from 'react'

// // // // function AdminDashboard() {
// // // //   return (
// // // //     <div>AdminDashboard</div>
// // // //   )
// // // // }

// // // // export default AdminDashboard
// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { Users, ClipboardList, Utensils, BarChart2 } from "lucide-react";

// // // const AdminDashboard = () => {
// // //   const cards = [
// // //     { title: "Add Admin", icon: <Users size={40} />, link: "/admin/add-admin" },
// // //     { title: "Add Staff", icon: <ClipboardList size={40} />, link: "/admin/add-staff" },
// // //     { title: "Add New Menu", icon: <Utensils size={40} />, link: "/admin/add-menu" },
// // //     { title: "View Reports", icon: <BarChart2 size={40} />, link: "/reports" },
// // //     { title: "Delete Item", icon: <BarChart2 size={20} />, link: "/delete-menu-item" },
// // //   ];

// // //   return (
// // //     <div className="p-6 bg-gray-100 min-h-screen">
// // //       <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         {cards.map((card, index) => (
// // //           <Link to={card.link} key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition">
// // //             <div className="text-blue-600 mb-4">{card.icon}</div>
// // //             <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
// // //           </Link>
// // //         ))}
// // //       </div>
      
// // //       {/* Stats Section */}
// // //       {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
// // //         <div className="bg-white shadow-lg p-6 rounded-xl text-center">
// // //           <h3 className="text-2xl font-bold text-gray-800">50</h3>
// // //           <p className="text-gray-500">Total Staff</p>
// // //         </div>
// // //         <div className="bg-white shadow-lg p-6 rounded-xl text-center">
// // //           <h3 className="text-2xl font-bold text-gray-800">120</h3>
// // //           <p className="text-gray-500">Active Orders</p>
// // //         </div>
// // //         <div className="bg-white shadow-lg p-6 rounded-xl text-center">
// // //           <h3 className="text-2xl font-bold text-gray-800">$5,000</h3>
// // //           <p className="text-gray-500">Revenue</p>
// // //         </div>
// // //         <div className="bg-white shadow-lg p-6 rounded-xl text-center">
// // //           <h3 className="text-2xl font-bold text-gray-800">10</h3>
// // //           <p className="text-gray-500">New Customers</p>
// // //         </div>
// // //       </div> */}
// // //     </div>
// // //   );
// // // };

// // // export default AdminDashboard;


// // import React from "react";
// // import { Link } from "react-router-dom";
// // import { Users, ClipboardList, Utensils, BarChart2, Trash2 } from "lucide-react";


// // const AdminDashboard = () => {
// //   const cards = [
// //     { title: "Add Admin", icon: <Users size={40} />, link: "/admin/add-admin", color: "bg-blue-500" },
// //     { title: "Add Staff", icon: <ClipboardList size={40} />, link: "/admin/add-staff", color: "bg-green-500" },
// //     { title: "Add New Menu", icon: <Utensils size={40} />, link: "/admin/add-menu", color: "bg-yellow-500" },
// //     { title: "View Reports", icon: <BarChart2 size={40} />, link: "/reports", color: "bg-purple-500" },
// //     { title: "Delete Item", icon: <Trash2 size={40} />, link: "/delete-menu-item", color: "bg-red-500" },
// //   ];

// //   return (
// //     <div className="p-6 bg-gradient-to-r from-indigo-300 to-purple-300 min-h-screen">
// //       <h1 className="text-4xl font-extrabold mb-8 text-white text-center drop-shadow-lg">
// //         Admin Dashboard
// //       </h1>
      
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
// //         {cards.map((card, index) => (
// //           <Link
// //             to={card.link}
// //             key={index}
// //             className={`${card.color} text-white shadow-xl rounded-2xl p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl`}
// //           >
// //             <div className="bg-white p-4 rounded-full text-black shadow-md mb-4">{card.icon}</div>
// //             <h2 className="text-2xl font-semibold drop-shadow-md">{card.title}</h2>
// //           </Link>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Users, ClipboardList, Utensils, BarChart2, Trash2 } from "lucide-react";
// // import AdminDashboardImage from "../Assests/AdminBackground.jpg"

// const AdminDashboard = () => {
//   const cards = [
//     { title: "Add Admin", icon: <Users size={40} />, link: "/admin/add-admin" },
//     { title: "Add Staff", icon: <ClipboardList size={40} />, link: "/admin/add-staff" },
//     { title: "Add New Menu", icon: <Utensils size={40} />, link: "/admin/add-menu" },
//     { title: "View Reports", icon: <BarChart2 size={40} />, link: "/reports" },
//     { title: "Delete Item", icon: <Trash2 size={40} />, link: "/delete-menu-item" },
//   ];

//   return (
//     <div 
//       className="p-6 min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
//       // style={{ backgroundImage:`url(${AdminDashboardImage})` }}
//     >
//       <h1 className="text-4xl font-extrabold mb-8 text-white drop-shadow-lg">Admin Dashboard</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {cards.map((card, index) => (
//           <Link 
//             to={card.link} 
//             key={index} 
//             className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center transform transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
//           >
//             <div className="text-blue-600 mb-4">{card.icon}</div>
//             <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React from "react";
import { Link } from "react-router-dom";
import { Users, ClipboardList, Utensils, BarChart2, Pencil } from "lucide-react";
import { Coffee, ChefHat, Pizza, ReceiptText } from "lucide-react"; 
import AdminDashboardImage from "../Assests/dasbA2.jpg"; // Ensure this image exists in the assets folder

const AdminDashboard = () => {
  const cards = [
    { title: "Add Admin", icon: <Users size={40} />, link: "/admin/add-admin" },
    { title: "Add Staff", icon: <ChefHat size={40} />, link: "/admin/add-staff" },
    { title: "Add New Menu", icon: <Pizza size={40} />, link: "/admin/add-menu" },
    { title: "Month Wise Ordes", icon: <ReceiptText size={40} />, link: "/admin/orders-monthly" },
    { title: "Day Wise Ordes", icon: <ReceiptText size={40} />, link: "/admin/orders-daily" },
    { title: "Edit Item", icon: <Pencil size={40} />, link: "/delete-menu-item" },
  ];

  return (
    // <div 
    //   className="p-6 min-h-screen flex flex-col items-center justify-center bg-cover bg-center" 
    //   style={{ backgroundImage: `url(${AdminDashboardImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    // >
    //   <h1 className="text-4xl font-extrabold mb-8 text-white drop-shadow-lg bg-gradient-to-r from-yellow-400 to-red-500 px-6 py-3 rounded-lg">
    //     🍽️ Admin Dashboard 🍕
    //   </h1>
      
    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    //     {cards.map((card, index) => (
    //       <Link 
    //         to={card.link} 
    //         key={index} 
    //         className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center transform transition-all hover:scale-110 hover:shadow-2xl active:scale-95 border border-gray-200"
    //       >
    //         <div className="text-yellow-500 mb-4">{card.icon}</div>
    //         <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
    //       </Link>
    //     ))}
    //   </div>
    // </div>
    <div 
  className="relative p-6 min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
  style={{ 
    backgroundImage: `url(${AdminDashboardImage})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center" 
  }}
>
  {/* Blur Effect Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

  <h1 className="relative text-4xl font-extrabold mb-8 text-white drop-shadow-lg bg-gradient-to-r from-yellow-400 to-red-500 px-6 py-3 rounded-lg">
    🍽️ Admin Dashboard 🍕
  </h1>

  <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {cards.map((card, index) => (
      <Link 
        to={card.link} 
        key={index} 
        className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center transform transition-all hover:scale-110 hover:shadow-2xl active:scale-95 border border-gray-200"
      >
        <div className="text-yellow-500 mb-4">{card.icon}</div>
        <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
      </Link>
    ))}
  </div>
</div>

  );
};

export default AdminDashboard;
