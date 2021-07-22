//projects - holds their own lists of todos and dues, function factory
/*
What is in a project?
When application first opens, will open to 'default project', or user's default list
Contains own list of todos
Each project - in the sidebar/dropdown menu?
Has it's own tite to be displayed and can be selected
*/

//todos - cells for tasks due - function factory
/*
In To-do - what can we do in the cell?
Complete task - left
Display title & Display due date
Edit task
Cancel Task
View task comment / details / description
*/

//localStorage - stores all projects and in those projects, all todos

import './style.css';

//create and load page outline and navbar
const body = document.querySelector('body');
const header = document.createElement('header');
header.innerHTML = `
    <div id="header-bar">
        <h2>Taskanator</h2>
        <button class="nav-btn"><i class="fas fa-bars fa-2x"></i></button>
    </div>
    <div class="nav-bar">
        <div class="wrapper">
            <ul class="list">
                <li data-link="total">
                    <i class="fas fa-globe-americas"></i>
                    <span>All tasks</span>
                </li>
                <li data-link="today">
                    <i class="fas fa-calendar-day"></i>
                    <span>Today</span>
                </li>
                <li data-link="week">
                    <i class="fas fa-calendar-week"></i>
                    <span>This week</span>
                </li>
            </ul>
            <h3>Projects</h3>
            <ul class="list projects">
            <!-- <i class="far fa-list-alt"></i> --> FOR FUTURE USE
            </ul>
        </div>
    </div>
`

body.appendChild(header);

const navBtn = document.querySelector('.nav-btn');
const nav = document.querySelector('.nav-bar');

function dropdownMenu() {
    nav.classList.toggle('display');
}

navBtn.addEventListener('click', dropdownMenu);


//Factory function for tasks
const CreateTask = (title = 'New task', due = 'Today', flag = '') => {
    //change title, flag or date
    function setTitle(title) {
        this.title = title;
    }

    function setDue(due) {
        this.due = due;
    }

    function setFlag(color) {
        this.flag = color;
    }

    return {title, due, flag, setTitle, setDue, setFlag};
};

//store tasks into an array - a list of tasks - project
//create Project factory function
const CreateProject = (title = 'default') => {
    //initialise project array
    let taskList = [];

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    //adds tasks to current projectList
    function addTask(task) {
        taskList.push(task);
    };

    return {title, setTitle, taskList, addTask};
}

//tester for creation of tasks from webpage
const form = document.createElement('form');
const taskBox = document.createElement('input');
taskBox.placeholder = 'Task';
const dueBox = document.createElement('input');
dueBox.placeholder = 'Due date'
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Submit';
button.addEventListener('click', clickHandler);

form.appendChild(taskBox);
form.appendChild(dueBox);
form.appendChild(button);
body.appendChild(form);

//check if localStorage has items
function hasStorage() {
    return localStorage.getItem('default');
}

//initialise project for current page
const defaultProject = CreateProject();
//add stored tasks to project and display to html if exists
if (hasStorage()) {
    const project = JSON.parse(localStorage.default);
    const len = project.taskList.length;
    for (let i = 0; i < len; i++) {
        defaultProject.addTask(project.taskList[i]);
        addToHtml(project.taskList[i]);
    }
}
let project = defaultProject; // flag for project selected

function clickHandler(e) {
    e.preventDefault();
    //create task and add to project
    const task = CreateTask(taskBox.value, dueBox.value);
    addToProject(task);
    addToLocalStorage();
    //create HTML elements and append to body
    addToHtml(task);
}

function addToProject(task) {
    project.addTask(task);
    console.log(project.taskList);
}

function addToLocalStorage() {
    localStorage.setItem(project.title, JSON.stringify(project));
}

function addToHtml(task) {
    const cell = document.createElement('div');
    cell.className = 'cell'
    cell.innerHTML = `
        Task: ${task.title}, Due: ${task.due}
    `;
    body.appendChild(cell);
}