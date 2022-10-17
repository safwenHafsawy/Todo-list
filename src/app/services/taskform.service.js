class TaskForm {
  constructor() {
    this.taskTitle = document.getElementById("taskTitle");
    this.taskDesc = document.getElementById("taskDescription");
    this.submitBnt = document.getElementById("createTask");
    this.clearBnt = document.getElementById("clearTask");
    this.checkTasks = document.getElementById("ckeckTasks");
    this.warning = document.getElementById("title-empty");
  }

  clearInputFields() {
    this.taskTitle.value = "";
    this.taskDesc.value = "";
  }

  handleWarning(currentState = 0) {
    if (currentState === 0) {
      this.warning.classList.remove("hiddenWarning");
      this.warning.classList.add("shownWarning");
    } else if (currentState === 1) {
      this.warning.classList.remove("shownWarning");
      this.warning.classList.add("hiddenWarning");
    }
  }
}

export default TaskForm;
