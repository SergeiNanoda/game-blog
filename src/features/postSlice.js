import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchRequest from "../utils/utils";

const fetchPosts = createAsyncThunk("posts/addPosts", async () => {
  // Request ('/posts')
  const response = await fetchRequest("/posts");
  return response;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => builder.addCase(),
});
