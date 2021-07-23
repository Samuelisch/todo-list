function addToHtml(task) {
    const cell = document.createElement('div');
    cell.className = 'cell'
    cell.innerHTML = `
        Task: ${task.title}, Due: ${task.due}
    `;
    body.appendChild(cell);
}

const UI = {
    addToHtml
};

export default UI;