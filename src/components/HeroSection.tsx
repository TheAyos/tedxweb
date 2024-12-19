import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">TEDx[name] 2024</h1>
        <p className="text-xl md:text-2xl mb-8">[Event Theme]</p>
        <div className="mb-8">
          <p className="text-lg mb-2">[Event Date]</p>
          <p className="text-lg">[Venue Name], [City]</p>
        </div>
        <button className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors">
          Register Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
