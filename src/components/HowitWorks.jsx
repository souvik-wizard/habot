import React from "react";

const steps = [
  {
    icon: "/assets/icons/1.svg",
    title: "Select Your Role and Sign Up",
  },
  {
    icon: "/assets/icons/2.svg",
    title: "Buyers Post Your Requirements",
  },
  {
    icon: "/assets/icons/3.svg",
    title: "Review, Select, and Contact the Best Suppliers",
  },
  {
    icon: "/assets/icons/4.svg",
    title: "Suppliers Complete your Profile and get notified for opportunities",
  },
  {
    icon: "/assets/icons/5.svg",
    title: "Contact to Buyers and Share your Quote for the service",
  },
  {
    icon: "/assets/icons/6.svg",
    title: "Both the Parties can Connect and Make Business Leave a Feedback",
  },
];

const HowItWorks = () => {
  return (
    <div className="my-16 px-4 w-[90%] mx-auto">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h3 className="text-4xl font-bold mb-8">How it works?</h3>
          <p className=" max-w-3xl mx-auto">
            Buyers post their needs and review top suppliers, while suppliers
            complete profiles, connect with potential buyers, and build
            successful business relationships, sharing valuable feedback.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg  ${
                [0, 2, 4].includes(index)
                  ? "bg-[#E8FBFF] hover:shadow-lg hover:transition-shadow"
                  : ""
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <img src={step.icon} alt="" className="w-16 h-16 mb-4" />
                <p className="text-gray-800 font-medium lg:text-lg">
                  {step.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
