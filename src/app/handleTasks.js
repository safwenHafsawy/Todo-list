import taskDiv from "./createTaskDiv";

const createTask = ({ currentTitle, currentDisc }, tasks, taskForm) => {
  //creating the new elements
  if (currentTitle.length === 0) {
    taskForm.handleWarning();
    return;
  }
  const newTask = taskDiv(currentTitle, currentDisc);

  tasks.taskList.appendChild(newTask);
  tasks.changeBtnBehaviour();
  tasks.handleNoTaskText();
  taskForm.handleWarning(1);
};

const completeTask = (task) => {
  task.classList.add("completed");
};

export { createTask, completeTask };
