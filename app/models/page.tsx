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
      <div className="flex flex-nowrap ml-10  items-center gap-10 px-4 py-2">
        {models.map((model, index) => {
          return (
            <div
              key={model.id}
              className=" min-w-[70rem] rounded-lg h-[70vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${model.image})` }}
            >
              <h1>suiii</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Models;
