import { useDispatch, useSelector } from "react-redux";
import { addTask, changeDescription, changeTitle } from "./TaskSlice";

function TaskForm() {
  const { title, description } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    dispatch(addTask(title, description));
  }

  return (
    <form onSubmit={onSubmit}>
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
