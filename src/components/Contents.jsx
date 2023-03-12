import React from "react";
import creditCard from "../assets/card.png";
import masterCardLogo from "../assets/mc_symbol.svg";
import userImage from "../assets/profile-pic.png";
import { ChevronDownIcon, PlusCircleIcon, ArrowUpOnSquareIcon, SquaresPlusIcon, TicketIcon } from "@heroicons/react/24/outline";

import {
  ArrowTrendingUpIcon,
  ChartBarSquareIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";



const Contents = () => {
  return (
    <div class="px-8 sm:ml-64 mt-14 h-full">
      <h1 className="font-bold mb-4">My Card</h1>
      <div class="flex gap-8 mb-4 h-full">
        <div class="flex flex-col gap-6 rounded h-full w-full lg:w-[300px] mr-4">
          <img
            className="lg:h-[125px] lg:w-full"
            src={creditCard}
            alt="credit card"
          />
          <p className="font-semibold text-xl">Send Money</p>

          <div class="bg-white flex justify-between rounded-lg shadow-lg overflow-hidden">
            <div class="p-2 flex items-center">
              <img
                src={masterCardLogo}
                alt="Mastercard Logo"
                class="h-8 mr-2 bg-cover"
              />
              <h2 class=" text-gray-900">Debit</h2>
            </div>
            <div className="flex gap-2 mr-2 items-center">
              <p className="font-semibold">
                <span className="text-[#A4B4CB]">$</span> 10.680
              </p>
              <ChevronDownIcon className="h-3 w-3 text-gray-500" />
            </div>
          </div>

          <div>
            <div class="p-2 flex items-center">
              <img
                src={userImage}
                alt="Mastercard Logo"
                class="h-4 mr-2 bg-cover rounded-full"
              />
              <h2 class=" text-gray-900">Enter the amount</h2>
            </div>
            <div class="bg-white p-2 flex justify-between rounded-lg shadow-lg overflow-hidden">
              <div className="flex p-2 gap-2 mr-2 items-center">
                <p className="font-semibold text-xl">
                  <span className="text-[#A4B4CB]">$</span> 800.0
                </p>
              </div>
              <div class="p-2 flex items-center">
                <img
                  src="https://media.istockphoto.com/id/1439544258/vector/usa-and-france-circle-flags-3d-icon-round-french-and-american-national-symbols-vector.jpg?s=612x612&w=0&k=20&c=NzaISF2XR1PRHLcRSDo3AIYd3L_t8r7v2GkW0-GFM4c="
                  alt="Mastercard Logo"
                  class="h-8 mr-2 bg-cover"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pr-4">
            <div class="p-2 flex items-center">
              <img
                src={userImage}
                alt="Mastercard Logo"
                class="h-6 mr-2 bg-cover rounded-full"
              />
              <h2 className="font-semibold">Astrid Hayes</h2>
            </div>
            <PlusCircleIcon className="h-6 w-6 bg-[#DFF3FE] text-[#0177FB] rounded-full" />
          </div>

          <button
            type="button"
            class="text-white bg-[#0177FB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Send Money
          </button>

          <div className="p-4 flex flex-col gap-4 border-[0.5px] rounded-xl">
            <p className="font-semibold text-sm">Quick Transfer</p>
            <div class="bg-white flex justify-between border-[0.5px] rounded-lg overflow-hidden">
              <div class="flex items-center">
                <img
                  src={masterCardLogo}
                  alt="Mastercard Logo"
                  class="h-8 mr-2 bg-cover"
                />
                <h2 class=" text-gray-900">Debit</h2>
              </div>
              <div className="flex gap-2 mr-2 items-center">
                <p className="font-semibold">
                  <span className="text-[#A4B4CB]">$</span> 10,432
                </p>
                <ChevronDownIcon className="h-3 w-3 text-gray-500" />
              </div>
            </div>

            <div className="bg-white border-[1px] border-[#819CFD] rounded-lg p-2">
              <h2 class="p-2 text-gray-900">Enter amount</h2>
              <div class="flex justify-between items-center overflow-hidden">
                <p className="font-semibold text-lg">
                  <span className="text-[#A4B4CB]">$</span> 124
                </p>
                <div class="flex items-center -space-x-2">
                  <img
                    class="w-6 h-6 border-2 border-white rounded-full"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                  <img
                    class="w-6 h-6 border-2 border-white rounded-full"
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <div class="border-[0.5px] h-10 w-10 rounded-lg flex items-center justify-center">
                <ArrowUpOnSquareIcon className="h-6 w-6 text-[#A789FF]" />
              </div>

              <div class="border-[0.5px] h-10 w-10 rounded-lg flex items-center justify-center">
                <ArrowUpOnSquareIcon className="h-6 w-6 text-[#83DEA4]" />
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
          </div>
        </div>

        <div class="flex flex-col gap-4 rounded-lg">
          <div className="flex gap-8 pr-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center w-[550px]">
                <h2 className="font-semibold">Money Flow</h2>
                <div className="flex gap-4">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" />
                  <ChartBarSquareIcon className="h-6 w-6 text-[#0177FB]" />
                </div>
              </div>

              <div className="flex justify-between items-center w-[550px]">
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <ArrowTrendingUpIcon className="h-6 w-6 p-1 text-white bg-[#0177FB] rounded-full" />
                    <p>Savings</p>
                  </div>
                  <div className="flex gap-2">
                    <ArrowTrendingUpIcon className="h-4 w-4 text-[#0177FB]" />
                    <p className="text-[#7C8DA7] font-semibold">+6,79%</p>
                  </div>
                </div>
                <div className="flex gap-2 p-2 items-center border-[0.5px] rounded-2xl">
                  <p className="text-sm">Week</p>
                  <ChevronDownIcon className="h-3 w-3 text-gray-500" />
                </div>
              </div>

              <div>CHART GOES HERE</div>
            </div>
            <div className="w-[350px]"> SIDE CONTENT</div>
          </div>

          <div className="w-full flex flex-col gap-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Recent Transactions</h2>
              <div className="flex gap-2 items-center">
                <p className="text-sm">View all</p>
                <ChevronRightIcon className="h-3 w-3 text-gray-500" />
              </div>
            </div>

            <div class="bg-white flex justify-between text-base overflow-hidden">
              <div class="flex items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/008/505/801/original/bitcoin-logo-color-illustration-png.png"
                  alt="Logo"
                  class="h-8 mr-2 bg-cover"
                />
                <h2 class=" text-gray-900">Bitcoin Transactions</h2>
              </div>
              <p>Jan 16, 2020</p>
              <p>*****45242</p>
              <p>-$853.00</p>
              <p className="text-[#61BB84] bg-[#EBFFF3] px-2 py-1">Success</p>
            </div>

            <div class="bg-white flex justify-between text-base overflow-hidden">
              <div class="flex items-center">
                <img
                  src="https://media.istockphoto.com/id/1344327532/photo/studio-portrait-of-attractive-19-year-old-woman-with-brown-hair.jpg?b=1&s=170667a&w=0&k=20&c=qPtuG5hKcC8vva8y_HC9Xm5z31DeQG4LTI6RuSXJ6wE="
                  alt="Logo"
                  class="h-8 mr-2 bg-cover rounded-full"
                />
                <h2 class=" text-gray-900">Sent to antonia</h2>
              </div>
              <p className="ml-8">Jan 16, 2020</p>
              <p>*****87212</p>
              <p>-$153.00</p>
              <p className="text-[#FFAA90] bg-[#FFF1ED] px-2 py-1">Pending</p>
            </div>

            <div class="bg-white flex justify-between text-base overflow-hidden">
              <div class="flex items-center">
                <img
                  src="https://banner2.cleanpng.com/20180418/xie/kisspng-paypal-logo-e-commerce-payment-system-paypal-5ad78137f1e9c2.9153968515240727599909.jpg"
                  alt="Logo"
                  class="h-8 mr-2 bg-cover rounded-full"
                />
                <h2 class=" text-gray-900">Withdraw Paypal</h2>
              </div>
              <p className="ml-6">Jan 16, 2020</p>
              <p>*****36275</p>
              <p>+$223.00</p>
              <p className="text-[#61BB84] bg-[#EBFFF3] px-2 py-1">Success</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
