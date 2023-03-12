import React from "react";
import {
  HomeIcon,
  TicketIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  WalletIcon,
  ChartPieIcon,
  ChartBarSquareIcon,
  InformationCircleIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const SideBar = () => {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full flex flex-col justify-between px-3 pb-4 overflow-y-auto bg-white">
        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg bg-[#E5F1FF] text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <HomeIcon className="h-6 w-6 text-[#0177FD]" />
              <span class="ml-3 mt-auto">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <TicketIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="ml-3 mt-auto">Invoices</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD] "
            >
              <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="flex-1 ml-3 whitespace-nowrap">Message</span>
              <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-white bg-blue-600 rounded-full">
                5
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <WalletIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="ml-3 mt-auto">My Wallets</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <ChartPieIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="ml-3 mt-auto">Activities</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <ChartBarSquareIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="ml-3 mt-auto">Analytics</span>
            </a>
          </li>
        </ul>

        <ul class="space-y-2">
          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <InformationCircleIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="ml-3 mt-auto">Get Help</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="flex items-center p-2 text-base font-semibold rounded-lg hover:bg-[#E5F1FF] hover:text-[#0177FD] active:bg-[#E5F1FF] active:text-[#0177FD]"
            >
              <Cog8ToothIcon className="h-6 w-6 text-gray-400 hover:text-[#0177FD]" />
              <span class="ml-3 mt-auto">Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBar;
