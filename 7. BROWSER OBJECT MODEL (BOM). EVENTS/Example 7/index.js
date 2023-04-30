// 7-7. 
// На сторінці потрібно реалізувати 2 випадаючих списки. 
// У першому містяться назви країн, у другому – назви міст. 
// Реалізувати роботу таким чином, щоб коли вибирається 
// з лівого випадаючого списку певна країна - в правому випадаючому  списку 
// з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. 
// Також потрібно нижче вивести назву обраної країни і місто.
const citiesByCountry = {
    USA: ['New York', 'Chicago', 'Los Angeles'],
    Canada: ['Toronto', 'Vancouver', 'Montreal'],
    Ukraine: ['Kyiv', 'Lviv', 'Poltava'],
};

const populateCities = () => {
    const countrySelect = document.getElementById('countries');
    const citySelect = document.getElementById('cities');
    const selectedCountry = countrySelect.value;

    selectedCountryElement.innerText = selectedCountry;
    selectedCityElement.innerText = '';

    if(selectedCountry) {
        citySelect.innerHTML = '';

        const cities = citiesByCountry[selectedCountry];
        cities.forEach((city) => {
            const option = document.createElement('option');
            option.value = city;
            option.text = city;
            citySelect.appendChild(option);
        });
    }

    citySelect.addEventListener('change', () => {
        selectedCityElement.innerText = citySelect.value;
    })
}

const selectedCountryElement = document.getElementById('selectedCountry');
const selectedCityElement = document.getElementById('selectedCity');

populateCities();

document.getElementById('countries').addEventListener('change', populateCities);