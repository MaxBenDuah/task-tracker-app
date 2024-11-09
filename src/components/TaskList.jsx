import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

function TaskList() {
  const { tasks, searchTerm, filterBy } = useSelector((state) => state.task);

  const allTasks =
    filterBy !== "All"
      ? tasks.filter((task) => task.completed === filterBy)
      : tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            task.description.toLowerCase().includes(searchTerm.toLowerCase())
        );

  return (
    <ul>
      {allTasks?.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
