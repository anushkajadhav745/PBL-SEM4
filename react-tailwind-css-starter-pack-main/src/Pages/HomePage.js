// // // // // // // import Navbar from "../Components/Navbar";
// // // // // // // import { Link } from "react-router-dom";

// // // // // // // const Home = () => {
// // // // // // //   return (
// // // // // // //     <div>
      
// // // // // // //       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
// // // // // // //         <h2 className="text-4xl font-bold mb-4">Welcome to the Canteen Management System</h2>
// // // // // // //         <p className="text-lg mb-6">Order food, manage staff, and streamline canteen operations.</p>
// // // // // // //         <div className="space-x-4">
// // // // // // //           <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Login</Link>
// // // // // // //           <Link to="/signup" className="bg-green-500 text-white px-4 py-2 rounded-lg">Signup</Link>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Home;


// // // // // // import React from "react";
// // // // // // import { Link } from "react-router-dom";

// // // // // // export default function Home() {
// // // // // //   return (
// // // // // //     <div
// // // // // //       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
// // // // // //       style={{ backgroundImage: "url('/images/canteen.jpg')" }}
// // // // // //     >
// // // // // //       {/* Dark overlay for readability */}
// // // // // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// // // // // //       {/* Quote Section */}
// // // // // //       <div className="relative text-center px-6">
// // // // // //         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// // // // // //         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// // // // // //       </div>

// // // // // //       {/* Buttons for Signup & Login */}
// // // // // //       <div className="relative mt-8 flex space-x-4">
// // // // // //         <Link
// // // // // //           to="/Signup"
// // // // // //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // // // // //         >
// // // // // //           Sign Up
// // // // // //         </Link>
// // // // // //         <Link
// // // // // //           to="/Login"
// // // // // //           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // // // // //         >
// // // // // //           Login
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   );
// // // // // // }


// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import canteenBg from "../Assests/Background1.jpg"; // Adjust path based on your project structure

// // // // // export default function Home() {
// // // // //   return (
// // // // //     <div
// // // // //       className="relative bg-cover bg-center h-screen flex flex-col items-center justify-center text-white"
// // // // //       style={{ backgroundImage: `url(${canteenBg})` }}
// // // // //     >
// // // // //       {/* Dark overlay for readability */}
// // // // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// // // // //       {/* Quote Section */}
// // // // //       <div className="relative text-center px-6">
// // // // //         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// // // // //         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// // // // //       </div>

// // // // //       {/* Buttons for Signup & Login */}
// // // // //       <div className="relative mt-8 flex space-x-4">
// // // // //         <Link
// // // // //           to="/Signup"
// // // // //           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // // // //         >
// // // // //           Sign Up
// // // // //         </Link>
// // // // //         <Link
// // // // //           to="/Login"
// // // // //           className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// // // // //         >
// // // // //           Login
// // // // //         </Link>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // }


// // // // import React from "react";
// // // // import { Link } from "react-router-dom";
// // // // import canteenBg from "../Assests/Background1.jpg"; // Ensure correct path

// // // // export default function Home() {
// // // //   return (
// // // //     <div
// // // //       className="relative w-full h-screen min-h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-white"
// // // //       style={{ backgroundImage: `url(${canteenBg})` }}
// // // //     >
// // // //       {/* Dark overlay for better readability */}
// // // //       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

// // // //       {/* Quote Section */}
// // // //       <div className="relative text-center px-6">
// // // //         <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// // // //         <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// // // //       </div>

// // // //       {/* Buttons for Signup & Login */}
// // // //       <div className="relative mt-8 flex flex-wrap gap-4">
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
// // // import canteenBg from "../Assests/Background1.jpg"; // Ensure correct path

// // // export default function Home() {
// // //   return (
// // //     <div
// // //       className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white"
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
// // //       <div className="relative mt-8 flex flex-wrap gap-4">
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


// // export default function Home() {
// //   return (
// //     <div className="w-full min-h-screen bg-white"
    
