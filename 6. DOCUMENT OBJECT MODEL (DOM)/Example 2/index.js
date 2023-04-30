// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>

// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
const header = document.querySelector('h1');
const div = document.querySelector('#myDiv');
const paragraphs = document.querySelectorAll('#myDiv p');
const list = document.querySelector('#myList');
const span = document.querySelector('span');

header.style.fontSize = '48px';
header.style.fontWeight = 'bold';
header.style.backgroundColor = '#4CCE32';

div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.border = '2px solid black';
div.style.padding = '10px';
div.style.fontSize = '20px';

paragraphs[0].style.fontWeight = 'bold';
paragraphs[1].style.color = 'red';
paragraphs[2].style.textDecoration = 'underline';
paragraphs[3].style.fontStyle = 'italic';

list.style.display = 'flex';
list.style.justifyContent = 'center';
list.style.listStyleType = 'none';

span.style.visibility = 'hidden';