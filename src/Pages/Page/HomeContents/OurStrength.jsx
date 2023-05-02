/* eslint-disable no-unused-vars */
import React from "react";
// import healthyImg from "./../../../../public/banner/healthyfood.PNG"
// import img from "./healthyfood.PNG";

const OurStrength = () => {
  return (
    <div className="px-4 md:px-32 pb-5">
      <div className="text-center pt-8 pb-5 md:pt-24 md:pb-20">
        <p className="text-lg font-medium text-my-primary">Why Choose Us</p>
        <h3 className="text-4xl font-semibold mt-2">Our Strength</h3>
      </div>

      <div className="md:flex gap-3 mx-auto">
        <div className="w-96 bg-black shadow-xl rounded-lg mx-auto my-4">
          <img className="h-24 mx-auto -mb-2 mt-4"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/healthy-food-4056278-3372716.png?f=webp&w=256"
            alt=""
          />
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-3">Hygienic Food</h2>
            <p className="">Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>
        <div className="w-96 bg-black shadow-xl rounded-lg mx-auto my-4">
          <img className="h-24 mx-auto -mb-2 mt-4"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/organic-2640311-2188601.png?f=webp&w=256"
            alt=""
          />
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-3">Fresh Environment</h2>
            <p className="">Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>
        <div className="w-96 bg-black shadow-xl rounded-lg mx-auto my-4">
          <img className="h-24 mx-auto -mb-2 mt-4"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/chef-3520900-2944320.png?f=webp&w=256"
            alt=""
          />
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-3">Skilled Chefs</h2>
            <p className="">Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>
        <div className="w-96 bg-black shadow-xl rounded-lg mx-auto my-4">
          <img className="h-24 mx-auto -mb-2 mt-4"
            src="https://flat-icons.com/wp-content/uploads/2022/07/Party-Icon.png"
            alt=""
          />
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold mb-3">Event & Party</h2>
            <p className="">Lorem Ipsum is simply dummy printing and typesetting.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default OurStrength;
