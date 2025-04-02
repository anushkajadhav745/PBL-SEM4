import React, { useState } from "react";
import axios from "axios";

const AddStaff = () => {
  const [staffData, setStaffData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    position: "",
    profilePic: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setStaffData({ ...staffData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const token = localStorage.getItem("token"); // Assuming the admin is logged in and token is stored
      const response = await axios.post("http://localhost:4000/api/admin/add-staff", staffData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(response.data.message);
    } catch (err) {
      setError(err.response?.data?.message || "Error adding staff");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Staff</h2>
      {message && <p className="text-green-500 text-center">{message}</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" value={staffData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="email" name="email" placeholder="Email" value={staffData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="password" name="password" placeholder="Password" value={staffData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="phone" placeholder="Phone" value={staffData.phone} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="position" placeholder="Position" value={staffData.position} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="profilePic" placeholder="Profile Picture URL" value={staffData.profilePic} onChange={handleChange} className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Add Staff</button>
      </form>
    </div>
  );
};

export default AddStaff;
