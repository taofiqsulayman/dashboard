import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const MoneyInputField = ({placeholder}) => {
  return (
    <div className="flex justify-end items-center py-2 pr-2">
      <span className="text-[#A4B4CB] text-lg font-semibold">$</span>
      <input
        type="number"
        placeholder={placeholder}
        className="appearance-none w-2/4 bg-transparent border-none font-semibold text-gray-700 py-1 px-2"
      />
      <ChevronDownIcon className="h-4 w-4 text-[#A4B4CB]" />
    </div>
  );
};

export default MoneyInputField;
