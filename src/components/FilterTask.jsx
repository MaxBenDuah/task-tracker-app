import { useDispatch, useSelector } from "react-redux";
import { filterByStatus } from "./TaskSlice";

function FilterTask() {
  const { filterBy } = useSelector((state) => state.task);
  const dispactch = useDispatch();

  return (
    <select
      value={filterBy}
      onChange={(e) => {
        dispactch(filterByStatus(e.target.value));
      }}
      className="select select-bordered w-full max-w-xs"
    >
      <option value="" disabled>
        Filter By
      </option>
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
    </select>
  );
}

export default FilterTask;
