import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./ViewRecipes.css";

const ViewRecipe = () => {
  const [recipes, setRecipes] = useState([]);

  const chefData = useLoaderData();
  console.log(chefData);
  useEffect(() => {
    fetch(
      `https://chef-recipe-hunter-server-epsitarif.vercel.app/recipe/${chefData._id}`
    )
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  //console.log(recipes);
  const {
    _id,
    name,
    picture,
    years_of_experience,
    number_of_recipes,
    likes,
    bio,
  } = chefData;
  return (
    <div>
      <div className="w-50 mt-5">
        <img
          className="w-50"
          style={{ height: "200px" }}
          src={picture}
          alt=""
        />
        <h3>Name:{name}</h3>
        <p>{bio}</p>
        <p>{years_of_experience} Years of Experience</p>
        <p>{number_of_recipes} Recipes</p>
        <p>Likes: {likes}</p>

        <br />
      </div>
      <div className="food">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <img
              className="w-75"
              style={{ height: "200px" }}
              src={recipe.image_url}
              alt=""
            />
            <h2>{recipe.recipe_name}</h2>
            <h6>Ingredients: {recipe.ingredients}</h6>
            <p>Method: {recipe.cooking_method}</p>
            <p>Ratings: {recipe.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewRecipe;
