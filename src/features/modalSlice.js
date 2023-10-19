import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isActiveAbout: false,
    isActiveWrite: false,
  },
  reducers: {
    modalAboutToggled(state, action) {
      return { ...state, isActiveAbout: action.payload };
    },
    modalWriteToggled(state, action) {
      return { ...state, isActiveWrite: action.payload };
    },
  },
});

export const { modalAboutToggled, modalWriteToggled } = modalSlice.actions;
export default modalSlice.reducer;
