import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  searchTerm: "",
  filterBy: "All",
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
            completed: "Pending",
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
    updateTask(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    updateTaskStatus(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: action.payload.completed }
          : task
      );
    },
    filterByStatus(state, action) {
      state.filterBy = action.payload;
    },
  },
});

export const {
  changeTitle,
  changeDescription,
  addTask,
  deleteTask,
  updateTask,
  changeSearchTerm,
  updateTaskStatus,
  filterByStatus,
} = taskSlice.actions;

export const taskReducer = taskSlice.reducer;
