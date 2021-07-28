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
if (storageModule.hasProjects()) {
    console.log('default project in storage exists, getting default..')
    projArray = storageModule.getProjects();
    currProj = projArray[0];
    //get more if storage exists
    showProjects();
} else { //else create own project and save to storage
    console.log('no storage exists, creating new and saving..')
    currProj = CreateProject('inbox');
    currProj.setDataNum(0);
    //save to localStorage under projects
    addToArray(currProj);
}


function showProjects() { //check if there are existing projects in storage
    if (projArray.length > 1) {
        console.log("there's more projects! getting them..")
        const len = projArray.length;
        //go through all stored projects and add them to link
        for (let i = 1; i < len; i++) {
            let proj = projArray[i];
            console.log(`loaded: datanum ${proj.dataNum}, title ${proj.title}`);
            UIModule.addProjectLink(proj.title, proj.dataNum);
        }
    }
}

function deleteProj(num) {
    //split array into two, removing affecting element
    let firstHalfArray = projArray.slice(0, num);
    let secondHalfArray = projArray.slice(parseInt(num) + 1);
    //update dataNum of remaining tabs
    secondHalfArray.forEach(e => e.dataNum -= 1);
    
    //assign array back to original projArray
    let tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

function updateArray(arr) {
    projArray = arr;
    saveArray();
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

function currentProjectSelected() {
    return currProj;
}

//switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
    console.log(`project changed to ${currProj.title}, dataNum: ${currProj.dataNum}`);
}

function projectExists(projectName) {
    return (projArray.map(project => project.title).includes(projectName));
}

//ADD PROJECT / save to storage
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = projArray.length;
    addToArray(newProject);
}

function numOfProjects() {
    return projArray.length
}

const projectModule = {
    CreateProject,
    addNewProject,
    projectExists,
    changeProject,
    deleteProj,
    numOfProjects,
    currentProjectSelected
}

export default projectModule;