// // // // // // // // import React from "react";

// // // // // // // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // // // // // // //     return (
// // // // // // // //         <div className="border p-6 rounded-lg shadow-md flex flex-col items-center text-center">
// // // // // // // //             {/* Item Image */}
// // // // // // // //             <img src={item.imageUrl} alt={item.name} className="w-32 h-32 object-cover rounded-md mb-4" />

// // // // // // // //             {/* Item Name */}
// // // // // // // //             <h3 className="text-lg font-semibold">{item.name}</h3>

// // // // // // // //             {/* Item Description */}
// // // // // // // //             <p className="text-sm text-gray-600">{item.description}</p>

// // // // // // // //             {/* Item Price */}
// // // // // // // //             <p className="font-bold mt-2">Price: ₹{item.price}</p>

// // // // // // // //             {/* Quantity Control */}
// // // // // // // //             <div className="flex items-center gap-2 mt-3">
// // // // // // // //                 <button
// // // // // // // //                     className="px-3 py-1 bg-red-500 text-white rounded-md"
// // // // // // // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // // // // // // //                 >
// // // // // // // //                     -
// // // // // // // //                 </button>
// // // // // // // //                 <span className="px-3">{quantity || 0}</span>
// // // // // // // //                 <button
// // // // // // // //                     className="px-3 py-1 bg-green-500 text-white rounded-md"
// // // // // // // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // // // // // // //                 >
// // // // // // // //                     +
// // // // // // // //                 </button>
// // // // // // // //             </div>

// // // // // // // //             {/* Add to Cart Button */}
// // // // // // // //             <button
// // // // // // // //                 className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
// // // // // // // //                 onClick={() => onAddToCart(item)}
// // // // // // // //             >
// // // // // // // //                 Add to Cart
// // // // // // // //             </button>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Card;


// // // // // // // // import React from "react";

// // // // // // // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // // // // // // //     return (
// // // // // // // //         <div className="border p-4 rounded-lg shadow-md flex flex-col items-center text-center w-60 h-80">
// // // // // // // //             {/* Item Image */}
// // // // // // // //             <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md mb-2" />

// // // // // // // //             {/* Item Details */}
// // // // // // // //             <h3 className="text-md font-semibold">{item.name}</h3>
// // // // // // // //             <p className="text-xs text-gray-600">{item.description}</p>
// // // // // // // //             <p className="font-bold mt-1">₹{item.price}</p>

// // // // // // // //             {/* Quantity Control */}
// // // // // // // //             <div className="flex items-center gap-2 mt-2">
// // // // // // // //                 <button
// // // // // // // //                     className="px-2 py-1 bg-red-500 text-white rounded-md text-sm"
// // // // // // // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // // // // // // //                 >
// // // // // // // //                     -
// // // // // // // //                 </button>
// // // // // // // //                 <span className="px-2 text-sm">{quantity || 0}</span>
// // // // // // // //                 <button
// // // // // // // //                     className="px-2 py-1 bg-green-500 text-white rounded-md text-sm"
// // // // // // // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // // // // // // //                 >
// // // // // // // //                     +
// // // // // // // //                 </button>
// // // // // // // //             </div>

// // // // // // // //             {/* Add to Cart Button */}
// // // // // // // //             <button
// // // // // // // //                 className="mt-2 px-3 py-1 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
// // // // // // // //                 onClick={() => onAddToCart(item)}
// // // // // // // //             >
// // // // // // // //                 Add to Cart
// // // // // // // //             </button>
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default Card;
// // // // // // // import React from "react";

// // // // // // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // // // // // //     return (
// // // // // // //         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center w-60 h-80 bg-gradient-to-br from-indigo-100 to-purple-100">
// // // // // // //             {/* Item Image */}
// // // // // // //             <img 
// // // // // // //                 src={item.imageUrl} 
// // // // // // //                 alt={item.name} 
// // // // // // //                 className="w-24 h-24 object-cover rounded-lg shadow-md mb-3"
// // // // // // //             />

// // // // // // //             {/* Item Details */}
// // // // // // //             <h3 className="text-md font-semibold text-indigo-800">{item.name}</h3>
// // // // // // //             <p className="text-xs text-gray-700">{item.description}</p>
// // // // // // //             <p className="font-bold mt-1 text-teal-600">₹{item.price}</p>

