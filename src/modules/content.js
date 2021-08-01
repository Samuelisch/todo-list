import taskModule from './task';
import projectModule from './project';

const dayTab = document.querySelector('.day');
const weekTab = document.querySelector('.week');
const taskForm = document.querySelector('.task-form');
const listItems = document.querySelectorAll('.tab');

function toggleForm(...args) {
    args.forEach((argument) => argument.classList.toggle('display'));
}

function toggleFormFlex(...args) {
    args.forEach((argument) => argument.classList.toggle('display-flex'));
}

function completeTask(task) {
    const t = task;
    t.completed = true;
    const completeIcon = t.querySelector('.complete-icon');
    completeIcon.style.background = 'rgba(81, 192, 81, 0.253)';
    t.style.color = 'rgb(150, 150, 150)';
    t.style.borderColor = 'rgb(150, 150, 150)';
    t.style.textDecoration = 'line-through';
}

function uncompleteTask(task) {
    const t = task;
    t.completed = false;
    const completeIcon = t.querySelector('.complete-icon');
    completeIcon.style.background = 'inherit';
    t.style.color = 'var(--black)';
    t.style.borderColor = 'var(--grey)';
    t.style.textDecoration = 'none';
}

function displayEdit(task) {
    const t = task;
    // show edit form, display off for task info
    const taskInfo = t.querySelector('.info-wrapper');
    const taskTitle = t.querySelector('.task-name');
    const taskDue = t.querySelector('.date');
    const editTitle = t.querySelector('.edit-task-title');
    const editDue = t.querySelector('.edit-task-due');

    editTitle.value = taskTitle.textContent;
    editDue.value = taskDue.textContent;

    toggleFormFlex(taskInfo, taskForm);
}

function resetEdit(task) {
    const t = task;
    // reset form, toggle displayEdit
    t.querySelector('.task-edit-form').reset();

    displayEdit(t);
}

function submitEdit(task) {
    const t = task;
    const taskTitle = t.querySelector('.task-name');
    const taskDue = t.querySelector('.date');
    const editedTitle = t.querySelector('.edit-task-title');
    const editedDue = t.querySelector('.edit-task-due');

    // update task instance in taskModule
    taskModule.updateTaskInfo(t.dataset.num, editedTitle.value, editedDue.value);

    // change task title and date according to form
    taskTitle.textContent = editedTitle.value;
    taskDue.textContent = taskModule.formatDate(editedDue.value);

    resetEdit(task);
}

function showCurrentTasks(arr) {
    arr.forEach((task) => {
        // eslint-disable-next-line no-use-before-define
        addTaskCell(task.title, task.due, task.completed, task.dataNum);
    });
}

function setCurrentTasks(project) {
    const taskArray = taskModule.getTaskArray();
    const tasks = taskArray.filter((task) => task.project === project.title);
    taskModule.setCurrentProjTasks(tasks);
    showCurrentTasks(tasks);
}

function updateArray(project) {
    // reload all tasks to current project selected
    if (project.title === 'today') {
        showCurrentTasks(taskModule.getTasksToday());
        return;
    }
    if (project.title === 'this week') {
        showCurrentTasks(taskModule.getWeekTasks());
        return;
    }
    setCurrentTasks(project);
}

function removeTaskInstance(task) {
    // pass parameter to check if project is under 'today' or 'week'
    const project = projectModule.getCurrentProject();
    // remove from task array
    taskModule.deleteTask(task.dataset.num);
    // check project selected
    updateArray(project);
}

function clearTasks() {
    document.querySelector('.tasks').innerHTML = '';
}

function deleteTask(task) {
    // have to clear tasks and recreate all instances again, as dataNum is spread out
    clearTasks();
    // remove instance and reset list
    removeTaskInstance(task);
}

function createNewTask(taskName) {
    const project = projectModule.getCurrentProject();
    // create instance of task from factory
    taskModule.addNewTask(taskName, project);
}

