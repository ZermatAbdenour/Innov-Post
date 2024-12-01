import React from "react";
import bg from "../assets/RedirectPage.png"; // Background image
import card from "../assets/card.svg"
import logo from "../assets/logo.svg"; // Logo image


const AuthenticationPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Set the background image
      }}
    >
      <div
        className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 md:p-12 w-[90%] max-w-3xl flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8"
        style={{
          backgroundImage: {card}, // Background for the main card (optional)
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Section with Logo */}
        <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl text-white font-semibold mt-6">
            Authentication
          </h1>
          <p className="text-gray-300 mt-2">
            Please Verify Your Card’s Information
          </p>
          <img
            src={logo} // Ensure the logo is in the public folder
            alt="Baridi Trust Logo"
            className="mx-auto md:mx-0 h-20"
          />
         
        </div>

        {/* Right Section with Form */}
        <form className="flex-1 space-y-4">
          <div>
            <label
              htmlFor="card-number"
              className="block text-white font-medium"
            >
              Numéro de votre carte Eddahabia *
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-white font-medium">
                CVV2 *
              </label>
              <input
                id="cvv"
                type="text"
                placeholder="123"
                className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
              />
            </div>
            <div className="flex-1">
              <label
                htmlFor="expiration-date"
                className="block text-white font-medium"
              >
                Date d’Expiration *
              </label>
              <div className="flex space-x-2">
                <select
                  id="month"
                  className="w-1/2 px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
                >
                  <option>12 - December</option>
                  <option>01 - January</option>
                  {/* Add more months */}
                </select>
                <select
                  id="year"
                  className="w-1/2 px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
                >
                  <option>2025</option>
                  <option>2026</option>
                  {/* Add more years */}
                </select>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="name" className="block text-white font-medium">
              Nom Prénom *
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-yellow-500"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-yellow-500 text-black font-semibold hover:bg-yellow-600"
            >
              Submit
            </button>
            <button
              type="reset"
              className="px-4 py-2 rounded-md border border-yellow-500 text-yellow-500 font-semibold hover:bg-yellow-500 hover:text-black"
            >
              Reset
            </button>
            <button
              type="button"
              className="px-4 py-2 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
