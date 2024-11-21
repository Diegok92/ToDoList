import React, { useState, useEffect } from "react";
import { FaPlus, FaCheck, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./App.css";

function App() {
	const [tasks, setTasks] = useState([]);
	const [taskText, setTaskText] = useState("");
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		if (darkMode) {
			document.body.classList.add("dark-mode");
			document.body.classList.remove("light-mode");
		} else {
			document.body.classList.add("light-mode");
			document.body.classList.remove("dark-mode");
		}
	}, [darkMode]);

	const addTask = () => {
		if (taskText.trim() !== "") {
			setTasks([
				...tasks,
				{ id: Date.now(), text: taskText, completed: false },
			]);
			setTaskText("");
		}
	};

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const editTask = (id) => {
		const newTaskText = prompt(
			"Editar tarea:",
			tasks.find((task) => task.id === id).text
		);
		if (newTaskText !== null) {
			setTasks(
				tasks.map((task) =>
					task.id === id ? { ...task, text: newTaskText } : task
				)
			);
		}
	};

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};

	return (
		<div className={`app-container`}>
			<div
				className={`container ${darkMode ? "dark-mode" : "light-mode"} mt-5`}
			>
				<div className="d-flex justify-content-end align-items-center mb-3">
					<label className="me-2" htmlFor="toggle-dark-mode">
						Modo Oscuro
					</label>
					<input
						type="checkbox"
						id="toggle-dark-mode"
						onChange={toggleDarkMode}
						checked={darkMode}
					/>
				</div>
				<div className="card shadow-lg">
					<div className="card-body">
						<h1 className="card-title text-center mb-4">To-Do List</h1>
						<div className="input-group mb-3">
							<input
								type="text"
								value={taskText}
								onChange={(e) => setTaskText(e.target.value)}
								className="form-control"
								placeholder="Ingrese una tarea"
							/>
							<button onClick={addTask} className="btn btn-primary">
								<FaPlus /> Agregar tarea
							</button>
						</div>
						<ul className="list-group">
							{tasks.map((task) => (
								<li
									key={task.id}
									className={`list-group-item ${
										darkMode ? "dark-mode" : "light-mode"
									}`}
								>
									<span
										className={`task-text ${
											task.completed ? "task-completed" : ""
										}`}
									>
										{task.text}
									</span>
									<div>
										<button
											onClick={() => toggleComplete(task.id)}
											className="btn btn-success btn-sm me-2"
										>
											<FaCheck />
										</button>
										<button
											onClick={() => editTask(task.id)}
											className="btn btn-warning btn-sm me-2"
										>
											<FaEdit />
										</button>
										<button
											onClick={() => deleteTask(task.id)}
											className="btn btn-danger btn-sm"
										>
											<FaTrashAlt />
										</button>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
