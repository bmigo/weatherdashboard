var apiKey = "07399528a755541d8f71ebec6bd73b42";
var today = moment().format('L');
var searchList = [];

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}";
