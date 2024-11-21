const taskInput = document.getElementById("task-input");
const addButton = document.getElementById("add-button");
const taskList = document.getElementById("task-list");
const toggleDarkMode = document.getElementById("toggle-dark-mode");

function addTask(taskText) {
	const taskId = Date.now();
	const li = document.createElement("li");
	li.dataset.taskId = taskId;
	li.classList.add("list-group-item");

	const span = document.createElement("span");
	span.className = "task-text";
	span.textContent = taskText;

	const completeButton = document.createElement("button");
	completeButton.className = "btn btn-success btn-sm";
	completeButton.innerHTML = '<i class="fas fa-check"></i>';
	completeButton.addEventListener("click", () => {
		span.classList.toggle("task-completed");
	});

	const editButton = document.createElement("button");
	editButton.className = "btn btn-warning btn-sm";
	editButton.innerHTML = '<i class="fas fa-edit"></i>';
	editButton.addEventListener("click", () => {
		const newTaskText = prompt("Editar tarea:", span.textContent);
		if (newTaskText !== null) {
			span.textContent = newTaskText;
		}
	});

	const deleteButton = document.createElement("button");
	deleteButton.className = "btn btn-danger btn-sm";
	deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
	deleteButton.addEventListener("click", () => {
		li.remove();
	});

	li.appendChild(span);
	li.appendChild(completeButton);
	li.appendChild(editButton);
	li.appendChild(deleteButton);

	taskList.appendChild(li);
}

addButton.addEventListener("click", () => {
	const taskText = taskInput.value.trim();
	if (taskText !== "") {
		addTask(taskText);
		taskInput.value = "";
	}
});

toggleDarkMode.addEventListener("change", () => {
	document.body.classList.toggle("dark-mode");
	document.querySelector(".container").classList.toggle("dark-mode");
	const listItems = document.querySelectorAll(".list-group-item");
	listItems.forEach((item) => item.classList.toggle("dark-mode"));
});
