const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");

// Función para agregar una tarea
function addTask(taskText) {
  const taskId = Date.now(); // Generar un identificador único basado en la marca de tiempo actual
  const li = document.createElement("li");
  li.dataset.taskId = taskId; // Asignar el identificador único como un atributo de datos

  // Contenido de la tarea
  const span = document.createElement("span");
  span.textContent = taskText;

  // Botón para eliminar tarea
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar";
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  // Botón para editar tarea
  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.addEventListener("click", () => {
    const newTaskText = prompt("Editar tarea:", span.textContent);
    if (newTaskText !== null) {
      span.textContent = newTaskText;
    }
  });

  // Agregar contenido y botones a la tarea
  li.appendChild(span);
  li.appendChild(deleteButton);
  li.appendChild(editButton);

  // Agregar tarea a la lista
  taskList.appendChild(li);
}

// Evento para agregar una tarea
addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});
