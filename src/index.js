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

import './style.css';

//Factory function for tasks
const CreateTask = (title = 'New task', description = '', due = 'Today', flag = '') => {
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

    function setFlag(color) {
        this.flag = color;
    }

    return {title, description, due, flag, setTitle, setDescription, setDue, setFlag};
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

//tester for creation of tasks from webpage
const body = document.querySelector('body');
const form = document.createElement('form');
const taskBox = document.createElement('input');
taskBox.placeholder = 'Task';
const descriptionBox = document.createElement('input');
descriptionBox.placeholder = 'Description';
const dueBox = document.createElement('input');
dueBox.placeholder = 'Due date'
const button = document.createElement('button');
button.type = 'submit';
button.textContent = 'Submit';
button.addEventListener('click', clickHandler);

form.appendChild(taskBox);
form.appendChild(descriptionBox);
form.appendChild(dueBox);
form.appendChild(button);
body.appendChild(form);

function clickHandler(e) {
    e.preventDefault();
    const cell = document.createElement('div');
    cell.className = 'cell'
    cell.innerHTML = `
        Task: ${taskBox.value}, Description: ${descriptionBox.value}, Due: ${dueBox.value}
    `;
    body.appendChild(cell);

}