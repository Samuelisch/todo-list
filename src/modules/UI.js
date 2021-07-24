import projectModule from './project.js'

//PAGE BEHAVIOUR
const updatePageBehaviour = () => {
    const listItems = document.querySelectorAll('.tab');
    const childItems = document.querySelectorAll('.tab > *');

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

    //event listener for clicks on project tabs
    listItems.forEach(item => item.addEventListener('click', selectLink));
}

const staticPageBehaviour = () => {
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
        projectModule.addNewProject(title);
    }

    function submitTaskForm() {
        //get title of task from form
        const title = document.querySelector('.task-form input').value;
        if (!title) {
            alert("Input required");
            return;
        }
        console.log(title);
    }

    //initial load of default links
    updatePageBehaviour();

    //event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    //passes function to wait for event before calling toggleForms
    addProjBtn.addEventListener('click', () => toggleForm(projectForm, addProjBtn));
    addTaskBtn.addEventListener('click', () => toggleForm(taskForm, addTaskBtn));
    projectBtnCancel.addEventListener('click', () => cancelForm(projectForm, addProjBtn));
    taskBtnCancel.addEventListener('click', () => cancelForm(taskForm, addTaskBtn));
    addProjBtnSubmit.addEventListener('click', submitProjectForm);
    addTaskBtnSubmit.addEventListener('click', submitTaskForm);
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
    projTitle.textContent = projectName;
    
    //append children to link
    newLink.appendChild(icon);
    newLink.appendChild(projTitle);

    //append link to project
    projects.appendChild(newLink);

    //update site behaviour
    UI.updatePageBehaviour();
}

const UI = {
    updatePageBehaviour,
    addProjectLink,
    staticPageBehaviour
};

export default UI;