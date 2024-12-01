import React, { useState } from "react";
import bg from "../assets/RedirectPage.png"; // Background image
import logo from "../assets/logo.svg"; // Logo image
import line from "../assets/line.svg";
import { Link } from "react-router-dom";


const AuthenticationPage = () => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (event) => {
    const { offsetWidth: width, offsetHeight: height } = event.currentTarget;
    const { clientX, clientY } = event;
    const { left, top } = event.currentTarget.getBoundingClientRect();

    // Calculate position relative to the card center
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    // Map to rotation angles
    const rotateX = -(y / height) * 10; // Negative for intuitive rotation
    const rotateY = (x / width) * 10;

    // Map to shadow intensity
    const shadowX = (x / width) * 15;
    const shadowY = (y / height) * 15;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      boxShadow: `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.3)`,
      transition: "transform 0.1s, box-shadow 0.1s",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg)",
      boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
      transition: "transform 0.3s, box-shadow 0.3s",
    });
  };

  const months = [
    "01 - January",
    "02 - February",
    "03 - March",
    "04 - April",
    "05 - May",
    "06 - June",
    "07 - July",
    "08 - August",
    "09 - September",
    "10 - October",
    "11 - November",
    "12 - December",
  ];

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 11 }, (_, index) => currentYear + index);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${bg})`, // Set the background image
      }}
    >
      <div
        className="bg-white/10 backdrop-blur-lg rounded-lg shadow-2xl p-8 md:p-12 w-[95%] max-w-4xl flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={style} // Apply dynamic styles
      >
        {/* Left Section with Logo */}
        <div className="flex-1 text-center md:text-left gap-4">
          <h1 className="text-3xl md:text-4xl text-white font-bold">
            Authentication
          </h1>
          <img src={line} className="w-48 mx-auto md:mx-0 mt-4" />
          <p className="text-gray-200 font-extralight mt-4">
            Please Verify Your Card’s Information
          </p>
          <br />
          <br />
          <img
            src={logo}
            alt="Baridi Trust Logo"
            className="mx-auto md:mx-0 h-52 mt-6"
          />
        </div>

        {/* Right Section with Form */}
        <form className="flex-1 space-y-6">
          <div>
            <label
              htmlFor="card-number"
              className="block text-white font-medium mb-2"
            >
              Numéro de votre carte Eddahabia *
            </label>
            <input
              id="card-number"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)", // Slight transparency for the left input
              }}
            />
          </div>

          {/* CVV2 Section */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="cvv" className="block text-white font-medium mb-2">
                CVV2 *
              </label>
              <input
                id="cvv"
                type="text"
                placeholder="123"
                className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight transparency for CVV input
                }}
              />
            </div>
          </div>

          {/* Expiration Date Section */}
          <div>
            <label
              htmlFor="expiration-date"
              className="block text-white font-medium mb-2"
            >
              Date d’Expiration *
            </label>
            <div className="flex space-x-2">
              <select
                id="month"
                className="w-1/2 px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight transparency for the month select
                }}
              >
                {months.map((month, index) => (
                  <option key={index} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                id="year"
                className="w-1/2 px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight transparency for the year select
                }}
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-white font-medium mb-2"
            >
              Nom Prénom *
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-md bg-white/20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.15)", // Slight transparency for the name input
              }}
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-6">
          <Link to="/transaction-details/buyer">

            <button
              type="button"
              className="px-5 py-2 rounded-md bg-yellow-500 hover:bg-transparent hover:border-2 hover:border-yellow-500 text-white font-normal shadow-md"
            >
              Submit
            </button>
            </Link>
            <button
              type="reset"
              className="px-5 py-2 rounded-md border-2 hover:bg-yellow-500 border-yellow-500 text-white font-normal shadow-md "
            >
              Reset
            </button>
            <Link to="/">
            <button
              type="button"
              className="px-5 py-2 rounded-md bg-gray-800 text-white font-normal shadow-md hover:bg-red-500 "
            >
              Cancel
            </button>
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthenticationPage;
