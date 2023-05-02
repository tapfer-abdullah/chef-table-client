/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const SingleChefCard = ({ d }) => {
  console.log(d);
  return (
    <div>
      <div className="card w-96 my-4 bg-my-primary border-1 mx-auto">
        <figure>
          <img src={d.picture} alt="car!" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{d.name}</h2>
          <div>
            <p>Numbers of recipes: {d.recipes}</p>
            <p>{d.experience} Years of experience</p>
            <p>{d.likes} Likes</p>
          </div>
          <div className="card-actions justify-end ">
            <button className="btn glass btn-outline text-white hover:btn-accent">
                <Link to={`/chef-details/${d.id}`}>View Recipes</Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SingleChefCard;
