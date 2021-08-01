/* eslint-disable no-alert */
/* eslint-disable prefer-destructuring */
import contentModule from './content';
import taskModule from './task';
import projectModule from './project';
import storageModule from './storage';

// PAGE BEHAVIOUR
const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav-bar');
const projectForm = document.querySelector('.project-form');
const taskForm = document.querySelector('.task-form');
const addProjBtn = document.querySelector('.add-project-btn');
const addTaskBtn = document.querySelector('.add-task-btn');
const addProjBtnSubmit = document.querySelector('.project-submit-btn');
const addTaskBtnSubmit = document.querySelector('.task-submit-btn');
const projectBtnCancel = document.querySelector('.project-cancel-btn');
const taskBtnCancel = document.querySelector('.task-cancel-btn');

(() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm(e) {
        e.preventDefault();
        // get title of project from form
        const title = document.querySelector('.project-form input').value;
        if (!title) {
            alert('Input required');
            return;
        }
        if (contentModule.projectExists(title)) {
            alert('Project already exists!');
            return;
        }
        // add DOM elements
        contentModule.addProjectLink(title);
        // create new project instance
        contentModule.createNewProject(title);
        // cancel form display / reset
        contentModule.cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm(e) {
        e.preventDefault();
        // get title of task from form
        const title = document.querySelector('.task-form input').value;
        if (!title) {
            alert('Input required');
            return;
        }
        // add DOM elements
        contentModule.addTaskCell(title);
        // create new task instance
        contentModule.createNewTask(title);
        // cancel form display / reset
        contentModule.cancelForm(taskForm, addTaskBtn);
    }

    // event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    // passes function to wait for event before calling toggleForms
    addProjBtn.addEventListener('click', () => contentModule.toggleForm(projectForm, addProjBtn));
    addTaskBtn.addEventListener('click', () => contentModule.toggleForm(taskForm, addTaskBtn));
    projectBtnCancel.addEventListener('click', () => contentModule.cancelForm(projectForm, addProjBtn));
    taskBtnCancel.addEventListener('click', () => contentModule.cancelForm(taskForm, addTaskBtn));
    addProjBtnSubmit.addEventListener('click', submitProjectForm);
    addTaskBtnSubmit.addEventListener('click', submitTaskForm);
})();

function showProjects(arr) { // check if there are existing projects in storage
    const len = arr.length;
    // go through all stored projects and add them to link
    for (let i = 3; i < len; i += 1) {
        const proj = arr[i];
        // show project on initial load
        contentModule.addProjectLink(proj.title, proj.dataNum);
    }
}

// check if storage has first element
if (storageModule.hasProjects()) {
    const projArr = storageModule.getProjects();
    projectModule.setProjectArray(projArr);
    projectModule.setCurrentProject(projArr[0]);

    // check if more than default 3 projects in storage
    if (projArr.length > 3) {
        showProjects(projArr);
    }
} else {
    // else create own project and save to storage
    const proj = projectModule.CreateProject('inbox');
    proj.setDataNum(0);
    projectModule.setCurrentProject(proj);

    // save to localStorage under projects
    projectModule.addToArray(proj);

    // create project instances for other tabs - today and this week
    const dayProj = projectModule.CreateProject('today');
    dayProj.setDataNum(1);
    projectModule.addToArray(dayProj);

    const weekProj = projectModule.CreateProject('this week');
    weekProj.setDataNum(2);
    projectModule.addToArray(weekProj);
}

// check if storage has tasks
if (storageModule.hasTasks()) {
    const project = projectModule.getCurrentProject();
    const taskArray = storageModule.getTasks();
    taskModule.setTaskArray(taskArray);
    // add to currProjArr
    contentModule.setCurrentTasks(project);
}
