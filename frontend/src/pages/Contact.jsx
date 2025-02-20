import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D1C4E9] to-[#81D4FA] text-[#12343B] py-16 px-6 font-['Poppins'] relative">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFD740] opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#81D4FA] opacity-30 rounded-full blur-2xl"></div>

      {/* Header Section */}
      <div className="relative bg-white bg-opacity-80 rounded-2xl shadow-lg p-12 text-center mb-16 backdrop-blur-lg">
        <h1 className="text-5xl font-extrabold mb-6 text-[#2D545E] tracking-wide">
          Contact Us
        </h1>
        <p className="text-lg font-light text-[#12343B] opacity-90 max-w-2xl mx-auto">
          We would love to hear from you. Feel free to reach out for any
          inquiries or assistance!
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative">
        {/* Location Card */}
        <div className="bg-[#FFF9C4] text-[#12343B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Our Location</h2>
          <p className="text-lg">
            A-6, Second Floor, Sector-36, Greater Noida, 201308
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-[#81D4FA] text-[#12343B] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="text-lg">
            <strong>Phone:</strong> +91 9650953157
            <br />
            <strong>Email:</strong> info@destinyoflife.org
          </p>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 text-center relative">
        <h2 className="text-3xl font-bold mb-6 text-[#2D545E]">Get in Touch</h2>
        <p className="text-lg text-[#12343B] mb-8">
          For any questions or inquiries, feel free to contact us. We're here to
          help!
        </p>
        <button className="bg-gradient-to-r from-[#81D4FA] to-[#FFD740] hover:from-[#FFD740] hover:to-[#FFF9C4] text-[#12343B] font-bold py-4 px-12 rounded-full shadow-lg transition-transform transform hover:-translate-y-1 hover:scale-105">
          Send a Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
