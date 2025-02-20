import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D1C4E9] to-[#81D4FA] text-[#12343B] py-16 px-6 font-['Poppins'] relative">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD740] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#81D4FA] opacity-30 rounded-full blur-2xl"></div>

      {/* Header Section */}
      <div className="relative bg-white bg-opacity-80 rounded-2xl shadow-lg p-12 text-center mb-16 backdrop-blur-lg">
        <h1 className="text-6xl font-extrabold mb-6 text-[#2D545E] font-['Montserrat']">
          Numerology Services
        </h1>
        <p className="text-2xl font-light text-[#12343B] opacity-90 font-['Roboto']">
          Decode the secrets of your life through the magic of numbers.
        </p>
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#FFD740] to-[#FFF9C4] bg-opacity-80 backdrop-blur-md rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#81D4FA] to-[#FFD740] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-2 text-[#2D545E]">
                {service.title}
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-[#12343B]">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center relative">
        <h2 className="text-4xl font-bold mb-6 font-['Montserrat'] text-[#2D545E]">
          Start Your Numerology Journey Today
        </h2>
        <p className="text-lg text-[#12343B] mb-8 font-['Roboto']">
          Discover how numbers can shape your life and unlock new opportunities.
        </p>
        <button
          onClick={()=> navigate("/")}
          className="bg-gradient-to-r from-[#81D4FA] to-[#FFD740] hover:from-[#FFD740] hover:to-[#FFF9C4] text-[#12343B] font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105"
        >
          Get Your Report
        </button>
      </div>
    </div>
  );
};

const services = [
  {
    icon: "📜",
    title: "Personal Numerology Reports",
    description:
      "Gain insights into your personality, life path, and future with personalized numerology reports.",
  },
  {
    icon: "🔤",
    title: "Name Correction for Positive Vibrations",
    description:
      "Optimize your name to align with numerological principles for improved energy and success.",
  },
  {
    icon: "🏢",
    title: "Business Name and Logo Suggestions",
    description:
      "Boost your business potential with numerologically aligned name and logo suggestions.",
  },
  {
    icon: "🔢",
    title: "Lucky Numbers and Dates Analysis",
    description:
      "Identify your lucky numbers and dates for making better decisions in life.",
  },
  {
    icon: "❤️",
    title: "Compatibility Reports",
    description:
      "Understand your relationships through numerology and enhance harmony in your life.",
  },
];

export default Services;
