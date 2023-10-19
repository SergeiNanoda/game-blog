import { configureStore } from "@reduxjs/toolkit";
import postSliceReducer from "./features/postSlice";
import modalSliceReducer from "./features/modalSlice";

const store = configureStore({
  reducer: {
    posts: postSliceReducer,
    modal: modalSliceReducer,
  },
});
export default store;
