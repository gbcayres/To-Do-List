const $input = document.querySelector('.header input');
const $addBtn = document.querySelector('.header button');
const $todoList = document.querySelector('.todo-list');
const $clearAllBtn = document.querySelector('.clear-all');
const $clearCompleted = document.querySelector('.clear-completed');

document.addEventListener("DOMContentLoaded",  () => {
    loadTodos();
})

$addBtn.addEventListener('click', addTask)

$clearAllBtn.addEventListener('click', removeAll)

$clearCompleted.addEventListener('click', removeCompleted)

$input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        addTask();
    }
})

function addTask() {
    const taskText = $input.value.trim();

    if(taskText) {
        const newTask =  createTaskElement(taskText)
        $todoList.appendChild(newTask)
        saveTodos();
        $input.value = '';
        $input.focus();
    }
}

function toggleTask(e) {
    const task = e.target;
    task.classList.toggle('checked')
}

function createTaskElement(taskText) {
    const newTask = document.createElement('li');
    newTask.textContent = taskText;
    newTask.addEventListener('click', toggleTask);
    const closeIcon = createCloseIcon();
    newTask.appendChild(closeIcon);
    return newTask;
}

function createCloseIcon() {
    const closeIcon = document.createElement('img');
    closeIcon.src = "./assets/images/close.svg";
    closeIcon.classList.add('close-icon');
    closeIcon.addEventListener('click', removeTask);
    return closeIcon;
}

function checkTodo(e) {
    const todo = e.target;
    todo.classList.toggle('checked');
}

function removeTask(e) {
    const todo = e.target;
    todo.parentElement.remove()
    saveTodos();
}

function removeAll() {
    $todoList.innerHTML = '';
    saveTodos();
}

function removeCompleted() {
    const todos = document.querySelectorAll('.todo-list li');
    todos.forEach(todo => {
        if (todo.classList.contains('checked')) {
            todo.remove();
        }
    });
}

function saveTodos() {
    const todoList = $todoList;
    localStorage.setItem('todos', todoList.innerHTML)
}

function loadTodos() {
    $todoList.innerHTML = localStorage.getItem('todos') || '';
}