// // // // // import React, { useState, useEffect } from "react";
// // // // // import { Card, CardContent } from "@/components/ui/card";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { Select, SelectItem } from "@/components/ui/select";

// // // // // const MenuDisplay = () => {
// // // // //     const [menuItems, setMenuItems] = useState([]);
// // // // //     const [filteredItems, setFilteredItems] = useState([]);
// // // // //     const [category, setCategory] = useState("All");
// // // // //     const [quantities, setQuantities] = useState({});

// // // // //     useEffect(() => {
// // // // //         fetch("http://localhost:4000/api/customer/menu") // Adjust API URL accordingly
// // // // //             .then(res => res.json())
// // // // //             .then(data => {
// // // // //                 setMenuItems(data);
// // // // //                 setFilteredItems(data);
// // // // //             })
// // // // //             .catch(err => console.error("Error fetching menu:", err));
// // // // //     }, []);

// // // // //     useEffect(() => {
// // // // //         if (category === "All") {
// // // // //             setFilteredItems(menuItems);
// // // // //         } else {
// // // // //             setFilteredItems(menuItems.filter(item => item.category === category));
// // // // //         }
// // // // //     }, [category, menuItems]);

// // // // //     const handleQuantityChange = (menuId, change) => {
// // // // //         setQuantities(prev => ({
// // // // //             ...prev,
// // // // //             [menuId]: Math.max(0, (prev[menuId] || 0) + change),
// // // // //         }));
// // // // //     };

// // // // //     return (
// // // // //         <div className="p-4">
// // // // //             <Select value={category} onValueChange={setCategory} className="mb-4">
// // // // //                 <SelectItem value="All">All Categories</SelectItem>
// // // // //                 <SelectItem value="Snacks">Snacks</SelectItem>
// // // // //                 <SelectItem value="Beverages">Beverages</SelectItem>
// // // // //                 <SelectItem value="Main Course">Main Course</SelectItem>
// // // // //                 <SelectItem value="Desserts">Desserts</SelectItem>
// // // // //             </Select>
// // // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // // //                 {filteredItems.map(item => (
// // // // //                     <Card key={item.menuId} className="p-4">
// // // // //                         <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-md" />
// // // // //                         <CardContent className="mt-2">
// // // // //                             <h3 className="text-lg font-semibold">{item.name}</h3>
// // // // //                             <p className="text-sm text-gray-600">{item.description}</p>
// // // // //                             <p className="font-bold mt-2">Price: ${item.price.toFixed(2)}</p>
// // // // //                             <div className="flex items-center gap-2 mt-2">
// // // // //                                 <Button onClick={() => handleQuantityChange(item.menuId, -1)}>-</Button>
// // // // //                                 <span className="px-3">{quantities[item.menuId] || 0}</span>
// // // // //                                 <Button onClick={() => handleQuantityChange(item.menuId, 1)}>+</Button>
// // // // //                             </div>
// // // // //                         </CardContent>
// // // // //                     </Card>
// // // // //                 ))}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default MenuDisplay;
// // // // import React, { useState, useEffect } from "react";

// // // // const MenuDisplay = () => {
// // // //     const [menuItems, setMenuItems] = useState([]);
// // // //     const [filteredItems, setFilteredItems] = useState([]);
// // // //     const [category, setCategory] = useState("All");
// // // //     const [quantities, setQuantities] = useState({});

// // // //     useEffect(() => {
// // // //         fetch("http://localhost:4000/api/customer/menu")
// // // //             .then((res) => res.json())
// // // //             .then((data) => {
// // // //                 setMenuItems(data);
// // // //                 setFilteredItems(data);
// // // //             })
// // // //             .catch((err) => console.error("Error fetching menu:", err));
// // // //     }, []);

// // // //     useEffect(() => {
// // // //         if (category === "All") {
// // // //             setFilteredItems(menuItems);
// // // //         } else {
// // // //             setFilteredItems(menuItems.filter((item) => item.category === category));
// // // //         }
// // // //     }, [category, menuItems]);

// // // //     const handleQuantityChange = (menuId, change) => {
// // // //         setQuantities((prev) => ({
// // // //             ...prev,
// // // //             [menuId]: Math.max(0, (prev[menuId] || 0) + change),
// // // //         }));
// // // //     };

