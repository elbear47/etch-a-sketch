// container element div
const container = document.querySelector('.grid-container');

//create 16x16 grid
for (let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    container.appendChild(square);
}

// get node list of all boxes
let boxesNodeList = document.querySelectorAll('.grid-square');


// change color when hovered
for (let i = 0; i < boxesNodeList.length; i++) {
    let box = boxesNodeList[i];
    if (box.addEventListener('mouseover', () => {
            box.classList.add('color-hover');
        })) {

    }

}

// add clear functionality