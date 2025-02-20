import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const YogBox = () => {
  const { Yog_Items } = useContext(UserContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D1C4E9] to-[#81D4FA] p-10 rounded-2xl shadow-2xl m-10 font-['Poppins'] relative">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD740] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#81D4FA] opacity-30 rounded-full blur-2xl"></div>

      <h1 className="text-5xl font-bold text-[#2D545E] text-center mb-12 font-['Montserrat']">
        Yog Items
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        {Yog_Items.length > 0 ? (
          Yog_Items.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-[#FFD740] to-[#FFF9C4] bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg text-2xl font-semibold text-[#12343B] text-center transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
            >
              {item}
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-[#12343B] text-2xl">
            <span role="img" aria-label="info" className="mr-2">
              📜
            </span>
            No Yog Items available
          </div>
        )}
      </div>
    </div>
  );
};

export default YogBox;
