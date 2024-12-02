import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import DropDown from "./Dropdown";
import MobileNav from "./MobileNav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="border-b border-gray-200">
      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src="/assets/icons/logo.svg" alt="logo" className="w-32" />
          </div>
          <div className="flex gap-8">
            <div className="hidden md:flex items-center justify-center">
              <a
                href="/"
                className="text-[#6D6E71] hover:text-gray-800 px-3 py-2 text-sm whitespace-nowrap"
              >
                Find Suppliers
              </a>
              <DropDown />
            </div>
            <div className="hidden md:flex items-center">
              <PrimaryButton
                title="Login / Signup"
                className="hover:bg-[#00732F] hover:text-white border-[#00732F] text-[#00732F]"
              />
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