function addTaskCell(taskName, dueDate, completed, dataNum) {
    const tasks = document.querySelector('.tasks');
    // create div element to wrap both task info and edit info
    const newTask = document.createElement('div');
    newTask.className = 'task';
    // dataset num to identify task instance in proj taskList array
    if (dataNum === undefined) {
        newTask.dataset.num = taskModule.numOfTasks();
    } else {
        newTask.dataset.num = dataNum;
    }

    // create div to hold all taskInfo in flexbox
    const taskInfo = document.createElement('div');
    taskInfo.className = 'info-wrapper display-flex';

    // create icon element - styled to circle - to reflect priority of task
    const completeIcon = document.createElement('div');
    completeIcon.className = 'complete-icon';

    // create span element for task title
    const taskTitle = document.createElement('span');
    taskTitle.className = 'task-name';
    taskTitle.textContent = taskName;

    // create div element to store date - to be changed upon edit
    // create edit form for this too, to select date
    const taskDue = document.createElement('div');
    taskDue.className = 'date';
    taskDue.textContent = dueDate || taskModule.getDateToday();

    // append edit and delete icons to right side of date div.
    const sideIconsWrapper = document.createElement('div');
    sideIconsWrapper.className = 'side-icons-wrapper';
    const editIcon = document.createElement('span');
    editIcon.className = 'edit-icon';
    editIcon.innerHTML = '<i class="far fa-edit"></i>';
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'delete-icon';
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    sideIconsWrapper.appendChild(editIcon);
    sideIconsWrapper.appendChild(deleteIcon);

    // append elements to task div, then append task div to list div
    // MAIN TASK CELL
    taskInfo.appendChild(completeIcon);
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskDue);
    taskInfo.appendChild(sideIconsWrapper);
    newTask.appendChild(taskInfo);

    // check if task is complete according to input parameters
    if (completed) {
        completeTask(newTask);
    }

    // create task edit form
    const taskEditForm = document.createElement('form');
    taskEditForm.className = 'task-edit-form'; // to display flex
    // wrapper for input elements
    const editInputs = document.createElement('div');
    editInputs.className = 'edit-inputs';
    // input elements
    const editTitle = document.createElement('input');
    editTitle.className = 'edit-task-title';
    const editDate = document.createElement('input');
    editDate.className = 'edit-task-due';
    editDate.type = 'text';

    // button wrapper
    const confirmBtns = document.createElement('div');
    confirmBtns.className = 'confirm-edit-buttons';
    // buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.className = 'confirm-edit';
    confirmBtn.type = 'button';
    confirmBtn.textContent = 'Save';
    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'cancel-edit';
    cancelBtn.type = 'button';
    cancelBtn.textContent = 'Cancel';

    // append to form element
    editInputs.appendChild(editTitle);
    editInputs.appendChild(editDate);
    confirmBtns.appendChild(confirmBtn);
    confirmBtns.appendChild(cancelBtn);
    taskEditForm.appendChild(editInputs);
    taskEditForm.appendChild(confirmBtns);

    // append task-edit-form to task element
    newTask.appendChild(taskEditForm);

    // add to DOM
    tasks.appendChild(newTask);

    // event listener for task completion
    completeIcon.addEventListener('click', () => {
        // change task instance in taskModule
        taskModule.toggleComplete(newTask.dataset.num);

        // check if task completed already
        if (completed) {
            uncompleteTask(newTask);
        } else {
            completeTask(newTask);
        }
    });

    // event listeners for side icons
    editIcon.addEventListener('click', () => displayEdit(newTask));
    deleteIcon.addEventListener('click', () => deleteTask(newTask));

    // event listeners for edit form
    confirmBtn.addEventListener('click', () => submitEdit(newTask));
    cancelBtn.addEventListener('click', () => resetEdit(newTask));
    // eventListeners for formatting of date
    editDate.addEventListener('focus', (event) => {
        const e = event;
        e.target.type = 'date';
    });
    editDate.addEventListener('blur', (event) => {
        const e = event;
        e.target.type = 'text';
        if (!editDate.value) {
            editDate.value = taskModule.getDateToday();
        } else {
            const date = editDate.value;
            editDate.value = taskModule.formatDate(date);
        }
    });
}

function clearContent() {
    const tasks = document.querySelector('.tasks');
    tasks.innerHTML = '';
}

function updateContent() {
    setCurrentTasks(projectModule.getCurrentProject());
}

function linkSelected() {
    return document.querySelector('.selected');
}

