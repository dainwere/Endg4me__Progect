const up = document.querySelector('#up')
const down = document.querySelector('#down')
const sliderLine = document.querySelector('.queue__line')

/* Количество блоков */

let size = 141.44;

let count = 20;

let sizeBlock = (count * size);

let offset = 0;

down.addEventListener('click', () => {
    if (offset > sizeBlock) {
        offset = 0;
        sliderLine.style.top = offset + 'px';
    } else {
        offset = offset + size;
        sliderLine.style.top = -offset + 'px';
    }
})

up.addEventListener('click', () => {
    if (offset == 0) {
        offset = 0;
        sliderLine.style.top = -offset + 'px'
    } else {
        offset = offset - size;
        sliderLine.style.top = -offset + 'px';
    }
})

