function getProjects() {
    return JSON.parse(localStorage.getItem(0));
}

//check if localStorage has items
function hasStorage() {
    return localStorage.length;
}

function addProjToStorage(projectArray) {
    localStorage.setItem(0, JSON.stringify(projectArray));
}

function getTasks() {
    return JSON.parse(localStorage.getItem(1));
}

function addTaskToStorage(taskArray) {
    localStorage.setItem(1, JSON.stringify(taskArray));
}

const storage = {
    getProjects,
    hasStorage,
    addProjToStorage,
    getTasks,
    addTaskToStorage,
}

export default storage;