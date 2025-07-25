import { mainTitle, content } from './index.js';
import createTask from './addTask.js';

const showInbox = ()=> {
    mainTitle.textContent = 'inbox';
    content.innerHTML = '';
    createTask();
}

export { showInbox };