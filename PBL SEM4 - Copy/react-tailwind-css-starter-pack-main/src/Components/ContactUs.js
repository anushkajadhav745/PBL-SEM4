import React from "react";

export default function ContactUs() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 py-16 px-8">
      <h2 className="text-4xl font-bold text-center">Contact Us</h2>
      <p className="mt-4 text-gray-700 max-w-3xl mx-auto text-center">
        Have questions or feedback? We'd love to hear from you! Reach out to us using the details below.
      </p>

      {/* Contact Details */}
      <div className="mt-10 flex flex-wrap justify-center gap-8">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72 text-center">
          <h3 className="text-2xl font-semibold">📍 Location</h3>
          <p className="text-gray-600 mt-2">PICT Campus, Near Block C</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72 text-center">
          <h3 className="text-2xl font-semibold">📞 Phone</h3>
          <p className="text-gray-600 mt-2">+91 XXXXX XXXXX</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-72 text-center">
          <h3 className="text-2xl font-semibold">📧 Email</h3>
          <p className="text-gray-600 mt-2">pictcanteen@example.com</p>
        </div>
      </div>

      {/* Feedback Form */}
      <div className="mt-16 max-w-lg mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center">💬 Send Us Your Feedback</h3>
        <form className="mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition duration-300 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
