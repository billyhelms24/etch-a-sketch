const resetBtn = document.querySelector("button");
resetBtn.addEventListener("click", resetGrid);
const grid = document.querySelector(".grid-container");
const body = document.querySelector("body");

function createGrid(base) {
  grid.style.gridTemplate = `repeat(${base} , 1fr) / repeat(${base} , 1fr)`;
  for (let i = 0; i < base ** 2; i++) {
    const item = document.createElement("div");
    item.classList.add("grid-item");
    item.addEventListener("mouseover", changeColor);
    grid.appendChild(item);
  }
}

function removePixels() {
    const items = document.querySelectorAll('.grid-item');
    for (let i = 0 ; i < items.length ; i++) {
        items[i].remove();
        console.log(items);
    }
}

function changeColor(e) {
  e.target.classList.add("hovered");
}

function resetGrid() {
  console.log("reset");
  removePixels();
  const userInput = prompt("What base to use for sizing grid? (1-100)");
  createGrid(userInput);
}

createGrid(4);
