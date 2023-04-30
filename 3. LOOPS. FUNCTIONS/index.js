// Task 1
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:
// const arr = [5, 3, 4, 5,6,7,3];
// const arr2 = compact(arr);
// console.log(arr2) ; // [5,3,4,6,7]
console.log('--Task 1--');
const arr = [5, 3, 4, 5, 6, 7, 3];

const compact = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const arr2 = compact(arr);
console.log(arr2);

// Task 2
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
// let arr = createArray(2, 9);
// console.log(arr); // [2,3,4,5,6,7,8,9]
console.log('--Task 2--');
(function () {
    const createArray = (start, end) => {
        const result = [];
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
        return result;
    }

    let arr = createArray(2, 9);
    console.log(arr);
})()

// Task 3
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.
console.log('--Task 3--');
const derivationNumbers = (a, b) => {
    for (let i = a; i <= b; i++) {
        for (let j = 0; j < i - a + 1; j++) {
            console.log(i);
        }
    }
}
derivationNumbers(5, 10);

// Task 4
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]
console.log('--Task 4--');
const randArray = (k) => {
    const arr = [];
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500) + 1)
    }
    return arr;
}

console.log(randArray(5));

// Task 5
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
// let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
// let arrNew = funcName(arr);
//  /* 
// [
// [5, 12, 99, 2, 2, 4, 3],
// [”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
// ] 
// */
console.log('--Task 5--');
(function () {
    const arr = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun'];

    const divideArrByType = (arr) => {
        const arrNumbers = [];
        const arrStrings = [];

        arr.forEach((e) => {
            if (Array.isArray(e)) {
                const [numbers, strings] = divideArrByType(e);
                arrNumbers.push(...numbers);
                arrStrings.push(...strings);
            } else if (typeof e === 'number') {
                arrNumbers.push(e);
            } else {
                arrStrings.push(e);
            }
        });
        return [arrNumbers, arrStrings];
    };

    const arrNew = divideArrByType(arr);
    console.log(arrNew);
})()

// Task 6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. Вид операції визначається цілим числом op:
//  1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.
console.log('--Task 6--');
const calc = (a, b, op) => {
    switch (op) {
        case 1:
            return a - b;
        case 2:
            return a * b;
        case 3:
            return a / b;
        default:
            return a + b;

    }
}

console.log(calc(3, 2, 1));
console.log(calc(3, 2, 2));
console.log(calc(3, 2, 3));
console.log(calc(3, 2, 0));

// Task 7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
// findUnique([1, 2, 3, 5, 3]);  // => false
// findUnique([1, 2, 3, 5, 11]); // => true
console.log('--Task 7--');
const findUnique = (arr) => {
    const count = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (count[element]) {
            count[element]++;
        } else {
            count[element] = 1;
        }
    }
    for (const element in count) {
        if (count[element] > 1) {
            return false;
        }
    }
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
console.log(findUnique([]));
console.log(findUnique([2, 2, 2, 2, 2]));
console.log(findUnique([5, '5', true]));