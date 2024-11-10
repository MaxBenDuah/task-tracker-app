import FilterTask from "../components/FilterTask";
import NewTaskButton from "./NewTaskButton";

function FilterAndButton() {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center justify-between mb-8">
      <FilterTask />
      <NewTaskButton />
    </div>
  );
}

export default FilterAndButton;
