import { main, mainTitle, content, addTaskBtn, addTaskContainer } from './index.js';
// import createAddTaskBtn from './addTask.js';

const inboxArray = [];

class inboxTask {
    constructor(name, dueDate, difficulty) {
        this.name = name;
        this.dueDate = dueDate;
        this.difficulty = diffyculty;
        this.completed = false;
    }
}

const showInbox = ()=> {
    mainTitle.textContent = 'inbox';
    content.innerHTML = '';
    addTaskBtn.addEventListener('click', ()=>{
        addTaskBtn.style.display = 'none';

        const addTaskForm = document.createElement('form');
        addTaskForm.id = 'add-task-form';
        addTaskForm.innerHTML = `
            <input type="text" class="input-task-name" value=''>
            <button type="submit" class="input-btn" id="input-add-task-btn">Add</button>
            <button type="button" class="input-btn" id="cancel-btn">Cancel</button>
        `;
        addTaskContainer.appendChild(addTaskForm);

        const inputAddTaskBtn = addTaskForm.querySelector('#input-add-task-btn');

        inputAddTaskBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const taskName = addTaskForm.querySelector('.input-task-name').value;
        })

        addTaskForm.querySelector('#cancel-btn').addEventListener('click', ()=>{
            addTaskForm.remove();
            addTaskBtn.style.display = 'flex';
        })
    })
}

export { inboxArray, showInbox };