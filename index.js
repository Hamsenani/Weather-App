const apiKey = "fdda77108d06120399c29646199a022e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchkBox = $(".search input");
const searchBtn = $(".search button");

async function checkweather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
    var data = await response.json();

    $(".city").html(data.name);
    $(".temp").html( Math.round(data.main.temp)  + "°C");
    $(".humidity").html( data.main.humidity + "%");
    $(".wind").text(Math.round(data.wind.speed) + " km/h");
    console.log(data);
    console.log(data.weather[0].main);
    const weatherIcon = data.weather[0].main;
    $(".weather-icon").attr("src","./images/"+ weatherIcon + ".png"); 
}
$(searchBtn).click(function() {
   var city = $(searchkBox).val();
   checkweather(city);
});