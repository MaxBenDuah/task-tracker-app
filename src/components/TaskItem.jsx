import { useDispatch } from "react-redux";
import { deleteTask, updateTask, updateTaskStatus } from "./TaskSlice";
import { useState } from "react";

function TaskItem({ task }) {
  const [title, updateTitle] = useState(task.title);
  const [description, updateDescription] = useState(task.description);
  const [status, updateStatus] = useState(task.status);
  const [showUpdate, setShowUpdate] = useState(false);
  const dispatch = useDispatch();

  console.log(status);

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
          <p>Status: {task.status}</p>
          <select
            value={status}
            onChange={(e) => {
              const newStatus = e.target.value;
              updateStatus(newStatus);
              dispatch(updateTaskStatus({ id: task.id, status: newStatus }));
            }}
          >
            <option>Pending</option>
            <option>Completed</option>
          </select>
          <button onClick={() => setShowUpdate(true)}>Update</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      )}
    </>
  );
}

export default TaskItem;
