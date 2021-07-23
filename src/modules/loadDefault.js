import project from './project.js';

//PAGE BEHAVIOUR
const loadHomePageBehaviour = () => {
    const navBtn = document.querySelector('.nav-btn');
    const nav = document.querySelector('.nav-bar');
    const listItems = document.querySelectorAll('.tab');
    const childItems = document.querySelectorAll('.tab > *');
    const addProj = document.querySelector('.add-project-btn');

    function dropdownMenu() {
        nav.classList.toggle('display');
    }

    function selectLink(e) {
        let link = e.target
        //if selected any child elements, revert to parent element
        if (Array.from(childItems).includes(link)) {
            link = link.parentElement;
        }
    //check if any links are currently selected
    if (linkSelected()) {
            if (linkSelected() == link) {
                return;
            }
        linkSelected().classList.remove('selected');
    }
    link.classList.add('selected');
    }

    function linkSelected() {
        //initialise output as false
        let output = false;
        listItems.forEach(item => {
            if (item.classList.contains('selected')) {
                //if item found, change output to item
                output = item;
            }
        });
        return output;
    }

    //event listeners for navBtn, clicks on menu
    navBtn.addEventListener('click', dropdownMenu);
    listItems.forEach(item => item.addEventListener('click', selectLink));
    addProj.addEventListener('click', project.addNewProject);
}

const loadDefault = {
    loadHomePageBehaviour
};

export default loadDefault;