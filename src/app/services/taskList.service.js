export default class Tasks {
  constructor() {
    this.TaskDisplay = document.getElementById("today-tasks");
    this.taskList = document.getElementById("task-list");
    this.clearFinishedBtn = document.getElementById("clear-finished");
  }

  enableClearFinishedBtn() {
    this.clearFinishedBtn.classList.remove("disabledBtn");
    this.clearFinishedBtn.classList.add("enabledBtn");
  }

  changeBtnBehaviour(currentState = 0) {
    if (currentState === 0) {
      this.clearFinishedBtn.classList.remove("disabledBtn");
      this.clearFinishedBtn.classList.add("showedBtn");
    } else if (currentState === 1) {
      this.clearFinishedBtn.classList.remove("showedBtn");
      this.clearFinishedBtn.classList.add("disabledBtn");
    }
  }

  handleNoTaskText() {
    if (this.taskList.firstChild === null)
      this.taskList.innerHTML =
        '<h2 id="no-task">No Task yet ! Go ahead and add some</h2>';
    else if (this.taskList.firstChild.id === "no-task")
      this.taskList.removeChild(this.taskList.firstChild);
  }

  removeFinishedTasks() {
    this.taskList.childNodes.forEach((task) => {
      if (task.className.split(" ")[1] === "completed")
        this.taskList.removeChild(task);
    });

    if (this.taskList.childNodes.length === 0) {
      this.changeBtnBehaviour(1);
      this.handleNoTaskText();
    }
  }
}
