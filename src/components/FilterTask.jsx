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
    >
      <option>All</option>
      <option>Pending</option>
      <option>Completed</option>
    </select>
  );
}

export default FilterTask;
