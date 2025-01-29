/*
    To-Do List App
    Description: A classic project where users can add, remove, and mark tasks as complete.
    Features:
    Tasks can be saved locally (using localStorage).
    Option to filter tasks by status (completed or pending) or Date.
    A due date for each task with a reminder/notification.
*/


function addTask() {
    const title = document.querySelector(".title").value;
    const description = document.querySelector(".description").value;
    const date = document.querySelector(".date").value;
    const taskList = document.querySelector(".task-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox"> 
            <span class="task-title">${title}</span><br>
            <span class="task-description">${description}</span><br>
            <span class="task-date">${date}</span><br>
            <button class="edit-btn">Edit</button><br>
            <button class="delete-btn">Delete</button><br>
        
    `;
    taskList.appendChild(li);
    
    const editButton = li.querySelector(".edit-btn");
    editButton.addEventListener("click", function() {
        const taskTitle = li.querySelector(".task-title");
        const taskDescription = li.querySelector(".task-description");
        const taskDate = li.querySelector(".task-date");

        const updateTitle = prompt("Edit title: ", taskTitle.textContent);
        const updateDescription = prompt("Edit description: ", taskDescription.textContent);
        taskTitle.textContent = updateTitle;
        taskDescription.textContent = updateDescription
        /*
        if (editButton.textContent === "Edit") {
            taskTitle.contentEditable = true;
            taskDescription.contentEditable = true;
            taskDate.contentEditable = true;
            editButton.textContent = "Save";
        } else {
            taskTitle.contentEditable = false;
            taskDescription.contentEditable = false;
            taskDate.contentEditable = false;
            editButton.textContent = "Edit";
        }
        */
    });
    
    const deleteButton = li.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function() {
        taskList.remove(li);
    });

    // Add number of completed tasks here
}

