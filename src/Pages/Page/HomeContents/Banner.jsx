/* eslint-disable no-unused-vars */
import React from "react";
import bannerImg from "./../../../../public/banner/biriyani-banner.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className={`text-center bg-my-banner-bg bg-bg-rectangle text-white bg-no-repeat bg-cover bg-center h-full box-border`}
      >
        <div
          style={{ backgroundColor: "rgb(0 0 0 / 50%)" }}
          className="md:px-32 h-full w-full py-28 px-4 box-border"
        >
          <h3 className="text-6xl font-semibold">
            Where every flavor <br />
            tells a story
          </h3>
          <p className="mt-6 mb-8 text-xl">
            Come with family & feel the joy of mouthwatering food
          </p>
          <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary">
            view our menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
