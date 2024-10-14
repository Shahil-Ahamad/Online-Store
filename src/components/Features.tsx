import React from "react";

export const Features: React.FC = () => {
  return (
    <>
      <div>
        <h1 className="text-green-600 pt-24 m-4 text-center text-7xl font-bold underline">
          Features
        </h1>
      </div>
      <div className="flex justify-around items-center mt-8">
        <div className="flex items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/256/411/411763.png"
            alt="Free Delivery"
            className="w-24 h-24 mr-4 object-contain transform scale-110"
          />
          <h2 className="text-xl font-semibold w-24 text-justify">Free Delivery</h2>
        </div>
        <div className="flex items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/256/584/584067.png"
            alt="Money Guarantee"
            className="w-24 h-24 mr-4 object-contain"
          />
          <h2 className="text-xl font-semibold w-24 text-justify">Money Guarantee</h2>
        </div>
        <div className="flex items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/256/7981/7981646.png"
            alt="Online Support"
            className="w-24 h-24 mr-4 object-contain"
          />
          <h2 className="text-xl font-semibold w-24 text-justify">Online Support</h2>
        </div>
        <div className="flex items-center text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/256/7874/7874280.png"
            alt="Fast Delivery"
            className="w-24 h-24 mr-4 object-contain"
          />
          <h2 className="text-xl font-semibold w-24 text-justify">Fast Delivery</h2>
        </div>
      </div>
    </>
  );
};
