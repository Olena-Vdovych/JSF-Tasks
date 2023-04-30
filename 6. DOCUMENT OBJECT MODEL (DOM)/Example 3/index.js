// 3. 
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body>
const main = document.createElement('main');
const div = document.createElement('div');
const p = document.createElement('p');

main.setAttribute('class', 'mainClass check item');
div.setAttribute('id','myDiv');

p.textContent = 'First paragraph';

main.appendChild(div);
div.appendChild(p);
document.body.appendChild(main);