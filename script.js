document.addEventListener('DOMContentLoaded', function() {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'removeButton';
            removeButton.addEventListener('click', function() {
                taskList.removeChild(li);
            });

            li.appendChild(removeButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
