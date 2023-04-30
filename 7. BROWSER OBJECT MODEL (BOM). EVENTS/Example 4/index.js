// 7-4. 
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. Можуть видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png
const content = document.getElementById('content');
const button = document.querySelector('button');

const deleteSelectedOption = () => {
    const selectedOption = content.value;
    const options = content.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedOption) {
            content.removeChild(options[i]);
            break;
        }
}
}

button.addEventListener('click', deleteSelectedOption);