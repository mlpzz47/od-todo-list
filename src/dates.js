import { inboxArray } from './inbox.js';
import { projectsArray } from './projects.js';
import { mainTitle, content, todayBtn, thisWeekBtn, addTaskContainer } from './index.js';
import { parse, isToday, isThisWeek } from 'date-fns';


const showToday =  ()=> {
    const isActive = document.querySelectorAll('.active');
    isActive.forEach((activeElement) => activeElement.classList.remove('active'));
    todayBtn.classList.add('active');
    mainTitle.textContent = 'Today';
    content.innerHTML = '';

    const inboxTasksWithDate = inboxArray.filter ((task) => task.dueDate);
    const dueTodayInboxTasks = inboxTasksWithDate.filter(task => {
        const date = parse(task.dueDate, 'dd MMM yyyy', new Date());
        return isToday(date);
    })

    for (let i = 0; i < dueTodayInboxTasks.length; i++) {
        content.appendChild(dueTodayInboxTasks[i].element);
    }
    console.log(dueTodayInboxTasks);

    const dueTodayProjectsTasks = projectsArray.flatMap((project) => {
        const projectsTasksWithDates = project.taskArray.filter((task) => task.dueDate);
        return projectsTasksWithDates.filter((task) => {
            const date = parse(task.dueDate, 'dd MMM yyyy', new Date());
            return isToday(date);
        })
    })

    for (let i = 0; i < dueTodayProjectsTasks.length; i++) {
        content.appendChild(dueTodayProjectsTasks[i].element);
    }
    console.log(dueTodayProjectsTasks);
}

const showThisWeek =  ()=> {
    const isActive = document.querySelectorAll('.active');
    isActive.forEach((activeElement) => activeElement.classList.remove('active'));
    thisWeekBtn.classList.add('active');
    mainTitle.textContent = 'This Week';
    content.innerHTML = '';

    const inboxTasksWithDate = inboxArray.filter ((task) => task.dueDate);
    const dueTodayInboxTasks = inboxTasksWithDate.filter(task => {
        const date = parse(task.dueDate, 'dd MMM yyyy', new Date());
        return isThisWeek(date);
    })

    for (let i = 0; i < dueTodayInboxTasks.length; i++) {
        content.appendChild(dueTodayInboxTasks[i].element);
    }
    console.log(dueTodayInboxTasks);

    const dueTodayProjectsTasks = projectsArray.flatMap((project) => {
        const projectsTasksWithDates = project.taskArray.filter((task) => task.dueDate);
        return projectsTasksWithDates.filter((task) => {
            const date = parse(task.dueDate, 'dd MMM yyyy', new Date());
            return isThisWeek(date);
        })
    })

    for (let i = 0; i < dueTodayProjectsTasks.length; i++) {
        content.appendChild(dueTodayProjectsTasks[i].element);
    }
    console.log(dueTodayProjectsTasks);
}


export { showToday, showThisWeek };