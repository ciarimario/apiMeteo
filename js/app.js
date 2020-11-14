const btn = document.getElementById('btn-submit')
const token = '19300c70cce6303be664df99820cbf68'
const content = document.getElementById('content')
const divCity = document.getElementById("div-city");
const divTemp = document.getElementById("div-temp");
const divSky = document.getElementById("div-sky");
const divCountry = document.getElementById("div-country");


const displayMeteo = (data)=>{
  const city = document.getElementById("city").value;
  const temp = data.main.temp;
  const weather = data.weather[0].description;
  const country = data.sys.country;

  divCity.innerHTML = `<h2>${city}</h2>`;
  divTemp.innerHTML = `<h2>${temp}°</h2>`;
  divSky.innerHTML = `<h2>${weather}</h2>`;
  divCountry.innerHTML = `<h2>${country}</h2>`;

}

btn.addEventListener('click', ()=>{
    const inputCity = document.getElementById('city').value
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=fr&appid=${token}`
    fetch(url)
    .then(response=>response.json())
    .then(displayMeteo)
} )

