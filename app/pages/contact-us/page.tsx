'use client'
import React, { useState } from "react";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log({ name, email, message });
    alert("Your message has been sent!");
    setMessage('')
  };

  return (
    <div className=" text-white flex items-center justify-center py-12 px-4 md:px-8">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-xl md:text-3xl font-bold text-center mb-6">Contact Us</h1>
        
        {/* Contact Options */}
        <div className="flex justify-between mb-6">
          {/* Instant Messaging */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg mb-2">Instant Messengering</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-80">
                <img
                  src="/images/messenger.png"
                  alt="Messenger"
                  className="w-10 h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/images/whatsapp.png"
                  alt="WhatsApp"
                  className="w-10 h-10"
                />
              </a>
              <a href="#" className="hover:opacity-80">
                <img
                  src="/images/telegram.png"
                  alt="Telegram"
                  className="w-10 h-10"
                />
              </a>
            </div>
          </div>

          {/* Direct Call */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg mb-2">Direct Call</h2>
            <div className="flex items-center gap-2">
            <img
                  src="/images/phone.png"
                  alt="Messenger"
                  className="w-10 h-10"
                />
              <span>098463826232</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="py-6 rounded-lg shadow-md"
        >
          <h2 className=" font-bold mb-4">With Email Support</h2>

          {/* Name and Email Fields */}
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500 rounded-md text-gray-900"
                placeholder="Write your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500 rounded-md text-gray-900"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 focus:outline-none focus:ring-1 focus:ring-yellow-500 rounded-md text-gray-900"
              rows={4}
              placeholder="Describe your problems"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#FFB82B]  py-2 rounded-md hover:bg-[#e0a821] transition"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
