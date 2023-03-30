import React from 'react'
import {
  PencilIcon,
  MagnifyingGlassIcon,
  ChatBubbleOvalLeftIcon,
  ChevronRightIcon
} from "@heroicons/react/24/outline";
import AvatarGroup from './AvatarGroup';

const RecentActivities = () => {
  return (
    <>
      <div className="flex flex-grow flex-col gap-6 p-2">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-sm">Recent Contacts</h2>
          <div className="flex gap-4">
            <PencilIcon className="h-4 w-4 text-gray-500" />
            <MagnifyingGlassIcon className="h-4 w-4 text-[#0177FB]" />
          </div>
        </div>
        <p className="text-xs text-gray-500">18 recipients</p>
        <div className="flex justify-between items-center">
          <AvatarGroup count={5} />
          <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </div>

        <div class="w-full p-4 flex flex-col gap-4 rounded-lg shadow-lg">
          <h5 class="text-lg ">Group Party</h5>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <AvatarGroup count={3} collapsed={true} />
              <span class="flex items-center justify-center w-5 h-5 border-2 text-xs font-medium border-dotted border-[#0176FA] text-[#0176FA] rounded-full">
                +5
              </span>
            </div>
            <div class="relative">
              <ChatBubbleOvalLeftIcon className="h-6 w-6 text-gray-500" />
              <span class="top-0 left-4 absolute w-3.5 h-3.5 bg-[#0176FA] rounded-full"></span>
            </div>
          </div>
          <div class="flex justify-between items-center gap-8 pt-2">
            <div class="w-full rounded-lg inline-flex gap-2 items-center py-2.5">
              <img
                className="w-9 h-9 rounded-full"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                alt=""
              />
              <div class="text-left">
                <div class="mb-1 text-sm font-semibold">Dakota Milk</div>
                <div class="-mt-1 text-xs">$420.00</div>
              </div>
            </div>
            <ChevronRightIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentActivities
