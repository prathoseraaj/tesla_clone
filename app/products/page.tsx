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
    <div className=" overflow-auto w-full py-8">
        <div className="flex flex-nowrap items-center gap-10 py-4 px-2 ">
            {
                products.map((product,index)=>{
                    return(
                        <div className="min-w-[65rem]  rounded h-[70vh] relative bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}>
                            <div>suii</div>
                        </div>
                    )
                })
            }

        </div>
      
    </div>
  );
};

export default Product;
