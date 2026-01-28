let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() 
{
  const text = taskInput.value.trim();
  if (!text) return;

  const newTask = 
  {
    id: Date.now(),
    text,
    completed: false
  };

  tasks = [...tasks, newTask];
  taskInput.value = "";
  renderTasks();
}

function toggleTask(id) 
{
  tasks = tasks.map(task =>
    task.id === id
      ? { ...task, completed: !task.completed }
      : task
  );
  renderTasks();
}

function deleteTask(id) 
{
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">
        ${task.text}
      </span>
      <div>
        <button onclick="toggleTask(${task.id})">✓</button>
        <button onclick="deleteTask(${task.id})">✕</button>
      </div>
    `;

    taskList.appendChild(li);
  });
}
