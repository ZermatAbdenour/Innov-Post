import React from "react";
import navbar from "../assets/navbar.svg";
import corp from "../assets/corp.svg";
import counter from "../assets/counter.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ProductPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between ">
        <img
          src={navbar}
          alt="Cool Blue Chair"
          className="w-full h-auto "
        />
      </header>



      {/* Product Section */}
      <main className="flex flex-col ml-4 ">
        <img
          src={corp}
          alt="Cool Blue Chair"
          className="px-24 py-16"
        />
        <div className="flex gap-12 ml-24">
          <img
            src={counter}
            alt="Counter"
            className="h-14 w-52"
          />
           <Link to="/redirect">
      <button className="bg-yellow-500 hover:bg-yellow-700 font-bold text-lg text-white px-6 py-2 rounded-xl h-14 w-52">
        Buy Now
      </button>
    </Link>
        </div>


      </main>

    </div>
  );
};

export default ProductPage;
