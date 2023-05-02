/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipies from "./Recipies";

const ChefDetails = () => {
  const details = useLoaderData();
  const { id, name, picture, bio, likes, experience, recipes, recipesList } =
    details;

//   console.log(details);
  return (
    <div>
      <div className="text-white bg-my-banner-details-0 bg-bg-rectangle  bg-no-repeat bg-cover bg-center h-full">
        <div
          style={{ backgroundColor: "rgb(0 0 0 / 60%)" }}
          className="md:px-32 h-full w-full py-28 px-4 box-border"
        >
          <div className="flex items-center justify-end">
            <div className="mr-9">
              <h2 className="text-6xl font-semibold my-5">{name}</h2>
              <div className="">
                <p className="md:w-80 mb-4">{bio}</p>
                <p className="text-my-primary">Recipes: {recipes}</p>
                <p className="my-4 text-my-primary">
                  {experience} Years of experience
                </p>
                <p className="text-my-primary">{likes} Likes</p>
              </div>
            </div>
            <div>
              <img
                style={{ borderRadius: "10%", height: "360px", width: "330px" }}
                src={picture}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

        
      <div className=" text-white md:px-32 md:py-28" style={{backgroundColor: "rgb(16, 20, 24)"}}>
        <div className="text-center pt-8 pb-5 md:pt-24 md:pb-20">
        <p className="text-lg font-medium text-my-primary">Explore</p>
        <h3 className="text-4xl font-semibold mt-2">Delicious Recipies</h3>
      </div>
        
      <div className="grid grid-cols-2">
        {
            recipesList.map(recipies => <Recipies
                key={recipies.recipeNumber}
                recipies = {recipies}
            ></Recipies>)
        }
      </div>
      </div>
    </div>
  );
};

export default ChefDetails;
