// Example 1 
let incomePayment = Number(prompt('Введіть бажаний дохід:'));
let lateness = Number(prompt('Введіть кількість запізнень:'));
let linesOfCode = Math.floor((incomePayment / 50) * 100);
if (lateness >= 3) {
    linesOfCode -= (lateness - 2) * 50;
}
alert(`Вам потрібно написати ${linesOfCode} рядків коду`);

// Example 2
let writtenLines = Number(prompt('Введіть кількість написаних рядків коду:'));
let desiredIncome = Number(prompt('Введіть бажаний дохід:'));
let remainingLines = Math.floor((desiredIncome / 50) * 100) - writtenLines;
let remainingLateness = Math.ceil((writtenLines / 100) / 3) - 1;
alert (`Ви можете запізнитися ще ${remainingLateness} разів`);

// Example 3
let linesCode = Number(prompt('Введіть кількість рядків коду:'));
let numberOfLateness = Number(prompt('Введіть кількість запізнень:'));
let payment = Math.floor(linesCode / 100) * 50;
if (numberOfLateness >= 3) {
    payment -= (numberOfLateness - 2) * 20;
} else if (payment < 0) {
    payment = 0;
}
alert(`Вам заплатять ${payment}`);