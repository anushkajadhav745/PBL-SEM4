// import React, { useState } from "react";
// import axios from "axios";

// export default function AddMenu() {
//   const [formData, setFormData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Snacks",
//     available: true,
//     imageUrl: "",
//     preparationTime: 10,
//     rating: 0,
//   });
  
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     try {
//       const response = await axios.post("http://localhost:4000/api/admin/add-admin/menu/add-menu", formData, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setMessage(response.data.message);
//       setFormData({
//         name: "",
//         description: "",
//         price: "",
//         category: "Snacks",
//         available: true,
//         imageUrl: "",
//         preparationTime: 10,
//         rating: 0,
//       });
//     } catch (error) {
//       setMessage(error.response?.data?.message || "Server error");
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
//       <h2 className="text-2xl font-bold mb-4">Add New Menu Item</h2>
//       {message && <p className="text-red-500">{message}</p>}
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Item Name" className="w-full p-2 border rounded mb-2" required />
//         <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2"></textarea>
//         <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
//         <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded mb-2">
//           <option>Snacks</option>
//           <option>Beverages</option>
//           <option>Main Course</option>
//           <option>Desserts</option>
//         </select>
//         <input type="text" name="imageUrl" value={formData.imageUrl} onChange={handleChange} placeholder="Image URL" className="w-full p-2 border rounded mb-2" />
//         <input type="number" name="preparationTime" value={formData.preparationTime} onChange={handleChange} placeholder="Preparation Time (min)" className="w-full p-2 border rounded mb-2" />
//         <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (0-5)" className="w-full p-2 border rounded mb-2" min="0" max="5" step="0.1" />
//         <label className="flex items-center space-x-2 mb-2">
//           <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
//           <span>Available</span>
//         </label>
//         <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Menu Item</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from "react";
import axios from "axios";
import ImageUpload from "./imageUpload";

export default function AddMenu() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Snacks",
    available: true,
    preparationTime: 10,
    rating: 0,
  });
  const [imageFile, setImageFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "image") {
      setImageFile(e.target.files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
  
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    if (imageFile) {
      data.append("image", imageFile);
    }
  
    try {
      const response = await axios.post("http://localhost:4000/api/admin/menu/add-menu", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
  
      setMessage(response.data.message || "Menu item added successfully!");
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "Snacks",
        available: true,
        preparationTime: 10,
        rating: 0,
      });
      setImageFile(null);
  
    } catch (error) {
      console.error("Error adding menu item:", error);
      setMessage(error.response?.data?.message || "Server error");
    }
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add New Menu Item</h2>
      {message && <p className="text-red-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Item Name" className="w-full p-2 border rounded mb-2" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="w-full p-2 border rounded mb-2" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="w-full p-2 border rounded mb-2" required />
        <select name="category" value={formData.category} onChange={handleChange} className="w-full p-2 border rounded mb-2">
          <option>Snacks</option>
          <option>Beverages</option>
          <option>Main Course</option>
          <option>Desserts</option>
        </select>
        <input type="file" name="image" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded mb-2" required />
        <input type="number" name="preparationTime" value={formData.preparationTime} onChange={handleChange} placeholder="Preparation Time (min)" className="w-full p-2 border rounded mb-2" />
        <input type="number" name="rating" value={formData.rating} onChange={handleChange} placeholder="Rating (0-5)" className="w-full p-2 border rounded mb-2" min="0" max="5" step="0.1" />
        <label className="flex items-center space-x-2 mb-2">
          <input type="checkbox" name="available" checked={formData.available} onChange={handleChange} />
          <span>Available</span>
        </label>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add Menu Item</button>
      </form>
    </div>
  );
}
