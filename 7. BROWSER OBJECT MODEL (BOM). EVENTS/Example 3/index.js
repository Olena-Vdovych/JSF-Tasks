// 7-3. 
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png

const clickBtn = document.getElementById('click');
const doubleClickBtn = document.getElementById('doubleClick');
const clickHoldBtn = document.getElementById('clickHold');
const link = document.getElementById('link');
const body = document.body;

let backgroundColor = 'white';

const changeBackgroundColor = () => {
    document.body.style.backgroundColor = backgroundColor;
}

clickBtn.addEventListener('click', () => {
    backgroundColor = 'blue';
    changeBackgroundColor();
});

doubleClickBtn.addEventListener('dblclick', () => {
    backgroundColor = 'pink';
    changeBackgroundColor();
});

clickHoldBtn.addEventListener('mousedown', () => {
    backgroundColor = 'brown';
    changeBackgroundColor();
});

clickHoldBtn.addEventListener('mouseup', () => {
    backgroundColor = 'white';
    changeBackgroundColor();
});

link.addEventListener('mouseenter', () => {
    backgroundColor = 'yellow';
    changeBackgroundColor();
});

link.addEventListener('mouseleave', () => {
    backgroundColor = 'white';
    changeBackgroundColor();
});