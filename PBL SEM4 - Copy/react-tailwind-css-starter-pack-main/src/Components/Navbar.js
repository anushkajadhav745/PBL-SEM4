// // // // // // import { Link } from "react-router-dom";

// // // // // // const Navbar = () => {
// // // // // //   return (
// // // // // //     <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
// // // // // //       <h1 className="text-xl font-bold">Canteen Management</h1>
// // // // // //       <div className="space-x-4">
// // // // // //         <Link to="/" className="hover:underline">Home</Link>
// // // // // //         <Link to="/login" className="hover:underline">Login</Link>
// // // // // //         <Link to="/signup" className="hover:underline">Signup</Link>
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;
// // // // // import { Link, useNavigate } from "react-router-dom";

// // // // // function Navbar() {
// // // // //   const navigate = useNavigate();
// // // // //   const role = localStorage.getItem("role");

// // // // //   // ✅ Logout function
// // // // //   const handleLogout = () => {
// // // // //     localStorage.clear();  // Remove all stored tokens and roles
// // // // //     navigate("/login");    // Redirect to login page
// // // // //   };

// // // // //   return (
// // // // //     <nav className="bg-blue-500 p-4 flex justify-between text-white">
// // // // //       <Link to="/" className="text-xl font-bold">Canteen System</Link>

// // // // //       <div>
// // // // //         {role === "admin" && <Link to="/admin-dashboard" className="mr-4">Admin Dashboard</Link>}
// // // // //         {role === "staff" && <Link to="/staff-dashboard" className="mr-4">Staff Dashboard</Link>}
// // // // //         {role === "customer" && <Link to="/customer-dashboard" className="mr-4">Customer Dashboard</Link>}
        
// // // // //         {/* 🔴 Logout Button */}
// // // // //         {role && (
// // // // //           <button 
// // // // //             onClick={handleLogout}
// // // // //             className="bg-red-500 px-4 py-2 rounded"
// // // // //           >
// // // // //             Logout
// // // // //           </button>
// // // // //         )}
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // }

// // // // // export default Navbar;
// // // // import React from 'react';
// // // // import { Link, useNavigate } from 'react-router-dom';
// // // // // import Footer from './Footer';

// // // // export default function Navbar() {
// // // //   const navigate = useNavigate();
// // // //   const email = localStorage.getItem('emailid');

// // // //   function logout() {
// // // //     localStorage.removeItem('emailid');
// // // //     navigate('/'); // Redirects to home after logout
// // // //   }

// // // //   function getNavbarItems() {
// // // //     if (!email) {
// // // //       return (
// // // //         <>
// // // //           <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Snacks">Snacks</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Beverages">Beverages</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Special">Today's Special</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="About">About Us</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Clogin">Canteen Login</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Login">Login</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Signup">Signup</Link></li>
// // // //         </>
// // // //       );
// // // //     } else if (email === 'canteen@pict') {
// // // //       return (
// // // //         <>
// // // //           <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="AddMenu">Add Menu</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="UpdateMenu">Update Menu</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="DeleteMenu">Delete Menu</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="PendingOrders">Pending Orders</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" onClick={logout}>Logout</Link></li>
// // // //         </>
// // // //       );
// // // //     } else {
// // // //       return (
// // // //         <>
// // // //           <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Snacks">Snacks</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Beverages">Beverages</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="Special">Today's Special</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="cart">View Cart</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" to="orders">Orders</Link></li>
// // // //           <li className="nav-item"><Link className="nav-link" onClick={logout}>Logout</Link></li>
// // // //         </>
// // // //       );
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div>
// // // //       <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
// // // //         <div className="container-fluid">
// // // //           {/* Toggle button */}
// // // //           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
// // // //             <i className="fas fa-bars"></i>
// // // //           </button>

// // // //           {/* Logo */}
// // // //           <Link className="navbar-brand" to="/">
// // // //             <img src="images/logo.jpg" height="45" alt="PICT Canteen" loading="lazy" />
// // // //           </Link>

// // // //           {/* Navigation Links */}
// // // //           <div className="collapse navbar-collapse" id="navbarSupportedContent">
// // // //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// // // //               {getNavbarItems()}
// // // //             </ul>
// // // //           </div>

