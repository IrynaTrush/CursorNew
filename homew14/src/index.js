import maxPrice from "./hw1_Variables/hw1.js";
import getSumOfNumbers from "./hw2_Cycles/hw2.js";
import maxNumber from "./hw3_functions/hw3.js";
import {students, newArr, pairs} from "./hw4_Arrays/hw4.js";
import divideByThree from "./hw5_Arrays2/hw5.js";
import {students1, getSubjects} from "./hw6_Objects/hw6.js";
import {ukraine, getMyTaxes} from "./hw7_Closure/hw7.js";
import {Student, pupil} from "./hw8_ES6Classes/hw8.js";
import {generateSign, getRandomChinese} from "./hw11_Promises/hw11.js";
import "./hw9_DOM/style.css";
import {block, randomColor, generateBlocks} from "./hw9_DOM/hw9.js";
import {audio, playList} from "./hw10_Events/hw10.js";
import "./hw12_Api/style.css";
import {photosOfCharacters, getCharacters} from "./hw12_Api/hw12.js";
import {increaser, inc, i} from "./hw13_Generators/hw13.js";



const hw1 = document.querySelector('.hw1');
const hw2 = document.querySelector('.hw2');
const hw3 = document.querySelector('.hw3');
const hw4 = document.querySelector('.hw4');
const hw5 = document.querySelector('.hw5');
const hw6 = document.querySelector('.hw6');
const hw7 = document.querySelector('.hw7');
const hw8 = document.querySelector('.hw8');
const hw9 = document.querySelector('.hw9');
const hw10 = document.querySelector('.hw10');
const hw11 = document.querySelector('.hw11');
const hw12 = document.querySelector('.hw12');
const hw13 = document.querySelector('.hw13');
const hwWrapper = document.querySelector('.hw_wrapper');
const characters = document.querySelector('.users');


hw1.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
   
   console.log('Result of the HW#1 is max price: ', maxPrice);
});

hw2.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    getSumOfNumbers();
});

hw3.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`WH#3 >> Result of the maxNumber function: ${maxNumber(8691)}`);
});

hw4.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`Result of the HW#4: ${pairs(newArr)}`);
});

hw5.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`HW#5 >> Result of the dividedByThree function is: ${divideByThree("Commander")}`)
})

hw6.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`HW#6 >> Result of the getSubjects function is: ${getSubjects(students1[0])}`);
});

hw7.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log(`HW#7 >> Result of the getMyTaxes function is: ${getMyTaxes.call(ukraine, 1000)}`);
});

hw8.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    console.log (
        `HW#8 >>
        ${pupil.getInfo()};
        Оцінки студента: ${pupil.allMarks};
        Студент отримав нову оцінку: ${pupil.marks = 5};
        Середня оцінка студента: ${pupil.getAverageMark()};`
    );
});

hw11.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
    getRandomChinese(4).then(str =>{
        console.log(`The result of the HW#11 is: ${str}`);
    });
});

hw9.addEventListener('click', () => {
    characters.style.display = 'none';
    block.style.display = 'flex';
    characters.style.display = 'none';
    stopPlay()
    const generateBlocksInterval = () => {
        setInterval(() => {
          generateBlocks()
        }, 1000);
      }
      return generateBlocksInterval()
    
});

hw10.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    stopPlay()
  playList();
    
});

function stopPlay() {
    if (audio !== null) {
      audio.pause();
      audio.currentTime = 0;
    }
}

hw12.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'block';
    characters.style.display = 'flex';
    getCharacters().then(film => {});
});

hw13.addEventListener('click', () => {
    block.style.display = 'none';
    characters.style.display = 'none';
    console.log(inc.next().value);
})