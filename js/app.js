// import your Api Key from tokenApiOpenWeather.js
import {apiKey} from './tokenApiOpenWeather.js'

// select Elements from DOM
const btn = document.getElementById('btn-submit')
const content = document.getElementById('content')
const divCity = document.getElementById("div-city");
const divTemp = document.getElementById("div-temp");
const divSky = document.getElementById("div-sky");
const divCountry = document.getElementById("div-country");

// Constant City By Default
const defaultCity = "aubervilliers";

// function Display Meteo Informations
function displayMeteo(data) {
    
    const city = document.getElementById("city").value !="" ? document.getElementById("city").value : defaultCity;
    // Temperature 
    const temp = data.main.temp;
    // Weather Info
    const weather = data.weather[0].description;
    // Country Info
    const country = data.sys.country;
    
    // Insert Info in Elements of the Dom
    divCity.innerHTML = `<h2>${city}</h2>`;
    divTemp.innerHTML = `<h2>${temp}°</h2>`;
    divSky.innerHTML = `<h2>${weather}</h2>`;
    divCountry.innerHTML = `<h2>${country}</h2>`;
}

// Display Meteo Informations from Default City
getMeteo()

// 
btn.addEventListener('click', ()=>{
    const inputCity = document.getElementById('city').value
    getMeteo(inputCity)
} )

// function getMeteo
// Get Meteo Information from InputCity or default city
function getMeteo(inputCity= defaultCity) {
    
    // Api openWeather
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=fr&appid=${apiKey}`
    
    // Ajax request
    fetch(url)
    .then(response=>response.json())
    .then(displayMeteo)
}

