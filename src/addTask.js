import { addTaskBtn, addTaskContainer, content } from './index.js';

let taskBtnManager = null;

export default function taskManager (activeTaskArray) {

    function showTaskForm (activeTaskArray) {
        addTaskBtn.style.display = 'none';
        
        const addTaskForm = document.createElement('form');
        addTaskForm.id = 'add-task-form';
        addTaskForm.innerHTML = `
        <input type="text" class="input-task-name" value='' placeholder="Task Name...">
        <button type="submit" class="input-btn" id="input-add-task-btn">Add</button>
        <button type="button" class="input-btn" id="cancel-btn">Cancel</button>
        `;
        addTaskContainer.appendChild(addTaskForm);
        
        
        addTaskForm.querySelector('#cancel-btn').addEventListener('click', ()=>{
            addTaskForm.remove();
            addTaskBtn.style.display = 'flex';
        })
        
        const inputAddTaskBtn = addTaskForm.querySelector('#input-add-task-btn');
        inputAddTaskBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const taskName = addTaskForm.querySelector('.input-task-name').value.trim();
            if (!taskName) {
                alert('Project Name cannot be empty');
                return;
            }
            
            const taskId = crypto.randomUUID();
            const task = createTask(taskName, taskId);
            activeTaskArray.push({ name: taskName, id: taskId, element: task});
            console.log(activeTaskArray);
            
            content.appendChild(task);
            
            addTaskForm.remove();
            addTaskBtn.style.display = 'flex';
        })
    }
    
    
    function createTask (name, id) {
        const taskContainer = document.createElement('div');
        taskContainer.id = id;
        taskContainer.classList.add('task');
        taskContainer.innerHTML = `
        <div class="left-panel">
        <input type="radio" class="task-checkbox">
        <p class="task-name">${name}</p>
        </div>
        <div class="right-panel">
        <p class="task-duedate">No Date</p>
        <button type="button" class="task-btn">x</button>
        </div>
        `;
        
        const deleteTaskBtn = taskContainer.querySelector('.task-btn');
        deleteTaskBtn.id = id;
        deleteTaskBtn.addEventListener('click', ()=>{
            taskContainer.remove();
            activeTaskArray = activeTaskArray.filter((task) => task.id != id);
            console.log(activeTaskArray);
        })
        
        
        const checkTaskBtn = taskContainer.querySelector('.task-checkbox');
        checkTaskBtn.id = id;
        checkTaskBtn.addEventListener('click', ()=>{
            alert('task completed!!! now goon');
            taskContainer.remove();
            activeTaskArray = activeTaskArray.filter((task) => task.id != id);
            console.log(activeTaskArray);
        })
        
        return taskContainer;
    }

    if (taskBtnManager) {
        addTaskBtn.removeEventListener('click', taskBtnManager);
    }

    taskBtnManager = () => showTaskForm(activeTaskArray);

    addTaskBtn.addEventListener('click', taskBtnManager);


}