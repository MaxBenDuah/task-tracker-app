import { useDispatch } from "react-redux";
import { deleteTask, updateTaskStatus } from "./TaskSlice";
import { useState } from "react";
import { PencilSimple, Trash } from "@phosphor-icons/react";
import { formatDate } from "../utils/helpers";

function TaskItem({ task, onEdit }) {
  const [completed, updateCompleted] = useState(task.completed);
  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td>
          <input
            type="checkbox"
            className="checkbox"
            value={completed}
            onChange={(e) => {
              const newStatus = e.target.checked ? "Completed" : "Pending";
              updateCompleted(newStatus);
              dispatch(updateTaskStatus({ id: task.id, completed: newStatus }));
            }}
          />
        </td>
        <td>{formatDate(new Date(task.createdOn))}</td>
        <td>
          <h2 className="text-base font-bold">{task.title}</h2>
        </td>
        <td>
          <p>{task.description}</p>
        </td>
        <td>
          {task.completed === "Pending" ? (
            <div className="badge badge-secondary">Pending</div>
          ) : (
            <div className="badge badge-accent">Completed</div>
          )}
        </td>

        <td>
          <div
            onClick={onEdit}
            className="w-12 h-12 border-[1px] border-[#06b6d4] flex justify-center items-center rounded-full cursor-pointer"
          >
            <PencilSimple size={18} color="#06b6d4" />
          </div>
        </td>
        <td>
          <div
            onClick={() => dispatch(deleteTask(task.id))}
            className="w-12 h-12 border-[1px] border-[#ec4899] flex justify-center items-center rounded-full cursor-pointer"
          >
            <Trash size={18} color="#ec4899" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default TaskItem;
