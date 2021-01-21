const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", resetGrid);
const grid = document.createElement("div");
const body = document.querySelector("body");

function createGrid(base) {
  for (let i = 0; i < base ** 2; i++) {
    const item = document.createElement("div");
    item.textContent = " ";
    item.classList.add("grid-item");
    item.addEventListener("mouseover", changeColor);
    grid.appendChild(item);
  }

  grid.classList.add("grid-container");

  body.appendChild(grid);
}

function removeGrid() {
  grid.remove();
}

function changeColor(e) {
  e.target.classList.add("hovered");
}

function resetGrid() {
  console.log("reset");
  removeGrid();
  const userInput = prompt("What size grid? (1-1000)");
  createGrid(userInput);
}

createGrid(4);
