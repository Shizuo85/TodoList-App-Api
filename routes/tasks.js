const express = require("express")
const router = express.Router();

const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require("../controllers/tasks")

const { protect } = require("../controllers/users")


router.route("/").get(protect, getAllTasks).post(protect, createTask)
router.route("/:id").get(protect, getTask).patch(protect, updateTask).delete(protect, deleteTask)

module.exports = router