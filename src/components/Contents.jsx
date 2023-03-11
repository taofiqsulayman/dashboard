import React from "react";
import creditCard from "../assets/card.png";

const Contents = () => {
  return (
    <div class="p-4 sm:ml-64 mt-14 h-full">
      <h1 className="font-bold mb-8">My Card</h1>
      <div class="flex gap-2 mb-4 h-full">
        <div class="flex flex-col rounded h-full w-full lg:w-[206px] mr-4">
          <img className="lg:h-[109px] lg:w-[206px]" src={creditCard} alt="credit card" />
          <p className="font-semibold text-xl my-8">Send Money</p>
        </div>
        <div class="flex items-center justify-center rounded">
          <p>+</p>
        </div>
      </div>
    </div>
  );
};

export default Contents;
