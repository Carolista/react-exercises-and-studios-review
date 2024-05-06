import "./styling.css";

function RecipeImage({ recipeImage }) {
   return (
    <div>
      <img className="recipeImage" src={recipeImage} />
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 