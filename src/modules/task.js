import storageModule from './storage';

// FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, completed) => {
    let project;
    let dataNum;
    // change title, flag or date
    function setTitle(t) {
        this.title = t;
    }

    function setDue(date) {
        this.due = date;
    }

    return {
        title, due, project, completed, dataNum, setTitle, setDue,
    };
};

let taskArray = [];
let currentProjTasks = [];

function saveArray() {
    storageModule.addTaskToStorage(taskArray);
}

function getTaskArray() {
    return taskArray;
}

function getCurrentProjTasks() {
    return currentProjTasks;
}

function setTaskArray(arr) {
    taskArray = arr;
}

function setCurrentProjTasks(arr) {
    currentProjTasks = arr;
}

function fillSingleNum(num) {
    if (num < 10) {
        return `0${num}`;
    }
    return num;
}

function formatDate(date) {
    return date
        .split('-')
        .reverse()
        .join('/');
}

function getDateToday() {
    const date = new Date();
    return formatDate(`${date.getFullYear()}-${fillSingleNum(date.getMonth() + 1)}-${fillSingleNum(date.getDate())}`);
}

function getWeek() {
    const result = [];
    for (let i = 0; i < 7; i += 1) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        result.push(formatDate(`${d.getFullYear()}-${fillSingleNum(d.getMonth() + 1)}-${fillSingleNum(d.getDate())}`));
    }

    return result;
}

function toggleComplete(num) {
    // set task completed to opposite of itself, identified with dataNum from UI
    taskArray[num].completed = !taskArray[num].completed;
    saveArray();
}

function updateTaskInfo(num, newTitle, newDue) {
    const taskToBeEdited = taskArray[num];
    taskToBeEdited.title = newTitle;
    taskToBeEdited.due = newDue;

    saveArray();
}

function getTasksToday(date = getDateToday()) {
    currentProjTasks = taskArray.filter((task) => task.due === date);
    // show filtered array
    return currentProjTasks;
}

function getWeekTasks(dateRange = getWeek()) {
    let totalTasks = [];
    dateRange.forEach((date) => {
        const dateSelected = date;
        const dayArray = taskArray.filter((task) => task.due === dateSelected);
        totalTasks = totalTasks.concat(dayArray);
    });
    currentProjTasks = totalTasks;
    return currentProjTasks;
}

function numOfTasks() {
    return taskArray.length;
}

function addToArray(task) {
    taskArray.push(task);
    saveArray();
}

function addNewTask(taskName, project) {
    // new instance from task factory
    const newTask = CreateTask(taskName);
    // update dataNum
    newTask.dataNum = taskArray.length;
    newTask.due = getDateToday();
    // update linking project
    newTask.project = project.title;
    // add to task array
    addToArray(newTask);
}

function deleteTask(num) {
    // split array into two, removing affecting element
    const firstHalfArray = taskArray.slice(0, num);
    const secondHalfArray = taskArray.slice(parseInt(num, 10) + 1);
    // update dataNum of remaining tabs
    secondHalfArray.forEach((e) => {
        e.dataNum -= 1;
    });

    // assign array back to original projArray
    taskArray = firstHalfArray.concat(secondHalfArray);
    saveArray();
}

function deleteProjectTasks(num) {
    const projects = storageModule.getProjects();
    const project = projects[num];
    const { title } = project;
    taskArray.forEach((task) => {
        if (task.project === title) {
            deleteTask(task.dataNum);
        }
    });
}

const task = {
    CreateTask,
    addNewTask,
    numOfTasks,
    toggleComplete,
    updateTaskInfo,
    deleteTask,
    getTasksToday,
    getWeekTasks,
    getCurrentProjTasks,
    getTaskArray,
    getDateToday,
    getWeek,
    formatDate,
    deleteProjectTasks,
    setTaskArray,
    setCurrentProjTasks,
};

export default task;
