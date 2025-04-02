import React from 'react'
import DisplayMenu from "../Components/DisplayMenu"

export default function CustomerDashboard() {
  return (
    <DisplayMenu/>
  )
}
// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import { ShoppingCart, History, Star, Wallet, Megaphone, HelpCircle } from "lucide-react";

// // // const CustomerDashboard = () => {
// // //   const cards = [
// // //     { title: "Current Order", icon: <ShoppingCart size={40} />, link: "/current-order" },
// // //     { title: "Order History", icon: <History size={40} />, link: "/order-history" },
// // //     { title: "Favorites", icon: <Star size={40} />, link: "/favorites" },
// // //     { title: "Wallet", icon: <Wallet size={40} />, link: "/wallet" },
// // //     { title: "Offers & Announcements", icon: <Megaphone size={40} />, link: "/offers" },
// // //     { title: "Support", icon: <HelpCircle size={40} />, link: "/support" },
// // //   ];

// // //   return (
// // //     <div className="p-6 min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-cyan-100 to-pink-200">
// // //       <h1 className="text-4xl font-extrabold mb-8 text-gray-900 drop-shadow-lg">
// // //         Welcome, Customer!
// // //       </h1>
      
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //         {cards.map((card, index) => (
// // //           <Link
// // //             to={card.link}
// // //             key={index}
// // //             className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center justify-center transform transition-all hover:scale-105 hover:shadow-2xl active:scale-95 w-60 h-40"
// // //           >
// // //             <div className="text-blue-600 mb-4">{card.icon}</div>
// // //             <h2 className="text-xl font-semibold text-gray-700">{card.title}</h2>
// // //           </Link>
// // //         ))}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CustomerDashboard;

// // import React from "react";
// // import { ShoppingCart, History, Star, Wallet, Gift, Headphones } from "lucide-react";
// // import { motion } from "framer-motion";

// // const CustomerDashboard = () => {
// //   const sections = [
// //     { title: "Current Orders", icon: <ShoppingCart size={40} />, link: "/orders" },
// //     { title: "Order History", icon: <History size={40} />, link: "/history" },
// //     { title: "Favorites", icon: <Star size={40} />, link: "/favorites" },
// //     { title: "Wallet", icon: <Wallet size={40} />, link: "/wallet" },
// //     { title: "Offers & Discounts", icon: <Gift size={40} />, link: "/offers" },
// //     { title: "Support", icon: <Headphones size={40} />, link: "/support" },
// //   ];

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-pink-400 to-yellow-300 transition-all duration-500 ease-in-out p-6">
// //       <h1 className="text-5xl font-extrabold text-white drop-shadow-lg mb-8 animate-pulse">Customer Dashboard</h1>
      
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// //         {sections.map((section, index) => (
// //           <motion.a
// //             key={index}
// //             href={section.link}
// //             whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)" }}
// //             whileTap={{ scale: 0.95 }}
// //             className="bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transition-all hover:bg-opacity-90 hover:shadow-2xl border-b-4 border-transparent hover:border-yellow-400"
// //           >
// //             <div className="text-blue-600 mb-4">{section.icon}</div>
// //             <h2 className="text-xl font-semibold text-gray-700">{section.title}</h2>
// //           </motion.a>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default CustomerDashboard;


// import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart, Utensils, History, Star, MessageCircle } from "lucide-react";

// const CustomerDashboard = () => {
//   const options = [
//     { title: "Order Food", icon: <ShoppingCart size={50} />, link: "/order-food" },
//     { title: "Menu", icon: <Utensils size={50} />, link: "/customer/menu" },
//     { title: "Order History", icon: <History size={50} />, link: "/order-history" },
//     { title: "Favorites", icon: <Star size={50} />, link: "/favorites" },
//     { title: "Feedback", icon: <MessageCircle size={50} />, link: "/feedback" },
//   ];

//   return (
//     <div className="p-8 min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
//       <h1 className="text-4xl font-extrabold mb-8 text-gray-900 animate-pulse">Welcome to Your Dashboard</h1>
      
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {options.map((option, index) => (
//           <Link
//             to={option.link}
//             key={index}
//             className="p-6 rounded-3xl border border-gray-300 shadow-lg flex flex-col items-center justify-center transform transition-all hover:scale-110 hover:border-yellow-400 active:scale-95"
//           >
//             <div className="text-gray-700 mb-4 drop-shadow-xl">{option.icon}</div>
//             <h2 className="text-xl font-semibold text-gray-800">{option.title}</h2>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// 
// export default CustomerDashboard;
// import { useState } from "react";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { FiSearch } from "react-icons/fi";

// const foodItems = [
//   { id: 1, name: "Burger", category: "Snacks", price: 120, img: "https://source.unsplash.com/100x100/?burger" },
//   { id: 2, name: "Pizza", category: "Meals", price: 250, img: "https://source.unsplash.com/100x100/?pizza" },
//   { id: 3, name: "Coffee", category: "Drinks", price: 80, img: "https://source.unsplash.com/100x100/?coffee" },
//   { id: 4, name: "Ice Cream", category: "Desserts", price: 100, img: "https://source.unsplash.com/100x100/?icecream" }
// ];

// export default function CustomerMenu() {
//   const [cart, setCart] = useState([]);
//   const [search, setSearch] = useState("");
//   const [category, setCategory] = useState("All");

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   const filteredItems = foodItems.filter(
//     (item) => (category === "All" || item.category === category) && item.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-400 to-pink-300 p-4">
//       {/* Navbar */}
//       <nav className="flex justify-between bg-black text-white p-4 rounded-lg">
//         <h1 className="text-xl font-bold">Canteen</h1>
//         <div className="flex items-center gap-4">
//           <FaShoppingCart className="text-2xl" />
//           <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs">{cart.length}</span>
//           <FaUser className="text-2xl" />
//         </div>
//       </nav>
      
//       {/* Search and Category */}
//       <div className="flex justify-between mt-4">
//         <div className="relative w-full">
//           <FiSearch className="absolute left-3 top-2 text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search food..."
//             className="w-full pl-10 p-2 border rounded-lg"
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>
      
//       {/* Category Filter */}
//       <div className="flex gap-2 my-4">
//         {["All", "Snacks", "Meals", "Drinks", "Desserts"].map((cat) => (
//           <button
//             key={cat}
//             className={`px-3 py-1 rounded-full ${category === cat ? "bg-black text-white" : "bg-white text-black border"}`}
//             onClick={() => setCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Food Items */}
//       <div className="grid grid-cols-2 gap-4">
//         {filteredItems.map((item) => (
//           <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
//             <img src={item.img} alt={item.name} className="w-20 h-20 rounded-lg" />
//             <h3 className="font-bold mt-2">{item.name}</h3>
//             <p className="text-gray-500">₹{item.price}</p>
//             <button
//               onClick={() => addToCart(item)}
//               className="mt-2 px-3 py-1 bg-black text-white rounded-lg"
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
