// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"
console.log('--Task 1--');
const upperCase = (str) => {
    const regex = /^[A-Z]/; // регулярний вираз для першого символу у верхньому регістрі
    if (regex.test(str)) {
        return "Strings starts with uppercase character";
    } else {
        return "Strings not starts with uppercase character";
    }
}

console.log(upperCase('regexp'));
console.log(upperCase('RegExp'));
console.log(upperCase('rEGEXP'));
console.log(upperCase(''));

// 8-2. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true
console.log('--Task 2--');
const checkEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

console.log(checkEmail('Qmail2@gmail.com'));
console.log(checkEmail('Qmail2gmail.com'));
console.log(checkEmail('Qmail2@gmail'));
console.log(checkEmail('Qmail @gmail.com'));
console.log(checkEmail('Qmail@gmail.com'));

// 8-3. 
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”
console.log('--Task 3--');
const title = 'Java Script';
const regex = /^(\w+)\s+(\w+)$/;

const result = title.replace(regex, '$2, $1');

console.log(result);

// 8-4. 
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
console.log('--Task 4--');
const validateCardNumber = (cardNumber) => {
    const regexCard = /^(\d{4}-){3}\d{4}$/;
    return regexCard.test(cardNumber);
}

console.log(validateCardNumber('9999-9999-9999-9999'));
console.log(validateCardNumber('9999-9999-9999-999'));
console.log(validateCardNumber('9999-a999-9999-999'));

// 8-5. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"
console.log('--Task 5--');

const checkEmailAddress = (emailAddress) => {
    if (/^[a-zA-Z0-9]+([_\-.]{1}[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(emailAddress)) {
        if (!/--/.test(emailAddress)) {
            return 'Email is correct!';
        }
    }
    return 'Email is not correct!';
}

console.log(checkEmailAddress('kenaa@gmail.com'));
console.log(checkEmailAddress('_kenaa@gmail.com'));
console.log(checkEmailAddress('ken--aa@gmail.com'));
console.log(checkEmailAddress('Kenaa@gmail.com'));
console.log(checkEmailAddress('ke22@gmail.com'));
console.log(checkEmailAddress('kena_a@gmail.com'));

// 8-6. 
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів, що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true 
// //1.1, 3

// checkLogin('ee1*1ret3');
// false 
// //1, 1, 3
console.log('--Task 6--');

const checkLogin = (login) => {
    const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
    const numbers = login.match(/[-+]?\d*\.?\d+/g);
    return {
        isValid: loginRegex.test(login),
        numbers: numbers ? numbers.toString() : ''
    };
};

console.log(`${checkLogin("e1ret3").isValid} ${checkLogin("e1ret3").numbers}`);
console.log(`${checkLogin("ee1.1ret3").isValid} ${checkLogin("ee1.1ret3").numbers}`);
console.log(`${checkLogin("ee11ret3").isValid} ${checkLogin("ee11ret3").numbers}`);
console.log(`${checkLogin("ee1*1ret3").isValid} ${checkLogin("ee1*1ret3").numbers}`);