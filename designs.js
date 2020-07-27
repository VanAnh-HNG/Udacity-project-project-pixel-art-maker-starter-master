// Select color input and store it in a variable
const colorPicker = document.getElementById("colorPicker");
// Select size input for height and width, then store it in a variable
const sizePicker = document.getElementById("sizePicker");
const inputHeight = document.getElementById("inputHeight");
const inputWidth = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById("pixelCanvas");

// Add the event to submit the input from user
// then, call makeGrid()
sizePicker.addEventListener("submit", function(event) {
    pixelCanvas.innerHTML = ""; //reset the grid to a blank state.
    event.preventDefault(); //prevents the grid from disappearing upon submitting the form
    makeGrid();
});
//Event to add and remove color by click
// Click to color
pixelCanvas.addEventListener("click", function(event) {
    if (event.target.localName === "td") { // define the element"td" that triggered the event.
        event.target.style.backgroundColor = colorPicker.value;
    }
});
// Double click to remove color
pixelCanvas.addEventListener("dblclick", function(event) {
    if (event.target.localName === "td") {
        event.target.style.backgroundColor = "";
    }
});

// A function makeGrid() for making a grid
function makeGrid() {
    for (let i = 0; i < inputHeight.value; i++) {
        const row = pixelCanvas.insertRow(0); //the loop to make the row
        for (let j = 0; j < inputWidth.value; j++) {
            row.insertCell(0); //the loop to make cell
        }
    }
};
