import { configureStore } from "@reduxjs/toolkit";
import foodTypeReducer from "./foodType";
import menuReducer from "./menu";
import recipeInfoReducer from "./recipeInfo";

export const store = configureStore({
  reducer: {
    foodType: foodTypeReducer,
    foodMenu: menuReducer,
    recipeInfo: recipeInfoReducer,
  },
});
