import React from "react";
import PrimaryButton from "./PrimaryButton";

const Hero = () => {
  return (
    <div className="relative min-h-screen  flex items-center justify-center">
      <img
        src="/assets/bg.png"
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 hero"></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Are You a Supplier?
        </h1>
        <p className="text-2xl md:text-3xl lg:text-5xl text-white mb-12">
          Explore Matching Opportunities.
        </p>

        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8">
          <div className="relative flex-1">
            <img
              src="/assets/icons/suitcase.svg"
              alt="work"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search your required service here"
              className="w-full pl-12 pr-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
          <div className="relative flex-1">
            <img
              src="/assets/icons/map.svg"
              alt="mapicon"
              className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search your desired location here"
              className="w-full pl-12 pr-4 py-3 rounded-md border-0 focus:ring-2 focus:ring-green-500 text-sm"
            />
          </div>
          <PrimaryButton
            title="Search"
            className="bg-[#00732F] text-white border-[#00732F] hover:bg-green-700"
          />
        </div>

        <div className="inline-flex items-center gap-2 text-white flex-col lg:flex-row">
          <span className="font-semibold">Are you a buyer?</span>
          <a
            href="/"
            className="text-white underline hover:text-green-500 transition-colors duration-200"
          >
            Click here if you are looking to post a requirements
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