// // // // // // //             {/* Quantity Control */}
// // // // // // //             <div className="flex items-center gap-2 mt-3">
// // // // // // //                 <button
// // // // // // //                     className="px-2 py-1 text-black font-bold rounded-lg text-sm shadow-md  transition border border-black"
// // // // // // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // // // // // //                 >
// // // // // // //                     −
// // // // // // //                 </button>
// // // // // // //                 <span className="px-2 text-sm font-semibold">{quantity || 0}</span>
// // // // // // //                 <button
// // // // // // //                     className="px-2 py-1  text-black font-bold rounded-lg text-sm shadow-md  transition  border border-black"
// // // // // // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // // // // // //                 >
// // // // // // //                     +
// // // // // // //                 </button>
// // // // // // //             </div>

// // // // // // //             {/* Add to Cart Button */}
// // // // // // //             <button
// // // // // // //                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md hover:bg-blue-700 transition"
// // // // // // //                 onClick={() => onAddToCart(item)}
// // // // // // //             >
// // // // // // //                 Add to Cart
// // // // // // //             </button>
// // // // // // //         </div>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default Card;


// // // // // // import React from "react";

// // // // // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // // // // //     return (
// // // // // //         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center w-60 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 transition-transform transform hover:scale-105">
// // // // // //             {/* Item Image */}
// // // // // //             <img 
// // // // // //                 src={item.imageUrl} 
// // // // // //                 alt={item.name} 
// // // // // //                 className="w-24 h-24 object-cover rounded-lg shadow-md mb-3"
// // // // // //             />

// // // // // //             {/* Item Details */}
// // // // // //             <h3 className="text-md font-semibold text-blue-800">{item.name}</h3>
// // // // // //             <p className="text-xs text-gray-700">{item.description}</p>
// // // // // //             <p className="font-bold mt-1 text-green-700">₹{item.price}</p>

// // // // // //             {/* Quantity Control */}
// // // // // //             <div className="flex items-center gap-2 mt-3">
// // // // // //                 <button
// // // // // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md bg-red-500 hover:bg-red-600 transition border border-red-600"
// // // // // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // // // // //                 >
// // // // // //                     −
// // // // // //                 </button>
// // // // // //                 <span className="px-2 text-sm font-semibold">{quantity || 0}</span>
// // // // // //                 <button
// // // // // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md bg-green-500 hover:bg-green-600 transition border border-green-600"
// // // // // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // // // // //                 >
// // // // // //                     +
// // // // // //                 </button>
// // // // // //             </div>

// // // // // //             {/* Add to Cart Button */}
// // // // // //             <button
// // // // // //                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
// // // // // //                 onClick={() => onAddToCart(item)}
// // // // // //             >
// // // // // //                 Add to Cart
// // // // // //             </button>
// // // // // //         </div>
// // // // // //     );
// // // // // // };

// // // // // // export default Card;

// // // // // import React from "react";

// // // // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // // // //     return (
// // // // //         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center w-100 h-120 
// // // // //                         bg-white transition-transform transform hover:scale-105 hover:bg-gray-100 border-gray">
// // // // //             {/* Item Image */}
// // // // //             <img 
// // // // //                 src={item.imageUrl} 
// // // // //                 alt={item.name} 
// // // // //                 className="w-24 h-24 object-cover rounded-lg shadow-md mb-3"
// // // // //             />

// // // // //             {/* Item Details */}
// // // // //             <h3 className="text-md font-semibold text-brown-800">{item.name}</h3>
// // // // //             <p className="text-xs text-gray-700">{item.description}</p>
// // // // //             <p className="font-bold mt-1 text-orange-700">₹{item.price}</p>

// // // // //             {/* Quantity Control */}
// // // // //             <div className="flex items-center gap-2 mt-3">
// // // // //                 <button
// // // // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md bg-red-500 hover:bg-red-600 transition border border-red-600"
// // // // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // // // //                 >
// // // // //                     −
// // // // //                 </button>
// // // // //                 <span className="px-2 text-sm font-semibold">{quantity || 0}</span>
// // // // //                 <button
// // // // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md bg-green-500 hover:bg-green-600 transition border border-green-600"
// // // // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // // // //                 >
// // // // //                     +
// // // // //                 </button>
// // // // //             </div>

// // // // //             {/* Add to Cart Button */}
// // // // //             <button
// // // // //                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md hover:bg-gray-800 transition-transform transform hover:scale-105"
// // // // //                 onClick={() => onAddToCart(item)}
// // // // //             >
// // // // //                 Add to Cart
// // // // //             </button>
// // // // //         </div>
// // // // //     );
// // // // // };

// // // // // export default Card;


// // // // import React from "react";

// // // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // // //     return (
// // // //         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center 
// // // //                         w-64 h-80 bg-white transition-transform transform hover:scale-105 
// // // //                         hover:bg-gray-100 border-gray-300">
// // // //             {/* Item Image */}
// // // //             <img 
// // // //                 src={item.imageUrl} 
// // // //                 alt={item.name} 
// // // //                 className="w-32 h-32 object-cover rounded-lg shadow-md mb-3"
// // // //             />

