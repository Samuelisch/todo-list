import projectModule from './project.js';

//FACTORY FUNCTION FOR TASKS
const CreateTask = (title, due, project, completed) => {
    //change title, flag or date
    function setTitle(title) {
        this.title = title;
    }

    function setDue(due) {
        this.due = due;
    }

    function setComplete(bool) {
        this.completed = bool
    }

    return {title, due, project, completed, setTitle, setDue, setFlag};
};

function addNewTask(taskName) {
    //new instance from task factory
    const newTask = CreateTask(taskName);
    console.log(newTask);
    //add to current project page?
}

function addToProject(task) {
    projectModule.addTask(task);
    console.log(project.taskList);
}

const task = {
    addToProject,
    CreateTask,
    addNewTask
}

export default task;