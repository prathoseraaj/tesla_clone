import React from "react";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Solar Panels",
      description: "Use Solar Energy to Power Your Home and Charge Your Tesla",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Solar-Panels-Desktop.png",
    },
    {
      id: 2,
      name: "Powerwall",
      description: "Keep Your Lights On During Outages",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Powerwall-Desktop.png",
    },
    {
      id: 3,
      name: "Solar Roof",
      description: "Generate Clean Energy With Your Roof",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Solar-Roof-Desktop.png",
    },
    {
      id: 4,
      name: "Megapack",
      description: "Massive Batteries for Massive Energy Support",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Megapack-Desktop.jpg",
    },
  ];
  return (
    <div className=" overflow-auto w-full py-8 scrollbar-hide">
      <div className="flex flex-nowrap items-center gap-10 py-4 px-2 ">
        {products.map((product, index) => {
          return (
            <div
            key={product.id}
              className="min-w-[63rem]  rounded h-[70vh] relative bg-cover bg-center"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="mt-10 mr-10 ml-10 absolute bottom-6">
                <h1 className="text-[45px] text-white font-semibold">
                  {product.name}
                </h1>
                <p className="text-[19px] text-white font-medium">
                  {product.description}
                </p>
                <div className="flex flex-row gap-10 mt-5">
                  <button className="bg-blue-600 font-semibold text-[14px] text-white rounded w-[160px] py-[8px]">Order Now</button>
                  <button className="bg-white font-semibold text-[14px] rounded w-[160px] py-[8px]">Learn More</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
