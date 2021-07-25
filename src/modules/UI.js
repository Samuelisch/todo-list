import projectModule from './project.js';
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

    function toggleForm(form, formBtn) {
        form.classList.toggle('display');
        formBtn.classList.toggle('display');
    }

    function cancelForm(form, formBtn) {
        form.reset();
        toggleForm(form, formBtn);
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
    
    //create div to hold all taskInfo in flexbox
    const taskInfo = document.createElement('div');
    taskInfo.className = 'info';
    //create icon element - styled to circle - to reflect priority of task
    const icon = document.createElement('div');
    icon.className = 'icon';

    //wrapper for title display and edit input box
    const titleWrapper = document.createElement('div'); //wrap edit form and display title to this
    //create span element for task title
    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-name';
    taskTitle.textContent = taskName;
    //title edit input
    const titleEdit = document.createElement('input'); //create styling
    titleEdit.className = 'name-edit';
    titleEdit.value = taskName;
    const saveBtn = document.createElement('button'); //create styling
    saveBtn.type = 'button';
    saveBtn.className = 'edit-save';

    //create div element to store date - to be change upon edit
    //create edit form for this too, to select date
    const taskDue = document.createElement('div');
    taskDue.className = 'date';
    taskDue.textContent = 'No date';


    //append elements to task div, then append task div to list div
    //MAIN TASK CELL
    taskInfo.appendChild(icon);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDue);
    newTask.appendChild(taskInfo);

    //add to DOM
    tasks.appendChild(newTask);

    //add own event listeners?
    //icon.addEventListener('click', completeTask);
}

const UI = {
    pageFunctions,
    addProjectLink,
    addTaskCell,
};

export default UI;