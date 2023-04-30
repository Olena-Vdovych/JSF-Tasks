//Task 1
// Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr 
// і два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. 
// Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
// Функція повинна генерувати винятки, якщо були введені не числа, і коли одне з чисел або обидва більшого розміруза довжину масиву. 
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
console.log('--Task 1--');
const sumSliceArray = (arr, first, second) => {
    if (isNaN(first) || isNaN(second)) {
        throw new Error('Enter the numbers');
    }

    if (typeof first !== 'number' || typeof second !== 'number') {
        throw new Error('First and second arguments must be numbers');
    }

    if (first >= arr.length || second >= arr.length) {
        throw new Error('The first and second arguments must be less than the length of the array');
    }

    return arr[first] + arr[second];
}

const arr = [1, 2, 3, 4, 5];

try {
    const sum = sumSliceArray(arr, 2, 4);
    console.log(sum);
} catch (error) {
    console.log(error.message);
}

try {
    const sum = sumSliceArray(arr, 2, '4');
    console.log(sum);
} catch (error) {
    console.log(error.message);
}

try {
    const sum = sumSliceArray(arr, 2, 'a');
    console.log(sum);
} catch (error) {
    console.log(error.message);
}

// Task 2
// Створіть функцію checkAge(), яка запитує у користувача його ім'я, 
// вік та статус (адмін, модератор, користувач) та генерує модальне вікно з помилкою, 
// якщо:вік користувача менше 18 або більше 70 років (генерується помилка типу RangeError).
// користувач не ввів жодних даних в будь-якому полі 
// (виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). 
// У полі статус введено неправильне слово (тип помилки EvalError).
// В полі вік введено нечислове значення. 
// У всіх інших випадках користувач отримає доступ до перегляду фільму. 
// У блоці catch передбачена можливість виведення назви та опису помилки.
console.log('--Task 2 --');
const checkAge = () => {
    try {
        const name = prompt('What is your name?');
        const age = prompt('What is your age?');
        const status = prompt('What is your status (admin, moderator, user)?');

        if (!name) {
            throw new Error('The field is empty! Please enter your name.');
        }

        if (!age) {
            throw new Error('The field is empty! Please enter your age.');
        }

        if (!status) {
            throw new Error('The field is empty! Please enter your status.');
        }

        const parsedAge = parseInt(age);

        if (isNaN(parsedAge)) {
            throw new EvalError('Age must be a number!');
        }

        if (parsedAge < 18 || parsedAge > 70) {
            throw new RangeError('Your age must be between 18 and 70 years old.');
        }

        if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
            throw new EvalError('Invalid status input');
        }

        alert('You are allowed to watch the movie!');

    } catch (error) {
        alert(`${error.name}: ${error.message}`);
    }
}

checkAge();

// Task 3
// Реалізуйте функцію calcRectangleArea(width, height), яка приймає 2 параметри
//  ширина прямокутника width і висота прямокутника height і обраховує його площу. 
//  Передбачити припинення виконання програми і генерацію винятку у випадку, якщо функції передано не числові параметри.
// Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
console.log('--Task 3--');
const calcRectangleArea = (width, height) => {
    if (typeof width !== 'number' || typeof height !== 'number') {
        throw new Error ('Both parameters must be numbers');
    }
    return width * height;
}

try {
    const area = calcRectangleArea(10, 5);
    console.log(`Rectangle area: ${area}`);
} catch (error) {
    console.error(`Error: ${error.message}`);
}

// Task 4
// Створіть клас MonthException, конструктор якого приймає параметр message і ініціалізує поле name значенням MonthException.
// Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
// Функція повертає назву місяця відповідно до введеного номера місяця. У випадку некоректного вводу кидається ексепшн 
// у вигляді об’єкта класу MonthException з повідомленням Incorrect month number.
// Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
// Приклад роботи програми:
// console.log(showMonthName(5));
// May
// console.log(showMonthName(14));
// MonthException Incorrect month number
console.log('-- Task 4 --');
class MonthException extends Error {
    constructor(message) {
        super(message);
        this.name = 'MonthException';
    }
}

const showMonthName = (month) => {
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    if (month < 1 || month > 12) {
        throw new MonthException('Incorrect month number');
    }
    return monthNames[month - 1];
}

try {
    console.log(showMonthName(5));
    console.log(showMonthName(14));
} catch (error) {
    console.log(`${error.name} ${error.message}`);
}

// Task5
// Реалізуйте функцію showUser(id), яка приймає параметром користувацьке id і повертає об’єкт, 
// який містить значення переданої id. Також функція викидає помилку у разі якщо введено від’ємне id.
// Реалізуйте функцію showUsers(ids), яка приймає параметром масив користувацьких айді ids, 
// перевіряє з використанням функції showUser() кожен елемент масиву ids на коректність, 
// в разі виключної ситуації виводить повідомлення про помилку. Функція showUsers(ids) 
// повертає масив об’єктів, де значеннями ключів є коректні елементи ids.

// Приклад роботи програми:
// showUsers([7, -12, 44, 22]);
// Error: ID must not be negative: -12
// [ {id: 7}, {id: 44}, {id: 22} ]
console.log('--Task 5--');
const showUser = (id) => {
    if (id < 0) {
        throw new Error (`ID must not be negative ${id}`);
    }
    return {id: id};
}

const showUsers = (ids) => {
    let validIds = [];
    for (let i = 0; i < ids.length; i++) {
        try {
            let user = showUser(ids[i]);
            validIds.push(user);
        } catch (error) {
            console.log(error.message);
        }
    }
    return validIds;
}

console.log(showUsers([7, -12, 44, 22]));