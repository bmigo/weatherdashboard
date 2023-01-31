var apiKey = "07399528a755541d8f71ebec6bd73b42";
//var today = moment().format('L'); // NOT DEFINED CURRENTLY, CHECK MOMENT
var searchList = [];

var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
var queryURL2 = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";

fetch(queryURL);

$('.searchBtn').on("click", function() {
    var cityName = document.getElementById("cityInput");
    console.log(cityName);
});


