function TaskItem({ task }) {
  return (
    <li>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button>Delete</button>
    </li>
  );
}

export default TaskItem;
