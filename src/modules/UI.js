import projectModule from './project.js';
import task from './task.js';
import taskModule from './task.js';

//PAGE BEHAVIOUR
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
let listItems = document.querySelectorAll('.tab');
let childItems = document.querySelectorAll('.tab > *');

const pageFunctions = (() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm() {
        //get title of project from form
        const title = document.querySelector('.project-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        //add DOM elements
        addProjectLink(title);
        //create instance of project from factory
        projectModule.addNewProject(title);
        cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm() {
        //get title of task from form
        const title = document.querySelector('.task-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        //add DOM elements
        addTaskCell(title);
        //create instance of task from factory
        taskModule.addNewTask(title);
        cancelForm(taskForm, addTaskBtn);
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

    //event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    //passes function to wait for event before calling toggleForms
    addProjBtn.addEventListener('click', () => toggleForm(projectForm, addProjBtn));
    addTaskBtn.addEventListener('click', () => toggleForm(taskForm, addTaskBtn));
    projectBtnCancel.addEventListener('click', () => cancelForm(projectForm, addProjBtn));
    taskBtnCancel.addEventListener('click', () => cancelForm(taskForm, addTaskBtn));
    addProjBtnSubmit.addEventListener('click', submitProjectForm);
    addTaskBtnSubmit.addEventListener('click', submitTaskForm);
    //event listener for clicks on project tabs
    listItems.forEach(item => item.addEventListener('click', selectLink));

    return {selectLink, linkSelected};
})();

function toggleForm(element1, element2) {
    element1.classList.toggle('display');
    element2.classList.toggle('display');
}

function toggleFormFlex(element1, element2) {
    console.log(element1.classList);
    console.log(element2.classList);
}

function cancelForm(element1, element2) {
    element1.reset();
    toggleForm(element1, element2);
}

const addProjectLink = (projectName) => {
    const projects = document.querySelector('.projects');

    //create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = "selection project tab";
    newLink.dataset.link = projectName;
    //create icon
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    //create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    
    //append children to link
    newLink.appendChild(icon);
    newLink.appendChild(projTitle);

    //append link to project
    projects.appendChild(newLink);

    //add event listener and update list of  and list of child items
    listItems = document.querySelectorAll('.tab');
    childItems = document.querySelectorAll('.tab > *');

    newLink.addEventListener('click', pageFunctions.selectLink);
}

const addTaskCell = (taskName) => {
    const tasks = document.querySelector('.tasks');
    //create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.dataset.num = 0; //dataset num to identify task instance in project - taskList array
    
    //create div to hold all taskInfo in flexbox
    const taskInfo = document.createElement('div');
    taskInfo.className = 'info-wrapper display-flex';

    //create icon element - styled to circle - to reflect priority of task
    const completeIcon = document.createElement('div');
    completeIcon.className = 'complete-icon';

    //create span element for task title
    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-name';
    taskTitle.textContent = taskName;

    //create div element to store date - to be changed upon edit
    //create edit form for this too, to select date
    const taskDue = document.createElement('div');
    taskDue.className = 'date';
    taskDue.textContent = 'No date';

    //append edit and delete icons to right side of date div.
    const sideIconsWrapper = document.createElement('div');
    sideIconsWrapper.className = 'side-icons-wrapper'
    const editIcon = document.createElement('span');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '<i class="far fa-edit"></i>';
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    sideIconsWrapper.appendChild(editIcon);
    sideIconsWrapper.appendChild(deleteIcon);

    //append elements to task div, then append task div to list div
    //MAIN TASK CELL
    taskInfo.appendChild(completeIcon);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDue);
    taskInfo.appendChild(sideIconsWrapper);
    newTask.appendChild(taskInfo);

    //create task edit form
    const taskEditForm = document.createElement('form');
    taskEditForm.className = 'task-edit-form'; //to display flex
    //wrapper for input elements
    const editInputs = document.createElement('div');
    editInputs.className = 'edit-inputs';
    //input elements
    const editTitle = document.createElement('input');
    editTitle.className = 'edit-task-title';
    const editDate = document.createElement('input');
    editDate.className = 'edit-task-due';
    editDate.type = 'date';
    //button wrapper
    const confirmBtns = document.createElement('div');
    confirmBtns.className = 'confirm-edit-buttons';
    //buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.class = 'confirm-edit';
    confirmBtn.type = 'button';
    confirmBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
    cancelBtn.class = 'cancel-edit';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    //append to form element
    editInputs.appendChild(editTitle);
    editInputs.appendChild(editDate);
    confirmBtns.appendChild(confirmBtn);
    confirmBtns.appendChild(cancelBtn);
    taskEditForm.appendChild(editInputs);
    taskEditForm.appendChild(confirmBtns);


    //append task-edit-form to task element
    newTask.appendChild(taskEditForm);

    //add to DOM
    tasks.appendChild(newTask);

    //event listener for edit icon
    editIcon.addEventListener('click', () => editTask(newTask));
    deleteIcon.addEventListener('click', () => console.log('deleting this task'));

    //icon.addEventListener('click', completeTask);
}

function editTask(task) {
    //show edit form, display off for task info
    const taskInfo = task.querySelector('.info-wrapper');
    const taskForm = task.querySelector('.task-edit-form');

    toggleFormFlex(taskInfo, taskForm);
}

const UI = {
    pageFunctions,
    addProjectLink,
    addTaskCell
};

export default UI;