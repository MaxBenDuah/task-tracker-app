import { useDispatch, useSelector } from "react-redux";
import { changeDescription, changeTitle } from "./TaskSlice";

function TaskForm() {
  const { title, description } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  return (
    <form>
      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => dispatch(changeTitle(e.target.value))}
      />
      <br />
      <textarea
        placeholder="Enter description"
        rows={10}
        cols={20}
        value={description}
        onChange={(e) => dispatch(changeDescription(e.target.value))}
      ></textarea>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
