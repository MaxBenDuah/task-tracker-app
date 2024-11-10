import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { useState } from "react";
import { updateTask } from "./TaskSlice";
import { Check, ClipboardText } from "@phosphor-icons/react";

function TaskList() {
  const { tasks, searchTerm, filterBy } = useSelector((state) => state.task);
  const [currentTask, setCurrentTask] = useState(null);
  const dispatch = useDispatch();

  const allTasks =
    filterBy !== "All"
      ? tasks
          .filter((task) => task.completed === filterBy)
          .sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))
      : tasks
          .filter(
            (task) =>
              task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              task.description
                .toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
              task.completed.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn));

  const openDialog = (task) => {
    setCurrentTask(task);
    document.getElementById("my_modal_3").showModal(); // Open dialog
  };

  const closeDialog = () => {
    setCurrentTask(null);
    document.getElementById("my_modal_3").close();
  }; // Close dialog

  function onSubmit(e) {
    e.preventDefault();

    dispatch(
      updateTask({
        id: currentTask.id,
        title: currentTask.title,
        description: currentTask.description,
        completed: currentTask.completed,
        createdOn: currentTask.createdOn,
      })
    );

    closeDialog();
  }

  if (!allTasks.length)
    return (
      <p className="text-xl font-medium text-center md:text-start">
        No tasks yet! Add your first task to get started.
      </p>
    );

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Date Created</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {allTasks?.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onEdit={() => openDialog(task)}
              />
            ))}
          </tbody>
        </table>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={onSubmit}>
              <label className="input input-bordered flex items-center gap-2 mb-4 w-full">
                <ClipboardText size={24} />
                <input
                  type="text"
                  className="grow"
                  value={currentTask?.title}
                  onChange={(e) =>
                    setCurrentTask({ ...currentTask, title: e.target.value })
                  }
                />
              </label>
              <textarea
                value={currentTask?.description}
                onChange={(e) =>
                  setCurrentTask({
                    ...currentTask,
                    description: e.target.value,
                  })
                }
                className="textarea textarea-bordered textarea-md w-full mb-4"
              ></textarea>

              <div className="flex justify-end gap-4">
                <form method="dialog">
                  <button className="btn btn-outline">Cancel</button>
                </form>
                <button type="submit" className="btn bg-[#35c4dc] text-lg">
                  <Check size={20} color="#ffffff" />
                  Save
                </button>
              </div>
            </form>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}

export default TaskList;
