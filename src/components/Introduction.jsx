import React from "react";
import PrimaryButton from "./PrimaryButton";
import { BsArrowRight } from "react-icons/bs";

const Introduction = () => {
  return (
    <div className="flex w-[90%] mx-auto flex-col lg:flex-row px-4 my-20 lg:px-8   items-center justify-between gap-12">
      <div className="w-full flex flex-col justify-between gap-8">
        <h1 className="font-bold text-4xl">Ready to dive into HABOT?</h1>
        <p className="font-light xl:w-[600px]">
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
        <PrimaryButton
          title="Sign up today!"
          className="bg-[#00732F] text-lg w-fit text-white font-medium border-[#00732F] hover:bg-green-700 flex items-center gap-6 px-6 group"
          icon={
            <BsArrowRight
              size={24}
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            />
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  w-full justify-start items-center gap-6">
        <PrimaryButton
          className="border border-[#E7760D] hover:bg-[#E7760D] text-[#3E3E3E] hover:text-white rounded text-lg xl:text-xl py-3"
          title="Abu Dhabi"
        />
        <PrimaryButton
          className="border border-[#E7760D] hover:bg-[#E7760D] text-[#3E3E3E] hover:text-white rounded text-lg xl:text-xl py-3"
          title="Dubai"
        />
        <PrimaryButton
          className="border border-[#E7760D] hover:bg-[#E7760D] text-[#3E3E3E] hover:text-white rounded text-lg xl:text-xl py-3"
          title="Sharjah & Ajman"
        />
        <PrimaryButton
          className="border border-[#E7760D] hover:bg-[#E7760D] text-[#3E3E3E] hover:text-white rounded text-lg xl:text-xl py-3"
          title="Fujairah"
        />
        <PrimaryButton
          className="border border-[#E7760D] hover:bg-[#E7760D] text-[#3E3E3E] hover:text-white rounded text-lg xl:text-xl py-3"
          title="Ras Al Khaimah"
        />
        <PrimaryButton
          className="border border-[#E7760D] hover:bg-[#E7760D] text-[#3E3E3E] hover:text-white rounded text-lg xl:text-xl py-3"
          title="Umm Al Quwain"
        />
      </div>
    </div>
  );
};

export default Introduction;
