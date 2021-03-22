const resetBtn = document.querySelector(".resize");
const clearBtn = document.querySelector(".clear");
const rangeSlider = document.querySelector(".range-slider");
const rangeSliderLabel = document.querySelector("#rangeSliderLabel");
const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector("#colorPicker");
let isPaused = false;
let paintColor = "#000000";

resetBtn.addEventListener("click", resetCanvas);
clearBtn.addEventListener("click", clearCanvas);
rangeSlider.addEventListener("change", getSliderValue);
colorPicker.addEventListener("change", changeColor);

function changeColor() {
    paintColor = colorPicker.value;
}

function getSliderValue() {
    rangeSliderLabel.innerHTML = rangeSlider.value;
}

function createCanvas(base) {
    canvas.style.gridTemplate = `repeat(${base} , 1fr) / repeat(${base} , 1fr)`;
    for (let i = 0; i < base ** 2; i++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.addEventListener("mouseenter", paint);
        canvas.appendChild(pixel);
    }
}

function clearCanvas() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((i) => {
        i.style.backgroundColor = "#ffffff";
    });
}

function removePixels() {
    const pixels = document.querySelectorAll(".pixel");
    for (let i = 0; i < pixels.length; i++) {
        pixels[i].remove();
    }
}

function paint(pixel) {
    if (!isPaused) {
        pixel.target.style.backgroundColor = paintColor;
    }
}

document.addEventListener("keydown", (event) => {
    if (event.key === "k") {
        isPaused = true;
    }
});

document.addEventListener("keyup", (event) => {
    if (event.key === "k") {
        isPaused = false;
    }
});

function resetCanvas() {
    removePixels();
    createCanvas(rangeSliderLabel.innerHTML);
}

createCanvas(rangeSliderLabel.innerHTML);