// // // //           {/* Right Side Elements */}
// // // //           {email && (
// // // //             <div className="d-flex align-items-center">
// // // //               {/* Cart Icon */}
// // // //               <Link className="link-secondary me-3" to="#"><i className="fas fa-shopping-cart"></i></Link>

// // // //               {/* Notifications */}
// // // //               <div className="dropdown">
// // // //                 <Link className="link-secondary me-3 dropdown-toggle hidden-arrow" to="#" id="navbarDropdownMenuLink">
// // // //                   <i className="fas fa-bell"></i>
// // // //                   <span className="badge rounded-pill badge-notification bg-danger">1</span>
// // // //                 </Link>
// // // //               </div>

// // // //               {/* User Avatar */}
// // // //               <div className="dropdown">
// // // //                 <Link className="dropdown-toggle d-flex align-items-center hidden-arrow" to="#" id="navbarDropdownMenuAvatar">
// // // //                   <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="User Avatar" />
// // // //                 </Link>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </nav>
// // // //       {/* <Footer /> */}
// // // //     </div>
// // // //   );
// // // // }


// // // import React from "react";
// // // import { Link, Outlet } from "react-router-dom";
// // // // import Footer from "./Footer";

// // // export default function Navbar() {
// // //   const role = localStorage.getItem("role");

// // //   function logout() {
// // //     localStorage.removeItem("role");
// // //     window.location = "/";
// // //   }

// // //   if (!role) {
// // //     // Public Navbar (Before Login)
// // //     return (
// // //       <div>
// // //         <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
// // //           <div className="container-fluid">
// // //             <Link className="navbar-brand" to="/">
// // //               <img src="images/logo.jpg" height="45" alt="PICT Canteen" loading="lazy" />
// // //             </Link>
// // //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="/">Home</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="About">About Us</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="Login">Login</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="Signup">Signup</Link>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </nav>
// // //         <Outlet />
// // //         {/* <Footer /> */}
// // //       </div>
// // //     );
// // //   } else if (role === "admin") {
// // //     // Admin Navbar
// // //     return (
// // //       <div>
// // //         <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
// // //           <div className="container-fluid">
// // //             <Link className="navbar-brand" to="/">
// // //               <img src="images/logo.jpg" height="45" alt="PICT Canteen" loading="lazy" />
// // //             </Link>
// // //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="/">Dashboard</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="ManageStaff">Manage Staff</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="ManageMenu">Manage Menu</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="Orders">Orders</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" onClick={logout}>Logout</Link>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </nav>
// // //         <Outlet />
// // //         {/* <Footer /> */}
// // //       </div>
// // //     );
// // //   } else if (role === "staff") {
// // //     // Staff Navbar
// // //     return (
// // //       <div>
// // //         <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
// // //           <div className="container-fluid">
// // //             <Link className="navbar-brand" to="/">
// // //               <img src="images/logo.jpg" height="45" alt="PICT Canteen" loading="lazy" />
// // //             </Link>
// // //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="/">Home</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="AddMenu">Add Menu</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="UpdateMenu">Update Menu</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="PendingOrders">Pending Orders</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" onClick={logout}>Logout</Link>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </nav>
// // //         <Outlet />
// // //         {/* <Footer /> */}
// // //       </div>
// // //     );
// // //   } else {
// // //     // Customer Navbar
// // //     return (
// // //       <div>
// // //         <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
// // //           <div className="container-fluid">
// // //             <Link className="navbar-brand" to="/">
// // //               <img src="images/logo.jpg" height="45" alt="PICT Canteen" loading="lazy" />
// // //             </Link>
// // //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="/">Home</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="Menu">Menu</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="Cart">View Cart</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" to="Orders">My Orders</Link>
// // //               </li>
// // //               <li className="nav-item">
// // //                 <Link className="nav-link" onClick={logout}>Logout</Link>
// // //               </li>
// // //             </ul>
// // //           </div>
// // //         </nav>
// // //         <Outlet />
// // //         {/* <Footer /> */}
// // //       </div>
// // //     );
// // //   }
// // // }


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";

// // export default function Navbar() {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const role = localStorage.getItem("role");

// //   function logout() {
// //     localStorage.removeItem("role");
// //     window.location = "/";
// //   }

// //   return (
// //     <nav className="bg-gray-800 p-4 shadow-lg">
// //       <div className="container mx-auto flex justify-between items-center">
// //         {/* Logo */}
// //         <Link to="/" className="text-white font-bold text-xl">
// //           <img src="images/logo.jpg" alt="PICT Canteen" className="h-10 inline-block mr-2" />
// //           PICT Canteen
// //         </Link>

