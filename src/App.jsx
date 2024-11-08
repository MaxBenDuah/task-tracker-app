import SearchTerm from "./components/SearchTerm";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <TaskForm />
      <SearchTerm />
      <TaskList />
    </div>
  );
}

export default App;
