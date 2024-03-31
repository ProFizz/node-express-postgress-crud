const { Router } = require("express");
const controller = require("./controller");
const router = Router();
// just to check whether router is working fine
// router.get("/", (req, res) => {
//   res.send("using api router is working fine");
// });

router.get("/", controller.getTodos);
router.get("/:id", controller.getTodosById);
router.post("/", controller.addTodo);
router.delete("/:id", controller.deleteTodo);
router.put("/:id", controller.updateTodo);
router.patch("/:id", controller.partialUpdateTodo);

module.exports = router;
