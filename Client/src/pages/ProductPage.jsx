import React from "react";
import navbar from "../assets/navbar.svg";
import corp from "../assets/corp.svg";
import counter from "../assets/counter.svg";

const ProductPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between bg-gray-100 shadow-md">
        <img
          src={navbar}
          alt="Navbar"
          className="w-full h-auto"
        />
      </header>

      {/* Product Section */}
      <main className="flex flex-col  py-16 space-y-8">
        {/* Corporate Image */}
        <img
          src={corp}
          alt="Corporate Image"
          className="w-3/4 max-w-5xl ml-14"
        />

        {/* Counter and Button Section */}
        <div className="flex items-center gap-8 ml-14">
          {/* Counter Image */}
          <img
            src={counter}
            alt="Counter"
            className="h-14 w-32"
          />

          {/* Buy Now Button */}
          <button className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 font-bold text-base text-white px-8 py-2 rounded-xl shadow-md ">
            Buy Now
          </button>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
