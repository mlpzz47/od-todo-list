import { mainTitle, content } from './index.js';
import createTask from './addTask.js';

let inboxArray = [];

const showInbox = ()=> {
    mainTitle.textContent = 'inbox';
    content.innerHTML = '';
    createTask();
}

export { showInbox, inboxArray };