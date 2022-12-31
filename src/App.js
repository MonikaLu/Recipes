import RecipeCard from "./RecipeCard";
import TacoImage from "./images/taco.jpeg";
import KebabImage from "./images/kebab.webp";
import FajitasImage from "./images/fajitas.jpeg";
import Masonry from "@mui/lab/Masonry";

function App() {
  return (
    <div>
      <div>
        <h1>Recipes</h1>
      </div>

      <Masonry columns={3} spacing={2}>
        <RecipeCard
          recipeTitle="Taco"
          recipeDetails="TacoDetails"
          recipeImage={TacoImage}
        />

        <RecipeCard
          recipeTitle="Kebab"
          recipeDetails="KebabDetails"
          recipeImage={KebabImage}
        />
        <RecipeCard
          recipeTitle="Fajitas"
          recipeDetails="FajitasDetails"
          recipeImage={FajitasImage}
        />
      </Masonry>
    </div>
  );
}

export default App;
