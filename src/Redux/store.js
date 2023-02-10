import { configureStore } from "@reduxjs/toolkit";
import foodTypeReducer from "./foodType";

export const store = configureStore({
  reducer: {
    foodType: foodTypeReducer,
  },
});
