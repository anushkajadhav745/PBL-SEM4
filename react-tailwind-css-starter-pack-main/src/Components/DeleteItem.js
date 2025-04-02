

// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const MenuPage = () => {
// //   const [menuItems, setMenuItems] = useState([]);



// // useEffect(() => {
// //     const token = localStorage.getItem("token");
// //     axios.get("http://localhost:4000/api/admin/all-items", {
// //       headers: { Authorization: `Bearer ${token}` } // Include token if required
// //     })
// //       .then(response => {
// //         if (response.data.menuItems) {
// //           setMenuItems(response.data.menuItems);  // Extracting the array from the object
// //         } else {
// //           console.error("Unexpected API response:", response.data);
// //         }
// //       })
// //       .catch(error => console.error("Error fetching menu items:", error));
// //   }, []);
  

// // const handleDelete = async (menuId) => {
// //     try {
// //       const token = localStorage.getItem("token"); // Get token from local storage (or context/state)
      
// //       if (!token) {
// //         console.error("No token found. User is not authenticated.");
// //         toast.error("Unauthorized: Please log in again.");
// //         return;
// //       }
  
// //       await axios.delete(`http://localhost:4000/api/admin/delete-menu/${menuId}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}` // Attach token
// //         }
// //       });
  
// //       setMenuItems(menuItems.filter(item => item.menuId !== menuId));
// //       toast.success("Menu item deleted successfully");
  
// //     } catch (error) {
// //       if (error.response && error.response.status === 401) {
// //         toast.error("Unauthorized: Please log in again.");
// //       } else {
// //         toast.error("Error deleting menu item");
// //       }
// //       console.error("Delete error:", error);
// //     }
// //   };
  

// //   return (
// //     <div className="grid grid-cols-3 gap-6 p-6">
// //       {menuItems.map(item => (
// //         <div key={item.menuId} className="p-4 shadow-lg rounded-xl border border-gray-300">
// //           <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
// //           <div className="p-4">
// //             <h2 className="text-lg font-bold">{item.name}</h2>
// //             <p className="text-sm text-gray-600">{item.description}</p>
// //             <p className="text-md font-semibold mt-2">Price: ${item.price}</p>
// //             <p className="text-sm text-gray-500">Category: {item.category}</p>
// //             <p className={item.available ? "text-green-600" : "text-red-600"}> {item.available ? "Available" : "Out of Stock"} </p>
// //             <button className="bg-red-500 text-white mt-3 px-4 py-2 rounded-md" onClick={() => handleDelete(item.menuId)}>Delete</button>
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default MenuPage;

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const MenuPage = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [editItem, setEditItem] = useState(null);
//   const [showEditModal, setShowEditModal] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     axios
//       .get("http://localhost:4000/api/admin/all-items", {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((response) => {
//         if (response.data.menuItems) {
//           setMenuItems(response.data.menuItems);
//         } else {
//           console.error("Unexpected API response:", response.data);
//         }
//       })
//       .catch((error) => console.error("Error fetching menu items:", error));
//   }, []);

//   const handleDelete = async (menuId) => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this item?");
//     if (!confirmDelete) return;

//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         toast.error("Unauthorized: Please log in again.");
//         return;
//       }

//       await axios.delete(`http://localhost:4000/api/admin/menu/${menuId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setMenuItems(menuItems.filter((item) => item.menuId !== menuId));
//       toast.success("Menu item deleted successfully");
//     } catch (error) {
//       if (error.response && error.response.status === 401) {
//         toast.error("Unauthorized: Please log in again.");
//       } else {
//         toast.error("Error deleting menu item");
//       }
//       console.error("Delete error:", error);
//     }
//   };

//   const handleEdit = (item) => {
//     setEditItem(item);
//     setShowEditModal(true);
//   };

//   const handleSaveEdit = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         toast.error("Unauthorized: Please log in again.");
//         return;
//       }

//       await axios.put(`http://localhost:4000/api/admin/update-menu/${editItem.menuId}`, editItem, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       setMenuItems(menuItems.map((item) => (item.menuId === editItem.menuId ? editItem : item)));
//       toast.success("Menu item updated successfully");
//       setShowEditModal(false);
//     } catch (error) {
//       toast.error("Error updating menu item");
//       console.error("Update error:", error);
//     }
//   };

