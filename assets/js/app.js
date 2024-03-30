const left = document.querySelector('.fa-chevron-left');
const right = document.querySelector('.fa-chevron-right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');
const imgBtn = document.querySelector('.bottom');
let sliderBtns;
// width of your slider
let staticWidth = 500;

let maxSlider = staticWidth;

let changeX = 0, i = 0;



// to left
left.onclick = () => {
    sliderLeftRight(staticWidth);
}
// to right
right.onclick = () => {
    sliderLeftRight(-staticWidth);
}

// main function to change x point slider to left or right
const sliderLeftRight = (value) => {
    changeX += value;
    sliderChange();
    slider.style.transform = `translateX(${changeX}px)`;
    sliderBtns.forEach(btn =>{if(parseInt(btn.id) === changeX)addActive(btn)})
}

// return to top left or top right
const sliderChange = () => {
    if (changeX < maxSlider) {
        changeX = 0;
    } else if (changeX > 0) {
        changeX = maxSlider;
    }
}

// ========================== slider btn ============================//

images.forEach(image => {
    imgBtn.innerHTML += `<div id="${maxSlider - staticWidth}" class="sliderBtn"></div>`;
    maxSlider -= staticWidth;
});

sliderBtns = document.querySelectorAll('.sliderBtn')
sliderBtns[0].classList.add('active')

imgBtn.onclick = (e) => {
    if (e.target.classList.contains("sliderBtn")) {
        // add active function
        addActive(e.target)
        // take the id from the target and transform the width to this part of slider
        changeX = parseInt(e.target.id);
        slider.style.transform = `translateX(${changeX}px)`;
    }
}

function addActive(params) {
    sliderBtns.forEach(btn => btn.classList.remove('active'))
    params.classList.add('active')
}