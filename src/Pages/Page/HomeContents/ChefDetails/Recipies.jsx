/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Recipies = ({ recipies }) => {
  console.log(recipies);
  const { cookingMethod, ingredients, rating, recipeImg, recipeName } =
    recipies;
  return (
    <div
      className="mb-20 mx-3 p-10 rounded-xl"
      style={{ border: "2px solid #c6a87d" }}
    >
      <div className="">
        <img style={{ height: "380px" }} src={recipeImg} alt="" />
      </div>
      <h4 className="my-4 text-4xl font-semibold">{recipeName}</h4>
      <p className="mt-3">
        <span className="text-my-primary">Ingredients: </span>
        {ingredients.map((i) => (
          <li>{i}</li>
        ))}
      </p>
      <p className="mt-3">
        <span className="text-my-primary">Cooking Method: </span>
        {cookingMethod}
      </p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-my-primary my-3 flex items-center font-semibold text-lg">
          rating {rating}
        </p>
        <button className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary ">
          Add to favorite
        </button>
      </div>
    </div>
  );
};
export default Recipies;
