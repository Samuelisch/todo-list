/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

const task1 = CreateTask('get groceries', 'description', 'tomorrow');
const project1 = CreateProject('daily');
project1.addTask(task1);
console.log(project1.projectList);

const element = document.createElement('h1');
element.textContent = 'Hello World';
document.querySelector('body').appendChild(element);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvRCIsImZpbGUiOiIuL2J1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vcHJvamVjdHMgLSBob2xkcyB0aGVpciBvd24gbGlzdHMgb2YgdG9kb3MgYW5kIGR1ZXMsIGZ1bmN0aW9uIGZhY3Rvcnlcbi8qXG5XaGF0IGlzIGluIGEgcHJvamVjdD9cbldoZW4gYXBwbGljYXRpb24gZmlyc3Qgb3BlbnMsIHdpbGwgb3BlbiB0byAnZGVmYXVsdCBwcm9qZWN0Jywgb3IgdXNlcidzIGRlZmF1bHQgbGlzdFxuQ29udGFpbnMgb3duIGxpc3Qgb2YgdG9kb3NcbkVhY2ggcHJvamVjdCAtIGluIHRoZSBzaWRlYmFyL2Ryb3Bkb3duIG1lbnU/XG5IYXMgaXQncyBvd24gdGl0ZSB0byBiZSBkaXNwbGF5ZWQgYW5kIGNhbiBiZSBzZWxlY3RlZFxuKi9cblxuLy90b2RvcyAtIGNlbGxzIGZvciB0YXNrcyBkdWUgLSBmdW5jdGlvbiBmYWN0b3J5XG4vKlxuSW4gVG8tZG8gLSB3aGF0IGNhbiB3ZSBkbyBpbiB0aGUgY2VsbD9cbkNvbXBsZXRlIHRhc2sgLSBsZWZ0XG5EaXNwbGF5IHRpdGxlICYgRGlzcGxheSBkdWUgZGF0ZVxuRWRpdCB0YXNrXG5DYW5jZWwgVGFza1xuVmlldyB0YXNrIGNvbW1lbnQgLyBkZXRhaWxzIC8gZGVzY3JpcHRpb25cbiovXG5cbi8vbG9jYWxTdG9yYWdlIC0gc3RvcmVzIGFsbCBwcm9qZWN0cyBhbmQgaW4gdGhvc2UgcHJvamVjdHMsIGFsbCB0b2Rvc1xuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gZm9yIHRhc2tzXG5jb25zdCBDcmVhdGVUYXNrID0gKHRpdGxlID0gJ05ldyB0YXNrJywgZGVzY3JpcHRpb24gPSAnJywgZHVlID0gJ1RvZGF5JywgZmxhZyA9ICcnKSA9PiB7XG4gICAgLy9jaGFuZ2UgdGl0bGUsIGRlc2NyaXB0aW9uIG9yIGRhdGVcbiAgICBmdW5jdGlvbiBzZXRUaXRsZSh0aXRsZSkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNldER1ZShkdWUpIHtcbiAgICAgICAgdGhpcy5kdWUgPSBkdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0RmxhZyhjb2xvcikge1xuICAgICAgICB0aGlzLmZsYWcgPSBjb2xvcjtcbiAgICB9XG5cbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlLCBmbGFnLCBzZXRUaXRsZSwgc2V0RGVzY3JpcHRpb24sIHNldER1ZSwgc2V0RmxhZ307XG59O1xuXG4vL3N0b3JlIHRhc2tzIGludG8gYW4gYXJyYXkgLSBhIGxpc3Qgb2YgdGFza3MgLSBwcm9qZWN0XG4vL2NyZWF0ZSBQcm9qZWN0IGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IENyZWF0ZVByb2plY3QgPSAodGl0bGUgPSAnTmV3IHByb2plY3QnKSA9PiB7XG4gICAgLy9pbml0aWFsaXNlIHByb2plY3QgYXJyYXlcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuICAgIC8vZnVuY3Rpb24gdG8gc2V0IHRpdGxlXG4gICAgZnVuY3Rpb24gc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH07XG5cbiAgICAvL2FkZHMgdGFza3MgdG8gY3VycmVudCBwcm9qZWN0TGlzdFxuICAgIGZ1bmN0aW9uIGFkZFRhc2sodGFzaykge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHRhc2spO1xuICAgIH07XG5cbiAgICByZXR1cm4ge3RpdGxlLCBzZXRUaXRsZSwgcHJvamVjdExpc3QsIGFkZFRhc2t9O1xufVxuXG5jb25zdCB0YXNrMSA9IENyZWF0ZVRhc2soJ2dldCBncm9jZXJpZXMnLCAnZGVzY3JpcHRpb24nLCAndG9tb3Jyb3cnKTtcbmNvbnN0IHByb2plY3QxID0gQ3JlYXRlUHJvamVjdCgnZGFpbHknKTtcbnByb2plY3QxLmFkZFRhc2sodGFzazEpO1xuY29uc29sZS5sb2cocHJvamVjdDEucHJvamVjdExpc3QpO1xuXG5jb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmVsZW1lbnQudGV4dENvbnRlbnQgPSAnSGVsbG8gV29ybGQnO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKGVsZW1lbnQpOyJdLCJzb3VyY2VSb290IjoiIn0=