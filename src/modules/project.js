import storageModule from './storage.js'
import UIModule from './UI.js'

//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    //initialise project array
    let dataNum;

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {title, setTitle, dataNum, setDataNum};
}

//initial load of webpage - 
let currProj;
let projArray = [];

//check if storage has first element
if (storageModule.hasStorage()) {
    currProj = storageModule.getProject(0);
} else { //else create own project and save to storage
    currProj = CreateProject('default');
    currProj.setDataNum(0);
}
//save to localStorage under projects
updateArray(currProj);

{ //check if there are existing projects in storage
    if (storageModule.numOfProjects() > 1) {
        const len = storageModule.numOfProjects()
        //go through all stored projects and add them to link
        for (let i = 1; i < len; i++) {
            let proj = storageModule.getProject(i);
            UIModule.addProjectLink(proj.title, proj.dataNum);
        }
    }
}

function updateArray(proj) {
    projArray.push(proj);
    storageModule.addProjToStorage(projArray);
}

//switch projects to selected from UI
function changeProject(dataNum) {
    currProj = storageModule.getProject(dataNum);
    console.log(`project changed to ${currProj.title}, dataNum: ${currProj.dataNum}`);
}

//ADD PROJECT / save to storage
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = storageModule.numOfProjects();
    updateArray(newProject);
    console.log(projArray);
}

const projectModule = {
    CreateProject,
    addNewProject,
    currProj,
    projArray,
    changeProject,
}

export default projectModule;