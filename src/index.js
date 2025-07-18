import "./styles.css";
import showInbox from "./inbox.js";


const inboxBtn = document.getElementById('inbox-btn');
const todayBtn = document.getElementById('today-btn');
const thisWeekBtn = document.getElementById('this-week-btn');
const addProjectBtn = document.getElementById('add-project-btn');
const mainTitle = document.querySelector('.main__title');
const main = document.querySelector('main');
export { main, mainTitle };
// const inboxBtn = document.getElementById('inbox-btn');

inboxBtn.addEventListener('click', ()=>{
    inboxBtn.classList.add('active');
    showInbox();
});