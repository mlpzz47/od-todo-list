import { addProjectBtn, projectsList, addProjectContainer, mainTitle, content } from './index.js';
import taskManager from './addTask.js';
import { showInbox } from './inbox.js';

let projectsArray = [];
let taskArrays = {};

export default function projectManager () {

    addProjectBtn.addEventListener('click', ()=>{showProjectForm()})

    function showProjectForm () {
        addProjectBtn.style.display = 'none';

        const addProjectForm = document.createElement('form');
        addProjectForm.id = 'add-project-form';
        addProjectForm.innerHTML = `
            <input type="text" class="input-project-name" value='' placeholder="Project Name...">
            <button type="submit" class="input-btn" id="input-add-project-btn">Add</button>
            <button type="button" class="input-btn" id="cancel-btn">Cancel</button>
        `;
        addProjectContainer.appendChild(addProjectForm);

        const inputAddProjectBtn = addProjectForm.querySelector('#input-add-project-btn');
        inputAddProjectBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            const projectName = addProjectForm.querySelector('.input-project-name').value.trim();
            if (!projectName) {
                alert('Project Name cannot be empty');
                return;
            }

            function createTaskArray (name) {
                taskArrays[name + 'Array'] = [];
                return taskArrays[name + 'Array'];
            }
            const projectTaskArray = createTaskArray(projectName);

            const projectId = crypto.randomUUID();
            const project = createProject(projectName, projectId, projectTaskArray);

            console.log(taskArrays);

            projectsArray.push({name: projectName, id: projectId, element: project, taskArray: projectTaskArray});
            console.log(projectTaskArray);
            projectsList.appendChild(project);
            
            addProjectForm.remove();
            addProjectBtn.style.display = 'flex';
        })
        
        addProjectForm.querySelector('#cancel-btn').addEventListener('click', ()=>{
            addProjectForm.remove();
            addProjectBtn.style.display = 'flex';
        })
    }
    
    
    function createProject (name, id, array) {
        const projectContainer = document.createElement('li');
        projectContainer.classList.add('project');
        projectContainer.id = id;
        projectContainer.innerHTML = `
        <button class="project__btn sidebar__btn" type="button"> 
        <svg class="btn__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>format-list-checkbox</title><path d="M21,19V17H8V19H21M21,13V11H8V13H21M8,7H21V5H8V7M4,5V7H6V5H4M3,5A1,1 0 0,1 4,4H6A1,1 0 0,1 7,5V7A1,1 0 0,1 6,8H4A1,1 0 0,1 3,7V5M4,11V13H6V11H4M3,11A1,1 0 0,1 4,10H6A1,1 0 0,1 7,11V13A1,1 0 0,1 6,14H4A1,1 0 0,1 3,13V11M4,17V19H6V17H4M3,17A1,1 0 0,1 4,16H6A1,1 0 0,1 7,17V19A1,1 0 0,1 6,20H4A1,1 0 0,1 3,19V17Z" /></svg>
        <p class="btn__name">${name}</p>
        <span class="delete-project-btn">x</span>
        </button>
        `;
        
        const deleteProjectBtn = projectContainer.querySelector('.delete-project-btn');
        deleteProjectBtn.id = id;
        deleteProjectBtn.addEventListener('click', ()=>{
            if (projectBtn.classList.contains('active')) {
                projectsArray = projectsArray.filter((project) => project.id !== id);
                delete taskArrays[name + 'Array'];
                projectContainer.remove();
                console.log(taskArrays);
                console.log(projectsArray);
                showInbox();
            } else {
                projectsArray = projectsArray.filter((project) => project.id !== id);
                delete taskArrays[name + 'Array'];
                projectContainer.remove();
                console.log(taskArrays);
                console.log(projectsArray);
            }
        })
        
        const projectBtn = projectContainer.querySelector('.project__btn');
        projectBtn.addEventListener('click', ()=>{
            if (projectBtn.classList.contains('active')) return;
            taskManager(array);
            showProject(id);
            projectBtn.classList.add('active');
        })

        return projectContainer;
    }

    function showProject (projectId) {
        const project = projectsArray.find((project) => project.id === projectId);
        if (!project) return;
        const isActive = document.querySelectorAll('.active');
        isActive.forEach((activeElement) => activeElement.classList.remove('active'));
        mainTitle.textContent = project.name;
        content.innerHTML = '';
        for (let i = 0; i < project.taskArray.length; i++) {
            content.appendChild(project.taskArray[i].element);
        }
    }
}