// // // //     return (
// // // //         <div className="p-4">
// // // //             {/* Dropdown for category selection */}
// // // //             <select
// // // //                 value={category}
// // // //                 onChange={(e) => setCategory(e.target.value)}
// // // //                 className="p-2 border rounded-md mb-4"
// // // //             >
// // // //                 <option value="All">All Categories</option>
// // // //                 <option value="Snacks">Snacks</option>
// // // //                 <option value="Beverages">Beverages</option>
// // // //                 <option value="Main Course">Main Course</option>
// // // //                 <option value="Desserts">Desserts</option>
// // // //             </select>

// // // //             {/* Menu Grid */}
// // // //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // // //                 {filteredItems.map((item) => (
// // // //                     <div key={item.menuId} className="border rounded-lg p-4 shadow-lg">
// // // //                         <img
// // // //                             src={item.imageUrl}
// // // //                             alt={item.name}
// // // //                             className="w-full h-40 object-cover rounded-md"
// // // //                         />
// // // //                         <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
// // // //                         <p className="text-sm text-gray-600">{item.description}</p>
// // // //                         <p className="font-bold mt-2">Price: ${item.price.toFixed(2)}</p>

// // // //                         {/* Quantity Controls */}
// // // //                         <div className="flex items-center gap-2 mt-2">
// // // //                             <button
// // // //                                 onClick={() => handleQuantityChange(item.menuId, -1)}
// // // //                                 className="px-3 py-1 bg-gray-300 rounded-md"
// // // //                             >
// // // //                                 -
// // // //                             </button>
// // // //                             <span className="px-3">{quantities[item.menuId] || 0}</span>
// // // //                             <button
// // // //                                 onClick={() => handleQuantityChange(item.menuId, 1)}
// // // //                                 className="px-3 py-1 bg-gray-300 rounded-md"
// // // //                             >
// // // //                                 +
// // // //                             </button>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default MenuDisplay;
// // // import React, { useState, useEffect } from "react";

// // // const MenuDisplay = () => {
// // //     const [menuItems, setMenuItems] = useState([]); // Ensure array type
// // //     const [filteredItems, setFilteredItems] = useState([]); // Ensure array type
// // //     const [category, setCategory] = useState("All");
// // //     const [quantities, setQuantities] = useState({});

// // //     useEffect(() => {
// // //         // fetch("http://localhost:4000/api/customer/menu")
// // //         //     .then((res) => res.json())
// // //         //     .then((data) => {
// // //         //         if (Array.isArray(data)) {  // ✅ Check if response is an array
// // //         //             setMenuItems(data);
// // //         //             setFilteredItems(data);
// // //         //         } else {
// // //         //             console.error("API response is not an array", data);
// // //         //             setMenuItems([]);
// // //         //             setFilteredItems([]);
// // //         //         }
// // //         //     })
// // //         //     .catch((err) => {
// // //         //         console.error("Error fetching menu:", err);
// // //         //         setMenuItems([]);
// // //         //         setFilteredItems([]);
// // //         //     });
// // //         fetch("http://localhost:4000/api/customer/menu")
// // //     .then(res => res.json())
// // //     .then(data => {
// // //         if (Array.isArray(data.menu)) {
// // //             setMenuItems(data.menu); // ✅ Correct: Accessing the `menu` array inside the response
// // //             setFilteredItems(data.menu);
// // //         } else {
// // //             console.error("Menu data is not an array:", data);
// // //         }
// // //     })
// // //     .catch(err => console.error("Error fetching menu:", err));
// // //     }, []);

// // //     useEffect(() => {
// // //         if (category === "All") {
// // //             setFilteredItems(menuItems);
// // //         } else {
// // //             setFilteredItems(menuItems.filter((item) => item.category === category));
// // //         }
// // //     }, [category, menuItems]);

// // //     const handleQuantityChange = (menuId, change) => {
// // //         setQuantities((prev) => ({
// // //             ...prev,
// // //             [menuId]: Math.max(0, (prev[menuId] || 0) + change),
// // //         }));
// // //     };

// // //     return (
// // //         <div className="p-4">
// // //             {/* Dropdown for category selection */}
// // //             <select
// // //                 value={category}
// // //                 onChange={(e) => setCategory(e.target.value)}
// // //                 className="p-2 border rounded-md mb-4"
// // //             >
// // //                 <option value="All">All Categories</option>
// // //                 <option value="Snacks">Snacks</option>
// // //                 <option value="Beverages">Beverages</option>
// // //                 <option value="Main Course">Main Course</option>
// // //                 <option value="Desserts">Desserts</option>
// // //             </select>