function removePreviousHighlight() {
    const highlighted = document.querySelector('.selected');
    if (!highlighted) return;
    highlighted.classList.remove('selected');
}

function selectLink(link) {
    removePreviousHighlight();
    // switch to selected link
    link.classList.add('selected');
    // change project currProj to selected link's datanum
    projectModule.changeProject(link.dataset.num);
    // clear previous content of project
    clearContent();
    // update content with currProj's tasks
    updateContent();
}

function sameLink(link) {
    return (linkSelected() === link);
}

function checkLink(e) {
    const link = e.target;
    // check if same link as selected
    if (sameLink(link)) {
        return;
    }

    // if day or week tabs selected
    if (link === dayTab || link === weekTab) {
        removePreviousHighlight();
        clearContent();
        link.classList.add('selected');
        if (link === dayTab) {
            projectModule.changeProject(1);
            // get tasks that coincide with date today
            const tasks = taskModule.getTasksToday(taskModule.getDateToday());
            showCurrentTasks(tasks);
        } else {
            projectModule.changeProject(2);
            // get tasks that coincide with 7 days ahead, including today
            const tasks = taskModule.getWeekTasks(taskModule.getWeek());
            showCurrentTasks(tasks);
        }
        return;
    }
    if (link.classList.contains('fa-trash-alt')) {
        // ignore delete button element
        return;
    }
    selectLink(link);
}

function removeProjectLink(linkToRemove, num) {
    linkToRemove.remove();
    clearContent();
    // update projectArray
    taskModule.deleteProjectTasks(num);
    projectModule.deleteProj(num);
}

function updateProjectNums(dataNum) {
    const remainingProjects = document.querySelectorAll('[data-num]');
    // get array from remaining project nodes
    const projectsArr = Array.from(remainingProjects);
    // filter array to only include projects after deleted project
    const projectsToUpdate = projectsArr.filter((project) => project.dataset.num > dataNum);
    projectsToUpdate.forEach((project) => {
        const p = project;
        p.dataset.num -= 1;
    });
}

function deleteProjectLink(link) {
    const dataNum = link.dataset.num;
    // remove html element
    removeProjectLink(link, dataNum);
    updateProjectNums(dataNum);
}

function cancelForm(element1, element2) {
    element1.reset();
    toggleForm(element1, element2);
}

function projectExists(projectName) {
    const projArray = projectModule.getProjectArray();
    return (projArray.map((project) => project.title).includes(projectName));
}

function createNewProject(projectName) {
    projectModule.addNewProject(projectName);
}

function addProjectLink(projectName, dataNum) {
    const projects = document.querySelector('.projects');

    // create new list element, set dataset link to project(count);
    const newLink = document.createElement('li');
    newLink.className = 'selection project tab';
    if (dataNum === undefined) {
        newLink.dataset.num = projectModule.numOfProjects();
    } else {
        newLink.dataset.num = dataNum;
    }

    // create icon
    const leftWrapper = document.createElement('div');
    leftWrapper.className = 'project-info';
    const icon = document.createElement('i');
    icon.className = 'far fa-list-alt';
    // create default project name
    const projTitle = document.createElement('span');
    projTitle.className = 'project-title';
    projTitle.textContent = projectName;
    // create delete button - to be shown only on hover
    const deleteIcon = document.createElement('div');
    deleteIcon.innerHTML = '<i class="far fa-trash-alt"></i>';
    deleteIcon.className = 'project-delete';

    // append children to link
    leftWrapper.appendChild(icon);
    leftWrapper.appendChild(projTitle);
    newLink.appendChild(leftWrapper);
    newLink.appendChild(deleteIcon);

    // append link to project
    projects.appendChild(newLink);

    newLink.addEventListener('click', checkLink);
    deleteIcon.addEventListener('click', () => deleteProjectLink(newLink));
}

// event listener for clicks on project tabs
listItems.forEach((item) => item.addEventListener('click', checkLink));

const contentModule = {
    addTaskCell,
    addProjectLink,
    projectExists,
    cancelForm,
    createNewTask,
    createNewProject,
    toggleForm,
    toggleFormFlex,
    checkLink,
    setCurrentTasks,
};

export default contentModule;
