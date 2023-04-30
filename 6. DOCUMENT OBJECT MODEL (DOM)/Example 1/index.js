// 1. 
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const openBtn = document.getElementById('open_modal');
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close');
const modalMessage = modal.querySelector('#list');

const openModal = () => {
    if (modal.style.display === 'none') {
        const list = document.getElementById('list');
        if (!list) {
            return;
        }
    }

    const items = Array.from(list.getElementsByTagName("li"));
    const contents = [
        items[0].textContent,
        items[items.length - 1].textContent,
        items[1].textContent,
        items[3].textContent,
        items[2].textContent,
    ];
    const message = contents.join(", ");
    modalMessage.textContent = message;
    modal.style.display = 'block';
};

openBtn.addEventListener('click', () => {
    openModal();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalMessage.textContent = '';
});