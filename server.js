const express = require("express");
const todoRoutes = require("./src/task/routes");
const app = express();
//const port = 3000;
const port = 8080;
app.get("/", (req, res) => {
  res.send("Hello world for todo");
});
app.use(express.json());
app.use("/api/v1/todos", todoRoutes);
app.listen(port, () => console.log(`app listening on port ${port}`));