// //         {/* Hamburger Menu (Mobile) */}
// //         <button
// //           onClick={() => setIsOpen(!isOpen)}
// //           className="md:hidden text-white focus:outline-none"
// //         >
// //           ☰
// //         </button>

// //         {/* Navbar Links */}
// //         <ul
// //           className={`${
// //             isOpen ? "block" : "hidden"
// //           } md:flex md:space-x-6 text-white text-lg`}
// //         >
// //           {role === "admin" && (
// //             <>
// //               <li><Link className="hover:text-gray-400" to="/">Dashboard</Link></li>
// //               <li><Link className="hover:text-gray-400" to="ManageStaff">Manage Staff</Link></li>
// //               <li><Link className="hover:text-gray-400" to="ManageMenu">Manage Menu</Link></li>
// //               <li><Link className="hover:text-gray-400" to="Orders">Orders</Link></li>
// //             </>
// //           )}

// //           {role === "staff" && (
// //             <>
// //               <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
// //               <li><Link className="hover:text-gray-400" to="AddMenu">Add Menu</Link></li>
// //               <li><Link className="hover:text-gray-400" to="PendingOrders">Pending Orders</Link></li>
// //             </>
// //           )}

// //           {role === "customer" && (
// //             <>
// //               <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
// //               <li><Link className="hover:text-gray-400" to="Menu">Menu</Link></li>
// //               <li><Link className="hover:text-gray-400" to="Cart">View Cart</Link></li>
// //               <li><Link className="hover:text-gray-400" to="Orders">My Orders</Link></li>
// //             </>
// //           )}

// //           {role ? (
// //             <li><button onClick={logout} className="hover:text-red-400">Logout</button></li>
// //           ) : (
// //             <>
// //               <li><Link className="hover:text-gray-400" to="Login">Login</Link></li>
// //               <li><Link className="hover:text-gray-400" to="Signup">Signup</Link></li>
// //             </>
// //           )}
// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // }

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Menu } from "lucide-react"; // Importing Lucide for icons

// export default function Navbar() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const role = localStorage.getItem("role");

//   function logout() {
//     localStorage.removeItem("role");
//     window.location = "/";
//   }

//   return (
//     <nav className="bg-gray-900 p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <Link to="/" className="text-white font-bold text-xl flex items-center">
//           <img src="images/logo.jpg" alt="PICT Canteen" className="h-10 mr-2" />
//           PICT Canteen
//         </Link>

//         {/* Hamburger Menu (Dropdown for mobile) */}
//         <div className="relative md:hidden">
//           <button
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//             className="text-white focus:outline-none"
//           >
//             <Menu size={28} />
//           </button>

//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50">
//               {role === "admin" && (
//                 <>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/">
//                     Dashboard
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="ManageStaff">
//                     Manage Staff
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="ManageMenu">
//                     Manage Menu
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Orders">
//                     Orders
//                   </Link>
//                 </>
//               )}

//               {role === "staff" && (
//                 <>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/">
//                     Home
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="AddMenu">
//                     Add Menu
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="PendingOrders">
//                     Pending Orders
//                   </Link>
//                 </>
//               )}

//               {role === "customer" && (
//                 <>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/">
//                     Home
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Menu">
//                     Menu
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Cart">
//                     View Cart
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Orders">
//                     My Orders
//                   </Link>
//                 </>
//               )}

//               {role ? (
//                 <button
//                   onClick={logout}
//                   className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Login">
//                     Login
//                   </Link>
//                   <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Signup">
//                     Signup
//                   </Link>
//                 </>
//               )}
//             </div>
//           )}
//         </div>

//         {/* Desktop Navbar */}
//         <ul className="hidden md:flex md:space-x-6 text-white text-lg">
//           {role === "admin" && (
//             <>
//               <li><Link className="hover:text-gray-400" to="/">Dashboard</Link></li>
//               <li><Link className="hover:text-gray-400" to="ManageStaff">Manage Staff</Link></li>
//               <li><Link className="hover:text-gray-400" to="ManageMenu">Manage Menu</Link></li>
//               <li><Link className="hover:text-gray-400" to="Orders">Orders</Link></li>
//             </>
//           )}

