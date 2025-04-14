// Login Form Validation
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

function validateForm() {
    const email = emailInput.value;
    const password = passwordInput.value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length > 8;

    if (emailValid && passwordValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate redirect to homepage
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('todoPage').style.display = 'block';
});

// To-Do List functionality
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <div>
            <button class="update" onclick="updateTask(this)">Update</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    todoList.appendChild(todoItem);
    taskInput.value = '';
}

function updateTask(button) {
    const taskTextElement = button.parentElement.previousElementSibling;
    const newTaskText = prompt('Update your task:', taskTextElement.textContent);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskTextElement.textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const todoItem = button.parentElement.parentElement;
    todoList.removeChild(todoItem);
}

taskInput.addEventListener('input', function() {
    document.getElementById('addBtn').disabled = !taskInput.value.trim();
});

// Redirect to About Page (Simulate navigation)
setTimeout(function() {
    document.getElementById('todoPage').style.display = 'none';
    document.getElementById('aboutPage').style.display = 'block';
}, 5000); // Simulate redirect after 5 seconds

