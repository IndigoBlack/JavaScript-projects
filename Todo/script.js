/*
    To-Do List App
    Description: A classic project where users can add, remove, and mark tasks as complete.
    Features:
    Tasks can be saved locally (using localStorage).
    Option to filter tasks by status (completed or pending).
    A due date for each task with a reminder/notification.
*/


function addTask() {
    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const date = document.querySelector(".date").value;
    const taskList = document.querySelector(".task-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <li><input type="checkbox"> 
            ${title}<br>
            ${description}<br>
            <span>${date}</span><br>
            <span class="edit-btn">Edit</span><br>
            <span class="delete=btn">Delete</span><hr>
        </li>
    `;
    taskList.appendChild(li);
}

function edit() {
    
}