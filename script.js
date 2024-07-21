document.addEventListener('DOMContentLoaded', function(){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask(){
        const taskText = taskInput.value.trim();
        if(taskText === ""){
            alert ("Enter A Task");

        }   
        
        const listItem = document.createElement('li');
        listItem.textContent = taskText;
        const newBtn = document.createElement('button')
        newBtn.textContent = "Remove"
        newBtn.classList.add('remove-btn');
        newBtn.onclick = function(){
            taskList.removeChild(listItem)
        }

        listItem.appendChild(newBtn);
        taskList.appendChild(listItem);

        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask)
    taskInput.addEventListener('keypress', function(event){
        if(event.key === 'Enter'){
            addTask();
        }
    })

    addTask();

})

document.addEventListener('DOMContentLoaded', () => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const taskList = document.getElementById('task-list');
    const newTaskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task');

    const saveTasksToLocalStorage = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const loadTasksFromLocalStorage = () => {
        tasks.forEach(task => {
            addTaskToDOM(task);
        });
    };

    const addTaskToDOM = (task) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        li.textContent = task;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
            tasks = tasks.filter(t => t !== task);
            saveTasksToLocalStorage();
        });

        li.appendChild(removeButton);
        taskList.appendChild(li);
    };

    addTaskButton.addEventListener('click', () => {
        const task = newTaskInput.value.trim();
        if (task) {
            tasks.push(task);
            addTaskToDOM(task);
            saveTasksToLocalStorage();
            newTaskInput.value = '';
        }
    });

    loadTasksFromLocalStorage();
});
