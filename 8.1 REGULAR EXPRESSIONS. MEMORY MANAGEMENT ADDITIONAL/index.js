// Додайте перевірку на кожне поле даних в формі

const form = document.querySelector('.task-five-form');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');
const passwordToggleConfirm = document.getElementById('password-toggle-confirm');
const confirmPassword = document.getElementById('confirmPassword');
const flexCheckDefault = document.getElementById('flexCheckDefault');

const fullNameRegex = /^[a-zA-Z ]{2,30}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+?([0-9]{2})\)?[- ]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

passwordToggle.addEventListener('click', () => {
    if (password.type === 'text') {
        password.type = 'password';
        passwordToggle.textContent = 'Show';
    } else {
        password.type = 'text';
        passwordToggle.textContent = 'Hide';
    }
});

passwordToggleConfirm.addEventListener('click', () => {
    if (confirmPassword.type === 'text') {
        confirmPassword.type = 'password';
        passwordToggleConfirm.textContent = 'Show';
    } else {
        confirmPassword.type = 'text';
        passwordToggleConfirm.textContent = 'Hide';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!fullNameRegex.test(fullName.value)) {
        alert('Please enter a valid full name');
        fullName.focus();
        return;
    }

    if (!emailRegex.test(email.value)) {
        alert('Please enter a valid email address');
        email.focus();
        return;
    }

    if (phoneRegex.test(phone.value)) {
        alert('Please enter a valid phone number');
        phone.focus();
        return;
    }

    if (!passwordRegex.test(password.value)) {
        alert('Please enter a valid password. Password must be at least 8 characters long and contain at least one letter and one number character');
        password.focus();
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert('Passwords do not match');
        confirmPassword.focus();
        return;
    }

    if (!flexCheckDefault.checked) {
        alert('Please agree to the terms and conditions');
        return;
    }

    alert('Account created successfully');
})