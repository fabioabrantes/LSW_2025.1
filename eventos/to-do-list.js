const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const saveTasksBtn = document.getElementById("save-tasks-btn");
const deleteTasksBtn = document.getElementById("delete-tasks-btn");

const taskList = document.getElementById("task-list");

let activities = [];
// Renderiza todas as tarefas na tela
function renderTasks() {
  taskList.innerHTML = ""; // Limpa a lista antes de renderizar
  activities.forEach((activity, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${activity.name}</span>
        <button class="delete-btn">Excluir</button>
      `;

    if (activity.done) {
      li.classList.add("done");
    }
    // Alternar done
    li.addEventListener("click", () => {
      activities[index].done = !activities[index].done;
      renderTasks();
    });
    // Botão excluir
    li.querySelector(".delete-btn").addEventListener("click", (event) => {
      event.stopPropagation(); // Impede toggle
      activities.splice(index, 1); // Remove um do array
      renderTasks();
    });

    taskList.appendChild(li);
  });
}

// Adiciona nova tarefa
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    activities.push({ name: taskText, done: false });
    taskInput.value = "";
    taskInput.focus();
    renderTasks();
  }
});

saveTasksBtn.addEventListener("click", () => {
  localStorage.setItem("tarefasKey", JSON.stringify(activities));
  renderTasks();
});

deleteTasksBtn.addEventListener("click", () => {
  localStorage.removeItem("tarefasKey");
  activities = [];
  renderTasks();
});
// Carrega tarefas do localStorage ao iniciar
function loadTasks() {
  const stored = localStorage.getItem("tarefasKey");
  if (stored) {
    activities = JSON.parse(stored);
    renderTasks();
  }
}
// Inicializa carregando as tarefas
loadTasks();
