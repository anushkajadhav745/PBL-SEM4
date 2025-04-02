// import React, { useState } from "react";
// import axios from "axios";

// const AddAdmin = () => {
//   const [adminData, setAdminData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     phone: "",
//     profilePic: ""
//   });
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setAdminData({ ...adminData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:4000/api/admin/add-admin", adminData);
//       setMessage(response.data.message);
//     } catch (err) {
//       setError(err.response?.data?.message || "Error adding admin");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
//       <h2 className="text-2xl font-semibold text-center mb-4">Add Admin</h2>
//       {message && <p className="text-green-500 text-center">{message}</p>}
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Name" value={adminData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="email" name="email" placeholder="Email" value={adminData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="password" name="password" placeholder="Password" value={adminData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="text" name="phone" placeholder="Phone" value={adminData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="text" name="profilePic" placeholder="Profile Picture URL" value={adminData.profilePic} onChange={handleChange} className="w-full p-2 border rounded" />
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Admin</button>
//       </form>
//     </div>
//   );
// };

// export default AddAdmin;

import React, { useState } from "react";
import axios from "axios";

const AddAdmin = () => {
  const [adminData, setAdminData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    profilePic: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Unauthorized: Please log in first.");
        return;
      }

      const response = await axios.post("http://localhost:4000/api/admin/add-admin", adminData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Error adding admin");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Admin</h2>
      {message && <p className="text-green-500 text-center">{message}</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={adminData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={adminData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" value={adminData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="phone" placeholder="Phone" value={adminData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="profilePic" placeholder="Profile Picture URL" value={adminData.profilePic} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;
