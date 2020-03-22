const countBtn = document.querySelector('.counter');
const decrBtn = document.querySelector('.decreaser');
const incrBtn = document.querySelector('.increaser');
const outputCount = document.querySelector('.outputCount');
const output = document.querySelector('.output');
const inc = increaser();
const dec = decreaser();
let i = 0;

function* increaser() {
    while(true) {
        yield i++;
    }
}

function* decreaser() {
    while(true) {
        yield i--;
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
