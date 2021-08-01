import storageModule from './storage';
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

// on initial load of webpage
let currProj;
let projArray = [];

function setCurrentProject(project) {
    currProj = project;
}

function setProjectArray(arr) {
    projArray = arr;
}

function getCurrentProject() {
    return currProj;
}

function getProjectArray() {
    return projArray;
}

function getProject(num) {
    return projArray[num];
}

function saveArray() {
    // save array to storage - update storage values
    storageModule.addProjToStorage(projArray);
}

function updateArray(arr) {
    setProjectArray(arr);
    saveArray();
}

function addToArray(proj) {
    projArray.push(proj);
    updateArray(projArray);
}

// switch projects to selected from UI
function changeProject(dataNum) {
    currProj = projArray[dataNum];
}

function deleteProj(num) {
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
    changeProject,
    numOfProjects,
    getCurrentProject,
    setCurrentProject,
    getProjectArray,
    setProjectArray,
    getProject,
    deleteProj,
    addToArray,
};

export default projectModule;
