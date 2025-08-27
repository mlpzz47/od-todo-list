import "./styles.css";
import { showInbox } from "./inbox.js";
import { projectManager } from "./projects.js";
import { showToday, showThisWeek } from "./dates.js";

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

export { mainTitle, content, addTaskBtn, addTaskContainer, addProjectBtn, addProjectContainer, projectsList, inboxBtn, todayBtn, thisWeekBtn };

inboxBtn.classList.add('active');
showInbox();

projectManager();

inboxBtn.addEventListener('click', ()=>{
    if (inboxBtn.classList.contains('active')) return;
    showInbox();
    if (addTaskContainer.style.display !== 'block') {
        addTaskContainer.style.display = 'block';
    }
});

todayBtn.addEventListener('click', ()=>{
    if (todayBtn.classList.contains('active')) return;
    showToday();
    if (addTaskContainer.style.display !== 'none') {
        addTaskContainer.style.display = 'none';
    }
})

thisWeekBtn.addEventListener('click', ()=>{
    if (thisWeekBtn.classList.contains('active')) return;
    showThisWeek();
    if (addTaskContainer.style.display !== 'none') {
        addTaskContainer.style.display = 'none';
    }
})