import "./styles.css";
import { showInbox } from "./inbox.js";


const inboxBtn = document.getElementById('inbox-btn');
const todayBtn = document.getElementById('today-btn');
const thisWeekBtn = document.getElementById('this-week-btn');
const addProjectBtn = document.getElementById('add-project-btn');
const mainTitle = document.querySelector('.main__title');
const main = document.querySelector('main');
const content = document.querySelector('.content');
const addTaskBtn = document.querySelector('.add-task');
const addTaskContainer = document.querySelector('.add-task-container');
export { main, mainTitle, content, addTaskBtn, addTaskContainer };

inboxBtn.addEventListener('click', ()=>{
    inboxBtn.classList.add('active');
    showInbox();
});