let inputvalue = document.querySelector('#cityinput');
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput');
let descrip = document.querySelector('#description');
let temp = document.querySelector('#temp');
let wind = document.querySelector('#wind');
apik = "63a90ae96d390ec37d6c1252f5a86e1a"
function conversion(val){
    return(val -273).toFixed(3)
}
btn.addEventListener('click', function(){

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputvalue.value+'&appid='+apik).then(res => res.json())
    .then(data=>
    {
        let nameval = data['name']
        let descrip = data['weather']['0']['description']
        let temperature = data['main']['temp']
        let windspeed = data['wind']['speed']
        city.innerHTML =`weather of <span>${nameval}<span>`
        temp.innerHTML = `Temperature:<span>${conversion(temperature)} C</span`
        description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
        wind.innerHTML= `wind Speed: <span>${windspeed} km/h<span`


    })
    .catch(err => alert("you entered Wrong City name"))
});