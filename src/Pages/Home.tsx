import React from "react";
import { Card } from "../components/Card";

export const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-green-600 pt-12 sm:pt-16 md:pt-20 lg:pt-24 m-4 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
        <span className="inline-block border-b-4 border-green-600 pb-2">Products</span>
      </h1>
      
      {/* Render the Card component to display the products */}
      <Card />
      
      <div className="flex items-center justify-center mt-8 mb-12">
        <button className="bg-green-600 text-white font-bold text-center rounded-full py-3 px-6 sm:px-8 text-sm sm:text-base shadow-lg hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105">
          View More
        </button>
      </div>
    </div>
  );
};