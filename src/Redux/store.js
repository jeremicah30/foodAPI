import { configureStore } from "@reduxjs/toolkit";
import foodTypeReducer from "./foodType";
import menuReducer from "./menu";

export const store = configureStore({
  reducer: {
    foodType: foodTypeReducer,
    foodMenu: menuReducer,
  },
});
