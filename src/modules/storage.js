function getItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

//check if localStorage has items
function hasStorage() {
    return localStorage.length;
}

function addProjToStorage(project) {
    localStorage.setItem(localStorage.length, JSON.stringify(project));
}

function addTaskToProjStorage(project, task) {
    
}

function length() {
    return localStorage.length;
}

const storage = {
    getItem,
    hasStorage,
    addProjToStorage,
    length
}

export default storage;