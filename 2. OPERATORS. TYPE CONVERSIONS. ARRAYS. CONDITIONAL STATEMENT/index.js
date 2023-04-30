// Task 1 //
let a = -3;
let b = 0;
let c = 1;

if (a < b && b < c) {
    console.log('a < b < c is true');
} else {
    console.log('a < b < c is false');
}

//Task 2 //
let x = 1;
let y = 2;

let res1 = x + '' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = Boolean(x) + '' + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = Boolean(x + y);// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = ((x - x) / (y - y)); // Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""

// Task 3 //
const question = prompt('Ви досягли повнолітнього віку?');
if (question >= 18) {
    alert('Ви досягли повнолітнього віку');
} else {
    alert('Ви ще надто молоді');
}

// Task 4 //
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
// Підрахунок к-сті входжень кожного числа 
let count = {};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    count[num] = count[num] ? count[num] +1 : 1;
}
// Знаходження числа, яке найбільш часто входить у масив
let maxCount = 0;
let data;
for (num in count) {
    if (count[num] > maxCount) {
        maxCount = count[num];
        data = num;
    }
}
// Створення нового масиву, що містить число, яке найбільш часто входить у масив
let newDataArr = [parseInt(data)];
// Видалення всіх входжень числа з поточного масиву
arr = arr.filter(num => num !== Number(data));

console.log(newDataArr);
console.log(arr);

// Task 5 //
let firstSide = parseFloat(prompt('Введіть довжину першої сторони трикутника'));
let secondSide = parseFloat(prompt('Введіть довжину другої сторони трикутника'));
let thirdSide = parseFloat(prompt('Введіть довжину третьої сторони трикутника'));

// Перевірка на коректність введення даних
if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide) || firstSide <=0 ||secondSide <= 0 || thirdSide <=0) {
    console.log('Incorrect data');
} else {
    // Обчислення півпериметра трикутника
    let halfPerimeter = (firstSide + secondSide + thirdSide) / 2;
    // Обчислення площі трикутника
    let area = Math.sqrt(halfPerimeter * (halfPerimeter - firstSide) * (halfPerimeter - secondSide) * (halfPerimeter - thirdSide));
    console.log(`Площа трикутника: ${area.toFixed(3)}`);
    // Перевірка чи є трикутник прямокутним
    if (firstSide * firstSide + secondSide * secondSide === thirdSide * thirdSide || firstSide * firstSide + thirdSide * thirdSide === secondSide * secondSide || secondSide * secondSide + thirdSide * thirdSide === firstSide * firstSide || firstSide + secondSide > thirdSide || secondSide + thirdSide > firstSide || firstSide + thirdSide > secondSide) {
        console.log('Цей трикутник є прямокутним');
    } else {
        console.log('Цей трикутник не є прямокутним');
    }
}

// Task 6 //
// Example 1
const now = new Date();
const hour = now.getHours();

if (hour < 5) {
    console.log('Доброї ночі');
} else if (hour < 11) {
    console.log('Доброго ранку');
} else if (hour < 17) {
    console.log('Доброго дня');
} else {
    console.log('Доброго вечора');
}

// Example 2
switch(true) {
    case (hour >= 23 || hour < 5):
        console.log('Доброї ночі');
        break;
    case (hour >= 5 && hour < 11):
        console.log('Доброго ранку');
        break;
    case (hour >= 11 && hour < 17):
        console.log('Доброго дня');
        break;
    default:
        console.log('Доброго вечора');
}