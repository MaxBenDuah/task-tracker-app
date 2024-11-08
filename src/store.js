import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./components/TaskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer,
  },
});

store.subscribe(() => {
  const { tasks } = store.getState().task;
  localStorage.setItem("tasks", JSON.stringify(tasks));
});

export default store;
