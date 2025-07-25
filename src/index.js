import "./styles.css";
import { showInbox } from "./inbox.js";
import { createProject } from "./projects.js";
// import { createProject } from "./projects.js"


const mainTitle = document.querySelector('.main__title');
const content = document.querySelector('.content');

const inboxBtn = document.getElementById('inbox-btn');
const todayBtn = document.getElementById('today-btn');
const thisWeekBtn = document.getElementById('this-week-btn');

const addProjectBtn = document.getElementById('add-project-btn');
const projectsList = document.querySelector('.projects__list');
const addProjectContainer = document.querySelector('.add-project-container');

const addTaskBtn = document.querySelector('.add-task');
const addTaskContainer = document.querySelector('.add-task-container');

export { mainTitle, content, addTaskBtn, addTaskContainer, addProjectBtn, addProjectContainer, projectsList };

inboxBtn.classList.add('active');
showInbox();

createProject();

inboxBtn.addEventListener('click', ()=>{
    inboxBtn.classList.add('active');
    showInbox();
});

// const projects = createProject.querySelectorAll('.project');

// projects.forEach((project)=>{
//     project.addEventListener('click', ()=>{
//         project.classList.add('active');
//         showProject();
//     })
// })
