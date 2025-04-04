// // // // import { useState } from "react";
// // // // import axios from "axios";

// // // // const CustomerSignup = () => {
// // // //     const [formData, setFormData] = useState({
// // // //         name: "",
// // // //         email: "",
// // // //         password: "",
// // // //         phone: "",
// // // //         role: "student",
// // // //         studentId: "",
// // // //         department: "",
// // // //         year: "",
// // // //         employeeId: "",
// // // //         designation: "",
// // // //         hostelResident: false,
// // // //         profilePic: null
// // // //     });

// // // //     const [loading, setLoading] = useState(false);
// // // //     const [error, setError] = useState("");

// // // //     const handleChange = (e) => {
// // // //         const { name, value, type, checked, files } = e.target;
// // // //         if (type === "checkbox") {
// // // //             setFormData({ ...formData, [name]: checked });
// // // //         } else if (type === "file") {
// // // //             setFormData({ ...formData, profilePic: files[0] });
// // // //         } else {
// // // //             setFormData({ ...formData, [name]: value });
// // // //         }
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         setLoading(true);
// // // //         setError("");

// // // //         try {
// // // //             const formDataToSend = new FormData();
// // // //             Object.keys(formData).forEach((key) => {
// // // //                 if (formData[key]) {
// // // //                     formDataToSend.append(key, formData[key]);
// // // //                 }
// // // //             });

// // // //             const response = await axios.post("/api/customers/signup", formDataToSend, {
// // // //                 headers: { "Content-Type": "multipart/form-data" }
// // // //             });

// // // //             alert("Signup successful!");
// // // //             console.log(response.data);
// // // //         } catch (err) {
// // // //             setError(err.response?.data?.message || "Signup failed!");
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
// // // //             <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Customer Signup</h2>
// // // //             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
// // // //             <form onSubmit={handleSubmit} className="space-y-4">
// // // //                 <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                 <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />

// // // //                 <label className="block text-lg font-semibold">Role</label>
// // // //                 <select name="role" value={formData.role} onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
// // // //                     <option value="student">Student</option>
// // // //                     <option value="teacher">Teacher</option>
// // // //                     <option value="staff">Staff</option>
// // // //                     <option value="visitor">Visitor</option>
// // // //                 </select>

// // // //                 {formData.role === "student" && (
// // // //                     <>
// // // //                         <input type="text" name="studentId" placeholder="Student ID" value={formData.studentId} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                         <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                         <input type="number" name="year" placeholder="Year" value={formData.year} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                         <label className="flex items-center space-x-2">
// // // //                             <input type="checkbox" name="hostelResident" checked={formData.hostelResident} onChange={handleChange} className="w-5 h-5" />
// // // //                             <span>Hostel Resident?</span>
// // // //                         </label>
// // // //                     </>
// // // //                 )}

// // // //                 {(formData.role === "teacher" || formData.role === "staff") && (
// // // //                     <>
// // // //                         <input type="text" name="employeeId" placeholder="Employee ID" value={formData.employeeId} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                         <input type="text" name="designation" placeholder="Designation" value={formData.designation} onChange={handleChange} required className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
// // // //                     </>
// // // //                 )}

// // // //                 <label className="block text-lg font-semibold">Profile Picture</label>
// // // //                 <input type="file" name="profilePic" accept="image/*" onChange={handleChange} className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />

// // // //                 <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
// // // //                     {loading ? "Signing up..." : "Sign Up"}
// // // //                 </button>
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default CustomerSignup;


// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // const CustomerSignup = () => {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     password: "",
// // //     phone: "",
// // //     role: "student", // Default role
// // //     studentId: "",
// // //     department: "",
// // //     year: "",
// // //     employeeId: "",
// // //     designation: "",
// // //     hostelResident: false,
// // //     profilePic: "",
// // //   });

// // //   const [message, setMessage] = useState("");
// // //   const [loading, setLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value, type, checked } = e.target;
// // //     setFormData({
// // //       ...formData,
// // //       [name]: type === "checkbox" ? checked : value,
// // //     });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setLoading(true);
// // //     setMessage("");
// // //     try {
// // //       const response = await axios.post("http://localhost:4000/api/customer/signup", formData);
// // //       setMessage(response.data.message);
// // //     } catch (error) {
// // //       setMessage(error.response?.data?.message || "Signup failed.");
// // //     }
// // //     setLoading(false);
// // //   };

