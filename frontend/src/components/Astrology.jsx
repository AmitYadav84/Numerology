import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Astropage = () => {
  const navigate = useNavigate();
  const {
    name,
    gridItems,
    Nam_Num,
    KuaNum,
    Year_Num,
    conductorNum,
    DriverNum,
  } = useContext(UserContext);

  const driverHandler = () => navigate("/driver");
  const conductorHandler = () => navigate("/conductor");

  useEffect(() => {
    driverHandler;
    conductorHandler;
  }, []);

  return (
    <div className=" bg-gradient-to-br from-[#D1C4E9] to-[#81D4FA] text-[#12343B] py-12 px-4 sm:px-6 lg:px-8 font-['Poppins'] relative flex flex-col items-center">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-72 sm:h-72 bg-[#FFD740] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-64 sm:h-64 bg-[#81D4FA] opacity-30 rounded-full blur-2xl"></div>

      {/* Header Section */}
      <div className="relative bg-amber-100 bg-opacity-80 rounded-2xl shadow-lg p-4  text-center mb-12 mt-12  backdrop-blur-lg  w-[80vw]">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-2 sm:mb-4 md:mb-6 text-[#2D545E] font-['Montserrat']">
          Birth Chart
        </h1>
        <p className="text-sm sm:text-lg md:text-2xl font-light text-[#12343B] opacity-90 font-['Roboto']">
          Let’s Deep Dive into Numerology. Hello {name}, this is your Birth
          Chart.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-6xl gap-6 sm:gap-8 px-4">
        {/* Grid Items */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 w-full max-w-md sm:max-w-2xl lg:w-1/2 border-4 border-amber-400 bg-amber-100 p-4 sm:p-5 rounded-3xl">
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 sm:h-16 md:h-24 bg-gradient-to-br from-[#FFD740] to-[#FFF9C4] text-[#2D545E] font-bold text-xs sm:text-base md:text-lg rounded-lg border-4 border-amber-400 shadow-lg transform hover:scale-105 hover:-translate-y-2 transition-all duration-300"
            >
              {item || " "}
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white p-3 sm:p-4 md:p-6 rounded-3xl w-full max-w-md sm:max-w-2xl lg:w-1/2">
          {[
            {
              label: "Driver Number",
              value: DriverNum,
              handler: driverHandler,
            },
            {
              label: "Conductor Number",
              value: conductorNum,
              handler: conductorHandler,
            },
            { label: "Kua Number", value: KuaNum },
            { label: "Name Number", value: Nam_Num },
            { label: "Year Number", value: Year_Num },
          ].map((item, index) => (
            <div
              key={index}
              onClick={item.handler}
              className={`cursor-pointer bg-gradient-to-br from-[#81D4FA] to-[#FFD740] text-[#12343B] font-bold border-4 border-gray-300 px-3 sm:px-4 py-2 sm:py-4 h-14 sm:h-[70px] md:h-[80px] w-32 sm:w-[150px] md:w-[180px] text-center rounded-lg shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 ${
                item.handler ? "cursor-pointer" : ""
              }`}
            >
              {item.label}: {item.value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Astropage;
