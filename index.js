let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

function addTask() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let li = document.createElement("li");
        li.innerHTML = `
            <input type="checkbox" onclick="toggleTaskCompletion(this)">
            <span>${taskText}</span>
            <span class="delete" onclick="deleteTask(this)">❌</span>
        `;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function toggleTaskCompletion(checkbox) {
    let taskText = checkbox.nextSibling;
    if (checkbox.checked) {
        taskText.classList.add("completed");
    } else {
        taskText.classList.remove("completed");
    }
}

function deleteTask(deleteButton) {
    let li = deleteButton.parentElement;
    li.remove();
}