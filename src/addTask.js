import { addTaskBtn, addTaskContainer, content } from './index.js';

class taskStructure {
    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.completed = false;
    }
}

export default function createTask () {
    addTaskBtn.addEventListener('click', ()=>{
        addTaskBtn.style.display = 'none';

        const addTaskForm = document.createElement('form');
        addTaskForm.id = 'add-task-form';
        addTaskForm.innerHTML = `
            <input type="text" class="input-task-name" value='' placeholder="Task Name...">
            <button type="submit" class="input-btn" id="input-add-task-btn">Add</button>
            <button type="button" class="input-btn" id="cancel-btn">Cancel</button>
        `;
        addTaskContainer.appendChild(addTaskForm);

        const inputAddTaskBtn = addTaskForm.querySelector('#input-add-task-btn');

        inputAddTaskBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const taskName = addTaskForm.querySelector('.input-task-name').value.trim();
            const task = new taskStructure(taskName);
            const taskContainer = document.createElement('div');
            taskContainer.classList.add('task');
            taskContainer.innerHTML = `
                <div class="left-panel">
                    <input type="radio" class="task-checkbox">
                    <p class="task-name">${taskName}</p>
                </div>
                <div class="right-panel">
                    <p class="task-duedate">No Date</p>
                    <button type="button" class="task-btn">x</button>
                </div>
            `;
            content.appendChild(taskContainer);

            const deleteTaskBtn = taskContainer.querySelector('.task-btn');
            deleteTaskBtn.addEventListener('click', ()=>{
                taskContainer.remove();
            })

            const checkTaskBtn = taskContainer.querySelector('.task-checkbox');
            checkTaskBtn.addEventListener('click', ()=>{
                setTimeout(()=> {
                    alert('task completed!!! now goon');
                    taskContainer.remove();
                }, 1000)
                
            })

            addTaskForm.remove();
            addTaskBtn.style.display = 'flex';
        })

        addTaskForm.querySelector('#cancel-btn').addEventListener('click', ()=>{
            addTaskForm.remove();
            addTaskBtn.style.display = 'flex';
        })
    })
}