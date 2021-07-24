import UI from './UI';

//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title='default') => {
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

//ADD PROJECT
function addNewProject(name) {
    const newProject = CreateProject(name);
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
    UI.updatePageBehaviour();
}

const projectModule = {
    CreateProject,
    addNewProject
}

export default projectModule;