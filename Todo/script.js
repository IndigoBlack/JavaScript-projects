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
    const title = document.querySelector("#title").value;
    const description = document.querySelector("#description").value;
    const date = document.querySelector("#date").value;
    const taskList = document.querySelector(".task-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <input type="checkbox" class="form-check-input"> 
            <span class="task-title">${title}</span><br>
            <span class="task-description">${description}</span><br>
            <span class="task-date">${date}</span><br>
            <button id="edit-btn" class="btn btn-secondary">Edit</button><br>
            <button id="delete-btn" class="btn btn-secondary">Delete</button><br>
        
    `;
    taskList.appendChild(li);
    const taskTitle = li.querySelector(".task-title");
    const taskDescription = li.querySelector(".task-description");
    const taskDate = li.querySelector(".task-date");

    const check = [];
    const checkbox = document.querySelector(".form-check-input");
    const checkedTasks = document.querySelector(".checked-tasks");
    console.log(checkbox.checked)
    const completed = () => {
        console.log("Checkbox clicked");
        if (checkbox.checked) {
            console.log("Checkbox checked.");
            check.push(taskTitle.textContent);
            console.log("It should do now.")
        }
        
        for (let i = 0; i < check.length; i++) {
            if (!checkbox.checked) {
                check.splice(i, 1);
                i--;
            }
        }
        let items = check.map(item => `<li>${item}</li>`)
        checkedTasks.innerHTML = items.join(" ");
    }
    checkbox.addEventListener("click", completed);
    

    const editButton = li.querySelector("#edit-btn");
    editButton.addEventListener("click", function() {

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
    
    const deleteButton = li.querySelector("#delete-btn");
    deleteButton.addEventListener("click", function() {
        taskList.remove(li);
    });

    // Add number of completed tasks here
}

