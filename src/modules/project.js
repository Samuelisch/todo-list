/* eslint-disable prefer-destructuring */
import storageModule from './storage';
import UIModule from './UI';
import taskModule from './task';

// FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    // initialise project array
    let dataNum;

    // function to set title
    function setTitle(t) {
        this.title = t;
    }

    function setDataNum(num) {
        this.dataNum = num;
    }

    return {
        title, setTitle, dataNum, setDataNum,
    };
};

// initial load of webpage
let currProj;
let projArray = [];

// check if storage has first element
if (storageModule.hasProjects()) {
    projArray = storageModule.getProjects();
    currProj = projArray[0];
    // get more if storage exists
    showProjects();
} else { // else create own project and save to storage
    currProj = CreateProject('inbox');
    currProj.setDataNum(0);
    // save to localStorage under projects
    addToArray(currProj);

    const dayProj = CreateProject('today');
    dayProj.setDataNum(1);
    addToArray(dayProj);

    const weekProj = CreateProject('this week');
    weekProj.setDataNum(2);
    addToArray(weekProj);
}

function showProjects() { // check if there are existing projects in storage
    if (projArray.length > 3) {
        const len = projArray.length;
        // go through all stored projects and add them to link
        for (let i = 3; i < len; i += 1) {
            const proj = projArray[i];
            UIModule.addProjectLink(proj.title, proj.dataNum);
        }
    }
}

function deleteProj(num) {
    const project = projArray[num];
    // delete all tasks in project
    taskModule.deleteProjectTasks(project.title);
    // split array into two, removing affecting element
    const firstHalfArray = projArray.slice(0, num);
    const secondHalfArray = projArray.slice(parseInt(num, 10) + 1);
    // update dataNum of remaining tabs
    secondHalfArray.forEach((e) => {
        e.dataNum -= 1;
    });

    // assign array back to original projArray
    const tempArray = firstHalfArray.concat(secondHalfArray);
    updateArray(tempArray);
}

function updateArray(arr) {
    projArray = arr;
    saveArray();
}

function addToArray(proj) {
    projArray.push(proj);
    saveArray();
}

function saveArray() {
    storageModule.addProjToStorage(projArray);
}

function currentProjectSelected() {
    return currProj;
}

// switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
}

function projectExists(projectName) {
    return (projArray.map((project) => project.title).includes(projectName));
}

// ADD PROJECT / save to storage
function addNewProject(projectName) {
    // create new instance of project
    const newProject = CreateProject(projectName);
    newProject.dataNum = projArray.length;
    addToArray(newProject);
}

function numOfProjects() {
    return projArray.length;
}

const projectModule = {
    CreateProject,
    addNewProject,
    projectExists,
    changeProject,
    deleteProj,
    numOfProjects,
    currentProjectSelected,
};

export default projectModule;
