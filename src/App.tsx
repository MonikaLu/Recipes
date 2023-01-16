import RecipeCard from "./RecipeCard";
import TacoImage from "./images/taco.jpeg";
import KebabImage from "./images/kebab.webp";
import FajitasImage from "./images/fajitas.jpeg";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import React from "react";

function App() {
  const [listOfFavorites, setlistOfFavorites] = useState([
    "First recipe",
    "Second recipe",
  ]);

  const addRecipeToFavorite = (title) => {
    if (!listOfFavorites.includes(title)) {
      setlistOfFavorites([...listOfFavorites, title]);
    }
  };
  return (
    <div>
      <div>
        <h1>My Saved Recipes</h1>
      </div>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <RecipeCard
            recipeTitle="Taco"
            recipeDetails="TacoDetails"
            recipeImage={TacoImage}
            addRecipeToFavorite={addRecipeToFavorite}
          />
        </Grid>
        <Grid item xs={6}>
          <RecipeCard
            recipeTitle="Kebab"
            recipeDetails="KebabDetails"
            recipeImage={KebabImage}
            addRecipeToFavorite={addRecipeToFavorite}
          />
        </Grid>
        <Grid item xs={6}>
          <RecipeCard
            recipeTitle="Fajitas"
            recipeDetails="FajitasDetails"
            recipeImage={FajitasImage}
            addRecipeToFavorite={addRecipeToFavorite}
          />
        </Grid>
      </Grid>
      <div>
        <h2>This is a list of all favorites: </h2>
        {listOfFavorites.map((recipe) => (
          <li key={recipe}>{recipe}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
