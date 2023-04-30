// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const clickDiv = document.createElement('div');
    clickDiv.textContent = 'I was pressed!';
    document.body.appendChild(clickDiv);
});

button.addEventListener('mouseover', () => {
    const mouseoverDiv = document.createElement('div');
    mouseoverDiv.textContent = 'Mouse on me!';
    document.body.appendChild(mouseoverDiv);
});

button.addEventListener('mouseout', () => {
    const mouseoutDiv = document.createElement('div');
    mouseoutDiv.textContent = 'Mouse is not on me!';
    document.body.appendChild(mouseoutDiv);
});
