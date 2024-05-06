import "./styling.css";

function RecipeImage({ recipeImage, name }) {
   return (
    <div>
      <img className="recipeImage" src={recipeImage} alt={name} />
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 