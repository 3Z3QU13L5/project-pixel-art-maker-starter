//Elements of the DOM

const COLOR_PICKER = document.getElementById('colorPicker');
const INPUT_HEIGHT = document.getElementById('inputHeight');
const INPUT_WIDTH = document.getElementById('inputWidth');
const SIZE_PICKER = document.getElementById('sizePicker');
const PIXEL_CANVAS = document.getElementById('pixelCanvas');

// Select color input

function getColor() {    
    let color = COLOR_PICKER.value;
    return color;
}

function paintPixel(element) {
    let color = getColor();
    element.style = 'background-color: ' + color + ';';
}

// Select size input

function getHeight() {
    let height = INPUT_HEIGHT.value;
    return height;
}

function getWidth() {
    let width = INPUT_WIDTH.value;
    return width;
}

// When size is submitted by the user, call makeGrid()



function makeGrid() {

    }
}
