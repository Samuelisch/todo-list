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
    console.log('default project in storage exist, getting default..')
    projArray = storageModule.getProjects();
    currProj = projArray[0];
    //get more if storage exists
    getMoreProjects();
} else { //else create own project and save to storage
    console.log('no storage exists, creating new and saving..')
    currProj = CreateProject('default');
    currProj.setDataNum(0);
    //save to localStorage under projects
    addToArray(currProj);
}


function getMoreProjects() { //check if there are existing projects in storage
    if (projArray.length > 1) {
        console.log("there's more projects! getting them..")
        const len = projArray.length;
        //go through all stored projects and add them to link
        for (let i = 1; i < len; i++) {
            let proj = projArray[i];
            console.log(proj.dataNum, proj.title);
            UIModule.addProjectLink(proj.title, proj.dataNum);
        }
    }
}

function deleteProj(dataNum) {
    //identify project from projArray using dataNum to match position in array
    //delete that project, and update projects after that - change dataNums to one number lower
}


function addToArray(proj) {
    console.log('adding to array..')
    projArray.push(proj);
    saveArray();
}

function saveArray() {
    console.log('saving proj array to storage..')
    storageModule.addProjToStorage(projArray);
}
//switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
    console.log(`project changed to ${currProj.title}, dataNum: ${currProj.dataNum}`);
}

//ADD PROJECT / save to storage
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = projArray.length;
    addToArray(newProject);
}

const projectModule = {
    CreateProject,
    addNewProject,
    currProj,
    projArray,
    changeProject,
    deleteProj
}

export default projectModule;