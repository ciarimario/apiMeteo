const btn = document.getElementById('btn-submit')
const token = '19300c70cce6303be664df99820cbf68'
const content = document.getElementById('content')

const displayMeteo = (data)=>{
    const city = document.getElementById('city').value
    const temp = data.main.temp
    const weather = data.weather[0].description
    const country = data.sys.country
    content.innerHTML = `Le temps est ${weather} et la tempéraure est actuellement de ${temp} degré(s) à ${city} qui se trouve en ${country}`
    content.innerHTML += '</br>salut je suis Sofia'
}

btn.addEventListener('click', ()=>{
    const inputCity = document.getElementById('city').value
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&lang=fr&appid=${token}`
    fetch(url)
    .then(response=>response.json())
    .then(displayMeteo)
} )

