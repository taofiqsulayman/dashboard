import React from "react";
import masterCardLogo from "../assets/mc_symbol.svg";
import userImage from "../assets/profile-pic.png";
import {
  ArrowTrendingUpIcon,
  ChartBarSquareIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import DebitCard from "./DebitCard";
import debitCardBg from "../assets/debitcard-bg.png";
import NavBar from "./NavBar";
import DebitCardTile from "./DebitCardTile";
import CurrencyExchangeTile from "./CurrencyExchangeTile";
import AvatarGroup from "./AvatarGroup";
import BankActionsTile from "./BankActionsTile";
import ChartArea from "./ChartArea";
import RecentActivities from "./RecentActivities";
import Tables from "./Tables";
import Statistics from "./Statistics";

const Contents = () => {
  const cardNumber = "1234 5678 9012 3456";
  const cardHolderName = "Carla Rosser";
  const expiryDate = "12/23";
  const cardType = "Visa";
  const backgroundImage = debitCardBg;

  const transactions = [
    {
      name: "Bitcoin Transactions",
      date: "Jan 16, 2020",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/505/801/original/bitcoin-logo-color-illustration-png.png",
      status: "Success",
      cardNumber: "*****45242",
      value: "-$853.00",
    },
    {
      name: "Sent to Antonia",
      date: "Jan 16, 2020",
      image:
        "https://media.istockphoto.com/id/1344327532/photo/studio-portrait-of-attractive-19-year-old-woman-with-brown-hair.jpg?b=1&s=170667a&w=0&k=20&c=qPtuG5hKcC8vva8y_HC9Xm5z31DeQG4LTI6RuSXJ6wE=",
      status: "Pending",
      cardNumber: "*****87212",
      value: "-$153.00",
    },
    {
      name: "Withdraw Paypal",
      date: "Jan 16, 2020",
      image:
        "https://banner2.cleanpng.com/20180418/xie/kisspng-paypal-logo-e-commerce-payment-system-paypal-5ad78137f1e9c2.9153968515240727599909.jpg",
      status: "Success",
      cardNumber: "*****36275",
      value: "+$223.00",
    },
  ];

  return (
    <div class="h-full w-full pr-8">
      <NavBar heading={"My Card"} />

      <div class="flex flex-wrap lg:flex-nowrap gap-8 mb-4 w-full h-full">
        <div class="flex flex-col flex-1 gap-6 rounded h-full w-full pl-4 pr-2">
          <DebitCard
            cardNumber={cardNumber}
            cardHolderName={cardHolderName}
            expiryDate={expiryDate}
            cardType={cardType}
            backgroundImage={backgroundImage}
          />
          <p className="font-semibold text-xl">Send Money</p>

          <DebitCardTile
            logoSrc={masterCardLogo}
            cardType={"Debit"}
            cardAmount={"10.680"}
            bordered={false}
          />

          <CurrencyExchangeTile userImage={userImage} placeholder={"1,24"} />

          <div className="flex justify-between items-center pr-4">
            <div class="p-2 flex items-center">
              <img
                class="w-8 h-8 rounded-full"
                src={userImage}
                alt="transaction image"
              />
              <h2 className="font-semibold px-4">Astrid Hayes</h2>
            </div>
            <div className="h-6 w-6 bg-[#DFF3FE] text-[#0177FB] rounded-full flex justify-center items-center text-lg font-bold">
              +
            </div>
          </div>

          <button
            type="button"
            class="text-white bg-[#0177FB] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl px-5 py-2.5 mr-2 mb-2 focus:outline-none"
          >
            Send Money
          </button>

          <div className="p-4 flex flex-col gap-4 border-[0.5px] rounded-xl">
            <p className="font-semibold text-sm">Quick Transfer</p>

            <DebitCardTile
              bordered={true}
              cardAmount={"10,432"}
              logoSrc={masterCardLogo}
              cardType={"Debit"}
            />

            <CurrencyExchangeTile
              bordered={true}
              avatarCount={2}
              placeholder={"124"}
            />

            <BankActionsTile />
          </div>
        </div>

        <div class="flex flex-col flex-auto gap-8 px-2 rounded-lg">
          <div className="flex flex-wrap">
            <div className="flex w-2/3 flex-col gap-4 pr-4">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">Money Flow</h2>
                <div className="flex gap-4">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-gray-500" />
                  <ChartBarSquareIcon className="h-6 w-6 text-[#0177FB]" />
                </div>
              </div>

              <div className="flex justify-between items-center">
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

              <ChartArea />
            </div>

            <RecentActivities />
          </div>

          <div className="w-full flex flex-col gap-8">
            <div className="flex gap-10 lg:justify-between items-center">
              <h2 className="font-semibold">Recent Transactions</h2>
              <div className="flex gap-2 items-center">
                <p className="text-sm">View all</p>
                <ChevronRightIcon className="h-3 w-3 text-gray-500" />
              </div>
            </div>
            <Tables transactions={transactions} />
          </div>

          <Statistics
            customers={"220k"}
            remittance={"230k"}
            donations={"270k"}
            watchtime={"130k"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contents;
