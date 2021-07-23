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
//IIFE to load initial template for page
(() => {
    const header = document.createElement('header');
    header.innerHTML = `
        <div id="header-bar">
            <h2>Taskanator</h2>
            <button class="nav-btn"><i class="fas fa-bars fa-2x"></i></button>
        </div>
        <div class="nav-bar">
            <div class="wrapper">
                <ul class="list">
                    <li data-link="total" class="selection tab selected">
                        <i class="fas fa-globe-americas"></i>
                        <span>All tasks</span>
                    </li>
                    <li data-link="today" class="selection tab">
                        <i class="fas fa-calendar-day"></i>
                        <span>Today</span>
                    </li>
                    <li data-link="week" class="selection tab">
                        <i class="fas fa-calendar-week"></i>
                        <span>This week</span>
                    </li>
                </ul>
                <h3>Projects</h3>
                <ul class="list projects">
                </ul>
                <div class="selection add-project-btn">
                        <i class="fas fa-plus fa-lg"></i>
                        <span>Add project</span>
                </div>
            </div>
        </div>
    `

    body.appendChild(header);
})();

function addNewProject(name) {
    const projects = document.querySelector('.projects');
    const projectTab = document.querySelectorAll('.project');

    //find out how many projects there are currently
    const projectCount = () => {
        return Array.from(projectTab).length;
    }
    //create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = "selection project tab";
    newLink.dataset.link = `${projectCount()}`;
    //create icon
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    //create default project name
    const projTitle = document.createElement('span');
    projTitle.textContent = `Project ${projectCount() + 1}`;
    
    //append children to link
    newLink.appendChild(icon);
    newLink.appendChild(projTitle);

    //append link to project
    projects.appendChild(newLink);

    //update site behaviour
    addSiteBehaviour();
}

//IIFE for eventlisteners for dropdown menu, and its behaviour
function addSiteBehaviour() {
    const navBtn = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav-bar');
    const listItems = document.querySelectorAll('.tab');
    const childItems = document.querySelectorAll('.tab > *');
    const addProj = document.querySelector('.add-project-btn');

    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function selectLink(e) {
        let link = e.target
        //if selected any child elements, revert to parent element
        if (Array.from(childItems).includes(link)) {
            link = link.parentElement;
        }
       //check if any links are currently selected
       if (linkSelected()) {
            if (linkSelected() == link) {
                return;
            }
           linkSelected().classList.remove('selected');
       }
       link.classList.add('selected');
    }

    function linkSelected() {
        //initialise output as false
        let output = false;
        listItems.forEach(item => {
            if (item.classList.contains('selected')) {
                //if item found, change output to item
                output = item;
            }
        });
        return output;
    }

    //event listeners for navBtn, clicks on menu
    navBtn.addEventListener('click', dropdownMenu);
    listItems.forEach(item => item.addEventListener('click', selectLink));
    addProj.addEventListener('click', addNewProject);
};

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

addSiteBehaviour();