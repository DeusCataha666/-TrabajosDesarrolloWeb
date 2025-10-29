let tasks = [];

function addTask(event) {
    event.preventDefault();

    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const task = {
        id: Date.now(),
        text: taskText
    };

    tasks.push(task);
    taskInput.value = '';
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('taskList');
    const emptyState = document.getElementById('emptyState');

    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-state">No hay tareas agregadas. ¡Agrega tu primera tarea!</div>';
        return;
    }

    taskList.innerHTML = tasks.map(task => `
                <div class="task-item">
                    <span class="task-text">${task.text}</span>
                    <button class="delete-btn" onclick="deleteTask(${task.id})">
                        Eliminar
                    </button>
                </div>
            `).join('');
}

// Focus automático en el input al cargar la página
window.onload = function () {
    document.getElementById('taskInput').focus();
};

// Permitir agregar tarea con Enter
document.getElementById('taskInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask(e);
    }
});