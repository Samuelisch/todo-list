import projectModule from './project.js';

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

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    //add to current project via projectModule.currProj
    projectModule.addTask(newTask);
}

function addToProject(task) {
    projectModule.addTask(task);
    console.log(project.taskList);
}

const task = {
    addToProject,
    CreateTask,
    addNewTask,
    taskArray
}

export default task;