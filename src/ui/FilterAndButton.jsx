import FilterTask from "../components/FilterTask";
import NewTaskButton from "./NewTaskButton";

function FilterAndButton() {
  return (
    <div className="flex items-center justify-between mb-8">
      <FilterTask />
      <NewTaskButton />
    </div>
  );
}

export default FilterAndButton;
