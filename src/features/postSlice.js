import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchRequest from "../utils/utils";

export const fetchPosts = createAsyncThunk("posts/addPosts", async () => {
  // Request ('/posts')
  console.log("createAsyncThunk");
  const response = await fetchRequest("/posts");
  return response;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export default postSlice.reducer;
