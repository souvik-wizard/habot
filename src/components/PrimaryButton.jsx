import React from "react";

const PrimaryButton = ({ className, title }) => {
  return (
    <button
      className={`${className} border px-4 py-2 rounded-md  text-sm transition-all ease-in-out duration-300`}
      href="/"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
