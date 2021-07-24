//FACTORY FUNCTION FOR PROJECTS
const CreateProject = (title) => {
    //initialise project array
    let taskList = [];

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    //adds tasks to current projectList
    function addTask(task) {
        taskList.push(task);
    };

    return {title, setTitle, taskList, addTask};
}

//ADD PROJECT
function addNewProject(projectName) {
    //create new instance of project
    const newProject = CreateProject(projectName);
    console.log(newProject);
}

const projectModule = {
    CreateProject,
    addNewProject
}

export default projectModule;