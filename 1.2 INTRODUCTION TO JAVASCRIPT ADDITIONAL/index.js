(function () {

    const findCompartment = () => {
        const btn = document.getElementById('button');
        btn.addEventListener('click', () => {
            const seatNumber = document.getElementById('seatNumber').value;
            const compartmentNumber = Math.ceil(seatNumber / 4);
            const seatType = (compartmentNumber % 2) === 0 ? 'бокове' : 'не бокове';
            const seatPositionCompartment = (compartmentNumber % 4 === 1 || compartmentNumber % 4 === 2) ? 'нижнє' : 'верхнє';

            const result = document.getElementById('resultCompartment');
            result.innerHTML = `Дані по вашому квитку: купе № ${compartmentNumber}, місце ${seatType}, розташування ${seatPositionCompartment}`;
        })
    }
    findCompartment();

})();