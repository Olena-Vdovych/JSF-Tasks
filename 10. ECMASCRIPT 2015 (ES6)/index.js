// 10-1.
// Напишіть код в /* Ваш код */, щоб він працював
// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };

// let {/* Ваш код */} = names;

// console.log(f); // "Tom"

// console.log(x); // "Ray"

// console.log(fifth); // "Name №5"
console.log('--Task 1--');
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f);
console.log(x);
console.log(fifth);

// 10-2.
// Напишіть код в /* Ваш код */, щоб він працював
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let /* Ваш код */ = data;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26
console.log('--Task 2--');

let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
};

let [name1, name2, name3, name4] = data.names;
let [age1, age2, age3, age4] = data.ages;

console.log(name2);
console.log(age2);
console.log(name4);
console.log(age4);

// 10-3.
// Напишіть функцію mul(), яка приймає будь-яку кількість параметрів різного типу і повертає добуток параметрів типу Number.
// Якщо параметри типу Number відсутні, повертає число 0.
// function mul(/* ваш код */) {
//    // Ваш код
// }
// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0
console.log('--Task 3--');

function mul(...args) {
    let product = 1;
    let foundNumber = false;
    for (let arg of args) {
        if (typeof arg === 'number') {
            product *= arg;
            foundNumber = true;
        }
    }
    return foundNumber ? product : 0;
}


console.log(mul(1, "str", 2, 3, true));
console.log(mul(null, "str", false, true));

// 10-4.
// Змініть код використовуючи стрілкові функції, щоб в коді не використовувалися методи bind().
// let server = {
//    data: 0,
//    convertToString: function (callback) {
//       callback((function () {
//          return this.data + "";
//       }).bind(this));
//    }
// };
// let client = {
//    server: server,
//    result: "",
//    calc: function (data) {
//       this.server.data = data;
//       this.server.convertToString(this.notification());
//    },
//    notification: function () {
//       return (function (callback) {
//          this.result = callback();
//       }).bind(this);
//    }
// };
// client.calc(123);
// console.log(client.result); // "123"
// console.log(typeof client.result); // "string"
console.log('--Task 4--');

let server = {
    data: 0,
    convertToString: function (callback) {
        callback(() => {
            return this.data + "";
        });
    }
};

let client = {
    server: server,
    result: "",
    calc: function (data) {
        this.server.data = data;
        this.server.convertToString(this.notification());
    },
    notification: function () {
        return (callback => {
            this.result = callback();
        });
    }
};

client.calc(123);
console.log(client.result);
console.log(typeof client.result);

// 10-5.
// Напишіть функцію mapBuilder (keysArray, valuesArrays), яка приймає два масиви однакової довжини. Використовуючи ці масиви, функція повинна створювати об'єкт типу Map, ключами якого є значення з першого масиву, а значеннями Map - значення з другого масиву. Після цього функція повертає даний об'єкт Map.
// Приклади використання функції:
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size); // 4
// console.log(map.get(2)); // "span"
console.log('--Task 5--');

function mapBuilder(keysArray, valuesArray) {
    if (keysArray.length !== valuesArray.length) {
        throw new Error("The length of the two arrays should be the same.");
    }
    const map = new Map();
    for (let i = 0; i < keysArray.length; i++) {
        map.set(keysArray[i], valuesArray[i]);
    }
    return map;
}

const keys = [1, 2, 3, 4];
const values = ["div", "span", "b", "i"];
const map = mapBuilder(keys, values);

console.log(map.size);
console.log(map.get(2));

// 10-6.
// За допомгою коду у нижче створюється масив, використовуючи цикл, до масиву записуються три функції. Логіка функцій проста, в консоль виводиться значення лічильника на момент створення функції.
// На вигляд код виглядає логічним, але, якщо запустити цей код без змін, в консоль буде виведено двічі число 3.
// Використовуючи механізм замикання, внесіть у код зміни, щоб у консоль вивелися число 0 та число 2(відповідно до виклику). 
// var arr = [];

// for (var i = 0; i <= 2; i++) {
//    arr[i] = function () {
//       console.log(i);
//    };
// }

// arr[0](); // 0
// arr[arr.length - 1](); // 2
console.log('--Task 6--');

let arr = [];

function createHandler(i) {
    return function () {
        console.log(i);
    };
}

for (let i = 0; i <= 2; i++) {
    arr[i] = createHandler(i);
}

arr[0](); 
arr[arr.length - 1](); 
