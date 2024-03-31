//Just to check whether controller is working fine
// const getTodos = (req, res) => {
//   console.log("Getting todos");
// };

const pool = require("../../db");
const queries = require("./queries");

const getTodos = async (req, res) => {
  try {
    // Retrieve all tasks from the database
    const { rows: tasks } = await pool.query(queries.getTodos);
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getTodosById = async (req, res) => {
  try {
    const taskId = req.params.id;

    // Retrieve the specific task from the database
    const {
      rows: [task],
    } = await pool.query(queries.getTodosById, [taskId]);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(task);
  } catch (error) {
    console.error("Error retrieving task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
//enhanced CRUD with try catch
const addTodo = async (req, res) => {
  try {
    const { title } = req.body;
    await pool.query(queries.addTodo, [title]);
    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//enhanced CRUD with try catch
const deleteTodo = async (req, res) => {
  try {
    const taskId = parseInt(req.params.id);
    await pool.query(queries.deleteTodo, [taskId]);
    res.status(200).json({ message: "task deleted successfully" });
  } catch (error) {
    //console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateTodo = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, completed } = req.body;
    await pool.query(queries.updateTodo, [title, completed, taskId]);
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const partialUpdateTodo = async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, completed } = req.body;

    // Update the specific fields in the task
    if (title) {
      await pool.query(queries.updateTitle, [title, taskId]);
    }
    if (completed !== undefined) {
      await pool.query(queries.updateCompleted, [completed, taskId]);
    }

    res.status(200).json({ message: "Task partially updated successfully" });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getTodos,
  getTodosById,
  addTodo,
  deleteTodo,
  updateTodo,
  partialUpdateTodo,
};
