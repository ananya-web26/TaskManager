function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText !== "") {
        const ul = document.getElementById("todoList");

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", function () {
            editTask(span);
        });

        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.addEventListener("click", function () {
            removeTask(li);
        });

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        ul.appendChild(li);

        input.value = "";
    } else {
        alert("Please enter a valid task.");
    }
}

function removeTask(li) {
    li.remove();
}

function editTask(span) {
    const newText = prompt("Edit your task:", span.textContent);

    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText;
    }
}