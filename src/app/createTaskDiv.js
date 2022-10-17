export default function taskDiv(currentTitle, currentDisc) {
  const title = document.createElement("h3");
  const desc = document.createElement("p");
  const newTask = document.createElement("div");
  newTask.className = "task";
  title.className = "task-title";
  desc.className = "task-desc";
  title.innerText = currentTitle;
  desc.innerText = currentDisc;

  newTask.append(title, desc);

  return newTask;
}