//           {role === "staff" && (
//             <>
//               <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
//               <li><Link className="hover:text-gray-400" to="AddMenu">Add Menu</Link></li>
//               <li><Link className="hover:text-gray-400" to="PendingOrders">Pending Orders</Link></li>
//             </>
//           )}

//           {role === "customer" && (
//             <>
//               <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
//               <li><Link className="hover:text-gray-400" to="Menu">Menu</Link></li>
//               <li><Link className="hover:text-gray-400" to="Cart">View Cart</Link></li>
//               <li><Link className="hover:text-gray-400" to="Orders">My Orders</Link></li>
//             </>
//           )}

//           {role ? (
//             <li><button onClick={logout} className="hover:text-red-400">Logout</button></li>
//           ) : (
//             <>
//               <li><Link className="hover:text-gray-400" to="Login">Login</Link></li>
//               <li><Link className="hover:text-gray-400" to="Signup">Signup</Link></li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react"; // Importing Lucide for icons
import Logo from "../Assests/logo.jpeg"

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const role = localStorage.getItem("role");

  function logout() {
    localStorage.removeItem("role");
    window.location = "/";
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white font-bold text-xl flex items-center">
          <img src={Logo} alt="PICT Canteen" className="h-10 mr-2" />
          PICT Canteen
        </Link>

        {/* Hamburger Menu (Dropdown for mobile) */}
        <div className="relative md:hidden">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-white focus:outline-none"
          >
            <Menu size={28} />
          </button>

          {dropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg py-2 z-50"
            >
              {role === "admin" && (
                <>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="admin-dashboard">
                    Dashboard
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="ManageStaff">
                    Manage Staff
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="ManageMenu">
                    Manage Menu
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Orders">
                    Orders
                  </Link>
                </>
              )}

              {role === "staff" && (
                <>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/">
                    Home
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="AddMenu">
                    Add Menu
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="PendingOrders">
                    Pending Orders
                  </Link>
                </>
              )}

              {role === "customer" && (
                <>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="customer-dashboard">
                    Dashboard
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/customer/menu">
                    Menu
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Cart">
                    View Cart
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Orders">
                    My Orders
                  </Link>
                </>
              )}

              {role ? (
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200"
                >
                  Logout
                </button>
              ) : (
                <>
                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="/">
                    Home
                  </Link>
                <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="AboutUs">
                    About Us
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="ContactUs">
                    Contact Us
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Login">
                    Login
                  </Link>
                  <Link className="block px-4 py-2 text-gray-800 hover:bg-gray-200" to="Signup">
                    Signup
                  </Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex md:space-x-6 text-white text-lg">
          {role === "admin" && (
            <>
              <li><Link className="hover:text-gray-400" to="admin-dashboard">Dashboard</Link></li>
              <li><Link className="hover:text-gray-400" to="ManageStaff">Manage Staff</Link></li>
              <li><Link className="hover:text-gray-400" to="ManageMenu">Manage Menu</Link></li>
              <li><Link className="hover:text-gray-400" to="Orders">Orders</Link></li>
            </>
          )}

          {role === "staff" && (
            <>
              <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
              <li><Link className="hover:text-gray-400" to="AddMenu">Add Menu</Link></li>
              <li><Link className="hover:text-gray-400" to="PendingOrders">Pending Orders</Link></li>
            </>
          )}

          {role === "customer" && (
            <>
              <li><Link className="hover:text-gray-400" to="customer-dashboard">Dashboard</Link></li>
              <li><Link className="hover:text-gray-400" to="/customer/menu">Menu</Link></li>
              <li><Link className="hover:text-gray-400" to="Cart">View Cart</Link></li>
              <li><Link className="hover:text-gray-400" to="Orders">My Orders</Link></li>
            </>
          )}

          {role ? (
            <li><button onClick={logout} className="hover:text-red-400">Logout</button></li>
          ) : (
            <>
            <li><Link className="hover:text-gray-400" to="/">Home</Link></li>
              <li><Link className="hover:text-gray-400" to="Aboutus">About Us</Link></li>
              <li><Link className="hover:text-gray-400" to="Contactus">Contact Us</Link></li>
              <li><Link className="hover:text-gray-400" to="Login">Login</Link></li>
              <li><Link className="hover:text-gray-400" to="Signup">Signup</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
