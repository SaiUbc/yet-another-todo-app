let todos = [];

let addTaskButton = document.getElementById("add-task-btn");
let textFieldArea = document.querySelector(".todo-input");
let clearTasksButton = document.getElementById("clear-tasks-btn");

textFieldArea.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

addTaskButton.addEventListener("click", addTask); // Pass the function reference here
clearTasksButton.addEventListener("click", clearTasks);

function addTask() {
  let inputElement = document.querySelector(".todo-input");
  let text = inputElement.value.trim();
  inputElement.value = "";

  if (text.length == 0) {
    console.log("There is no text");
  } else {
    let newItem = document.createElement("li");
    let deleteButton = document.createElement("button");

    newItem.id = "todo-task-item";

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", function () {
      newItem.remove();
      console.log(`Task: "${text}" is deleted`);
    });

    newItem.textContent = text;
    newItem.appendChild(deleteButton);

    document.getElementById("todo-list").appendChild(newItem);
    console.log(`Text: "${text}" is added`);
  }
}

function clearTasks() {
  let todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";
  console.log("All tasks are cleared");
}

document
  .getElementById("todo-list")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("completed");
      console.log(`Task: "${event.target.textContent}" is marked as completed`);
    }
  });
