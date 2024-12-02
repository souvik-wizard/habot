import React from "react";
import PrimaryButton from "./PrimaryButton";

const GetVerified = () => {
  return (
    <section className="bg-[#E8FBFF] py-20 my-20 w-full">
      <div className="w-[90%] flex flex-col lg:flex-row gap-12  justify-between  md:items-center mx-auto px-16">
        <div className="relative">
          <h1 className="font-semibold text-4xl">Let Suppliers Find You</h1>
          <img
            src="/assets/icons/Underline.svg"
            alt=""
            className="absolute -bottom-2 md:right-0"
          />
        </div>
        <PrimaryButton
          title="Get Verified"
          className="bg-[#EB7150] text-white font-medium hover:border-[#EB7150] hover:bg-transparent hover:text-gray-900 text-lg xl:text-xl px-8 py-3"
        />
      </div>
    </section>
  );
};

export default GetVerified;
