const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');

let count = 0;
let width;

function init() {
    console.log('reliz');
    width = document.querySelector('.slider').offsetWidth;
    console.log(width);

    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    })
    rollSlider();
}

window.addEventListener('resize', init);
init();

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

document.querySelector('.slider-next').addEventListener('click', function () {

    count++;

    if (count > images.length - 1) {
        count = 0;
    }

    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {

    count--;
    if (count < 0) {
        count = images.length - 1
    }
    rollSlider();
});



