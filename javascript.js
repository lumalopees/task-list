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

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("task-checkbox")) {
    const taskItem = event.target.closest("li"); // Encontra o elemento <li> pai do checkbox clicado
    taskItem.classList.toggle("completed"); // Adiciona ou remove a classe "completed" para alternar o destaque da tarefa concluída
  }
});

deleteCompletedBtn.addEventListener("click", function () {
  const completedTasks = taskList.querySelectorAll(".completed"); // Seleciona todas as tarefas concluídas
  completedTasks.forEach(task => task.remove()); // Remove cada tarefa concluída da lista
});