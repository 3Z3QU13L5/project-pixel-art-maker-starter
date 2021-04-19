// Select color input
const COLOR_PICKER = document.getElementById('colorPicker');

// Select size input
const INPUT_HEIGHT = document.getElementById('inputHeight');
const INPUT_WIDTH = document.getElementById('inputWidth');

//Elements of the DOM
const SIZE_PICKER = document.getElementById('sizePicker');
const PIXEL_CANVAS = document.getElementById('pixelCanvas');


function paintPixel(element) {
    let color = COLOR_PICKER.value;
    element.style = 'background-color: ' + color + ';';
}

// When size is submitted by the user, call makeGrid()

SIZE_PICKER.addEventListener('submit', (event) => {
    makeGrid();
    event.preventDefault();
});

function makeGrid() {

    let height = INPUT_HEIGHT.value;
    let width = INPUT_WIDTH.value;

    PIXEL_CANVAS.innerHTML = ' ';

    for(let rows = 1; rows <= height; rows++) {

        let row = document.createElement('tr');

        for(let colunms = 1; colunms <= width; colunms++){
            let colunm = document.createElement('td');
            
            colunm.addEventListener('click', () => {
                paintPixel(this);
            });

            row.appendChild(colunm);
        }

        PIXEL_CANVAS.appendChild(row);
    }
}