// // //             {/* Handle cases where menu is loading or empty */}
// // //             {filteredItems.length === 0 ? (
// // //                 <p className="text-center text-gray-500">No menu items available.</p>
// // //             ) : (
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// // //                     {filteredItems.map((item) => (
// // //                         <div key={item.menuId} className="border rounded-lg p-4 shadow-lg">
// // //                             <img
// // //                                 src={item.imageUrl}
// // //                                 alt={item.name}
// // //                                 className="w-full h-40 object-cover rounded-md"
// // //                             />
// // //                             <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
// // //                             <p className="text-sm text-gray-600">{item.description}</p>
// // //                             <p className="font-bold mt-2">Price: ${item.price.toFixed(2)}</p>

// // //                             {/* Quantity Controls */}
// // //                             <div className="flex items-center gap-2 mt-2">
// // //                                 <button
// // //                                     onClick={() => handleQuantityChange(item.menuId, -1)}
// // //                                     className="px-3 py-1 bg-gray-300 rounded-md"
// // //                                 >
// // //                                     -
// // //                                 </button>
// // //                                 <span className="px-3">{quantities[item.menuId] || 0}</span>
// // //                                 <button
// // //                                     onClick={() => handleQuantityChange(item.menuId, 1)}
// // //                                     className="px-3 py-1 bg-gray-300 rounded-md"
// // //                                 >
// // //                                     +
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     ))}
// // //                 </div>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default MenuDisplay;
// // import React, { useState, useEffect } from "react";

// // const categories = ["All", "Snacks", "Beverages", "Main Course", "Desserts"];

// // const MenuDisplay = () => {
// //     const [menuItems, setMenuItems] = useState([]);
// //     const [filteredItems, setFilteredItems] = useState([]);
// //     const [selectedCategory, setSelectedCategory] = useState("All");
// //     const [quantities, setQuantities] = useState({});

// //     // Fetch menu items from API
// //     useEffect(() => {
// //         fetch("http://localhost:4000/api/customer/menu")
// //             .then(res => res.json())
// //             .then(data => {
// //                 if (Array.isArray(data.menu)) {
// //                     setMenuItems(data.menu);
// //                     setFilteredItems(data.menu);
// //                 } else {
// //                     console.error("Menu data is not an array:", data);
// //                 }
// //             })
// //             .catch(err => console.error("Error fetching menu:", err));
// //     }, []);

// //     // Filter menu based on selected category
// //     useEffect(() => {
// //         if (selectedCategory === "All") {
// //             setFilteredItems(menuItems);
// //         } else {
// //             setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
// //         }
// //     }, [selectedCategory, menuItems]);

// //     // Handle quantity change
// //     const handleQuantityChange = (menuId, change) => {
// //         setQuantities(prev => ({
// //             ...prev,
// //             [menuId]: Math.max(0, (prev[menuId] || 0) + change),
// //         }));
// //     };

// //     return (
// //         <div className="p-4">
// //             {/* Category Selection Buttons */}
// //             <div className="flex gap-3 mb-4">
// //                 {categories.map(category => (
// //                     <button
// //                         key={category}
// //                         className={`px-4 py-2 rounded-md text-white font-semibold ${
// //                             selectedCategory === category ? "bg-blue-600" : "bg-gray-400"
// //                         }`}
// //                         onClick={() => setSelectedCategory(category)}
// //                     >
// //                         {category}
// //                     </button>
// //                 ))}
// //             </div>

// //             {/* Menu Items */}
// //             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
// //                 {filteredItems.map(item => (
// //                     <div key={item.menuId} className="border p-4 rounded-lg shadow-md">
// //                         <img src={item.imageUrl} alt={item.name} className="w-full h-40 object-cover rounded-md" />
// //                         <div className="mt-2">
// //                             <h3 className="text-lg font-semibold">{item.name}</h3>
// //                             <p className="text-sm text-gray-600">{item.description}</p>
// //                             <p className="font-bold mt-2">Price: ₹{item.price}</p>
// //                             <div className="flex items-center gap-2 mt-2">
// //                                 <button
// //                                     className="px-3 py-1 bg-red-500 text-white rounded-md"
// //                                     onClick={() => handleQuantityChange(item.menuId, -1)}
// //                                 >
// //                                     -
// //                                 </button>
// //                                 <span className="px-3">{quantities[item.menuId] || 0}</span>
// //                                 <button
// //                                     className="px-3 py-1 bg-green-500 text-white rounded-md"
// //                                     onClick={() => handleQuantityChange(item.menuId, 1)}
// //                                 >
// //                                     +
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </div>
// //     );
// // };

// // export default MenuDisplay;
// import React, { useState, useEffect } from "react";
// import Card from "./MenuCard"; // Importing the Card component

