// Реалізувати логіку підрахунку ціни товару по його варіаціях(шаблон наведений тут, при кліку на колір змінювати ціну товару).
// Придумати ще 2 варіації, відяких буде залежати ціна товару.
const colorElements = document.querySelectorAll('.color');
const sizeElements = document.querySelectorAll('.size');
const typeElements = document.querySelectorAll('input[name="type"]');
const priceElement = document.querySelector('#outprice');
const basePrice = 200;

let price = basePrice;

colorElements.forEach((colorElement) => {
    colorElement.addEventListener('click', () => {
        document.querySelector('.color.active').classList.remove('active');
        colorElement.classList.add('active');

        const colorPrice = Number(colorElement.getAttribute('data-price'));
        price = basePrice + colorPrice + Number(getSelectedSizePrice()) + Number(getSelectedTypePrice());
        priceElement.textContent = price;
    });
});

sizeElements.forEach((sizeElement) => {
    sizeElement.addEventListener('click', () => {
        document.querySelector('.size.active').classList.remove('active');
        sizeElement.classList.add('active');

        price = basePrice + Number(getSelectedColorPrice()) + Number(sizeElement.getAttribute('data-price')) + Number(getSelectedTypePrice());
        priceElement.textContent = price;
    });
});

typeElements.forEach((typeElement) => {
    typeElement.addEventListener('change', () => {
        price = basePrice + Number(getSelectedColorPrice()) + Number(getSelectedSizePrice()) + Number(document.querySelector('input[name="type"]:checked').getAttribute('data-price'));
        priceElement.textContent = price;
    });
});

function getSelectedColorPrice() {
    const selectedColor = document.querySelector('.color.active');
    return selectedColor ? selectedColor.getAttribute('data-price') : 0;
}

function getSelectedSizePrice() {
    const selectedSize = document.querySelector('.size.active');
    return selectedSize ? selectedSize.getAttribute('data-price') : 0;
}

function getSelectedTypePrice() {
    const selectedType = document.querySelector('input[name="type"]:checked');
    return selectedType ? selectedType.getAttribute('data-price') : 0;
}