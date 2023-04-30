// 1.
// Напишіть клас Круг та реалізуйте функціонал:
// - Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
// - Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
// - Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
// - Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
// - Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
// - Визначте метод перевірки попадання крапки до кола;
// - Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
console.log("-- Task 1 --");
class Circle {
    constructor(centerX, centerY, radius) {
        this.centerX = centerX;
        this.centerY = centerY;
        this.radius = radius;
    }
    getLength() {
        return 2 * Math.PI * this.radius;
    }
    static getLengthByRadius(radius) {
        return 2 * Math.PI * radius;
    }
    getCopy() {
        return new Circle(this.centerX, this.centerY, this.radius);
    }
    static getCircle(centerX, centerY, radius) {
        return new Circle(centerX, centerY, radius);
    }
    isPointInside(x, y) {
        return (
            Math.sqrt((x - this.centerX) ** 2 + (y - this.centerY) ** 2) <=
            this.radius
        );
    }
    toString() {
        return `Circle[centerX=${this.centerX}, centerY=${this.centerY}, radius=${this.radius}]`;
    }
}

const circle1 = new Circle(2, 3, 5);

console.log(circle1.getLength());

console.log(Circle.getLengthByRadius(5));

console.log(circle1.getCopy());

console.log(Circle.getCircle(2, 3, 5));

console.log(circle1.isPointInside(2, 3));

console.log(circle1.toString());

// 2.
// Напишіть функцію propsCount(currentObject), яка приймає об’єкт і визначає кількість властивостей цього об’єкта.
// Наприклад:
//  let mentor = {
//             course: "JS fundamental",
//             duration: 3,
//             direction: "web-development"
//         };
// propsCount(mentor);  // 3
console.log("--Task 2--");

function propsCount(currentObject) {
    return Object.keys(currentObject).length;
}

let emptyObj = {};

console.log(propsCount(emptyObj));

let person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA",
    },
};

console.log(propsCount(person));

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    features: ["backup camera", "lane departure warning", "automatic headlights"],
};

console.log(propsCount(car));

// 3. 
// -  Створіть клас Person, у якого конструктор приймає параметри name і surname, а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
// - Від класу Person наслідується клас Student, конструктор якого крім name і surname, приймає параметр year (рік вступу до університету). 
// - В класі Student необхідно перевизначити метод showFullName(midleName), щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
// - Також в класі Student необхідно реалізувати метод showCourse(), який виводитиме поточний курс студента (від 1 до 6). Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
// Приклад результату:
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
// console.log("Current course: " + stud1.showCourse()); //Current course: 4
console.log('--Task 3--');

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(middleName) {
        return `${super.showFullName()} ${middleName}`;
    }

    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year + 1;
        return course >= 1 && course <= 6 ? course : 'Unknown';
    }
}

let stud1 = new Student('Petro', 'Petrenko', 2019);

console.log(stud1.showFullName('Petrovych'));

console.log('Current course: ' + stud1.showCourse());

// 4. 
// А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
// - поле, яке зберігає колір маркера;
// - поле, яке зберігає кількість чорнила в маркері (у відсотках);
// - метод друку (метод приймає рядок і виводить текст відповідним кольором;
// текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).
// В. Реалізувати клас, що описує маркер, що заправляється, успадкувавши його від простого маркера і додавши метод для заправки маркера. Продемонструвати роботу написаних методів
console.log('--Task 4--');

class Marker {
    constructor(color, ink) {
        this.color = color;
        this.ink = ink;
    }

    print(text) {
        let inkUsage = text.replace(/\s/g, '').length * 0.5;

        if (inkUsage > this.ink) {
            console.log('The marker is out of ink!');
        } else {
            console.log(`Printing '${text} in ${this.color}`);
            this.ink -= inkUsage;

        }
    }
}

class descriptionMarker extends Marker {
    constructor(color, ink, inkCapacity) {
        super(color, ink);
        this.inkCapacity = inkCapacity;
    }

    refill() {
        this.ink = this.inkCapacity;
        console.log(`Refilled the marker with ${this.color} color`);
    }
}

