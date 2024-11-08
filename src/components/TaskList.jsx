import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks } = useSelector((state) => state.task);

  return (
    <ul>
      {tasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
