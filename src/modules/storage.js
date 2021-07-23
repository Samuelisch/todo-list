function getItems() {
    
}

//check if localStorage has items
function hasStorage() {
    return localStorage.getItem('default');
}

function addToLocalStorage() {
    localStorage.setItem(project.title, JSON.stringify(project));
}

const storage = {
    hasStorage,
    addToLocalStorage
}

export default storage;