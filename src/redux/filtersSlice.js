import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  name: "",
};

const filterSlice = createSlice({
  name: "filters",
  initialState: initialState,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
