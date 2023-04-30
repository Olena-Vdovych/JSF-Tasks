(function() {
    //Task 2
    console.log('Vdovych');

    //Task 3
    let apple = 2;
    let banana = 4;
    console.log(apple, banana);
    apple = banana;
    console.log(apple, banana);

    //Task 4
    const myObject = {
        myString: 'Hello',
        myNumber: 33,
        myBoolean: false,
        myUndefined: undefined,
        myNull: null
    };

    //Task 5
    const isAdult = confirm('Are you 18 years old?');
    console.log(isAdult);

    //Task 6
    const firstName = 'Olena';
    const lastName = 'Vdovych';
    const group = 'JS Fundamentals';
    const birthdayYear = 1989;
    const isMarried = false;

    console.log(typeof birthdayYear, typeof isMarried, typeof firstName, typeof lastName, typeof group);

    const nullValue = null;
    const undefinedValue = undefined;

    console.log(typeof nullValue, typeof undefinedValue);

    //Task 7
    const userLogin = prompt('Please, write your login');
    const userEmail = prompt('Please, write your email');
    const userPassword = prompt('Please, write your password');
    alert(`Dear ${userLogin}, your email is ${userEmail}, your password is ${userPassword}`);

    //Task 8
    const secondsPerHour = 60 * 60;
    const secondsPerDay = 24 * secondsPerHour;
    const secondsPerMonth = 30 * secondsPerDay;
    
    console.log(`The number of seconds in an hour: ${secondsPerHour}`);
    console.log(`The number of seconds in a day: ${secondsPerDay}`);
    console.log(`The number of seconds in a month: ${secondsPerMonth}`);
})();