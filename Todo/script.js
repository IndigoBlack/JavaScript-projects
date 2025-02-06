/*
    To-Do List App
    Description: A classic project where users can add, remove, and mark tasks as complete.
    Features:
    Tasks can be saved locally (using localStorage).
    Option to filter tasks by status (completed or pending) or Date.
    A due date for each task with a reminder/notification.
*/


// Still have to deal with the checkbox bugs
function todo() {
    // Get the form values for the task
    const container = document.querySelector(".container");
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const taskList = document.querySelector(".task-list");

    const li = document.createElement("li"); // Create <li> to hold the task details
    li.innerHTML = `
        <input type="checkbox" class="form-check-input"> 
            <span class="task-title">${title}</span><br>
            <span class="task-description">${description}</span><br>
            <span class="task-date">${date}</span><br>
            <button id="edit-btn" class="btn btn-secondary">Edit</button><br>
            <button id="delete-btn" class="btn btn-secondary">Delete</button><br>
        
    `; // Display the task details in the <li>
    taskList.appendChild(li); // Append newly created task to the incomplete task list

    const checkedTasks = document.querySelector(".checked-tasks");
    container.addEventListener("change", function(event) {
        if (event.target && event.target.classList.contains("form-check-input")) {
            console.log("Checkbox clicked"); // Error checking
            const box = event.target
            const taskLi = box.closest("li");

            console.log("Current parent:", taskLi.parentElement); 

            if (taskLi.parentElement === taskList) {
                taskList.removeChild(taskLi);
                console.log("Task removed from incomplete tasks");
            } else if (taskLi.parentElement === checkedTasks) {
                checkedTasks.removeChild(taskLi);
                console.log("Task removed from competed tasks");
            }

            if (box.checked) {
                checkedTasks.appendChild(taskLi); // Append it to the completed tasks list
            } else {
                taskList.appendChild(taskLi); // Append it to the incompleted tasks list
            }
        }
    })

    
    // Get the values of the newly created task
    const taskTitle = li.querySelector(".task-title");
    const taskDescription = li.querySelector(".task-description");
    const taskDate = li.querySelector(".task-date");

    // Edit button
    const editButton = li.querySelector("#edit-btn");
    editButton.addEventListener("click", function() {
        const updateTitle = prompt("Edit title: ", taskTitle.textContent);
        const updateDescription = prompt("Edit description: ", taskDescription.textContent);
        taskTitle.textContent = updateTitle;
        taskDescription.textContent = updateDescription
    });
    
    const deleteButton = container.querySelector("#delete-btn");
    deleteButton.addEventListener("click", function() {
    console.log("Delete button parent Element: ", deleteButton.parentElement.parentElement)
        if (deleteButton.parentElement.parentElement === taskList) {
            taskList.removeChild(li);
        } else if (deleteButton.parentElement.parentElement === checkedTasks) {
            checkedTasks.removeChild(li);
        }
        
    });

    // Add number of completed tasks here
}

