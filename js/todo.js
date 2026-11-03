/* To-Do List*/

let tasks = [];  // each task is an object

const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");


/* Saving and loading with localStorage*/
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const saved = localStorage.getItem("tasks");
  if (saved !== null) {
    tasks = JSON.parse(saved);
  }

  showTasks();
}


/*Changing the tasks*/
function addTask() {
  const text = taskInput.value.trim();

  // Ignore empty input
  if (text === "") {
    return;
  }

  tasks.push({ text: text, completed: false });  
  taskInput.value = "";                 
  saveTasks();
  showTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;  // true -> false, false -> true
  saveTasks();
  showTasks();
}

function renameTask(index) {
  
  const newText = prompt("Rename task:", tasks[index].text);
  if (newText === null || newText.trim() === "") {
    return;
  }

  tasks[index].text = newText.trim();
  saveTasks();
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);  // remove 1 item at this position
  saveTasks();
  showTasks();
}


/*Drawing the list*/
function showTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    const li = document.createElement("li");

    // Checkbox to mark the task as completed
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", function () {
      toggleTask(index);
    });

    // The task text
    const span = document.createElement("span");
    span.textContent = task.text;
    if (task.completed) {
      span.className = "done";
    }

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteTask(index);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}


// Add a task when the Add button is clicked
document.getElementById("add-button").addEventListener("click", addTask);

// When the page loads, show the saved tasks
window.addEventListener("load", loadTasks);
