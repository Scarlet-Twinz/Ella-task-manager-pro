const input = document.getElementById('taskInput');
const btn = document.getElementById('addBtn');
const list = document.getElementById('taskList');

// Load saved tasks from memory when the page starts
let savedTasks = JSON.parse(localStorage.getItem('myTasks')) || [];
renderTasks();

// 1. Add Task Function
btn.addEventListener('click', () => {
    if (input.value !== "") {
        savedTasks.push(input.value);
        input.value = ""; // Clear input box
        updateStorage();
        renderTasks();
    }
});

// 2. Delete Task Function
function deleteTask(index) {
    savedTasks.splice(index, 1);
    updateStorage();
    renderTasks();
}

// 3. Save to Local Storage
function updateStorage() {
    localStorage.setItem('myTasks', JSON.stringify(savedTasks));
}

// 4. Show tasks on the screen
function renderTasks() {
    list.innerHTML = "";
    savedTasks.forEach((task, index) => {
        const item = document.createElement('li');
        item.innerHTML = `
            ${task} 
            <button class="delete-btn" onclick="deleteTask(${index})">X</button>
        `;
        list.appendChild(item);
    }); 
}