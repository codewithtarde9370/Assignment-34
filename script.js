
const todoList = [];
const listContainer = document.getElementById("list-cont");

function addTask() {
    const taskInput = document.getElementById("task");
    const task = taskInput.value.trim();
    if (task !== "") {
        todoList.push(task);
        taskInput.value = "";
        renderTodoList();
    }
}

function renderTodoList() {
    listContainer.innerHTML = "";
    for (let i = 0; i < todoList.length; i++) {
        const todoItem = todoList[i];
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <div class="list-container">
                <img src="./icons/empty.png" class="check" onclick="completedTask(${i})">
                <span class="task-item ">${todoItem}</span>
                <img src="./icons/x.png" class="remove" onclick="deleteTask(${i})">
            </div>`;
        listContainer.appendChild(listItem);
    }
}

function completedTask(index) {
    const listItem = listContainer.children[index];
    const checkIcon = listItem.querySelector(".check");
    checkIcon.src = "./icons/correct.png";
    listItem.classList.add("completed");
}

function deleteTask(index) {
    todoList.splice(index, 1);
    renderTodoList();
}

document.getElementById("add-btn").addEventListener("click", addTask);