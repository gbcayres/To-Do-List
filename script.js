const $input = document.querySelector('.header input');
const $addBtn = document.querySelector('.header button');
const $todoList = document.querySelector('.todo-list');
const $todos = document.querySelectorAll('.todo-list li');
const $clearAllBtn = document.querySelector('.clearAll');
const $clearCompleted = document.querySelector('.clearCompleted');

$addBtn.addEventListener('click', addTask)

$todos.forEach((todo) => {
    todo.addEventListener('click', checkTodo)
})

$clearAllBtn.addEventListener('click', removeTodos)

$clearCompleted.addEventListener('click', removeCompleted)

function addTask() {
    const newTask =  document.createElement('li');
    newTask.innerHTML = $input.value;

    $todoList.append(newTask);
}

function checkTodo(e) {
    const todo = e.target;
    todo.classList.toggle('checked');
}

function removeTodos() {
    $todoList.innerHTML = '';
}

function removeCompleted() {
    $todos.forEach(todo => {
        if (todo.classList.contains('checked')) {
            todo.remove();
        }
    });
}
