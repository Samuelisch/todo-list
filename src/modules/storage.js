function getItems() {
    
}

//check if localStorage has items
function hasStorage() {
    return localStorage.getItem('default');
}

function addToStorage() {
    localStorage.setItem(project.title, JSON.stringify(project));
}

const storage = {
    hasStorage,
    addToStorage
}

export default storage;