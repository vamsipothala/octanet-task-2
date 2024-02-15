document.addEventListener('DOMContentLoaded', function () {
    const tasksSection = document.getElementById('tasks');
    const taskForm = document.getElementById('taskForm');

    // Sample task data
    let tasks = [];

    // Function to dynamically generate HTML for tasks
    function generateTaskHTML(task) {
        return `
            <div class="task ${task.priority.toLowerCase()}">
                <h3>${task.title}</h3>
                <p>Category: ${task.category}</p>
                <p>Priority: ${task.priority}</p>
                <p>Due Date: ${task.dueDate}</p>
                <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
    }

    // Function to add a new task
    window.addTask = function () {
        const title = document.getElementById('taskTitle').value;
        const category = document.getElementById('taskCategory').value;
        const priority = document.getElementById('taskPriority').value;
        const dueDate = document.getElementById('taskDueDate').value;

        // Add the new task to the tasks array
        const newTask = { id: tasks.length + 1, title, category, priority, dueDate };
        tasks.push(newTask);

        // Display the new task on the page
        tasksSection.innerHTML += generateTaskHTML(newTask);

        // Clear the form
        taskForm.reset();

        // Show the tasks section after adding a task
        tasksSection.style.display = 'block';
    };

    // Function to delete a task
    window.deleteTask = function (taskId) {
        tasks = tasks.filter(task => task.id !== taskId);
        displayTasks();
    };


function generateTaskHTML(task) {
    return `
        <div class="task ${task.priority.toLowerCase()}">
            <h3>${task.title}</h3>
            <p>Category: ${task.category}</p>
            <p>Priority: ${task.priority}</p>
            <p>Due Date: ${task.dueDate}</p>
            <button class="delete-btn" onclick="deleteTask(${task.id})"><i class="fas fa-trash-alt"></i> Delete</button>
        </div>
    `;
}





    // Function to display tasks
    function displayTasks() {
        tasksSection.innerHTML = '';
        tasks.forEach(task => {
            tasksSection.innerHTML += generateTaskHTML(task);
        });
    }
});