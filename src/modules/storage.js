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
    getProjects,
    hasStorage,
    addProjToStorage,
    getTask,
    addTaskToStorage,
    numOfTasks
}

export default storage;