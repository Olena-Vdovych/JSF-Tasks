// реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
const btn = document.querySelector('.btn');
const outBlock = document.querySelector('.out');

btn.addEventListener('click', () => {
    const fullName = document.querySelector('input[name="fio"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const dateOfBirthday = document.querySelector('input[name="birthday"]').value;
    const email = document.querySelector('input[name="email"]').value;

    outBlock.innerHTML = `
    <p>Ім'я: ${fullName}</p>
    <p>Телефон: ${phone}</p>
    <p>Дата народження: ${dateOfBirthday}</p>
    <p>Email: ${email}</p>`;
})