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
  const items = document.querySelectorAll(".grid-item");
  for (let i = 0; i < items.length; i++) {
    items[i].remove();
  }
}

function changeColor(e) {
  e.target.classList.add("hovered");
}

function resetGrid() {
  const userInput = prompt("What base to use for sizing grid? (1-100)");
  if (userInput >= 1 || userInput <= 100) {
    removePixels();
    createGrid(userInput);
  } else {
    alert("Not a valid entry. Try again with a number from 1 to 100.");
  }
}

createGrid(4);
