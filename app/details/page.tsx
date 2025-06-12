import Image from "next/image";
import React from "react";

const Details = () => {
  return (
    <div className="mb-10">
      <div className=" m-10 w-full gap-10 flex flex-row">
        <div className="bg-gray-100 w-[45%] h-[30vh] rounded flex flex-row ">
          <div className="flex flex-col m-5 ml-10">
            <h1 className="text-[33px] font-semibold">Compare Models</h1>
            <p className="text-gray-600 text-[20px] font-medium ">
              Find the Tesla vehicle that’s right for{" "}
            </p>
            <p className="text-gray-600 text-[20px] font-medium ">you.</p>

            <button className="bg-white py-[10px] rounded text-[14px] font-semibold w-[250px] mt-5">
              Compare Models
            </button>
          </div>
          <div>
            <Image
              className="ml-8"
              src={
                "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-Compare.png"
              }
              alt="logo"
              width={190}
              height={190}
            />
          </div>
        </div>
        <div className="bg-gray-100 w-[45%] h-[30vh] rounded flex flex-row ">
          <div className="flex flex-col m-5 ml-10">
            <h1 className="text-[33px] font-semibold">American Heroes</h1>
            <p className="text-gray-600 text-[20px] font-medium ">
              $1,000 off for military, first responders, teachers and students.{" "}
            </p>
            <p className="text-gray-600 text-[20px] font-medium "></p>

            <button className="bg-white py-[10px] rounded text-[14px] font-semibold w-[250px] mt-5">
              Compare Models
            </button>
          </div>
          <div>
            <Image
              className="rounded-r"
              src={
                "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Grid-American-Heroes.png"
              }
              alt="logo"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="ml-10 bg-gray-200 flex justify-center items-center w-[93%] h-[70vh] rounded-[10px]">
        <h1 className="text-[30px] font-serif">Tesla map</h1>
      </div>
      <div className="w-[95%] gap-10 flex flex-row">
        <div className="w-[60%] h-[30vh] ml-20 mt-10  flex flex-col  ">
          <h1 className="text-[45px]  font-semibold">Find Your Charge</h1>
          <p className="text-gray-500 text-[20px] font-medium">
            View the network of Tesla Superchargers and Destination Chargers
            available near you.
          </p>
          <div className=" flex flex-row gap-3 mt-7 ">
            <button className="bg-black text-white px-[20px] py-[10px] rounded font-semibold text-[14px]">View Network</button>
            <button className="bg-gray-100 text-black px-[20px] py-[10px] rounded font-semibold text-[14px]">Learn More</button>
          </div>
        </div>
        <div className="w-[35%] flex flex-row gap-5 -ml-5 mt-10">
          <div className="flex flex-col">
            <div className="flex flex-row gap-2">
              <h1 className="text-[50px] font-semibold">29,308</h1>
              <Image
                src={
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY2NTJfNjkwNjgpIj4KPHJlY3QgeD0iMC4yMzA3NjkiIHk9IjAuMjMwNzY5IiB3aWR0aD0iMjMuNTM4NSIgaGVpZ2h0PSIyMy41Mzg1IiByeD0iMTEuNzY5MiIgZmlsbD0iI0ZGM0EzQSIvPgo8cmVjdCB4PSIwLjIzMDc2OSIgeT0iMC4yMzA3NjkiIHdpZHRoPSIyMy41Mzg1IiBoZWlnaHQ9IjIzLjUzODUiIHJ4PSIxMS43NjkyIiBzdHJva2U9IiNGNEY0RjQiIHN0cm9rZS13aWR0aD0iMC40NjE1MzgiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi4zMzQgMTAuNDQ4NkMxMi4zMzQgMTAuNTk1MyAxMi40NTMzIDEwLjcxNDMgMTIuNjAwNSAxMC43MTQzSDE2LjUxMDZDMTYuNzE2MiAxMC43MTQzIDE2Ljg0NDMgMTAuOTM2NiAxNi43NDA5IDExLjExMzhMMTIuMTY4NCAxOC45NDNDMTIuMDMxNSAxOS4xNzc1IDExLjY3MTcgMTkuMDgwNiAxMS42NzE3IDE4LjgwOTNWMTMuNTUyNEMxMS42NzE3IDEzLjQwNTcgMTEuNTUyNCAxMy4yODY3IDExLjQwNTMgMTMuMjg2N0g3LjQ5MDQ4QzcuMjg0ODkgMTMuMjg2NyA3LjE1Njc2IDEzLjA2NDMgNy4yNjAyNyAxMi44ODcyTDExLjgzNzQgNS4wNTQwMkMxMS45NzQzIDQuODE5NjEgMTIuMzM0IDQuOTE2NTEgMTIuMzM0IDUuMTg3ODFWMTAuNDQ4NloiIGZpbGw9IndoaXRlIi8+CjwvZz4KPGRlZnM+CjxjbGlwUGF0aCBpZD0iY2xpcDBfNjY1Ml82OTA2OCI+CjxyZWN0IHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0id2hpdGUiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"
                }
                alt="chargers"
                height={50}
                width={50}
              />
            </div>
            <p className="text-gray-600 text-[20px]">Superchargers</p>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row gap-1">
              <h1 className="text-[50px] font-semibold">9,653 </h1>
              <Image
                src={
                  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzY2NTJfNjkwNjYpIj4KPHJlY3QgeD0iMC4yMzA3NjkiIHk9IjAuMjMwNzY5IiB3aWR0aD0iMjMuNTM4NSIgaGVpZ2h0PSIyMy41Mzg1IiByeD0iMTEuNzY5MiIgZmlsbD0iIzkyOTI5MiIvPgo8cmVjdCB4PSIwLjIzMDc2OSIgeT0iMC4yMzA3NjkiIHdpZHRoPSIyMy41Mzg1IiBoZWlnaHQ9IjIzLjUzODUiIHJ4PSIxMS43NjkyIiBzdHJva2U9IiNGNEY0RjQiIHN0cm9rZS13aWR0aD0iMC40NjE1MzgiLz4KPHBhdGggZD0iTTkuNTIzNDcgNS40NTM2Mkw5LjUyMzQ3IDcuNzUzNjJIOC4xMDgwOEM3LjcxNzI0IDcuNzUzNjIgNy40MDAzOSA4LjA3MDQ3IDcuNDAwMzkgOC40NjEzMlYxMy40MTUyQzcuNDAwMzkgMTQuOTc4NiA4LjY2Nzc3IDE2LjI0NTkgMTAuMjMxMiAxNi4yNDU5SDEzLjc2OTZDMTUuMzMzIDE2LjI0NTkgMTYuNjAwNCAxNC45Nzg2IDE2LjYwMDQgMTMuNDE1MlY4LjQ2MTMxQzE2LjYwMDQgOC4wNzA0NyAxNi4yODM2IDcuNzUzNjIgMTUuODkyNyA3Ljc1MzYySDE0LjQ3NzNWNS40NTM2MkMxNC40NzczIDUuMTYwNDkgMTQuMjM5NyA0LjkyMjg1IDEzLjk0NjUgNC45MjI4NUMxMy42NTM0IDQuOTIyODUgMTMuNDE1OCA1LjE2MDQ5IDEzLjQxNTggNS40NTM2MlY3Ljc1MzYyTDEwLjU4NSA3Ljc1MzYyVjUuNDUzNjJDMTAuNTg1IDUuMTYwNDkgMTAuMzQ3NCA0LjkyMjg1IDEwLjA1NDIgNC45MjI4NUM5Ljc2MTEgNC45MjI4NSA5LjUyMzQ3IDUuMTYwNDkgOS41MjM0NyA1LjQ1MzYyWk05Ljg3NzMyIDE4LjM2OUM5Ljg3NzMyIDE4Ljc1OTkgMTAuMTk0MiAxOS4wNzY3IDEwLjU4NSAxOS4wNzY3SDEzLjQxNThDMTMuODA2NiAxOS4wNzY3IDE0LjEyMzUgMTguNzU5OSAxNC4xMjM1IDE4LjM2OVYxNy4xMzA2QzE0LjEyMzUgMTcuMDMyOCAxNC4wNDQzIDE2Ljk1MzYgMTMuOTQ2NSAxNi45NTM2SDEwLjA1NDJDOS45NTY1MyAxNi45NTM2IDkuODc3MzIgMTcuMDMyOCA5Ljg3NzMyIDE3LjEzMDZMOS44NzczMiAxOC4zNjlaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwXzY2NTJfNjkwNjYiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="
                }
                alt="chargers"
                height={50}
                width={50}
              />
            </div>
            <p className="text-gray-600 text-[20px]">Destination Chargers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
