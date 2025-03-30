// import React from 'react'

// function AdminDashboard() {
//   return (
//     <div>AdminDashboard</div>
//   )
// }

// export default AdminDashboard
import React from "react";
import { Link } from "react-router-dom";
import { Users, ClipboardList, Utensils, BarChart2 } from "lucide-react";

const AdminDashboard = () => {
  const cards = [
    { title: "Add Admin", icon: <Users size={40} />, link: "/admin/add-admin" },
    { title: "Add Staff", icon: <ClipboardList size={40} />, link: "/admin/add-staff" },
    { title: "Add New Menu", icon: <Utensils size={40} />, link: "/admin/add-menu" },
    { title: "View Reports", icon: <BarChart2 size={40} />, link: "/reports" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link to={card.link} key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition">
            <div className="text-blue-600 mb-4">{card.icon}</div>
            <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
          </Link>
        ))}
      </div>
      
      {/* Stats Section */}
      {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-800">50</h3>
          <p className="text-gray-500">Total Staff</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-800">120</h3>
          <p className="text-gray-500">Active Orders</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-800">$5,000</h3>
          <p className="text-gray-500">Revenue</p>
        </div>
        <div className="bg-white shadow-lg p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-gray-800">10</h3>
          <p className="text-gray-500">New Customers</p>
        </div>
      </div> */}
    </div>
  );
};

export default AdminDashboard;
