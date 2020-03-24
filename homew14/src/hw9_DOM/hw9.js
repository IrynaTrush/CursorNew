export const block = document.querySelector(".dom");

export function randomColor() {
    return Math.floor(Math.random() * 256);
}

export function generateBlocks() {
    
    block.innerHTML = "";
    for (let i = 0; i < 25; i++) {
        const random = document.createElement('div');
        random.classList.add('random');
        block.append(random);
        random.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }
}

