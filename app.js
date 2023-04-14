const countValue = document.querySelector('.countVal'); 
const increaseBtn = document.querySelector('.increase'); 
const resetBtn = document.querySelector('.reset'); 
const decreaseBtn = document.querySelector('.decrease'); 

let counter = 0;


let increaseNum = () => {
    countValue.textContent = ++counter;
    if(counter > 0){
        countValue.style.color = '#018d2b';
    } 
    else if (counter < 0){
        countValue.style.color = '#a1000d';
    } 
    else {
        countValue.style.color = '#303030';
    }
}
increaseBtn.addEventListener('click', increaseNum);


let decreaseNum = () => {
    countValue.textContent = --counter;
    if(counter > 0){
        countValue.style.color = '#018d2b';
    } 
    else if (counter < 0){
        countValue.style.color = '#a1000d';
    } 
    else {
        countValue.style.color = '#303030';
    }
}
decreaseBtn.addEventListener('click', decreaseNum);


let resetNum = () => {
    countValue.textContent = 0;
    counter = 0;
    countValue.style.color = '#303030';
}
resetBtn.addEventListener('click', resetNum);