// // // //             {/* Item Details */}
// // // //             <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
// // // //             <p className="text-sm text-gray-600 px-2">{item.description}</p>
// // // //             <p className="font-bold mt-1 text-orange-700">₹{item.price}</p>

// // // //             {/* Quantity Control */}
// // // //             <div className="flex items-center gap-3 mt-3">
// // // //                 <button
// // // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
// // // //                                bg-red-500 hover:bg-red-600 transition border border-red-600"
// // // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // // //                 >
// // // //                     −
// // // //                 </button>
// // // //                 <span className="px-3 text-sm font-semibold">{quantity || 0}</span>
// // // //                 <button
// // // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
// // // //                                bg-green-500 hover:bg-green-600 transition border border-green-600"
// // // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // // //                 >
// // // //                     +
// // // //                 </button>
// // // //             </div>

// // // //             {/* Add to Cart Button */}
// // // //             <button
// // // //                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md 
// // // //                            hover:bg-gray-800 transition-transform transform hover:scale-105"
// // // //                 onClick={() => onAddToCart(item)}
// // // //             >
// // // //                 Add to Cart
// // // //             </button>
// // // //         </div>
// // // //     );
// // // // };

// // // // export default Card;



// // // import React from "react";

// // // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// // //     return (
// // //         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center 
// // //                         w-64 h-80 bg-white transition-transform transform hover:scale-105 
// // //                         hover:bg-gray-100 border-gray-300">
// // //             {/* Item Image */}
// // //             <img 
// // //                 src={item.imageUrl} // Ensure the backend sends the correct image URL
// // //                 alt={item.name} 
// // //                 className="w-32 h-32 object-cover rounded-lg shadow-md mb-3"
// // //                 onError={(e) => e.target.src = "default-image.jpg"} // Fallback image in case URL is incorrect
// // //             />

// // //             {/* Item Details */}
// // //             <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
// // //             <p className="text-sm text-gray-600 px-2">{item.description}</p>
// // //             <p className="font-bold mt-1 text-orange-700">₹{item.price}</p>

// // //             {/* Quantity Control */}
// // //             <div className="flex items-center gap-3 mt-3">
// // //                 <button
// // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
// // //                                bg-red-500 hover:bg-red-600 transition border border-red-600"
// // //                     onClick={() => onQuantityChange(item.menuId, -1)}
// // //                 >
// // //                     −
// // //                 </button>
// // //                 <span className="px-3 text-sm font-semibold">{quantity || 0}</span>
// // //                 <button
// // //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
// // //                                bg-green-500 hover:bg-green-600 transition border border-green-600"
// // //                     onClick={() => onQuantityChange(item.menuId, 1)}
// // //                 >
// // //                     +
// // //                 </button>
// // //             </div>

// // //             {/* Add to Cart Button */}
// // //             <button
// // //                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md 
// // //                            hover:bg-gray-800 transition-transform transform hover:scale-105"
// // //                 onClick={() => onAddToCart(item)}
// // //             >
// // //                 Add to Cart
// // //             </button>
// // //         </div>
// // //     );
// // // };

// // // export default Card;


// // import React from "react";

// // const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
// //     // Construct the full URL for the image if it's relative
// //     const imageUrl = item.imageUrl 
// //         ? `http://localhost:4000/uploads/dish_images/${item.imageUrl}`  // Assuming the server is on localhost:4000
// //         : "default-image.jpg";  // Fallback image in case URL is incorrect or imageUrl is not available

// //     return (
// //         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center 
// //                         w-64 h-80 bg-white transition-transform transform hover:scale-105 
// //                         hover:bg-gray-100 border-gray-300">
// //             {/* Item Image */}
// //             <img 
// //                 src={imageUrl} // Display the image using the constructed image URL
// //                 alt={item.name} 
// //                 className="w-32 h-32 object-cover rounded-lg shadow-md mb-3"
// //                 onError={(e) => e.target.src = "default-image.jpg"} // Fallback image in case URL is incorrect
// //             />

// //             {/* Item Details */}
// //             <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
// //             <p className="text-sm text-gray-600 px-2">{item.description}</p>
// //             <p className="font-bold mt-1 text-orange-700">₹{item.price}</p>

// //             {/* Quantity Control */}
// //             <div className="flex items-center gap-3 mt-3">
// //                 <button
// //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
// //                                bg-red-500 hover:bg-red-600 transition border border-red-600"
// //                     onClick={() => onQuantityChange(item.menuId, -1)}
// //                 >
// //                     −
// //                 </button>
// //                 <span className="px-3 text-sm font-semibold">{quantity || 0}</span>
// //                 <button
// //                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
// //                                bg-green-500 hover:bg-green-600 transition border border-green-600"
// //                     onClick={() => onQuantityChange(item.menuId, 1)}
// //                 >
// //                     +
// //                 </button>
// //             </div>

