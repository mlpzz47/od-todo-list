import { addTaskBtn, addTaskContainer, content } from './index.js';
import { format } from 'date-fns';

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
            activeTaskArray.push({ name: taskName, id: taskId, element: task, dueDate: null});
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
            <button type="button" class="task-btn"><span class="task-btn-text">x</span></button>
        </div>
        `;
        
        const deleteTaskBtn = taskContainer.querySelector('.task-btn');
        deleteTaskBtn.id = id;
        deleteTaskBtn.addEventListener('click', ()=>{
            taskContainer.remove();
            const deletedTaskIndex = activeTaskArray.findIndex((task) => task.id === id);
            activeTaskArray.splice(deletedTaskIndex, 1);
            console.log(activeTaskArray);
        })

        const checkTaskBtn = taskContainer.querySelector('.task-checkbox');
        checkTaskBtn.id = id;
        checkTaskBtn.addEventListener('click', ()=>{
            alert('Task completed!!! Now goon');
            taskContainer.remove();
            const deletedTaskIndex = activeTaskArray.findIndex((task) => task.id === id);
            activeTaskArray.splice(deletedTaskIndex, 1);
            console.log(activeTaskArray);
        })
        
        const taskDueDate = taskContainer.querySelector('.task-duedate');
        const rightPanel = taskContainer.querySelector('.right-panel');
        taskDueDate.addEventListener('click', ()=> {assignDueDate(rightPanel, taskDueDate, id)})

        return taskContainer;
    }

    function assignDueDate(fatherNode, node, id) {
        const assignDateForm = document.createElement('form');
        assignDateForm.id = 'assign-date-form';
        assignDateForm.innerHTML = `
        <input type="date" class="input-task-date" value=''>
        <button type="submit" class="input-btn" id="input-add-date">Add</button>
        <button type="button" class="input-btn" id="cancel-date">Cancel</button>
        `;
        fatherNode.replaceChild(assignDateForm, node);

        assignDateForm.querySelector('#cancel-date').addEventListener('click', ()=>{
            fatherNode.replaceChild(node, assignDateForm);
            assignDateForm.remove();
        })
        
        const inputAddDate = assignDateForm.querySelector('#input-add-date');
        inputAddDate.addEventListener('click', (e)=>{
            e.preventDefault();
            const taskDate = assignDateForm.querySelector('.input-task-date').value.trim();
            if (!taskDate) {
                alert('Project Date cannot be empty');
                return;
            }

            const goodTaskDate = format(new Date(taskDate), 'dd MMM yyyy' )
            node.textContent = goodTaskDate;

            const taskReferred = activeTaskArray.find(task => task.id === id)
            taskReferred.dueDate = goodTaskDate;

            fatherNode.replaceChild(node, assignDateForm);
            assignDateForm.remove();
        })
    }

    if (taskBtnManager) {
        addTaskBtn.removeEventListener('click', taskBtnManager);
    }

    taskBtnManager = () => showTaskForm(activeTaskArray);

    addTaskBtn.addEventListener('click', taskBtnManager);


}