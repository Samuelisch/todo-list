import projectModule from './project';
import storageModule from './storage';
import UIModule from './UI';

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

// check if storage has tasks
if (storageModule.hasTasks()) {
    taskArray = storageModule.getTasks();
    // add to currProjArr
    setCurrentTasks(projectModule.currentProjectSelected());
}

function toggleComplete(num) {
    // set task completed to opposite of itself, identified with dataNum from UIModule
    taskArray[num].completed = !taskArray[num].completed;
    saveArray();
}

function updateTaskInfo(num, newTitle, newDue) {
    const taskToBeEdited = taskArray[num];
    taskToBeEdited.title = newTitle;
    taskToBeEdited.due = newDue;

    saveArray();
}

function showTasksToday(date = UIModule.getDateToday()) {
    currentProjTasks = taskArray.filter((task) => task.due === date);
    // show filtered array
    showCurrentTasks();
}

function showWeekTasks(dateRange = UIModule.getWeek()) {
    let totalTasks = [];
    dateRange.forEach((date) => {
        const dateSelected = date;
        const dayArray = taskArray.filter((task) => task.due === dateSelected);
        totalTasks = totalTasks.concat(dayArray);
    });
    currentProjTasks = totalTasks;
    showCurrentTasks();
}

function setCurrentTasks(project) {
    currentProjTasks = taskArray.filter(task => task.project == project.title);
    showCurrentTasks();
}

function numOfTasks() {
    return taskArray.length;
}

function showCurrentTasks() {
    currentProjTasks.forEach((task) => {
        UIModule.addTaskCell(task.title, task.due, task.completed, task.dataNum)
    });
}

function addToArray(task) {
    taskArray.push(task);
    saveArray();
}

function saveArray() {
    storageModule.addTaskToStorage(taskArray);
}

function addNewTask(taskName) {
    // new instance from task factory
    const newTask = CreateTask(taskName);
    // update dataNum
    newTask.dataNum = taskArray.length;
    newTask.due = UIModule.getDateToday();
    // update linking project
    const projectSelected = projectModule.currentProjectSelected();
    newTask.project = projectSelected.title;
    // add to task array
    addToArray(newTask);
}

function removeandUpdateArray(num) {
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

function deleteTask(num) {
    removeandUpdateArray(num);
    updateArray();
}

function updateArray() {
    // reload all tasks to current project selected
    if (projectModule.currentProjectSelected().title === 'today') {
        showTasksToday();
        return;
    }
    if (projectModule.currentProjectSelected().title === 'this week') {
        showWeekTasks();
        return;
    }
    setCurrentTasks(projectModule.currentProjectSelected());
}

function deleteProjectTasks(title) {
    taskArray.forEach((task) => {
        if (task.project === title) {
            removeandUpdateArray(task.dataNum);
        }
    });
}

const task = {
    CreateTask,
    addNewTask,
    setCurrentTasks,
    numOfTasks,
    toggleComplete,
    updateTaskInfo,
    deleteTask,
    showTasksToday,
    showWeekTasks,
    deleteProjectTasks
};

export default task;