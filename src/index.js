//projects - holds their own lists of todos and dues, function factory
/*
What is in a project?
When application first opens, will open to 'default project', or user's default list
Contains own list of todos
Each project - in the sidebar/dropdown menu?
Has it's own tite to be displayed and can be selected
*/

//todos - cells for tasks due - function factory
/*
In To-do - what can we do in the cell?
Complete task - left
Display title & Display due date
Edit task
Cancel Task
View task comment / details / description
*/

//localStorage - stores all projects and in those projects, all todos

//Factory function for tasks
const CreateTask = (title = 'New task', description = '', due = 'Today') => {
    //change title, description or date
    function setTitle(title) {
        this.title = title;
    }

    function setDescription(description) {
        this.description = description;
    }

    function setDue(due) {
        this.due = due;
    }

    return {title, description, due, setTitle, setDescription, setDue};
};

//store tasks into an array - a list of tasks - project
//create Project factory function
const CreateProject = (title = 'New project') => {
    //initialise project array
    let projectList = [];

    //function to set title
    function setTitle(title) {
        this.title = title;
    };

    //adds tasks to current projectList
    function addTask(task) {
        projectList.push(task);
    };

    return {title, setTitle, projectList, addTask};
}

const task1 = CreateTask('get groceries', 'description', 'tomorrow');
const project1 = CreateProject('daily');
project1.addTask(task1);
console.log(project1.projectList);