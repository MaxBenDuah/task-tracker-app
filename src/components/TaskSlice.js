import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    changeTitle(state, action) {
      state.title = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
  },
});

export const { changeTitle, changeDescription } = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
