const countBtn = document.querySelector('.counter');
const decrBtn = document.querySelector('.decreaser');
const incrBtn = document.querySelector('.increaser');
const outputCount = document.querySelector('.outputCount');
const output = document.querySelector('.output');
let i = 0;
const inc = increaser();
const dec = decreaser();
const text = document.querySelector('.text');
console.log(text)
const up = document.querySelector('.up');
const down = document.querySelector('.down');
const sizeFont = 14;

function* increaser() {
    while(true) {
        yield ++i;
    }
}

function* decreaser() {
    while(true) {
        yield --i;
    }
}

const fontGenerator = newFontGenerator(sizeFont);
function* newFontGenerator(font) {
    while (true) {
        let size = yield font
        if(size === 'up') {
           ++font
        }
        if(size === 'down') {
            font--;
        }
    }
}

countBtn.addEventListener('click', () => {
    output.innerHTML = inc.next().value;
    output.style.display = 'block';
    decrBtn.style.display = 'block';
    incrBtn.style.display = 'block';
}, {once: true});

incrBtn.addEventListener('click', () => {
    output.innerHTML = '';
   output.innerHTML = inc.next().value;
})

decrBtn.addEventListener('click', () => {
    output.innerHTML = '';
    output.innerHTML = dec.next().value;
})

up.addEventListener('click', () => {
   text.style.fontSize = fontGenerator.next('up').value + 'px';
 })

down.addEventListener('click', () => {
    text.style.fontSize = fontGenerator.next('down').value + 'px';
})