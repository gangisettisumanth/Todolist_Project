let btn = document.getElementById("btn");
let items = document.getElementById("items");
let todoCounter = 1;

btn.addEventListener("click", function () {
    let userInput = document.getElementById("UserInput").value;

    if (userInput.length === 0) {
        alert("Enter the text");
        return false;
    } else {

        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");

        let taskText = document.createElement("div");
        taskText.classList.add("todo-text", "numbered");
        taskText.textContent = `${todoCounter}. ${userInput}`;

        todoItem.appendChild(taskText);

        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");

        // Create Done the done button
        let doneBtn = document.createElement("button");
        doneBtn.innerHTML = '<i class="fa-solid fa-square-check"></i>';
        doneBtn.classList.add("do-btn");

        // Add a click event listener to mark the task as done
        let doneMark = false;
        doneBtn.addEventListener("click", function () {

            if (doneMark) {
                taskText.style.textDecoration = "none";
            } else {
                taskText.style.textDecoration = "line-through";
            }

            doneMark = !doneMark;

        });

        // Append the done button to the button container
        buttonContainer.appendChild(doneBtn);

        // Create the edit button
        let editBtn = document.createElement("button");
        editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
        editBtn.classList.add("edit-btn");

        // Add a click event listener to edit the task
        editBtn.addEventListener("click", function () {
            // Create an input field
            let inputField = document.createElement("input");
            inputField.type = "text";
            inputField.classList.add("edit-Input");
            inputField.value = taskText.textContent;

            // Create a save button
            let saveBtn = document.createElement("button");
            saveBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i>';
            saveBtn.classList.add("save-btn");

            // Add a click event listener to save the edited task
            saveBtn.addEventListener("click", function () {
                taskText.textContent = inputField.value;
                todoItem.appendChild(doneBtn);
                todoItem.appendChild(editBtn);
                todoItem.appendChild(deleteBtn);
            });

            // Clear the task text and append the input field and save button
            taskText.innerHTML = "";
            taskText.appendChild(inputField);
            taskText.appendChild(saveBtn);
        });

        // Append the edit button to the button container
        buttonContainer.appendChild(editBtn);

        // Create the delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
        deleteBtn.classList.add("del-btn");

        // Add a click event listener to delete the task
        deleteBtn.addEventListener("click", function () {
            todoItem.remove();
        });

        // Append the delete button to the button container
        buttonContainer.appendChild(deleteBtn);

        // Append the button container to the to-do item
        todoItem.appendChild(buttonContainer);

        // Increment the counter for the next task
        todoCounter++;

        // Append the to-do item to the list of items
        items.appendChild(todoItem);

        // Clear the user input field
        document.getElementById("UserInput").value = "";
    }

    return true;
});

