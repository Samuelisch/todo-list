function getProject(key) {
    return JSON.parse(localStorage.getItem(0))[key];
}

//check if localStorage has items
function hasStorage() {
    return localStorage.length;
}

function addProjToStorage(projectArray) {
    localStorage.setItem(0, JSON.stringify(projectArray));
}

function numOfProjects() {
    return JSON.parse(localStorage.getItem(0)).length;
}

function getTask(key) {
    return JSON.parse(localStorage.getItem(1))[key];
}

function addTaskToStorage(taskArray) {
    localStorage.setItem(1, JSON.stringify(taskArray));
}

function numOfTasks() {
    return JSON.parse(localStorage.getItem(1)).length;
}

const storage = {
    getProject,
    hasStorage,
    addProjToStorage,
    numOfProjects,
    getTask,
    addTaskToStorage,
    numOfTasks
}

export default storage;