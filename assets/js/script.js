// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 5);
    const uniqueId = timestamp + randomString;
    return uniqueId;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const card = document.createElement("div");
    card.classList.add("task-card");
    card.setAttribute("id", task.id); 
    //this will set task to ID
    const title = document.createElement("h3");
    title.textContent = task.title;
    //this will apend the elements to the cards
    card.appendChild(title);
    return card;

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    // const taskContainer = document.getElementById("task-container");
    // taskContainer.innerHTML = "";

    // taskList.forEach(task => {
    //     const card = createTaskCard(task);
    //     taskContainer.appendChild(card);
    //   });
    //   $(".task-card").draggable({
    //     revert:true
    //   })
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    const titleInput = document.getElementById("task-title");
    const newTaskTitle = titleInput.value.trim();
    if (newTaskTitle) {
      const newTask = {
        id: generateTaskId(),
        title: newTaskTitle
      };
      taskList.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(taskList));
      renderTaskList();
      titleInput.value = ""; // Clear input field
    }

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    const taskId = event.target.closest(".task-card").id;
    taskList = taskList.filter(task => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    renderTaskList();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
    const taskId = ui.draggable.attr("id");
    const newStatus = event.target.dataset.status;
    //this should updates tasks/data
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    renderTaskList();
  
    $("#add-task-form").on("submit", handleAddTask);
    $("#task-container").on("click", ".delete-button", handleDeleteTask);
  
    // this will make lanes droppable
    $(".status-lane").droppable({
      drop: handleDrop
    });
  
    // this will make due date field a date picker 
    $("#due-date").datepicker();
});



$("#saveTask").on("click", function(){
    console.log("Add task")
    
})