// //     >
// //         {/* <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div> */}
// //       {/* Hero Section */}
// //       <div className="relative w-full h-screen flex flex-col items-center justify-center text-gray-900 bg-gray-100">
// //         {/* Quote Section */}
// //         <div className="text-center px-6">
// //           <h1 className="text-4xl md:text-6xl font-bold">"Good food, Good mood!"</h1>
// //           <p className="mt-4 text-lg md:text-2xl">Fuel your mind, feed your dreams!</p>
// //         </div>

// //         {/* Buttons for Signup & Login */}
// //         <div className="mt-8 flex flex-wrap gap-4">
// //           <Link
// //             to="/Signup"
// //             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// //           >
// //             Sign Up
// //           </Link>
// //           <Link
// //             to="/Login"
// //             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
// //           >
// //             Login
// //           </Link>
// //         </div>
// //       </div>

// //       {/* About Section */}
// //       <section className="py-16 px-8 text-center">
// //         <h2 className="text-3xl font-bold text-gray-900">Welcome to PICT Canteen</h2>
// //         <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
// //           We serve **delicious and healthy meals** to fuel your day! Whether you’re grabbing a quick bite or enjoying a full meal, we have something for everyone.
// //         </p>
// //       </section>

// //       {/* Featured Menu Section */}
// //       <section className="py-16 px-8 text-center bg-gray-100">
// //         <h2 className="text-3xl font-bold text-gray-900">Our Best Picks</h2>
// //         <p className="mt-4 text-gray-700">Try our customer favorites!</p>
// //         <div className="mt-8 flex flex-wrap justify-center gap-8">
// //           <div className="bg-white p-4 rounded-lg shadow-lg w-64">
// //             <h3 className="text-xl font-semibold">Paneer Wrap</h3>
// //             <p className="text-gray-600">A perfect blend of spices and flavors.</p>
// //           </div>
// //           <div className="bg-white p-4 rounded-lg shadow-lg w-64">
// //             <h3 className="text-xl font-semibold">Veg Biryani</h3>
// //             <p className="text-gray-600">Aromatic and full of taste!</p>
// //           </div>
// //           <div className="bg-white p-4 rounded-lg shadow-lg w-64">
// //             <h3 className="text-xl font-semibold">Cold Coffee</h3>
// //             <p className="text-gray-600">Refreshing and energizing.</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="py-16 px-8 text-center">
// //         <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
// //         <div className="mt-8 flex flex-wrap justify-center gap-8">
// //           <div className="bg-white p-4 rounded-lg shadow-lg w-80">
// //             <p className="italic text-gray-700">"The food is always fresh and delicious!"</p>
// //             <p className="text-gray-900 font-semibold mt-2">- Rohan, Student</p>
// //           </div>
// //           <div className="bg-white p-4 rounded-lg shadow-lg w-80">
// //             <p className="italic text-gray-700">"Affordable and tasty meals every time!"</p>
// //             <p className="text-gray-900 font-semibold mt-2">- Priya, Staff</p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Final Call-to-Action */}
// //       <section className="py-16 px-8 text-center bg-gray-100">
// //         <h2 className="text-3xl font-bold text-gray-900">Ready to Order?</h2>
// //         <p className="mt-4 text-gray-700">Sign up now and explore our delicious menu.</p>
// //         <div className="mt-6">
// //           <Link
// //             to="/Signup"
// //             className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
// //           >
// //             Get Started
// //           </Link>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// import React from "react";
// import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div className="w-full min-h-screen bg-white">
//       {/* Hero Section */}
//       <div className="relative w-full h-screen flex flex-col items-center justify-center text-gray-900 bg-gray-100">
//         {/* Quote Section */}
//         <div className="text-center px-6">
//           <h1 className="text-4xl md:text-6xl font-bold">"Where every bite is a delight!"</h1>
//           <p className="mt-4 text-lg md:text-2xl">Bringing flavors that make every moment special.</p>
//         </div>

//         {/* Buttons for Signup & Login */}
//         <div className="mt-8 flex flex-wrap gap-4">
//           <Link
//             to="/Signup"
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Sign Up
//           </Link>
//           <Link
//             to="/Login"
//             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300"
//           >
//             Login
//           </Link>
//         </div>
//       </div>

