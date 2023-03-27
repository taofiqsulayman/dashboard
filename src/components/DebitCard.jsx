import React from "react";

const DebitCard = ({
  cardNumber,
  cardHolderName,
  expiryDate,
  cardType,
  backgroundImage,
}) => {
  return (
    <div
      className="relative w-80 h-48 rounded-2xl p-6 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="absolute top-4 left-4 text-white font-semibold">Name</div>
      <div className="absolute top-10 left-4 text-white font-semibold">
        {cardHolderName}
      </div>

      <div className="absolute bottom-4 left-4 text-white">
        <div className="text-lg font-semibold">{cardNumber}</div>
        <div className="text-sm font-semibold">{expiryDate}</div>
      </div>
      <div className="absolute bottom-4 right-4">
        <img
          src={
            cardType === "Visa"
              ? "https://img.icons8.com/color/48/000000/visa.png"
              : "https://img.icons8.com/color/48/000000/mastercard-logo.png"
          }
          alt={cardType}
        />
      </div>
    </div>
  );
};

export default DebitCard;
