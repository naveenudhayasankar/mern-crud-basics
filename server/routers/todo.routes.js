const express = require("express");
const router = express.Router();

const {
    listAllToDo, 
    createOneToDo, 
    updateOneToDo,
    deleteToDo,
} = require("../controllers/todo.controller");

router.get("/", listAllToDo);
router.post("/", createOneToDo);
router.put("/:id", updateOneToDo);
router.delete("/:id", deleteToDo);

module.exports = router;