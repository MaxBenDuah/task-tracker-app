function TaskForm() {
  return (
    <form>
      <input type="text" placeholder="Enter title" />
      <textarea placeholder="Enter description" rows={10} cols={20}></textarea>
      <button type="submit">Add</button>
    </form>
  );
}

export default TaskForm;
