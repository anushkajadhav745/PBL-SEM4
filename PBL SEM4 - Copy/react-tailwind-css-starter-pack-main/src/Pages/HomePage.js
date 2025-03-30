// // // // // import Navbar from "../Components/Navbar";
// // // // // import { Link } from "react-router-dom";

// // // // // const Home = () => {
// // // // //   return (
// // // // //     <div>
      
// // // // //       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
// // // // //         <h2 className="text-4xl font-bold mb-4">Welcome to the Canteen Management System</h2>
// // // // //         <p className="text-lg mb-6">Order food, manage staff, and streamline canteen operations.</p>
// // // // //         <div className="space-x-4">
// // // // //           <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</Link>
// // // // //           <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg">Signup</Link>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Home;


// // // // import React from "react";
// // // // import { Link } from "react-router-dom";

// // // // export default function Home() {
// // // //   return (
// // // //     <div
// // // //       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
// // // //       style={{ backgroundImage: "url('/images/canteen.jpg')" }}
// // // //     >
// // // //       {/* Dark overlay for readability */}
// // // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// // // //       {/* Quote Section */}
// // // //       <div className="relative text-center px-6">
// // // //         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// // // //         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// // // //       </div>

// // // //       {/* Buttons for Signup & Login */}
// // // //       <div className="relative mt-8 flex space-x-4">
// // // //         <Link
// // // //           to="/Signup"
// // // //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // // //         >
// // // //           Sign Up
// // // //         </Link>
// // // //         <Link
// // // //           to="/Login"
// // // //           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // // //         >
// // // //           Login
// // // //         </Link>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }


// // // import React from "react";
// // // import { Link } from "react-router-dom";
// // // import canteenBg from "../Assests/Background1.jpg"; // Adjust path based on your project structure

// // // export default function Home() {
// // //   return (
// // //     <div
// // //       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
// // //       style={{ backgroundImage: `url(${canteenBg})` }}
// // //     >
// // //       {/* Dark overlay for readability */}
// // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// // //       {/* Quote Section */}
// // //       <div className="relative text-center px-6">
// // //         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// // //         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// // //       </div>

// // //       {/* Buttons for Signup & Login */}
// // //       <div className="relative mt-8 flex space-x-4">
// // //         <Link
// // //           to="/Signup"
// // //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // //         >
// // //           Sign Up
// // //         </Link>
// // //         <Link
// // //           to="/Login"
// // //           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // //         >
// // //           Login
// // //         </Link>
// // //       </div>
// // //     </div>
// // //   );
// // // }


// // import React from "react";
// // import { Link } from "react-router-dom";
// // import canteenBg from "../Assests/Background1.jpg"; // Ensure correct path

// // export default function Home() {
// //   return (
// //     <div
// //       className="relative w-full h-screen min-h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white"
// //       style={{ backgroundImage: `url(${canteenBg})` }}
// //     >
// //       {/* Dark overlay for better readability */}
// //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// //       {/* Quote Section */}
// //       <div className="relative text-center px-6">
// //         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// //         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// //       </div>

// //       {/* Buttons for Signup & Login */}
// //       <div className="relative mt-8 flex flex-wrap gap-4">
// //         <Link
// //           to="/Signup"
// //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// //         >
// //           Sign Up
// //         </Link>
// //         <Link
// //           to="/Login"
// //           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// //         >
// //           Login
// //         </Link>
// //       </div>
// //     </div>
// //   );
// // }
// import React from "react";
// import { Link } from "react-router-dom";
// import canteenBg from "../Assests/Background1.jpg"; // Ensure correct path

// export default function Home() {
//   return (
//     <div
//       className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
//       style={{ backgroundImage: `url(${canteenBg})` }}
//     >
//       {/* Dark overlay for readability */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Quote Section */}
//       <div className="relative text-center px-6">
//         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
//         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
//       </div>

//       {/* Buttons for Signup & Login */}
//       <div className="relative mt-8 flex flex-wrap gap-4">
//         <Link
//           to="/Signup"
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Sign Up
//         </Link>
//         <Link
//           to="/Login"
//           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
//         >
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-gray-900 bg-gray-100">
        {/* Quote Section */}
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
          <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
        </div>

        {/* Buttons for Signup & Login */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/Signup"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Sign Up
          </Link>
          <Link
            to="/Login"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>

      {/* About Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Welcome to PICT Canteen</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          We serve **delicious and healthy meals** to fuel your day! Whether you’re grabbing a quick bite or enjoying a full meal, we have something for everyone.
        </p>
      </section>

      {/* Featured Menu Section */}
      <section className="py-16 px-8 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900">Our Best Picks</h2>
        <p className="mt-4 text-gray-700">Try our customer favorites!</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Paneer Wrap</h3>
            <p className="text-gray-600">A perfect blend of spices and flavors.</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Veg Biryani</h3>
            <p className="text-gray-600">Aromatic and full of taste!</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-64">
            <h3 className="text-xl font-semibold">Cold Coffee</h3>
            <p className="text-gray-600">Refreshing and energizing.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <p className="italic text-gray-700">"The food is always fresh and delicious!"</p>
            <p className="text-gray-900 font-semibold mt-2">- Rohan, Student</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg w-80">
            <p className="italic text-gray-700">"Affordable and tasty meals every time!"</p>
            <p className="text-gray-900 font-semibold mt-2">- Priya, Staff</p>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-16 px-8 text-center bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-900">Ready to Order?</h2>
        <p className="mt-4 text-gray-700">Sign up now and explore our delicious menu.</p>
        <div className="mt-6">
          <Link
            to="/Signup"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
