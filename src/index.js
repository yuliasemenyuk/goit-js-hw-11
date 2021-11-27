
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const input = document.querySelector('#search-box');
const countryInfoCard = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

input.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));

function searchCountry () {
    
    const name = input.value.trim();
    console.log(name);
        fetchCountries(name).then(showCountryCard).catch(showError)
}

function showCountryCard(counrtries) {
    clearPage();

    if (counrtries.length > 10) {
        // clearPage();
        return Notify.success("Too many matches found. Please enter a more specific name.");
        
       } 
    else if ((counrtries.length >= 2) && (counrtries.length <= 10)) {
        // clearPage();
        console.log("--------");
        counrtries.map(({ name, flags }) => {
        countryList.insertAdjacentHTML('beforeend', `<li class ="country-list__item"><img class = "flag" src='${flags.svg}' alt="flag" width="60" height="30"></img>${name.official}</li>`)  
        })
    }
    else if (counrtries.length === 1) {
        // clearPage();
        counrtries.map(({ name, capital, population, flags, languages }) => {
        let langs = [];
        Object.values(languages).forEach(language => {
            langs.push(language);
        });
        countryInfoCard.innerHTML = `<h2 class = "title"><img class = "flag" src="${flags.svg}" alt="flag" width="60" height="30"></img>${name.official}</h2>
  <h3>Capital : <span class = "text">${capital}</span></h3>
  <h3>Population : <span class = "text">${population}</span></h3>
  <h3>Languages : <span class = "text">${langs}</span></h3>`;
    })
}

}


function showError() {
    return Notify.failure("Oops, there is no country with that name");
}
function clearPage() {
    countryInfoCard.innerHTML = '';
    countryList.innerHTML = '';
}

