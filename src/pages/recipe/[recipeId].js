import axios from "axios";
import { useSelector } from "react-redux";

const SingleRecipeInfo = () => {
  const recipe = useSelector((state) => state.recipeInfo.recipeInfo);

  const getRecipe = async () => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/${recipe}/information?apiKey=${process.env.NEXT_PUBLIC_APP_API_KEY}`
      );
      const recipeInfo = response.data;
      return recipeInfo;
    } catch (error) {
      console.error(error);
    }
  };

  if (recipe) {
    getRecipe();
  }

  console.log("=======>", recipe);

  return <div>singleRecipeInfo</div>;
};
export default SingleRecipeInfo;
