// // import "./App.css";
// // import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
// // import { useState, useEffect } from "react";
// // import Signup from "./Components/Signup"
// // import Login from "./Components/Login"
// // import AddAdmin from "./Components/AddAdmin";
// // import AddStaff from "./Components/AddStaff";
// // import Homepage from "./Pages/HomePage";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Homepage />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/signup" element={<Signup />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // // function MainApp(){
// // //   const loaction=useLocation();

// // //   const[isAdminAuthenticated,setAdminAuthenticated]=useState(false);
// // //   const[isStaffAuthenticated,setStaffAuthenticated]=useState(false);
// // //   const[isCustomerAuthenticated,setCustomerAuthenticated]=useState(false);

// // //   //check if token exists in local storege for authentication
// // //   useEffect(()=>{
// // //     setAdminAuthenticated(!!localStorage.getItem("adminToken"));
// // //     setStaffAuthenticated(!!localStorage.getItem("staffToken"));
// // //     setCustomerAuthenticated(!!localStorage.getItem("customerToken"));
// // //   })
  
// // // }

// // export default App;

// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
// import { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
// import Home from "./Pages/HomePage";
// import Login from "./Components/Login";
// import Signup from "./Components/Signup";
// import AdminDashboard from "./Pages/AdminDashboard";
// import StaffDashboard from "./Pages/StaffDashboard";
// import CustomerDashboard from "./Pages/CustomerDashboard";


// function App() {
//   return (
//     <Router>
//       <MainApp />
//     </Router>
//   );
// }


// function MainApp() {
//   const location = useLocation();
//   const [userRole, setUserRole] = useState(localStorage.getItem("role"));

//   // ✅ Keep checking localStorage for updates
//   useEffect(() => {
//     setUserRole(localStorage.getItem("role"));
//   }, [location.pathname]); // ✅ Updates when route changes

//   const hideNavbarPages = ["/login", "/signup"];
//   const showNavbar = !hideNavbarPages.includes(location.pathname);

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {showNavbar && <Navbar />}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" 
//   element={localStorage.getItem("role") ? <Navigate to={`/${localStorage.getItem("role")}-dashboard`} /> : <Login />} 
// />

//         <Route path="/signup" element={<Signup />} />

//         {/* ✅ Admin Routes */}
//         <Route path="/admin-dashboard" element={userRole === "admin" ? <AdminDashboard /> : <Navigate to="/login" />} />
//         {/* <Route path="/admin/add-admin" element={userRole === "admin" ? <AddAdmin /> : <Navigate to="/login" />} />
//         <Route path="/admin/add-staff" element={userRole === "admin" ? <AddStaff /> : <Navigate to="/login" />} />
//         <Route path="/admin/manage-menu" element={userRole === "admin" ? <ManageMenu /> : <Navigate to="/login" />} /> */}

//         {/* ✅ Staff Routes */}
//         <Route path="/staff-dashboard" element={userRole === "staff" ? <StaffDashboard /> : <Navigate to="/login" />} />

//         {/* ✅ Customer Routes */}
//         <Route path="/customer-dashboard" element={userRole === "customer" ? <CustomerDashboard /> : <Navigate to="/login" />} />

//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </div>
//   );
// }


// export default App;



import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/HomePage";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import AdminDashboard from "./Pages/AdminDashboard";
import StaffDashboard from "./Pages/StaffDashboard";
import CustomerDashboard from "./Pages/CustomerDashboard";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import AddAdmin from "./Components/AddAdmin";
import AddStaff from "./Components/AddStaff";
import Addmenu from "./Components/AddMenu"
import DisplayMenu from "./Components/DisplayMenu"
import DeleteMenu from "./Components/DeleteItem";
import Cart from "./Components/Cart"
import CustomerOrders from "./Components/CustomerOrders"


import MonthOrdersPage from "./Components/MonthWiseOrders";
import DayOrdersPage from "./Components/DayWiseOrders";


function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();
  const [userRole, setUserRole] = useState(localStorage.getItem("role"));

  // ✅ Keep checking localStorage for updates
  useEffect(() => {
    setUserRole(localStorage.getItem("role"));
  }, [location.pathname]); // ✅ Updates when route changes

  const hideNavbarPages = ["/login", "/signup"];
  const showNavbar = !hideNavbarPages.includes(location.pathname);

  return (
    <div className="bg-gray-50 min-h-screen">
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={localStorage.getItem("role") ? <Navigate to={`/${localStorage.getItem("role")}-dashboard`} /> : <Login />} 
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />

        {/* ✅ Admin Routes */}
        <Route path="/admin-dashboard" element={userRole === "admin" ? <AdminDashboard /> : <Navigate to="/login" />} />
        <Route path="/admin/add-admin" element={userRole === "admin" ? <AddAdmin /> : <Navigate to="/login" />} /> 
        <Route path="/admin/add-staff" element={userRole === "admin" ? <AddStaff /> : <Navigate to="/login" />} />
        <Route path="/admin/add-menu" element={userRole === "admin" ? <Addmenu /> : <Navigate to="/login" />} />
        <Route path="/delete-menu-item" element={userRole === "admin" ? <DeleteMenu /> : <Navigate to="/login" />} />
         {/* <Route path="/admin/manage-staff" element={userRole === "admin" ? <ManageStaff /> : <Navigate to="/login" />} /> */}
        <Route path="/admin/orders-daily" element={userRole === "admin" ? <DayOrdersPage /> : <Navigate to="/login" />} />   
        <Route path="/admin/orders-monthly" element={userRole === "admin" ? <MonthOrdersPage /> : <Navigate to="/login" />} />  

        {/* ✅ Staff Routes */}
        <Route path="/staff-dashboard" element={userRole === "staff" ? <StaffDashboard /> : <Navigate to="/login" />} />
        {/* <Route path="/staff/add-menu" element={userRole === "staff" ? <AddMenu /> : <Navigate to="/login" />} />
        <Route path="/staff/pending-orders" element={userRole === "staff" ? <PendingOrders /> : <Navigate to="/login" />} /> */}

        {/* ✅ Customer Routes */}
          <Route path="/customer-dashboard" element={userRole === "customer" ? <CustomerDashboard /> : <Navigate to="/login" />} />
         <Route path="/customer/menu" element={userRole === "customer" ? <DisplayMenu /> : <Navigate to="/login" />} />
        <Route path="/customer/cart" element={userRole === "customer" ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/customer/orders" element={userRole === "customer" ? <CustomerOrders /> : <Navigate to="/login" />} /> 

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}  

export default App;
