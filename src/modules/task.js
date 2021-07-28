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
    console.log('tasks in storage exist, getting tasks..')
    taskArray = storageModule.getTasks();
    //add to currProjArr
    setCurrentTasks(projectModule.currentProjectSelected());
}

function setCurrentTasks(project) {
    currentProjTasks = taskArray.filter(task => task.project == project.title);
    showCurrentTasks();
}

function showCurrentTasks() {
    currentProjTasks.forEach(task => UIModule.addTaskCell(task.title, task.due, task.completed));
}

function addToArray(task) {
    console.log('adding to task array..');
    taskArray.push(task);
    saveArray();
}

function saveArray() {
    console.log('saving task array to storage..')
    storageModule.addTaskToStorage(taskArray);
}

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    //update linking project
    const projectSelected = projectModule.currentProjectSelected();
    newTask.project = projectSelected.title;
    //add to task array
    addToArray(newTask);
}

const task = {
    CreateTask,
    addNewTask,
    setCurrentTasks
}

export default task;