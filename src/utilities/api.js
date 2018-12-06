var axios = require('axios');

var ApiKey = '306e3d507941f97dea8e772d12255550';

function queryWeatherApiCurrentWeather(cityName) {
  axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
  '&type=accurate&APPID=' + ApiKey)
  .then(function(data){
    console.log(data.data);
  });
}


function queryWeatherApi5dayForecast(cityName) {
  axios.get('http://api.openweathermap.org/data/2.5/forecast/daily?q=' + cityName +
  '&type=accurate&APPID=' + ApiKey + '&cnt=5')
  .then(function(data) {
    console.log(data);
  });
}

module.exports = {queryWeatherApiCurrentWeather, queryWeatherApi5dayForecast};
