import React from "react";
import MoneyInputField from "./MoneyInputField";

const DebitCardTile = ({ logoSrc, cardType, cardAmount, bordered }) => {
  return (
    <div
      className={
        bordered
          ? "bg-white w-full flex gap-10 rounded-lg border-[0.5px] border-gray-400 overflow-hidden"
          : "bg-white w-full flex gap-10 rounded-lg shadow-lg overflow-hidden"
      }
    >
      <div className="p-2 flex items-center w-">
        <img src={logoSrc} alt="Card Logo" className="h-8 mr-2 bg-cover" />
        <h2 className="text-gray-900">{cardType}</h2>
      </div>
      <div className=" float-left">
        <MoneyInputField placeholder={cardAmount} />
      </div>
    </div>
  );
};

export default DebitCardTile;