// //             {/* Add to Cart Button */}
// //             <button
// //                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md 
// //                            hover:bg-gray-800 transition-transform transform hover:scale-105"
// //                 onClick={() => onAddToCart(item)}
// //             >
// //                 Add to Cart
// //             </button>
// //         </div>
// //     );
// // };

// // export default Card;

// import React from "react";

// const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
//     // Construct the full URL for the image if it's relative
//     const imageUrl = item.imageUrl
//         ? `http://localhost:4000/uploads/dish_images/${item.imageUrl}`  // Assuming the server is on localhost:4000
//         : "default-image.jpg";  // Fallback image in case URL is incorrect or imageUrl is not available
    
//     // Log imageUrl to verify it's correct
//     console.log("Image URL: ", imageUrl);

//     return (
//         <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center 
//                         w-64 h-80 bg-white transition-transform transform hover:scale-105 
//                         hover:bg-gray-100 border-gray-300">
//             {/* Item Image */}
//             <img 
//                 src={imageUrl} // Display the image using the constructed image URL
//                 alt={item.name} 
//                 className="w-32 h-32 object-cover rounded-lg shadow-md mb-3"
//                 onError={(e) => e.target.src = "default-image.jpg"} // Fallback image in case URL is incorrect
//             />

//             {/* Item Details */}
//             <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//             <p className="text-sm text-gray-600 px-2">{item.description}</p>
//             <p className="font-bold mt-1 text-orange-700">₹{item.price}</p>

//             {/* Quantity Control */}
//             <div className="flex items-center gap-3 mt-3">
//                 <button
//                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
//                                bg-red-500 hover:bg-red-600 transition border border-red-600"
//                     onClick={() => onQuantityChange(item.menuId, -1)}
//                 >
//                     −
//                 </button>
//                 <span className="px-3 text-sm font-semibold">{quantity || 0}</span>
//                 <button
//                     className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
//                                bg-green-500 hover:bg-green-600 transition border border-green-600"
//                     onClick={() => onQuantityChange(item.menuId, 1)}
//                 >
//                     +
//                 </button>
//             </div>

//             {/* Add to Cart Button */}
//             <button
//                 className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md 
//                            hover:bg-gray-800 transition-transform transform hover:scale-105"
//                 onClick={() => onAddToCart(item)}
//             >
//                 Add to Cart
//             </button>
//         </div>
//     );
// };

// export default Card;


import React from "react";

const Card = ({ item, quantity, onQuantityChange, onAddToCart }) => {
    // Prepend base URL to the imageUrl received from the backend
    const imageUrl = item.imageUrl ? item.imageUrl : "default-image.jpg"; // Fallback image if URL is not available

    console.log("Image URL: ", imageUrl);  // Log the image URL to ensure it's correct

    return (
        <div className="border p-4 rounded-xl shadow-lg flex flex-col items-center text-center 
                        w-64 h-80 bg-white transition-transform transform hover:scale-105 
                        hover:bg-gray-100 border-gray-300">
            {/* Item Image */}
            <img 
                src={imageUrl} // Use the image URL received from the backend
                alt={item.name} 
                className="w-32 h-32 object-cover rounded-lg shadow-md mb-3"
                onError={(e) => e.target.src = "default-image.jpg"} // Fallback image if URL is invalid
            />

            {/* Item Details */}
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <p className="text-sm text-gray-600 px-2">{item.description}</p>
            <p className="font-bold mt-1 text-orange-700">₹{item.price}</p>

            {/* Quantity Control */}
            <div className="flex items-center gap-3 mt-3">
                <button
                    className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
                               bg-red-500 hover:bg-red-600 transition border border-red-600"
                    onClick={() => onQuantityChange(item.menuId, -1)}
                >
                    −
                </button>
                <span className="px-3 text-sm font-semibold">{quantity || 0}</span>
                <button
                    className="px-3 py-1 text-white font-bold rounded-lg text-sm shadow-md 
                               bg-green-500 hover:bg-green-600 transition border border-green-600"
                    onClick={() => onQuantityChange(item.menuId, 1)}
                >
                    +
                </button>
            </div>

            {/* Add to Cart Button */}
            <button
                className="mt-3 px-4 py-2 bg-black text-white rounded-lg text-sm shadow-md 
                           hover:bg-gray-800 transition-transform transform hover:scale-105"
                onClick={() => onAddToCart(item)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Card;