//       {/* About Section */}
//       <section className="py-16 px-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-900">Welcome to PICT Canteen</h2>
//         <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
//           At PICT Canteen, we serve **tasty, healthy, and affordable** meals that bring people together.  
//           Whether you're looking for a quick snack or a full meal, we've got something for every craving!
//         </p>
//       </section>

//       {/* Featured Menu Section */}
//       <section className="py-16 px-8 text-center bg-gray-100">
//         <h2 className="text-3xl font-bold text-gray-900">Our Special Picks 🍕☕🍨</h2>
//         <p className="mt-4 text-gray-700">Handpicked favorites that you can’t resist!</p>
//         <div className="mt-8 flex flex-wrap justify-center gap-8">
//           <div className="bg-white p-4 rounded-lg shadow-lg w-64">
//             <h3 className="text-xl font-semibold">Cheese Burst Pizza</h3>
//             <p className="text-gray-600">Loaded with melted cheese & crispy crust.</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg w-64">
//             <h3 className="text-xl font-semibold">Masala Chai</h3>
//             <p className="text-gray-600">The perfect sip for a refreshing break.</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg w-64">
//             <h3 className="text-xl font-semibold">Brownie Sundae</h3>
//             <p className="text-gray-600">A heavenly mix of warm brownie & ice cream.</p>
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-8 text-center">
//         <h2 className="text-3xl font-bold text-gray-900">What Our Visitors Say ❤️</h2>
//         <div className="mt-8 flex flex-wrap justify-center gap-8">
//           <div className="bg-white p-4 rounded-lg shadow-lg w-80">
//             <p className="italic text-gray-700">"Absolutely love the ambiance and food quality!"</p>
//             <p className="text-gray-900 font-semibold mt-2">- Aditya, Student</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg w-80">
//             <p className="italic text-gray-700">"Best place to grab a quick and tasty bite!"</p>
//             <p className="text-gray-900 font-semibold mt-2">- Riya, Faculty</p>
//           </div>
//           <div className="bg-white p-4 rounded-lg shadow-lg w-80">
//             <p className="italic text-gray-700">"Healthy, affordable, and super delicious!"</p>
//             <p className="text-gray-900 font-semibold mt-2">- Sameer, Alumni</p>
//           </div>
//         </div>
//       </section>

//       {/* Final Call-to-Action */}
//       <section className="py-16 px-8 text-center bg-gray-100">
//         <h2 className="text-3xl font-bold text-gray-900">Hungry? Let’s Get You Started! 🍽️</h2>
//         <p className="mt-4 text-gray-700">Sign up today and explore our amazing food options.</p>
//         <div className="mt-6">
//           <Link
//             to="/Signup"
//             className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300"
//           >
//             Order Now
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // For smooth animations
import Back from "../Assests/Background1.jpg"

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      
      {/* 🎯 Hero Section */}
      <div className="relative w-full h-screen flex flex-col items-center justify-center text-gray-900 bg-cover bg-center bg-gradient-to-r from-orange-50 to-red-100" 
            style={{ backgroundImage: `url(${Back})` }}
           >
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

        {/* 🍽️ Tagline */}
        <motion.div 
          className="relative text-center px-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg">"Flavors That Bring You Home!"</h1>
          <p className="mt-4 text-xl md:text-2xl text-white">The best food experience at your fingertips.</p>
        </motion.div>

        {/* 🔥 Signup & Login */}
        <motion.div 
          className="mt-8 flex flex-wrap gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link
            to="/Signup"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </Link>
          <Link
            to="/Login"
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Login
          </Link>
        </motion.div>
      </div>

      {/* ✅ Why Choose Us
      <section className="py-16 px-8 text-center bg-white">
        <h2 className="text-4xl font-bold text-orange-600">Why Choose PICT Canteen?</h2>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          We blend **great taste, hygiene, and affordability** to create a dining experience you’ll love!
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <div className="bg-yellow-100 p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">🌱 Fresh Ingredients</h3>
            <p className="text-gray-600">Only the best, locally sourced ingredients!</p>
          </div>
          <div className="bg-red-100 p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">🍽️ Diverse Menu</h3>
            <p className="text-gray-600">From quick bites to full meals – we've got it all!</p>
          </div>
          <div className="bg-blue-100 p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:scale-105 transition">
            <h3 className="text-2xl font-semibold">⚡ Quick Service</h3>
            <p className="text-gray-600">Delicious food, served fast & hot.</p>
          </div>
        </div>
      </section> */}
{/* ✅ Why Choose Us */}
<section className="py-16 px-8 text-center bg-white">
  <h2 className="text-4xl font-bold text-orange-600">Why Choose PICT Canteen?</h2>
  <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
    We blend **great taste, hygiene, and affordability** to create a dining experience you’ll love!
  </p>

  {/* 🌟 Highlighting Tagline */}
  <motion.div 
    className="bg-gradient-to-r from-yellow-200 to-red-200 text-gray-900 font-extrabold text-2xl md:text-4xl p-6 mt-8 rounded-lg shadow-md"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    "Good food, Good mood!" 🍽️
  </motion.div>
  
  <div className="mt-8 flex flex-wrap justify-center gap-8">
    <div className="bg-yellow-100 p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:scale-105 transition">
      <h3 className="text-2xl font-semibold">🌱 Fresh Ingredients</h3>
      <p className="text-gray-600">Only the best, locally sourced ingredients!</p>
    </div>
    <div className="bg-red-100 p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:scale-105 transition">
      <h3 className="text-2xl font-semibold">🍽️ Diverse Menu</h3>
      <p className="text-gray-600">From quick bites to full meals – we've got it all!</p>
    </div>
    <div className="bg-blue-100 p-6 rounded-xl shadow-md w-64 hover:shadow-xl transform hover:scale-105 transition">
      <h3 className="text-2xl font-semibold">⚡ Quick Service</h3>
      <p className="text-gray-600">Delicious food, served fast & hot.</p>
    </div>
  </div>
