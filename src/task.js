//FACTORY FUNCTION FOR TASKS
const CreateTask = (title = 'New task', due = 'Today', flag = '') => {
    //change title, flag or date
    function setTitle(title) {
        this.title = title;
    }

    function setDue(due) {
        this.due = due;
    }

    function setFlag(color) {
        this.flag = color;
    }

    return {title, due, flag, setTitle, setDue, setFlag};
};

function addToProject(task) {
    project.addTask(task);
    console.log(project.taskList);
}

const task = {
    addToProject,
    CreateTask
}

export default task;