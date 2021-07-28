import projectModule from './project.js';
import storageModule from './storage.js';
import UIModule from './UI.js'

//FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, completed) => {
    let project;
    let dataNum;
    //change title, flag or date
    function setTitle(title) {
        this.title = title;
    }

    function setDue(due) {
        this.due = due;
    }

    return {title, due, project, completed, dataNum, setTitle, setDue};
};

let taskArray = [];
let currentProjTasks = [];

//check if storage has tasks
if (storageModule.hasTasks()) {
    taskArray = storageModule.getTasks();
    //add to currProjArr
    setCurrentTasks(projectModule.currentProjectSelected());
}

function toggleComplete(num) {
    //set task completed to opposite of itself, identified with dataNum from UIModule
    taskArray[num].completed = !taskArray[num].completed;
    saveArray();
}

function updateTaskInfo(num, newTitle, newDue) {
    const taskToBeEdited = taskArray[num];
    taskToBeEdited.title = newTitle;
    taskToBeEdited.due = newDue;

    saveArray();
}

function showTasksToday(date) {
    currentProjTasks = taskArray.filter(task => task.due == date);
    //show filtered array
    showCurrentTasks();
}

function showWeekTasks(dateRange) {
    let totalTasks = [];
    for (let date of dateRange) {
        let dayArray = taskArray.filter(task => task.due == date);
        totalTasks = totalTasks.concat(dayArray);
    }
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
    currentProjTasks.forEach(task => UIModule.addTaskCell(task.title, task.due, task.completed, task.dataNum));
}

function addToArray(task) {
    taskArray.push(task);
    saveArray();
}

function saveArray() {
    storageModule.addTaskToStorage(taskArray);
}

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    //update dataNum
    newTask.dataNum = taskArray.length;
    newTask.due = UIModule.getDateToday();
    //update linking project
    const projectSelected = projectModule.currentProjectSelected();
    newTask.project = projectSelected.title;
    //add to task array
    addToArray(newTask);
}

function deleteTask(num) {
    //split array into two, removing affecting element
    let firstHalfArray = taskArray.slice(0, num);
    let secondHalfArray = taskArray.slice(parseInt(num) + 1);
    //update dataNum of remaining tabs
    secondHalfArray.forEach(e => e.dataNum -= 1);
    
    //assign array back to original projArray
    let tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

function updateArray(arr) {
    taskArray = arr;
    saveArray();
    //reload all tasks to current project selected
    setCurrentTasks(projectModule.currentProjectSelected());
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
    showWeekTasks
}

export default task;