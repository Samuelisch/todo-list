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
    const addProj = document.querySelector('.add-project-btn');

    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    //initial load of default links
    updatePageBehaviour();

    //event listeners for navBtn and add project btn
    navBtn.addEventListener('click', dropdownMenu);
    addProj.addEventListener('click', projectModule.addNewProject);
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