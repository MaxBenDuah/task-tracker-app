import FilterTask from "./components/FilterTask";
import SearchTerm from "./components/SearchTerm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <TaskForm />
      <SearchTerm />
      <FilterTask />
      <TaskList />
    </div>
  );
}

export default App;
