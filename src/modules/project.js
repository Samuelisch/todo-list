import storageModule from './storage.js'
import UIModule from './UI.js'

//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    //initialise project array
    let taskList = [];
    let dataNum;

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    //adds tasks to current projectList
    function addTask(task) {
        taskList.push(task);
    };

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {title, setTitle, taskList, dataNum, addTask, setDataNum};
}

//initial load of webpage - 
let currProj;

//check if storage has first element
if (storageModule.hasStorage('0')) {
    currProj = storageModule.getItem(0);
} else { //else create own project and save to storage
    currProj = CreateProject('default');
    currProj.setDataNum(0);
    storageModule.addProjToStorage(currProj);
}
console.log(localStorage);

{ //check if there are existing projects in storage
    if (storageModule.length() > 1) {
        const len = storageModule.length()
        //go through all stored projects and add them to link
        for (let i = 1; i < len; i++) {
            let proj = storageModule.getItem(i);
            UIModule.addProjectLink(proj.title, proj.dataNum);
        }
    }
}

//switch projects to selected from UI
function changeProject(dataNum) {
    currProj = storageModule.getItem(dataNum);
    console.log(`project changed to ${currProj.title}, dataNum: ${currProj.dataNum}`);
}

//ADD PROJECT / save to storage
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = storageModule.length();
    storageModule.addProjToStorage(newProject);
}

const projectModule = {
    CreateProject,
    addNewProject,
    currProj,
    changeProject
}

export default projectModule;