const marker1 = new Marker('red', 20);
marker1.print('Hello World!'); // Printing 'Hello World!' in red color.
marker1.print('Lorem ipsum dolor sit amet, consectetur adipiscing elit.'); // The marker is out of ink!

const marker2 = new descriptionMarker('blue', 50, 100);
marker2.print('The quick brown fox jumps over the lazy dog.'); // Printing 'The quick brown fox jumps over the lazy dog.' in blue color.
marker2.refill(); // Refilled the marker with blue color.
marker2.print('The quick brown fox jumps over the lazy dog.'); // Printing 'The quick brown fox jumps over the lazy dog.' in blue color.

// 5.
// Створіть клас Worker який буде мати конструктор, який приймає наступні властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
//        1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
//        2) додати приватне поле experience і присвоїти йому значення 1.2 і використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). Вивести значення зарплати з цим коефіцієнтом.
//        3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
//         4) Вивести значення зарплати з новим experience.
//         5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:   worker_fullName: salary_value 
//         6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
// Example usage:
// let worker1 = new Worker("John Johnson", 20, 23);
// console.log(worker1.fullName);                 
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// . . . . . .

// let worker3 = new Worker("Andy Ander", 29, 23);
// . . . . . .

// Output example:
// John Johnson
// John Johnson salary: 460
// New experience: 1.2
// John Johnson salary: 552
// New experience: 1.5
// John Johnson salary: 690

// Tom Tomson
// Tom Tomson salary: 1056
// . . . . . .
// New experience: 1.5
// Tom Tomson  salary: 1584

// Andy Ander
// Andy Ander salary: 667
// . . . . . .
// New experience: 1.5
// Andy Ander  salary: 1000.5

// Sorted salary:
// John Johnson: 690
// Andy Ander: 1000.5
// Tom Tomson: 1584
console.log('--Task 5--');
class Worker {
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
        this._experience = 1.2;
    }

    showSalary() {
        const salary = this.dayRate * this.workingDays;
        console.log(`${this.fullName} salary: ${salary}`);
        return salary;
    }

    showSalaryWithExperience() {
        const salary = this.dayRate * this.workingDays * this._experience;
        console.log(`${this.fullName} salary with experience: ${salary}`);
        return salary;
    }

    get experience() {
        return this._experience;
    }

    set experience(value) {
        this._experience = value;
    }

    static sortBySalary(workers) {
        const salariesWithExperience = workers.map(worker => {
            const salary = worker.dayRate * worker.workingDays * worker.experience;
            return { worker, salary };
        });
        const sortedSalaries = salariesWithExperience.sort((a, b) => a.salary - b.salary);

        console.log('Sorted salary:');
        sortedSalaries.forEach((item, index) => {
            const {worker, salary} = item;
            console.log(`${index + 1}. ${worker.fullName}, salary: ${salary}`);
        });

        return sortedSalaries.map(item => item.worker);
    }
}

const worker1 = new Worker("John Smith", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log(`New experience: ${worker1.fullName} ${worker1.experience}`)
worker1.showSalaryWithExperience();
worker1.experience = 1.5;
console.log(`New experience: ${worker1.fullName} ${worker1.experience}`);
worker1.showSalaryWithExperience();

const worker2 = new Worker("Tom Black", 30, 18);
console.log(worker2.fullName);
worker2.showSalary();
console.log(`New experience: ${worker2.fullName} ${worker2.experience}`);
worker2.showSalaryWithExperience();
worker2.experience = 1.5;
console.log(`New experience: ${worker2.fullName} ${worker2.experience}`);
worker2.showSalaryWithExperience();

const worker3 = new Worker("Anna White", 25, 22);
console.log(worker3.fullName);
worker3.showSalary();
console.log(`New experience: ${worker3.fullName} ${worker3.experience}`);
worker3.showSalaryWithExperience();
worker3.experience = 1.5;
console.log(`New experience: ${worker3.fullName} ${worker2.experience}`);
worker3.showSalaryWithExperience();

const workers = [worker1, worker2, worker3];
Worker.sortBySalary(workers);






