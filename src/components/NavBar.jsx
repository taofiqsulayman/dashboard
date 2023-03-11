import React from 'react'
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import companyLogo from "../assets/company-logo.png";
import userImage from "../assets/profile-pic.png";

const NavBar = () => {
  return (
    <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200">
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start">
            <a href="#" class="flex ml-2 md:mr-24">
              <img
                src={companyLogo}
                class="h-8 w-auto mr-3"
                alt="Open pay Logo"
              />
            </a>
          </div>
          <div class="flex items-center">
            <div class="flex items-center ml-3">
              <div className="flex gap-8 items-center px-8">
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
      </div>
    </nav>
  );
}

export default NavBar