//   return (
//     <div className="grid grid-cols-3 gap-6 p-6">
//       {menuItems.map((item) => (
//         <div key={item.menuId} className="p-4 shadow-lg rounded-xl border border-gray-300">
//           <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
//           <div className="p-4">
//             <h2 className="text-lg font-bold">{item.name}</h2>
//             <p className="text-sm text-gray-600">{item.description}</p>
//             <p className="text-md font-semibold mt-2">Price: ₹{item.price}</p>
//             <p className="text-sm text-gray-500">Category: {item.category}</p>
//             <p className={item.available ? "text-green-600" : "text-red-600"}>
//               {item.available ? "Available" : "Out of Stock"}
//             </p>
//             <button
//               className="bg-blue-500 text-white mt-3 px-4 py-2 rounded-md mr-2"
//               onClick={() => handleEdit(item)}
//             >
//               Edit
//             </button>
//             <button
//               className="bg-red-500 text-white mt-3 px-4 py-2 rounded-md"
//               onClick={() => handleDelete(item.menuId)}
//             >
//               Delete
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Edit Modal */}
//       {showEditModal && editItem && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg w-1/3">
//             <h2 className="text-lg font-bold mb-4">Edit Menu Item</h2>
//             <input
//               type="text"
//               className="w-full border p-2 mb-2"
//               value={editItem.name}
//               onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
//             />
//             <input
//               type="text"
//               className="w-full border p-2 mb-2"
//               value={editItem.description}
//               onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
//             />
//             <input
//               type="number"
//               className="w-full border p-2 mb-2"
//               value={editItem.price}
//               onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
//             />
//             <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2" onClick={handleSaveEdit}>
//               Save
//             </button>
//             <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setShowEditModal(false)}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MenuPage;

import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Dialog } from "@headlessui/react";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:4000/api/admin/all-items", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.menuItems) {
          setMenuItems(response.data.menuItems);
        } else {
          console.error("Unexpected API response:", response.data);
        }
      })
      .catch((error) => console.error("Error fetching menu items:", error));
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized: Please log in again.");
        return;
      }

      await axios.delete(`http://localhost:4000/api/admin/menu/${deleteItemId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMenuItems(menuItems.filter((item) => item.menuId !== deleteItemId));
      toast.success("Menu item deleted successfully");
      setShowDeleteModal(false);
    } catch (error) {
      toast.error("Error deleting menu item");
      console.error("Delete error:", error);
    }
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Unauthorized: Please log in again.");
        return;
      }

      await axios.put(`http://localhost:4000/api/admin/update-menu/${editItem.menuId}`, editItem, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMenuItems(menuItems.map((item) => (item.menuId === editItem.menuId ? editItem : item)));
      toast.success("Menu item updated successfully");
      setShowEditModal(false);
    } catch (error) {
      toast.error("Error updating menu item");
      console.error("Update error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Manage Menu Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.menuId} className="p-4 shadow-md rounded-xl border border-gray-300 bg-white flex flex-col items-center">
            <img src={item.imageUrl} alt={item.name} className="w-40 h-40 object-cover rounded-lg border border-black" />
            <div className="p-4 flex flex-col ">
              <h2 className="text-lg font-bold">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <p className="text-md font-semibold mt-2">Price: ₹{item.price}</p>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <p className={item.available ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                {item.available ? "Available" : "Out of Stock"}
              </p>
              <div className="mt-3 flex gap-2  items-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setDeleteItemId(item.menuId);
                    setShowDeleteModal(true);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      <Dialog open={showEditModal} onClose={() => setShowEditModal(false)} className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg w-96 shadow-lg">
          <Dialog.Title className="text-xl font-bold">Edit Menu Item</Dialog.Title>
          <input
            type="text"
            className="w-full border p-2 mb-2"
            value={editItem?.name || ""}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
            placeholder="Item Name"
          />
          <input
            type="text"
            className="w-full border p-2 mb-2"
            value={editItem?.description || ""}
            onChange={(e) => setEditItem({ ...editItem, description: e.target.value })}
            placeholder="Description"
          />
          <input
            type="number"
            className="w-full border p-2 mb-2"
            value={editItem?.price || ""}
            onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
            placeholder="Price"
          />
          <div className="flex items-center mb-4">
            <span className="mr-2 text-sm">Availability:</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={editItem?.available || false}
                onChange={(e) => setEditItem({ ...editItem, available: e.target.checked })}
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-green-500 peer-focus:ring-4 peer-focus:ring-green-300 transition"></div>
            </label>
          </div>
          <div className="flex justify-end gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleSaveEdit}>
              Save
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setShowEditModal(false)}>
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>

      {/* Delete Confirmation Modal */}
      <Dialog open={showDeleteModal} onClose={() => setShowDeleteModal(false)} className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <Dialog.Panel className="bg-white p-6 rounded-lg w-80 shadow-lg">
          <Dialog.Title className="text-lg font-bold text-center">Confirm Delete</Dialog.Title>
          <p className="text-gray-600 text-center my-4">Are you sure you want to delete this item?</p>
          <div className="flex justify-center gap-2">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={handleDelete}>
              Yes, Delete
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md" onClick={() => setShowDeleteModal(false)}>
              Cancel
            </button>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default MenuPage;
