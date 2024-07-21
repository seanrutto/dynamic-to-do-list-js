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