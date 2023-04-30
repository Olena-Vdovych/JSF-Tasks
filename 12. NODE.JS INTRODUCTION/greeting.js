// 12-2.
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
//         Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:
// Date of request: Sun Dec 08 2019 22:13:32 GMT+0200 (GMT+02:00)
// Good evening, oivaniu

const http = require("http");
const os = require('os');
const personalModule = require("./personalmodule");

const server = http.createServer((req, res) => {
    const user = os.userInfo().username;
    const greetingMsg = personalModule.greeting(user);
    const currentDate = new Date().toLocaleString();

    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`Date of request: ${currentDate}<br>`);
    res.write(`${greetingMsg}`);
    res.end();
});

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
