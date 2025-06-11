import React from "react";

const Models = () => {
  const models = [
    {
      id: 1,
      categories: "Utility Truck",
      name: "CYBER TRUCK",
      description: "0% APR With Purchase of FSD (Supervised) Ending June 30",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Cybertruck-Desktop.png",
    },
    {
      id: 2,
      categories: "Midsize SUV",
      name: "Model Y",
      description: "Lease From $399 With $1000 Down",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-Y-Desktop.png",
    },
    {
      id: 3,
      categories: "Sports Sedan",
      name: "Model 3",
      description: "Lease From $349/mo With Zero Down",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-3-Desktop.png",
    },
    {
      id: 4,
      categories: "Luxury SUV",
      name: "Model X",
      description: "Free Superchrging on Invertory",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-X-Desktop.png",
    },
    {
      id: 5,
      categories: "Luxury Sedan",
      name: "Model S",
      description: "Free SuperChanging on Inventory",
      image:
        "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Card-Model-S-Desktop.png",
    },
  ];

  return (
    <div className="overflow-x-auto w-full py-8">
      <div className="flex flex-nowrap items-center gap-10 px-4 py-2">
        {models.map((model, index) => {
          return (
            <div>
              <div
                key={model.id}
                className=" min-w-[60rem] relative rounded-lg h-[70vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${model.image})` }}
              >
                <h1 className="m-10 text-white font-semibold">
                  {model.categories}
                </h1>
                <div className="ml-10 absolute bottom-10">
                  <h1 className=" text-white text-[50px] font-semibold ">
                    {model.name}
                  </h1>
                  <p className="text-white underline">{model.description}</p>
                  <div className="flex flex-row gap-2 mt-5">
                    <button className="bg-blue-600 text-white hover:bg-blue-800 transition duration-500 rounded font-medium text-[15px] py-[8px] w-[160px] ">
                      Order Now
                    </button>
                    <button className="bg-white hover:bg-gray-300 transition duration-500 text-black font-medium rounded py-[8px] w-[160px] ">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;
