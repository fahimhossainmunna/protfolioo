import React from "react";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";

// Alternative GetInTouch Design
// This version is more minimalistic with a centered card layout.

const GetInTouch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const data = Object.fromEntries(form.entries());
    console.log("Contact submit:", data);
    alert("Message submitted! Replace with your API logic.");
    e.target.reset();
  };

  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-black py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-10 text-center"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Let’s Connect</h2>
        <p className="text-gray-500 mb-8">
          Got a project or idea? Send me a message and I’ll reply as soon as
          possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
            className="w-full border border-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>

          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-transform hover:scale-105"
          >
            <FiSend /> Send Message
          </button>
        </form>

        <p className="text-gray-400 mt-6 text-sm">
          Prefer email? Reach me directly at{" "}
          <a
            href="mailto:hossainfahim306@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            hossainfahim306@gmail.com
          </a>
        </p>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
