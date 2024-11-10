import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "./TaskSlice";
import { MagnifyingGlass } from "@phosphor-icons/react";

function SearchTerm() {
  const { searchTerm } = useSelector((state) => state.task);
  const dispactch = useDispatch();

  return (
    <div>
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow md:w-96"
          placeholder="Search tasks by title, description, or status"
          value={searchTerm}
          onChange={(e) => dispactch(changeSearchTerm(e.target.value))}
        />
        <MagnifyingGlass size={24} />
      </label>
    </div>
  );
}

export default SearchTerm;
