import { Plus } from "@phosphor-icons/react";
import TaskForm from "../components/TaskForm";

function NewTaskButton() {
  function closeDialog() {
    document.getElementById("my_modal_2").close();
  }
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        <Plus size={24} />
        New Task
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <TaskForm closeDialog={closeDialog} />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default NewTaskButton;
