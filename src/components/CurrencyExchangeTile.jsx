import React from "react";
import AvatarGroup from "./AvatarGroup";

const CurrencyExchangeTile = ({ userImage, placeholder, bordered, avatarCount }) => {
  return (
    <div
      className={
        bordered
          ? "bg-white rounded-lg border-[0.5px] border-[#A4B4CB]"
          : "bg-white rounded-lg shadow-lg"
      }
    >
      <div className="p-2 flex items-center">
        {userImage && (
          <img
            src={userImage}
            alt="user"
            className="h-4 mr-2 bg-cover rounded-full"
          />
        )}
        <h2 className="text-gray-900">Enter the amount</h2>
      </div>
      <div className="p-2 flex justify-between  overflow-hidden">
        <div className="flex justify-start items-center pr-2">
          <span className="text-[#A4B4CB] text-lg font-semibold">$</span>
          <input
            type="number"
            placeholder={placeholder}
            className="appearance-none bg-transparent border-none focus:outline-none focus:border-none font-semibold text-gray-700 py-1 px-2"
          />
        </div>
        <div className="p-2 flex items-center">
          {bordered ? (
            <AvatarGroup count={avatarCount} collapsed={true} />
          ) : (
            <img
              src="https://media.istockphoto.com/id/1439544258/vector/usa-and-france-circle-flags-3d-icon-round-french-and-american-national-symbols-vector.jpg?s=612x612&w=0&k=20&c=NzaISF2XR1PRHLcRSDo3AIYd3L_t8r7v2GkW0-GFM4c="
              alt="swap Logo"
              className="h-8 mr-2 bg-cover"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyExchangeTile;
