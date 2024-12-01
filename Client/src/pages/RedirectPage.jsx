import React, { useEffect, useState } from "react";
import bg from "../assets/RedirectPage.png"; // Background image
import logo from "../assets/logo.svg"; // Logo image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"; // Import FontAwesome icon

const RedirectPage = () => {
  const [dots, setDots] = useState(""); // State to control the animated dots

  // Automatically redirect to another page after 5 seconds
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      window.location.href = "/auth"; // Replace '/' with your target route
    }, 1500);

    return () => clearTimeout(redirectTimer); // Cleanup timer on component unmount
  }, []);

  // Animate dots
  useEffect(() => {
    const dotsTimer = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : "")); // Cycle between ".", "..", "..."
    }, 500);

    return () => clearInterval(dotsTimer); // Cleanup timer on component unmount
  }, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative gap-8"
      style={{
        backgroundImage: `url(${bg})`, // Set the background image
      }}
    >
      <div className="text-white text-center space-y-16"> {/* Increased spacing */}
        {/* Cancel Button */}
        <button
          className="absolute top-4 left-4 text-sm flex items-center space-x-2 text-white hover:text-yellow-500 transition-all duration-200" // Added hover effect with animation
          onClick={() => window.history.back()}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" /> {/* FontAwesome Icon */}
          <span>Cancel</span>
        </button>

        {/* Main Content */}
        <div className="space-y-10"> {/* Adjusted spacing between elements */}
          <h1 className="text-3xl font-semibold">
            Redirecting you to Baridi Trust<span>{dots}</span> {/* Animated dots */}
          </h1>
          <img
            src={logo} // Path to logo image
            alt="Baridi Trust Logo"
            className="mx-auto h-48" // Increased logo size
          />
          <p className="text-sm text-gray-200">
            Please do not refresh or close this page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RedirectPage;
