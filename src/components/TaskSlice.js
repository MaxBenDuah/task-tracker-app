import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  tasks: [],
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
    addTask: {
      prepare(title, description) {
        return {
          payload: {
            id: crypto.randomUUID(),
            title,
            description,
          },
        };
      },
      reducer(state, action) {
        state.tasks = [...state.tasks, action.payload];
        state.title = "";
        state.description = "";
      },
    },
    deleteTask(state, action) {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { changeTitle, changeDescription, addTask, deleteTask } =
  taskSlice.actions;

export const taskReducer = taskSlice.reducer;
