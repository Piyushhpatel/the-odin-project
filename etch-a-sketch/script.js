function createDiv(){
    const div = document.createElement('div');
    div.classList.add('square');
    const container = document.querySelector('.container');
    container.appendChild(div);
}

createDiv();

const square = document.querySelector('#square');

square.addEventListener('mouseover', () => {
    
});