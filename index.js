const api = {
    key:"235751552ef30fed2ff79388ae485033",
    base:"https://api.openweathermap.org/data/2.5/",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

 function setQuery(evt){
    if(evt.keyCode == 13){
        getResults(searchbox.value);
    }
   
 }
 function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
 }

 const iBttn= document.querySelector('.imperialBttn');
 iBttn.addEventListener("click", otherOption);

 function otherOption(query){
    fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
 }




 const mBttn= document.querySelector('.metricBttn');
mBttn.addEventListener("click", optionTwo);

function optionTwo(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather =>{
        return weather.json();
    }).then(displayResults);
}



 function displayResults(weather){
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country} `;

    let now = new Date();
    let newDate = document.querySelector('.location .date');
    newDate.innerText=dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°F</span>`

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText=weather.weather[0].main;

    let hilow= document.querySelector('.hi-low ');
    hilow.innerText = `${Math.round(weather.main.temp_min)} °F / ${Math.round(weather.main.temp_max)} °F `
 }

 function dateBuilder(d){
    let months =["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month= months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
 }


 const locationBttn= document.querySelector('.locationBttn');
 locationBttn.addEventListener('click', getUsersLocation);

 function getUsersLocation(){
 navigator.geolocation.getCurrentPosition;

 }

