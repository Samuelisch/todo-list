import taskModule from './task.js';
import projectModule from './project.js';

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
const dayTab = document.querySelector('.day');
const weekTab = document.querySelector('.week');

const pageFunctions = (() => {
    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function submitProjectForm(e) {
        e.preventDefault();
        //get title of project from form
        const title = document.querySelector('.project-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        if (projectModule.projectExists(title)) {
            alert("Project already exists!")
            return;
        }
        //add DOM elements
        addProjectLink(title);
        //create instance of project from factory
        projectModule.addNewProject(title);
        cancelForm(projectForm, addProjBtn);
    }

    function submitTaskForm(e) {
        e.preventDefault();
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

    function checkLink(e) {
        let link = e.target;
        if (link == dayTab || link == weekTab) {
            console.log(link);
            return;
        }
        if (link.classList.contains('fa-trash-alt')) {
            //ignore delete button element
            return;
        }
        selectLink(link);
    }

    function selectLink(link) {
        //check if any links are currently selected
        if (linkSelected() == link) {
            console.log('same link');
            return;
        }
        removePreviousHighlight();
        //switch to selected link
        link.classList.add('selected');
        //change project currProj to selected link's datanum
        projectModule.changeProject(link.dataset.num);
        //clear previous content of project
        clearContent();
        //update content with currProj's tasks
        updateContent();
    }

    function linkSelected() {
        return document.querySelector('.selected');
    }

    function removePreviousHighlight() {
        const highlighted = document.querySelector('.selected');
        if (!highlighted) return;
        highlighted.classList.remove('selected');
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
    listItems.forEach(item => item.addEventListener('click', checkLink));

    return {checkLink, linkSelected};
})();

function clearContent() {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
}

function updateContent() {
    taskModule.setCurrentTasks(projectModule.currentProjectSelected());
}

function toggleForm(...args) {
    args.forEach(args => args.classList.toggle('display'));
}

function toggleFormFlex(...args) {
    args.forEach(args => args.classList.toggle('display-flex'));
}

function cancelForm(element1, element2) {
    element1.reset();
    toggleForm(element1, element2);
}

function formatDate(date) {
    return date
            .split('-')
            .reverse()
            .join('/');
}

const addProjectLink = (projectName, dataNum = projectModule.numOfProjects()) => {
    const projects = document.querySelector('.projects');

    //create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = "selection project tab";
    newLink.dataset.num = dataNum;
    //create icon
    const leftWrapper = document.createElement('div');
    leftWrapper.className = 'project-info'
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    //create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    //create delete button - to be shown only on hover
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>'
    deleteIcon.className = 'project-delete';
    
    //append children to link
    leftWrapper.appendChild(icon);
    leftWrapper.appendChild(projTitle);
    newLink.appendChild(leftWrapper);
    newLink.appendChild(deleteIcon);

    //append link to project
    projects.appendChild(newLink);

    newLink.addEventListener('click', pageFunctions.checkLink);

    deleteIcon.addEventListener('click', () => deleteProjectLink(newLink));
}

const removeProjectLink = (linkToRemove, num) => {
    linkToRemove.remove();
    clearContent();
    //update projectArray
    projectModule.deleteProj(num);
}

const updateProjectNums= (dataNum) => {
    const remainingProjects = document.querySelectorAll("[data-num]");
    //get array from remaining project nodes
    let projectsArr = Array.from(remainingProjects);
    //filter array to only include projects after deleted project
    let projectsToUpdate = projectsArr.filter(project => project.dataset.num > dataNum);
    for (let project of projectsToUpdate) {
        //iterate through each project
        //update their data-num
        project.dataset.num -= 1;
        //update projectArray and save to localStorage
    }
}

const deleteProjectLink = (link) => {
    const dataNum = link.dataset.num;
    //remove html element
    removeProjectLink(link, dataNum);
    updateProjectNums(dataNum);
}

const addTaskCell = (taskName, dueDate, completed, dataNum = taskModule.numOfTasks()) => {
    function getDateToday() {
        const date = new Date();
        return formatDate(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
    }

    const tasks = document.querySelector('.tasks');
    //create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    newTask.dataset.num = dataNum; //dataset num to identify task instance in project - taskList array
    
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
    taskDue.textContent = dueDate || getDateToday()

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
    editDate.type = 'text';
    
    //button wrapper
    const confirmBtns = document.createElement('div');
    confirmBtns.className = 'confirm-edit-buttons';
    //buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-edit';
    confirmBtn.type = 'button';
    confirmBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-edit';
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

    //event listener for task completion
    completeIcon.addEventListener('click', () => {
        //change task instance in taskModule
        taskModule.toggleComplete(newTask.dataset.num);

        //check if task completed already
        if (completed) {
            completed = false;
            editTask.uncompleteTask(newTask);
        } else {
            completed = true;
            editTask.completeTask(newTask);
        }
    });

    //event listeners for side icons
    editIcon.addEventListener('click', () => editTask.displayEdit(newTask));
    deleteIcon.addEventListener('click', () => editTask.deleteTask(newTask));

    //event listeners for edit form
    confirmBtn.addEventListener('click', () => editTask.submitEdit(newTask));
    cancelBtn.addEventListener('click', () => editTask.resetEdit(newTask));
    //eventListeners for formatting of date
    editDate.addEventListener('focus', (event) => {
        event.target.type = "date";
    });
    editDate.addEventListener('blur', (event) => {
        event.target.type = "text";
        if (!editDate.value) {
            editDate.value = getDateToday();
        } else {
            let date = editDate.value;
            editDate.value = formatDate(date);
        }
    });
}

const editTask = (() => {
    function completeTask(task) {
        const completeIcon = task.querySelector('.complete-icon');
        completeIcon.style.background = 'rgba(81, 192, 81, 0.253)';
        task.style.color = 'rgb(150, 150, 150)';
        task.style.borderColor = 'rgb(150, 150, 150)';
        task.style.textDecoration = 'line-through';
    }

    function uncompleteTask(task) {
        const completeIcon = task.querySelector('.complete-icon');
        completeIcon.style.background = 'inherit';
        task.style.color = 'var(--black)';
        task.style.borderColor = 'var(--grey)';
        task.style.textDecoration = 'none';
    }

    function displayEdit(task) {
        //show edit form, display off for task info
        const taskInfo = task.querySelector('.info-wrapper');
        const taskForm = task.querySelector('.task-edit-form');
        const taskTitle = task.querySelector('.task-name');
        const taskDue = task.querySelector('.date');
        const editTitle = task.querySelector('.edit-task-title');
        const editDue = task.querySelector('.edit-task-due');

        editTitle.value = taskTitle.textContent;
        editDue.value = taskDue.textContent;
    
        toggleFormFlex(taskInfo, taskForm);
    }

    function resetEdit(task) {
        //reset form, toggle displayEdit
        task.querySelector('.task-edit-form').reset();

        displayEdit(task);
    }

    function submitEdit(task) {
        const taskTitle = task.querySelector('.task-name');
        const taskDue = task.querySelector('.date');
        const editedTitle = task.querySelector('.edit-task-title');
        const editedDue = task.querySelector('.edit-task-due');

        //update task instance in taskModule
        taskModule.updateTaskInfo(task.dataset.num, editedTitle.value, editedDue.value);

        //change task title and date according to form
        taskTitle.textContent = editedTitle.value;
        taskDue.textContent = formatDate(editedDue.value);

        resetEdit(task);
    }

    function deleteTask(task) {
        //have to clear tasks and recreate all instances again, as dataNum is spread out
        clearTasks();
        //remove instance and reset list
        removeTaskInstance(task);
    }

    function removeTaskInstance(task) {
        //remove from task array
        taskModule.deleteTask(task.dataset.num);
    }

    function clearTasks() {
        document.querySelector('.tasks').innerHTML = '';
    }

    return {displayEdit, resetEdit, submitEdit, completeTask, uncompleteTask, deleteTask}
})();

const UI = {
    addProjectLink,
    addTaskCell
};

export default UI;