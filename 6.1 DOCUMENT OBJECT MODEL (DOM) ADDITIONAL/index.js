const displayTime = () => {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    let months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'];

    if (hours < 10) {
        hours = "0" + hours;
    };

    if (minutes < 10) {
        minutes = "0" + minutes;
    };

    if (seconds < 10) {
        seconds = "0" + seconds;
    };

    if (day < 10) {
        day = "0" + day;
    };

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('day').textContent = day;
    document.getElementById('month').textContent = months[month];
    document.getElementById('year').textContent = year;

    if (seconds == 59) {
        document.getElementById('leap-second').textContent = 'leap second';
    } else {
        document.getElementById('leap-second').textContent = '';
    }
}

setInterval(displayTime, 1000);