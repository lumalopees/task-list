const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("wu");
const taskList = document.getElementById("task-list");
const deleteCompletedBtn = document.getElementById("delete-completed");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const taskText = taskInput.value.trim(); 
  if (taskText !== "") { 
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <span>${taskText}</span>
    `;
    taskList.appendChild(newTask); 
    taskInput.value = "";
  }
});