// // //   return (
// // //     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
// // //       <h2 className="text-2xl font-bold mb-4">Customer Signup</h2>
// // //       {message && <p className="text-red-500 mb-4">{message}</p>}
// // //       <form onSubmit={handleSubmit}>
// // //         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full mb-2 p-2 border rounded" />
// // //         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
// // //         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full mb-2 p-2 border rounded" />
// // //         <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full mb-2 p-2 border rounded" />
        
// // //         <select name="role" value={formData.role} onChange={handleChange} className="w-full mb-2 p-2 border rounded">
// // //           <option value="student">Student</option>
// // //           <option value="teacher">Teacher</option>
// // //           <option value="staff">Staff</option>
// // //           <option value="visitor">Visitor</option>
// // //         </select>

// // //         {formData.role === "student" && (
// // //           <>
// // //             <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID" className="w-full mb-2 p-2 border rounded" />
// // //             <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full mb-2 p-2 border rounded" />
// // //             <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" min="1" max="5" className="w-full mb-2 p-2 border rounded" />
// // //           </>
// // //         )}

// // //         {(formData.role === "teacher" || formData.role === "staff") && (
// // //           <>
// // //             <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID" className="w-full mb-2 p-2 border rounded" />
// // //             <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="w-full mb-2 p-2 border rounded" />
// // //           </>
// // //         )}

// // //         <label className="flex items-center mb-2">
// // //           <input type="checkbox" name="hostelResident" checked={formData.hostelResident} onChange={handleChange} className="mr-2" />
// // //           Hostel Resident
// // //         </label>

// // //         <input type="text" name="profilePic" value={formData.profilePic} onChange={handleChange} placeholder="Profile Pic URL (Optional)" className="w-full mb-2 p-2 border rounded" />
        
// // //         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>
// // //           {loading ? "Signing up..." : "Sign Up"}
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default CustomerSignup;

// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const CustomerSignup = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     phone: "",
// //     role: "student", // Default role
// //     studentId: "",
// //     department: "",
// //     year: "",
// //     employeeId: "",
// //     designation: "",
// //     hostelResident: false,
// //     profilePic: "",
// //   });

