/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipies = ({ recipies }) => {
  console.log(recipies);
  const { cookingMethod, ingredients, rating, recipeImg, recipeName } = recipies;

  const notify = () => toast(`${recipeName} added to favorite!`);

  return (
    <div
      className="mb-20 mx-3 p-10 rounded-xl"
      style={{ border: "2px solid #c6a87d" }}
    >
      <div className="">
        <img style={{ height: "400px", with:"524px" }} src={recipeImg} alt="" />
      </div>
      <h4 className="my-4 text-4xl font-semibold">{recipeName}</h4>
      <p className="mt-3 flex">
        <span className="text-my-primary">Ingredients: </span>
        
        {ingredients.map((i) => (
          <span className="mx-2">{i}</span>
        ))}

      </p>
      <p className="mt-3">
        <span className="text-my-primary">Cooking Method: </span>
        {cookingMethod}
      </p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-my-primary my-3 flex items-center font-semibold text-lg">
        <Rating style={{ maxWidth: 160 }} readOnly value={rating} />
        <span className="text-2xl ml-2">{rating}</span>
        </p>
        <button onClick={notify} className="btn btn-outline border-my-primary text-my-primary hover:bg-my-primary ">
          Add to favorite
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
export default Recipies;
