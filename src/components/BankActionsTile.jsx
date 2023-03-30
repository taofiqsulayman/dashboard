import React from 'react'
import {
  ArrowUpOnSquareIcon,
  SquaresPlusIcon,
  TicketIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";

const BankActionsTile = () => {
  return (
    <>
      <div className="flex justify-between">
        <div class="border-[0.5px] h-10 w-10 rounded-lg flex items-center justify-center">
          <ArrowUpOnSquareIcon className="h-6 w-6 text-[#A789FF]" />
        </div>

        <div class="border-[0.5px] h-10 w-10 rounded-lg flex items-center justify-center">
          <ArrowDownTrayIcon className="h-6 w-6 text-[#83DEA4]" />
        </div>

        <div class="border-[0.5px] h-10 w-10 rounded-lg flex items-center justify-center">
          <TicketIcon className="h-6 w-6 text-[#FCE37E]" />
        </div>

        <div class="border-[0.5px] h-10 w-10 rounded-lg flex items-center justify-center">
          <SquaresPlusIcon className="h-6 w-6 text-[#436CFB]" />
        </div>
      </div>

      <div className="flex justify-between font-semibold text-xs">
        <span className="text-[#798BA3]">Send</span>
        <span className="text-[#798BA3]">Receive</span>
        <span className="text-[#798BA3]">Invoicing</span>
        <span className="text-[#798BA3]">More</span>
      </div>
    </>
  );
}

export default BankActionsTile
