import React from "react";


const About = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D1C4E9] to-[#81D4FA] text-[#12343b] py-16 px-6 font-['Poppins'] relative">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD740] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#81D4FA] opacity-30 rounded-full blur-2xl"></div>

      {/* Header Section */}
      <div className="relative bg-white bg-opacity-80 rounded-2xl shadow-lg p-12 text-center mb-16 backdrop-blur-lg">
        <h1 className="text-6xl font-extrabold mb-6 text-[#2D545E] font-['Montserrat']">
          About Numerology Insights
        </h1>
        <p className="text-2xl font-light text-[#12343b] opacity-90 font-['Roboto']">
          Discover the universe within numbers and unlock your destiny.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        {/* Vision Section */}
        <div className="bg-[#FFF9C4] text-[#12343B] rounded-lg shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            To empower individuals to decode the patterns of their lives and
            achieve spiritual clarity.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-[#81D4FA] text-[#12343B] rounded-lg shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <ul className="list-disc list-inside text-left text-lg leading-relaxed">
            <li>Provide tools for self-discovery through numerology.</li>
            <li>Promote harmony and clarity in personal journeys.</li>
            <li>Deliver insights for personal growth and success.</li>
          </ul>
        </div>

        {/* Objectives Section */}
        <div className="bg-[#FFD740] text-[#12343B] rounded-lg shadow-lg p-8 hover:shadow-2xl transition-transform transform hover:-translate-y-2">
          <h2 className="text-3xl font-bold mb-4">Our Objectives</h2>
          <ul className="list-disc list-inside text-left text-lg leading-relaxed">
            <li>Spread awareness about the science of numerology.</li>
            <li>Foster a supportive and enlightening community.</li>
            <li>Deliver authentic, accessible numerology resources.</li>
            <li>Inspire meaningful personal transformation.</li>
          </ul>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center relative">
        <h2 className="text-4xl font-bold mb-6 font-['Montserrat'] text-[#2D545E]">
          Join Us in Exploring the Numbers
        </h2>
        <p className="text-lg text-[#12343B] mb-8 font-['Roboto']">
          Tap into the hidden meanings of numbers and uncover your true path.
        </p>
        <button  className="bg-gradient-to-r from-[#81D4FA] to-[#FFD740] hover:from-[#FFD740] hover:to-[#FFF9C4] text-[#12343B] font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105 font-['Poppins']">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
