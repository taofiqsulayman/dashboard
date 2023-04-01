import React from 'react'
import {
  UsersIcon,
  BanknotesIcon,
  GiftIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";


const Statistics = ({ customers, remittance, donations, watchtime }) => {
  return (
    <div class="w-full flex p-10 bg-white border border-gray-200 rounded-lg shadow">
      <h5 class="mb-4 pb-4 text-xl font-semibold">Statistics</h5>
      <div class="flex justify-between gap-4 lg:gap-10 pt-8">
        <a
          href="#"
          class="w-full sm:w-auto rounded-lg inline-flex gap-2 items-center justify-center py-2.5"
        >
          <div className="flex items-center justify-center rounded-full h-10 w-10 bg-[#EFECFD] text-[#7468E4]">
            <UsersIcon className="h-6 w-6" />
          </div>
          <div class="text-left">
            <div class="mb-1 text-sm font-semibold">{customers}</div>
            <div class="-mt-1 text-xs">Customers</div>
          </div>
        </a>

        <a
          href="#"
          class="w-full sm:w-auto rounded-lg inline-flex gap-2 items-center justify-center py-2.5"
        >
          <div className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E4F8FB] text-[#51D5EC]">
            <BanknotesIcon className="h-6 w-6" />
          </div>
          <div class="text-left">
            <div class="mb-1 text-sm font-semibold">{remittance}</div>
            <div class="-mt-1 text-xs">Remittance</div>
          </div>
        </a>

        <a
          href="#"
          class="w-full sm:w-auto rounded-lg inline-flex gap-2 items-center justify-center py-2.5"
        >
          <div className="flex items-center justify-center rounded-full h-10 w-10 bg-[#E5F7ED] text-[#22B573]">
            <GiftIcon className="h-6 w-6" />
          </div>
          <div class="text-left">
            <div class="mb-1 text-sm font-semibold">{donations}</div>
            <div class="-mt-1 text-xs">Donations</div>
          </div>
        </a>

        <a
          href="#"
          class="w-full sm:w-auto rounded-lg inline-flex gap-2 items-center justify-center py-2.5"
        >
          <div className="flex items-center justify-center rounded-full h-10 w-10 bg-[#FDF1E2] text-[#FFB648]">
            <ClockIcon className="h-6 w-6" />
          </div>
          <div class="text-left">
            <div class="mb-1 text-sm font-semibold">{watchtime}</div>
            <div class="-mt-1 text-xs">Watchtime</div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Statistics
