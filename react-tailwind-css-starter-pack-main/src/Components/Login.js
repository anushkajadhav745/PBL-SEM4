// // import { useState } from "react";
// // import axios from "axios";

// // const LoginPage = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [role, setRole] = useState("customer"); // Default role
// //   const [error, setError] = useState("");

// //   const handleLogin = async (e) => {
// //     e.preventDefault();
// //     setError(""); // Clear previous errors

// //     try {
// //       // Dynamically set API endpoint based on role
// //       const apiEndpoint = `http://localhost:5000/api/${role}/login`;

// //       const response = await axios.post(apiEndpoint, { email, password });

// //       // Handle successful login
// //       alert("Login successful!");
// //       console.log("Token:", response.data.token);
// //       localStorage.setItem("token", response.data.token);

// //       // Redirect based on role
// //       window.location.href = `/${role}/dashboard`;
// //     } catch (err) {
// //       setError(err.response?.data?.message || "Login failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
// //         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

// //         {error && <p className="text-red-500 text-sm text-center">{error}</p>}

// //         <form onSubmit={handleLogin} className="mt-4">
// //           <div>
// //             <label className="block text-gray-700">Email</label>
// //             <input
// //               type="email"
// //               placeholder="Enter email"
// //               className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="mt-3">
// //             <label className="block text-gray-700">Password</label>
// //             <input
// //               type="password"
// //               placeholder="Enter password"
// //               className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //               required
// //             />
// //           </div>

// //           <div className="mt-3">
// //             <label className="block text-gray-700">Role</label>
// //             <select
// //               className="w-full p-2 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
// //               value={role}
// //               onChange={(e) => setRole(e.target.value)}
// //             >
// //               <option value="customer">Customer</option>
// //               <option value="staff">Staff</option>
// //               <option value="admin">Admin</option>
// //             </select>
// //           </div>

// //           <button
// //             type="submit"
// //             className="w-full px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
// //           >
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoginPage;


// import React, { useState } from "react";
// import axios from "axios";

// const Login = () => {
//   const [role, setRole] = useState("customer"); // Default role
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
  
//     let endpoint = "";
//     if (role === "admin") {
//       endpoint = "http://localhost:4000/api/admin/login";
//     } else if (role === "customer") {
//       endpoint = "http://localhost:4000/api/customer/login";
//     } else if (role === "staff") {
//       endpoint = "http://localhost:4000/api/staff/login";
//     }
  
//     try {
//       const response = await axios.post(endpoint, { email, password });
  
//       // ✅ Store token based on role
//       if (role === "admin") {
//         localStorage.setItem("adminToken", response.data.token);
//         localStorage.setItem("role", "admin");
//         window.location.href = "/admin-dashboard"; // ✅ Redirect
//       } else if (role === "customer") {
//         localStorage.setItem("customerToken", response.data.token);
//         localStorage.setItem("role", "customer");
//         window.location.href = "/customer-dashboard";
//       } else if (role === "staff") {
//         localStorage.setItem("staffToken", response.data.token);
//         localStorage.setItem("role", "staff");
//         window.location.href = "/staff-dashboard";
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || "Login failed");
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

//         {error && <p className="text-red-500 text-sm text-center">{error}</p>}

//         <form onSubmit={handleLogin} className="space-y-4">
//           {/* Role Selection */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Select Role</label>
//             <select
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//               className="w-full p-2 border rounded mt-1"
//             >
//               <option value="customer">Customer</option>
//               <option value="admin">Admin</option>
//               <option value="staff">Staff</option>
//             </select>
//           </div>

//           {/* Email Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border rounded mt-1"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border rounded mt-1"
//               required
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackI from "../Assests/back2.avif"

const Login = () => {
  const navigate = useNavigate();

  // ✅ Redirect already logged-in users to their dashboard
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "staff") {
      navigate("/staff-dashboard");
    } else if (role === "customer") {
      navigate("/customer-dashboard");
    }
  }, []);

  const [role, setRole] = useState("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    let endpoint = "";
    if (role === "admin") {
      endpoint = "http://localhost:4000/api/admin/login";
    } else if (role === "customer") {
      endpoint = "http://localhost:4000/api/customer/login";
    } else if (role === "staff") {
      endpoint = "http://localhost:4000/api/staff/login";
    }

    try {
      const response = await axios.post(endpoint, { email, password });

      // ✅ Store role and token
      localStorage.setItem("role", role);
      localStorage.setItem("token", response.data.token);

      //alert(response.data.message);

      // ✅ Redirect based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "customer") {
        navigate("/customer-dashboard");
      } else {
        navigate("/staff-dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
  
    <div 
  className="flex justify-center items-center min-h-screen relative bg-cover bg-center"
  style={{ backgroundImage: `url(${BackI}`,backgroundSize: "cover", 
            backgroundPosition: "center" }}
>
  {/* Blur Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-sm"></div>

  {/* Login Box */}
  <div className="relative bg-white p-6 rounded-lg shadow-md w-96">
    <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>

    {error && <p className="text-red-500 text-sm text-center">{error}</p>}

    <form onSubmit={handleLogin} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Select Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full p-2 border rounded mt-1"
        >
          <option value="customer">Customer</option>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded mt-1"
          required
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white p-2 rounded hover:bg-blue-600"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  </div>
</div>
  );
};

export default Login;
