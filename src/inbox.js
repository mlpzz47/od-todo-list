import { mainTitle, content, inboxBtn } from './index.js';

let inboxArray = [];

const showInbox = ()=> {
    const isActive = document.querySelectorAll('.active');
    isActive.forEach((activeElement) => activeElement.classList.remove('active'));
    inboxBtn.classList.add('active');
    mainTitle.textContent = 'Inbox';
    content.innerHTML = '';
    for (let i = 0; i < inboxArray.length; i++) {
        content.appendChild(inboxArray[i].element);
    }

}

export { showInbox, inboxArray };