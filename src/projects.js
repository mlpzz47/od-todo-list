import { addProjectBtn, projectsList, addProjectContainer } from './index.js';

let projectsArray = [];

function projectManager () {

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

            const projectId = crypto.randomUUID();
            const project = createProject(projectName, projectId);
            projectsArray.push({ name: projectName, id: projectId, element: project});
            projectsList.appendChild(project);
            
            console.log(projectsArray);

            addProjectForm.remove();
            addProjectBtn.style.display = 'flex';

        })
        
        
        addProjectForm.querySelector('#cancel-btn').addEventListener('click', ()=>{
            addProjectForm.remove();
            addProjectBtn.style.display = 'flex';
        })
    }
    
    function createProject (name, id) {
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
            projectsArray = projectsArray.filter((project) => project.id !== id);
            projectContainer.remove();
            console.log(projectsArray);
        })
        
        return projectContainer;
    }

    addProjectBtn.addEventListener('click', ()=> {showProjectForm()})
}



export { projectManager };