import { useDispatch } from "react-redux";
import { deleteTask, updateTask, updateTaskStatus } from "./TaskSlice";
import { useState } from "react";

function TaskItem({ task }) {
  const [title, updateTitle] = useState(task.title);
  const [description, updateDescription] = useState(task.description);
  const [completed, updateCompleted] = useState(task.completed);
  const [showUpdate, setShowUpdate] = useState(false);
  const dispatch = useDispatch();

  function onSubmit(e) {
    e.preventDefault();

    dispatch(updateTask({ id: task.id, title, description }));

    setShowUpdate(false);
  }

  return (
    <>
      {showUpdate ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={title}
            onChange={(e) => updateTitle(e.target.value)}
          />
          <br />
          <textarea
            rows={10}
            cols={20}
            value={description}
            onChange={(e) => updateDescription(e.target.value)}
          ></textarea>
          <br />
          <button type="submit">Update</button>
          <button onClick={() => setShowUpdate(false)}>Cancel</button>
        </form>
      ) : (
        <li>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Status: {task.completed ? "Completed" : "Pending"}</p>
          <input
            type="checkbox"
            value={completed}
            onChange={(e) => {
              const newStatus = !completed;
              updateCompleted(newStatus);
              dispatch(updateTaskStatus({ id: task.id, completed: newStatus }));
            }}
          />
          <button onClick={() => setShowUpdate(true)}>Update</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      )}
    </>
  );
}

export default TaskItem;
