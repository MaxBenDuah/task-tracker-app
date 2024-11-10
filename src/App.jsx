import TaskList from "./components/TaskList";
import FilterAndButton from "./ui/FilterAndButton";
import Header from "./ui/Header";

function App() {
  return (
    <div className="max-w-6xl mx-auto p-6 h-screen">
      <div className="border-[1px] border-[#94e0ed] p-6 rounded-lg shadow-xl">
        <Header />
        <FilterAndButton />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
