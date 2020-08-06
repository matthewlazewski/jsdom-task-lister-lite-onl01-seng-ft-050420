document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");

  taskForm.addEventListener("submit", newTask);
});

const newTask = event => {
  event.preventDefault();

  const desc = document.getElementById("new-task-description");
  const task = document.createElement("li")

  task.innerText = desc.value;

  addTask(task);
};

const addTask = task => {
  document.getElementById("tasks").appendChild(task)
};