import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "./TaskSlice";

function SearchTerm() {
  const { searchTerm } = useSelector((state) => state.task);
  const dispactch = useDispatch();

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispactch(changeSearchTerm(e.target.value))}
      />
    </div>
  );
}

export default SearchTerm;
