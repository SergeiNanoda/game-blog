import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./features/postSlice";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
  },
});
export default store;