// const categories = ["All", "Snacks", "Beverages", "Main Course", "Desserts"];

// const MenuDisplay = () => {
//     const [menuItems, setMenuItems] = useState([]);
//     const [filteredItems, setFilteredItems] = useState([]);
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [quantities, setQuantities] = useState({});
//     const [cart, setCart] = useState([]);

//     // Fetch menu items from API
//     useEffect(() => {
//         fetch("http://localhost:4000/api/customer/menu")
//             .then(res => res.json())
//             .then(data => {
//                 if (Array.isArray(data.menu)) {
//                     setMenuItems(data.menu);
//                     setFilteredItems(data.menu);
//                 } else {
//                     console.error("Menu data is not an array:", data);
//                 }
//             })
//             .catch(err => console.error("Error fetching menu:", err));
//     }, []);

//     // Filter menu based on selected category
//     useEffect(() => {
//         if (selectedCategory === "All") {
//             setFilteredItems(menuItems);
//         } else {
//             setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
//         }
//     }, [selectedCategory, menuItems]);

//     // Handle quantity change
//     const handleQuantityChange = (menuId, change) => {
//         setQuantities(prev => ({
//             ...prev,
//             [menuId]: Math.max(0, (prev[menuId] || 0) + change),
//         }));
//     };

//     // Handle Add to Cart
//     const handleAddToCart = (item) => {
//         if ((quantities[item.menuId] || 0) > 0) {
//             setCart(prevCart => [...prevCart, { ...item, quantity: quantities[item.menuId] }]);
//             alert(`${item.name} added to cart!`);
//         } else {
//             alert("Please select a quantity before adding to cart.");
//         }
//     };

//     return (
//         <div className="p-4">
//             {/* Category Selection Buttons */}
//             <div className="flex gap-3 mb-4">
//                 {categories.map(category => (
//                     <button
//                         key={category}
//                         className={`px-4 py-2 rounded-md text-white font-semibold ${
//                             selectedCategory === category ? "bg-blue-600" : "bg-gray-400"
//                         }`}
//                         onClick={() => setSelectedCategory(category)}
//                     >
//                         {category}
//                     </button>
//                 ))}
//             </div>

//             {/* Menu Items */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {filteredItems.map(item => (
//                     <Card
//                         key={item.menuId}
//                         item={item}
//                         quantity={quantities[item.menuId] || 0}
//                         onQuantityChange={handleQuantityChange}
//                         onAddToCart={handleAddToCart}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default MenuDisplay;
import React, { useState, useEffect } from "react";
import Card from "./MenuCard"; // Importing the Card component

const categories = ["All", "Snacks", "Beverages", "Main Course", "Desserts"];

const MenuDisplay = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [quantities, setQuantities] = useState({});
    const [cart, setCart] = useState([]);

    // Fetch menu items from API
    useEffect(() => {
        fetch("http://localhost:4000/api/customer/menu")
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data.menu)) {
                    setMenuItems(data.menu);
                    setFilteredItems(data.menu);
                } else {
                    console.error("Menu data is not an array:", data);
                }
            })
            .catch(err => console.error("Error fetching menu:", err));
    }, []);

    // Filter menu based on selected category
    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredItems(menuItems);
        } else {
            setFilteredItems(menuItems.filter(item => item.category === selectedCategory));
        }
    }, [selectedCategory, menuItems]);

    // Handle quantity change
    const handleQuantityChange = (menuId, change) => {
        setQuantities(prev => ({
            ...prev,
            [menuId]: Math.max(0, (prev[menuId] || 0) + change),
        }));
    };

    // Handle Add to Cart
    const handleAddToCart = (item) => {
        if ((quantities[item.menuId] || 0) > 0) {
            setCart(prevCart => [...prevCart, { ...item, quantity: quantities[item.menuId] }]);
            alert(`${item.name} added to cart!`);
        } else {
            alert("Please select a quantity before adding to cart.");
        }
    };

    return (
        <div className="p-4 bg-red-50">
            {/* Category Selection Buttons */}
            <div className="flex justify-center gap-3 mb-4 flex-wrap">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-md text-black border border-black border-double font-semibold ${
                            selectedCategory === category ? "bg-yellow-400" : "bg-white-400"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Menu Items (Grid Structure) */}
            <div className="flex flex-wrap justify-center gap-4">

                {filteredItems.map(item => (
                    <Card
                        key={item.menuId}
                        item={item}
                        quantity={quantities[item.menuId] || 0}
                        onQuantityChange={handleQuantityChange}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>
        </div>
    );
};

export default MenuDisplay;
