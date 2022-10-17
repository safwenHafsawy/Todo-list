import "./app/styles/main.scss";
import { createTask, completeTask } from "./app/handleTasks";
import Tasks from "./app/services/taskList.service";
import TaskForm from "./app/services/taskform.service";
import clearVariables from "./app/clearTaskValues";

const tasks = new Tasks();
const taskForm = new TaskForm();
//getting HTML elements
const submitTasks = document.getElementById("createTask");
let current = { currentTitle: "", currentDisc: "" };

//event listners  
document.addEventListener("click", (event) => {
  if (event.target.className === "task") completeTask(event.target);
  if (
    event.target.className === "task-title" ||
    event.target.className === "task-desc"
  )
    completeTask(event.target.parentNode);
});

document.addEventListener("input", (event) => {
  if (event.target.id === "taskTitle")
    current.currentTitle = event.target.value;
  if (event.target.id === "taskDescription")
    current.currentDisc = event.target.value;
});

submitTasks.addEventListener("click", () => {
  createTask(current, tasks, taskForm);
  current = clearVariables(current);
  taskForm.clearInputFields();
});

tasks.clearFinishedBtn.addEventListener("click", () => {
  tasks.removeFinishedTasks();
});

taskForm.checkTasks.addEventListener("click", () => {
  window.location.hash = "#today-tasks";
});

taskForm.clearBnt.addEventListener("click", () => {
  taskForm.clearInputFields();
});
