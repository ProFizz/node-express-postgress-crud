const getTodos = "SELECT * FROM tasks";
const getTodosById = "SELECT * FROM tasks where id=$1";
const addTodo = "INSERT INTO tasks (title, completed) VALUES ($1, false)";
const deleteTodo = "DELETE FROM tasks WHERE id=$1";
const updateTodo = "UPDATE tasks SET title = $1, completed = $2 WHERE id = $3";
const updateTitle = "UPDATE tasks SET title = $1 WHERE id = $2";
const updateCompleted = "UPDATE tasks SET completed = $1 WHERE id = $2";

module.exports = {
  getTodos,
  getTodosById,
  addTodo,
  deleteTodo,
  updateTodo,
  updateTitle,
  updateCompleted,
};
