import React from "react";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import userImage from "../assets/profile-pic.png";

const NavBar = ({ heading }) => {
  return (
    <nav class="w-full bg-white px-2 py-4 mb-4">
      <div class="flex items-center justify-between">
        <h1 className="font-bold">{heading}</h1>
        <div class="flex items-center">
          <div class="flex items-center ml-3">
            <div className="flex gap-8 items-center">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              <BellIcon className="h-6 w-6 text-gray-500" />
              <img
                class="w-8 h-8 rounded-full"
                src={userImage}
                alt="user photo"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
