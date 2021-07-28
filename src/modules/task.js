import projectModule from './project.js';
import storageModule from './storage.js';

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

//check if storage has tasks
if (storageModule.hasTasks()) {
    console.log('tasks in storage exist, getting tasks..')
    taskArray = storageModule.getTasks();
    //add to currProjArr
    currentTasks();
}

function currentTasks() {
    const project = projectModule.currProj;
    
}

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    //update linking project
    newTask.project = projectModule.currProj.title;
    //add to task array
    taskArray.push(newTask);
}

const task = {
    CreateTask,
    addNewTask,
    taskArray
}

export default task;