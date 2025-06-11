import Image from "next/image";
import React from "react";

const Page = () => {

  
  return (
    <div>
      <div className="w-full h-[70vh] relative bg-[url('https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Promotional-Carousel-Model-Y-Desktop-US.jpg')] bg-cover bg-center">
        <div className="flex flex-col items-center h-full text-white bg-black/30">
          <h1 className="text-6xl mt-12 font-bold">Model Y</h1>
          <p className="underline text-[20px]">1.99% APR Financing</p>
          <p>Ends June 16 for AWD and June 30 for RWD</p>
          <div className="flex flex-row gap-5 mt-5">
            <button className="bg-blue-600 hover:bg-blue-800 transition duration-500 rounded font-semibold text-[15px] py-[8px] w-[200px] ">
              Order Now
            </button>
            <button className="bg-white hover:bg-gray-300 transition duration-500 text-black font-semibold rounded py-[8px] w-[200px] ">
              View Inventory
            </button>
          </div>
        </div>
        <div className="bg-gray-100 opacity-75 p-2 absolute right-5 top-1/2 transform -translate-y-1/2 ">
          next
        </div>
        <div className="bg-gray-100 opacity-75 p-2  absolute left-5 top-1/2  transform -translate-y-1/2">
          back
        </div>
      </div>
    </div>
  );
};

export default Page;
