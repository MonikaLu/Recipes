import RecipeCard from "./RecipeCard";

function App() {return (
<div>
    <div><h1>Recipes</h1></div>
    <RecipeCard recipeTitle = "Taco" recipeDetails="TacoDetails"/>
    <RecipeCard recipeTitle = "Kebab" recipeDetails="KebabDetails"/>
    <RecipeCard recipeTitle = "Fajitas" recipeDetails="FajitasDetails"/>
</div>
 )
}

export default App;