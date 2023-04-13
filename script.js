const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
	// clear task list
	taskList.innerHTML = "";

	// loop through tasks and add to list
	for (let i = 0; i < tasks.length; i++) {
		const task = tasks[i];
		const li = document.createElement("li");
		li.innerHTML = `${task.text} <button class="deleteBtn" data-index="${i}">Delete</button>`;
		taskList.appendChild(li);
	}

	// add click event listeners to delete buttons
	const deleteBtns = document.getElementsByClassName("deleteBtn");
	for (let i = 0; i < deleteBtns.length; i++) {
		const deleteBtn = deleteBtns[i];
		deleteBtn.addEventListener("click", function() {
			const index = this.getAttribute("data-index");
			tasks.splice(index, 1);
			renderTasks();
		});
	}
}

addBtn.addEventListener("click", function() {
	const text = taskInput.value.trim();
	if (text !== "") {
		const task = {
			text: text
		};
		tasks.push(task);
		taskInput.value = "";
		renderTasks();
	}
});

renderTasks();