// //   const [message, setMessage] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const navigate = useNavigate(); // React Router navigation hook

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     setFormData({
// //       ...formData,
// //       [name]: type === "checkbox" ? checked : value,
// //     });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setMessage("");

// //     try {
// //       const response = await axios.post("http://localhost:4000/api/customer/signup", formData);

// //       if (response.status === 201 || response.status === 200) {
// //         setMessage("Signup successful!");

// //         // Store token and role in localStorage (if returned by API)
// //         if (response.data.token) {
// //           localStorage.setItem("token", response.data.token);
// //         }
// //         localStorage.setItem("role", formData.role);

// //         // Redirect all roles to Customer Dashboard
// //         navigate("/CustomerDashboard");
// //       } else {
// //         setMessage(response.data.message || "Signup failed.");
// //       }
// //     } catch (error) {
// //       setMessage(error.response?.data?.message || "Signup failed.");
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
// //       <h2 className="text-2xl font-bold mb-4">Customer Signup</h2>
// //       {message && <p className="text-red-500 mb-4">{message}</p>}
      
// //       <form onSubmit={handleSubmit}>
// //         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full mb-2 p-2 border rounded" />
// //         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
// //         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full mb-2 p-2 border rounded" />
// //         <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full mb-2 p-2 border rounded" />

// //         <select name="role" value={formData.role} onChange={handleChange} className="w-full mb-2 p-2 border rounded">
// //           <option value="student">Student</option>
// //           <option value="teacher">Teacher</option>
// //           <option value="staff">Staff</option>
// //           <option value="visitor">Visitor</option>
// //         </select>

// //         {formData.role === "student" && (
// //           <>
// //             <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID" className="w-full mb-2 p-2 border rounded" />
// //             <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full mb-2 p-2 border rounded" />
// //             <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" min="1" max="5" className="w-full mb-2 p-2 border rounded" />
// //           </>
// //         )}

// //         {(formData.role === "teacher" || formData.role === "staff") && (
// //           <>
// //             <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID" className="w-full mb-2 p-2 border rounded" />
// //             <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="w-full mb-2 p-2 border rounded" />
// //           </>
// //         )}

// //         <label className="flex items-center mb-2">
// //           <input type="checkbox" name="hostelResident" checked={formData.hostelResident} onChange={handleChange} className="mr-2" />
// //           Hostel Resident
// //         </label>

// //         <input type="text" name="profilePic" value={formData.profilePic} onChange={handleChange} placeholder="Profile Pic URL (Optional)" className="w-full mb-2 p-2 border rounded" />
        
// //         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>
// //           {loading ? "Signing up..." : "Sign Up"}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default CustomerSignup;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const CustomerSignup = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     userType: "student", // Default user type
//     studentId: "",
//     department: "",
//     year: "",
//     employeeId: "",
//     designation: "",
//     hostelResident: false,
//     address: "", // For visitors
//     profilePic: "",
//   });

//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate(); // React Router navigation hook

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     try {
//       const response = await axios.post("http://localhost:4000/api/customer/signup", formData);

//       if (response.status === 201 || response.status === 200) {
//         setMessage("Signup successful!");

//         // Store token in localStorage (if returned by API)
//         if (response.data.token) {
//           localStorage.setItem("token", response.data.token);
//         }
//         localStorage.setItem("userType", formData.userType);

//         // Redirect based on user type
//         navigate("/CustomerDashboard");
//       } else {
//         setMessage(response.data.message || "Signup failed.");
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Signup failed.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Customer Signup</h2>
//       {message && <p className="text-red-500 mb-4">{message}</p>}
      
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full mb-2 p-2 border rounded" />
//         <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
//         <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full mb-2 p-2 border rounded" />
//         <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full mb-2 p-2 border rounded" />

//         <select name="userType" value={formData.userType} onChange={handleChange} className="w-full mb-2 p-2 border rounded">
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="staff">Staff</option>
//           <option value="visitor">Visitor</option>
//         </select>

//         {formData.userType === "student" && (
//           <>
//             <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID (Auto-generated if empty)" className="w-full mb-2 p-2 border rounded" />
//             <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full mb-2 p-2 border rounded" />
//             <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" min="1" max="5" className="w-full mb-2 p-2 border rounded" />
//             <label className="flex items-center mb-2">
//               <input type="checkbox" name="hostelResident" checked={formData.hostelResident} onChange={handleChange} className="mr-2" />
//               Hostel Resident
//             </label>
//           </>
//         )}

//         {(formData.userType === "teacher" || formData.userType === "staff") && (
//           <>
//             <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID (Auto-generated if empty)" className="w-full mb-2 p-2 border rounded" />
//             <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="w-full mb-2 p-2 border rounded" />
//           </>
//         )}

//         {formData.userType === "visitor" && (
//           <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full mb-2 p-2 border rounded" />
//         )}

//         <input type="text" name="profilePic" value={formData.profilePic} onChange={handleChange} placeholder="Profile Pic URL (Optional)" className="w-full mb-2 p-2 border rounded" />
        
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CustomerSignup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackI from "../Assests/back2.avif"

const CustomerSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    userType: "student", // Default user type
    role: "customer", // Always set role to "customer"
    studentId: "",
    department: "",
    year: "",
    employeeId: "",
    designation: "",
    hostelResident: false,
    address: "", // For visitors
    profilePic: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // React Router navigation hook

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
      role: "customer", // Ensure role remains "customer"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:4000/api/customer/signup", {
        ...formData,
        role: "customer", // Ensure role is included in the request
      });

      if (response.status === 201 || response.status === 200) {
        setMessage("Signup successful!");

        // Store token in localStorage (if returned by API)
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
        }
        localStorage.setItem("userType", formData.userType);
        localStorage.setItem("role", "customer"); // Store role in localStorage

        // Redirect to Customer Dashboard
        navigate("/CustomerDashboard");
      } else {
        setMessage(response.data.message || "Signup failed.");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Signup failed.");
    }

    setLoading(false);
  };

  return (
    // <div className="max-w-full mx-auto bg-white p-6 rounded-lg shadow-md my-4"
    // style={{ backgroundImage: `url(${BackI})`,backgroundSize: "cover", 
    //         backgroundPosition: "center"}} 
                 
    // >
    //   {/* Blur Overlay */}
    //   <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>
    //   <div className="relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-md my-4">
    //   <h2 className="text-2xl font-bold mb-4">Customer Signup</h2>
    //   {message && <p className="text-red-500 mb-4">{message}</p>}

    //   <form onSubmit={handleSubmit}>
    //     <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full mb-2 p-2 border rounded" />
    //     <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
    //     <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full mb-2 p-2 border rounded" />
    //     <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full mb-2 p-2 border rounded" />

    //     <select name="userType" value={formData.userType} onChange={handleChange} className="w-full mb-2 p-2 border rounded">
    //       <option value="student">Student</option>
    //       <option value="teacher">Teacher</option>
    //       <option value="staff">Staff</option>
    //       <option value="visitor">Visitor</option>
    //     </select>

    //     {formData.userType === "student" && (
    //       <>
    //         <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID (Auto-generated if empty)" className="w-full mb-2 p-2 border rounded" />
    //         <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full mb-2 p-2 border rounded" />
    //         <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" min="1" max="5" className="w-full mb-2 p-2 border rounded" />
    //         <label className="flex items-center mb-2">
    //           <input type="checkbox" name="hostelResident" checked={formData.hostelResident} onChange={handleChange} className="mr-2" />
    //           Hostel Resident
    //         </label>
    //       </>
    //     )}

    //     {(formData.userType === "teacher" || formData.userType === "staff") && (
    //       <>
    //         <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID (Auto-generated if empty)" className="w-full mb-2 p-2 border rounded" />
    //         <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="w-full mb-2 p-2 border rounded" />
    //       </>
    //     )}

    //     {formData.userType === "visitor" && (
    //       <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full mb-2 p-2 border rounded" />
    //     )}

    //     <input type="text" name="profilePic" value={formData.profilePic} onChange={handleChange} placeholder="Profile Pic URL (Optional)" className="w-full mb-2 p-2 border rounded" />

    //     <button type="submit" className="w-full bg-black text-white py-2 rounded" disabled={loading}>
    //       {loading ? "Signing up..." : "Sign Up"}
    //     </button>
    //   </form>
    //   </div>
      
    // </div>
    <div className="relative flex justify-center items-center min-h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${BackI})` }}
>
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

  {/* Form Container */}
  <div className="relative max-w-md mx-auto bg-white p-6 rounded-lg shadow-md my-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Customer Signup</h2>
    {message && <p className="text-red-500 mb-4">{message}</p>}

    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full mb-2 p-2 border rounded" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className="w-full mb-2 p-2 border rounded" />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required className="w-full mb-2 p-2 border rounded" />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required className="w-full mb-2 p-2 border rounded" />

      <select name="userType" value={formData.userType} onChange={handleChange} className="w-full mb-2 p-2 border rounded">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
        <option value="staff">Staff</option>
        <option value="visitor">Visitor</option>
      </select>

      {formData.userType === "student" && (
        <>
          <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} placeholder="Student ID (Auto-generated if empty)" className="w-full mb-2 p-2 border rounded" />
          <input type="text" name="department" value={formData.department} onChange={handleChange} placeholder="Department" className="w-full mb-2 p-2 border rounded" />
          <input type="number" name="year" value={formData.year} onChange={handleChange} placeholder="Year" min="1" max="5" className="w-full mb-2 p-2 border rounded" />
          <label className="flex items-center mb-2">
            <input type="checkbox" name="hostelResident" checked={formData.hostelResident} onChange={handleChange} className="mr-2" />
            Hostel Resident
          </label>
        </>
      )}

      {(formData.userType === "teacher" || formData.userType === "staff") && (
        <>
          <input type="text" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Employee ID (Auto-generated if empty)" className="w-full mb-2 p-2 border rounded" />
          <input type="text" name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation" className="w-full mb-2 p-2 border rounded" />
        </>
      )}

      {formData.userType === "visitor" && (
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" className="w-full mb-2 p-2 border rounded" />
      )}

      <input type="text" name="profilePic" value={formData.profilePic} onChange={handleChange} placeholder="Profile Pic URL (Optional)" className="w-full mb-2 p-2 border rounded" />

      <button type="submit" className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300" disabled={loading}>
        {loading ? "Signing up..." : "Sign Up"}
      </button>
    </form>
  </div>
</div>
  );
};

export default CustomerSignup;
