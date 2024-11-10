import { useDispatch, useSelector } from "react-redux";
import { addTask, changeDescription, changeTitle } from "./TaskSlice";
import { ClipboardText } from "@phosphor-icons/react";

function TaskForm({ closeDialog }) {
  const { title, description } = useSelector((state) => state.task);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    if (!title || !description) return;

    dispatch(addTask(title, description));

    closeDialog();
  }

  return (
    <form onSubmit={onSubmit}>
      <label className="input input-bordered flex items-center gap-2 mb-4 w-full">
        <ClipboardText size={24} />
        <input
          type="text"
          className="grow "
          placeholder="Enter task title"
          value={title}
          onChange={(e) => dispatch(changeTitle(e.target.value))}
        />
      </label>
      <textarea
        value={description}
        onChange={(e) => dispatch(changeDescription(e.target.value))}
        placeholder="Enter task description"
        className="textarea textarea-bordered textarea-md w-full mb-4"
      ></textarea>
      <div>
        <button type="submit" className="btn bg-slate-950 text-white w-full">
          Create task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