</section>


      {/* 🎯 Featured Menu Section */}
      {/* <section className="py-16 px-8 text-center bg-gradient-to-r from-orange-100 to-red-100">
        <h2 className="text-4xl font-bold text-gray-900">Today's Special 🍕</h2>
        <p className="mt-4 text-gray-700">Enjoy the most loved dishes by students & staff!</p>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg w-72 transform hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">🔥 Cheese Burst Pizza</h3>
            <p className="text-gray-600">Loaded with extra cheese and love.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg w-72 transform hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">☕ Masala Chai</h3>
            <p className="text-gray-600">Perfectly brewed to refresh your soul.</p>
          </motion.div>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-lg w-72 transform hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-semibold">🍨 Brownie Sundae</h3>
            <p className="text-gray-600">Warm brownie, ice cream, and chocolate drizzle.</p>
          </motion.div>
        </div>
      </section> */}

      {/* 🏆 Testimonials */}
      {/* <section className="py-16 px-8 text-center bg-white"> */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-orange-50 to-red-100">
        <h2 className="text-4xl font-bold text-orange-600">What Our Visitors Say ❤️</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-8">
          <motion.div className="bg-gray-100 p-6 rounded-xl shadow-lg w-80 transform hover:scale-105 transition">
            <p className="italic text-gray-700">"Absolutely love the variety and quick service!"</p>
            <p className="text-gray-900 font-semibold mt-2">- Aditi, Student</p>
          </motion.div>
          <motion.div className="bg-gray-100 p-6 rounded-xl shadow-lg w-80 transform hover:scale-105 transition">
            <p className="italic text-gray-700">"Best place for a quick, delicious meal!"</p>
            <p className="text-gray-900 font-semibold mt-2">- Raj, Faculty</p>
          </motion.div>
        </div>
      </section>

      {/* 🎯 Call-to-Action */}
      <section className="py-16 px-8 text-center bg-gradient-to-r from-red-300 to-yellow-400 text-white">
        <h2 className="text-4xl font-bold">Order Now & Satisfy Your Cravings! 🍽️</h2>
        <p className="mt-4 text-lg">Sign up today to explore our delicious menu.</p>
        <div className="mt-6">
          <Link
            to="/Signup"
            className="bg-white text-red-600 font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
