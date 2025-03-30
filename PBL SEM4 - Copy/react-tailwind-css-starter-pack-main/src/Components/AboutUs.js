import React from "react";

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-900 py-16 px-8">
      <h2 className="text-4xl font-bold text-center">About Us</h2>
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
        Welcome to **PICT Canteen**, where we serve **delicious, hygienic, and affordable** meals!  
        Whether you need a quick snack or a full meal, we've got you covered.  
        Our goal is to provide **healthy and fresh food options** to students and staff at pocket-friendly prices.
      </p>

      {/* Features Section */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-72 text-center">
          <h3 className="text-2xl font-semibold">✅ Fresh & Hygienic</h3>
          <p className="text-gray-600 mt-2">We use fresh ingredients to prepare every meal.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-72 text-center">
          <h3 className="text-2xl font-semibold">💳 Digital Payments</h3>
          <p className="text-gray-600 mt-2">We accept UPI, debit/credit cards, and cash.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-72 text-center">
          <h3 className="text-2xl font-semibold">🕒 Open All Day</h3>
          <p className="text-gray-600 mt-2">Monday to Saturday, 8 AM - 8 PM.</p>
        </div>
      </div>

      {/* Canteen Mission */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold">Our Mission</h3>
        <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
          Our mission is to provide nutritious and affordable meals in a comfortable and clean environment.  
          We strive to ensure **student and staff satisfaction** with our diverse menu and excellent service.
        </p>
      </div>
    </div>
  );
}
