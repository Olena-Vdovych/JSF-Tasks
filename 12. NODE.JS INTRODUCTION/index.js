// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, тип операційної системи, час роботи системи в хвилинах (використати модуль OS), поточну робочу директорію і назву файлу сервера (використати модуль path).

const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html><body><h1>Server Information</h1>`);
    res.write(`<p>Current user: ${os.userInfo().username}</p>`);
    res.write(`<p>Operating system type: ${os.type()}</p>`);
    res.write(`<p>Uptime (minutes): ${Math.floor(os.uptime() / 60)}</p>`);
    res.write(`<p>Current working directory: ${process.cwd()}</p>`);
    res.write(`<p>Server file name: ${path.basename(__filename)}</p>`);
    res.write(`</body></html>`);
    res.end();
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
