import "./App.css";
import recipedata from "./components/recipe.json";
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button";
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

export default function App() {

  // Loop over recipe data to create multiple instances of pin JSX

  const pinsJSX = recipedata.map((recipe, index) => {
    return (
      <div key={index}>
        <RecipeImage recipeImage={recipe.recipeImage} />
        <RecipeName name={recipe.name} />
        <RateARecipe rating={4} />
        <Button saveButton={true} />
        <AuthorInfo recipe={recipe} />
        <IngredientList ingredients={recipe.ingredients} />
      </div>
    );
  });

  return (
    <>
      {pinsJSX}
    </>
  );
}
