const letters = 'ABCDEFGHIJKLMNOPQRSTUVYZ'; // No country begins with 'X' or 'W'

let countries = [];

let currentLetter = '';

document.addEventListener('DOMContentLoaded', async event => {
    const res = await fetch('https://countries.ekmwest.io/countries.json');
    countries = await res.json();
});

document.addEventListener('click', event => {
    if (!event.target.matches('.new-letter-button')) {
        return;
    }

    const countriesPanel = document.querySelector('.countries-panel');

    countriesPanel.classList.remove('EXPANDED');

    let letter = letters[Math.floor(Math.random() * letters.length)];

    const letterElement = document.querySelector('.random-letter span');
    letterElement.textContent = letter;

    const selectedCountries = countries.filter(country => country.independent && country.common_name.startsWith(letter));

    console.log(selectedCountries)

    const countriesElement = document.querySelector('.countries');

    countriesElement.innerHTML = selectedCountries.map(c => `<p>${c.common_name}</p>`).join('');

});

document.addEventListener('click', event => {
    const toggleButton = event.target.closest('.toggle-countries-button');
    if (!toggleButton) {
        return;
    }

    const countriesPanel = toggleButton.closest('.countries-panel');

    countriesPanel.classList.toggle('EXPANDED');
});
