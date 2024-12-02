import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const VideoSection = () => {
  const [activeTab, setActiveTab] = useState("buyer");

  const buyerSteps = [
    "Post your requirements.",
    "Sit back for multiple suppliers to contact you.",
    "Choose among the suppliers based on the ratings and reviews.",
  ];

  const supplierSteps = [
    "Register as a supplier.",
    "Browse through available requirements.",
    "Contact buyers and submit your proposals.",
  ];

  return (
    <div className="flex w-full flex-col items-center px-4 my-20 lg:px-8">
      <div className="w-[90%] mx-auto grid items-center md:grid-cols-2 gap-8 bg-[#072F57] px-8 py-20 rounded-lg shadow-lg">
        <div className="rounded-lg lg:p-6 text-center">
          <div className="relative w-full mx-auto aspect-video rounded-lg overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/IZLp-TZyDkQ"
              title="Embedded YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        <div className="text-white xl:px-8">
          <div className="flex gap-6 mb-8 items-center justify-around">
            <button
              onClick={() => setActiveTab("buyer")}
              className={`pb-2 text-lg lg:text-2xl font-semibold relative w-full ${
                activeTab === "buyer" ? "text-[#FF6B6B]" : "text-white"
              }`}
            >
              Buyer
              {activeTab === "buyer" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EB7150]"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab("supplier")}
              className={`pb-2 text-lg lg:text-2xl font-semibold relative w-full ${
                activeTab === "supplier" ? "text-[#FF6B6B]" : "text-white"
              }`}
            >
              Supplier
              {activeTab === "supplier" && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#EB7150]"></span>
              )}
            </button>
          </div>

          <div className="space-y-4">
            {(activeTab === "buyer" ? buyerSteps : supplierSteps).map(
              (step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <FaCheckCircle size={20} className="w-8 text-[#4ADE80]" />
                  <p className="text-sm lg:text-lg">{step}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
