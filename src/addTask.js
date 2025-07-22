import { main, addTaskBtn } from './index.js';

export default function addTask() {
    addTaskBtn.addEventListener('click', ()=>{
        addTaskBtn.style.display = 'none';

        const addTaskForm = document.createElement('form');
        addTaskForm.classList.add('add-task-form');
        addTaskForm.innerHTML = `
            <input type="text" class="input-task-name" value=''>
            <button type="submit" class="input-btn" id="input-add-task-btn">Add</button>
            <button type="button" class="input-btn" id="cancel-btn">Cancel</button>
        `

        const inputAddTaskBtn = addTaskForm.querySelector('#input-add-task-btn');

        inputAddTaskBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const taskName = addTaskForm.querySelector('.input-task-name').value;
        })

        addTaskForm.querySelector('#cancel-btn').addEventListener('click', ()=>{
            addTaskForm.remove();
            addTaskBtn.style.display = 'inline-block';
        })
    })
    if (main.contains(addTaskBtn) == false) {
        main.appendChild(addTaskBtn);
    }
}