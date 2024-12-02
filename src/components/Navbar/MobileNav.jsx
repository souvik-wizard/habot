import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import Dropdown from "./Dropdown";
import PrimaryButton from "../PrimaryButton";
const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white p-2 rounded-md text-gray-400  lg:hidden"
      >
        {isOpen ? (
          <IoClose className="h-6 w-6 text-gray-800" aria-hidden="true" />
        ) : (
          <IoMenu className="h-6 w-6 text-gray-800" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-0 inset-x-0 p-2 origin-top-right md:hidden transition-all transform ease-in-out duration-300 z-50  ">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    src="/assets/icons/logo.svg"
                    alt="logo"
                    className="w-32"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  >
                    <span className="sr-only">Close menu</span>
                    <IoClose
                      className="h-6 w-6 text-gray-800"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="/"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Find Suppliers
                  </span>
                </a>

                <Dropdown />
              </div>
            </div>
            <div className="py-6 px-5 space-y-6 ">
              <PrimaryButton
                title="Login / Signup"
                className="hover:bg-[#00732F] hover:text-white border-[#00732F] text-[#00732F] w-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
