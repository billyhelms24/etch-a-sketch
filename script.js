function createGrid() {
    const grid = document.createElement('div');
    const body = document.querySelector('body');

    for (let i = 0 ; i < 16 ; i++) {
        const item = document.createElement('div')
        item.textContent = " "
        item.classList.add("grid-item");
        item.addEventListener("mouseover", changeColor)
        grid.appendChild(item);
    };

    grid.classList.add("grid-container")

    body.appendChild(grid);
};

function changeColor(e) {
    e.target.classList.add("hovered");
}