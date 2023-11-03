//const apikey= "d503fe2fb88dabed26830f3563c4cb5e";
const apikey ="773acb00264d1224e48f50b897b968eb";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox= document.querySelector(".search input")
const seacrhBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city){
    const response = await fetch (apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".weather").style.display="none"
        document.querySelector(".error").style.display="block"
    }
    else {

    var data =await  response.json()
        console.log(data)
    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%"
    document.querySelector(".wind").innerHTML= data.wind.speed +"Km/h"

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src= "images/clouds.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src= "images/drizzle.png"
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src= "images/rain.png"
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src= "images/clear.png"
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src= "images/mist.png"
    }

    document.querySelector(".weather").style.display="block"

}

}

seacrhBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
})