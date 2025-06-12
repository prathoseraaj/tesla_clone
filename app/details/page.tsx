import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div className="m-10 w-full gap-10 flex flex-row">
      <div className="bg-gray-100 w-[45%] h-[30vh] rounded flex flex-row ">
        <div className="flex flex-col m-5 ml-10">
          <h1 className="text-[33px] font-semibold">Compare Models</h1>
          <p className="text-gray-600 text-[20px] font-medium ">Find the Tesla vehicle that’s right for </p>
          <p className="text-gray-600 text-[20px] font-medium ">you.</p>

          <button className="bg-white py-[10px] rounded text-[14px] font-semibold w-[250px] mt-5">
            Compare Models
          </button>
        </div>
        <div>
            <Image className="ml-8" src={'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-Compare.png'} alt="logo" width={190} height={190}/>
        </div>
      </div>
      <div className="bg-gray-100 w-[45%] h-[30vh] rounded flex flex-row ">
        <div className="flex flex-col m-5 ml-10">
          <h1 className="text-[33px] font-semibold">American Heroes</h1>
          <p className="text-gray-600 text-[20px] font-medium ">$1,000 off for military, first responders, teachers and students. </p>
          <p className="text-gray-600 text-[20px] font-medium "></p>

          <button className="bg-white py-[10px] rounded text-[14px] font-semibold w-[250px] mt-5">
            Compare Models
          </button>
        </div>
        <div>
            <Image className="rounded-r" src={'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-American-Heroes.png'} alt="logo" width={300} height={300}/>
        </div>
      </div>
    </div>
  );
};

export default Details;
