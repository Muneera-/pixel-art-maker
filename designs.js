// Select color input
let color = document.querySelector('#colorPicker');
let pixelCanvas = document.querySelector('#pixelCanvas');


// Select size input
let sizePicker = document.querySelector('#sizePicker');
let inputHeight = document.querySelector('#inputHeight');
let inputWidth = document.querySelector('#inputWidth');



// When size is submitted by the user, call makeGrid()
sizePicker.onsubmit = function(event){
    event.preventDefault();
    clearGrid();
    makeGrid();
};

function makeGrid() {
  // Your code goes here!
    for (let row=0; row<inputHeight.value; row++){
        const addRow = pixelCanvas.insertRow(row);
        for (let col=0; col<inputWidth.value; col++){
            const cell = addRow.insertCell(col);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (pixelCanvas.firstChild){
         pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}



function fillSquare () {
    this.setAttribute('style', `background-color: ${color.value}`);
}
