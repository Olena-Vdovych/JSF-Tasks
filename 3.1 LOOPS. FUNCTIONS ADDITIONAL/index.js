// Створити функцію create() , яка приймає один аргумент у вигляді рядка. Ця функція повертає анонімну функцію, яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
// const tom = create("pass_for_Tom");
// tom("pass_for_Tom"); //повертає true 
// tom("pass_for_tom"); //повертає false
function create (password) {
    return function (input) {
        return input === password
    }
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom")); 

