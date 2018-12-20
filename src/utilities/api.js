var axios = require('axios');

var ApiKey = '6e349d2742e6cfe3dee6e2a9915f266a';

// function queryWeatherApiCurrentWeather(cityName) {
//   return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName +
//   '&type=accurate&APPID=' + ApiKey)
//   .then(function(data){
//     return data.data;
//   });
// }


function queryWeatherApi5dayForecast(cityName) {
  return axios.get('http://api.openweathermap.org/data/2.5/forecast?q=' + cityName +
  '&units=imperial&APPID=' + ApiKey )
  .then(function(data) {
    return data.data;
  });
}

//export default {queryWeatherApiCurrentWeather, queryWeatherApi5dayForecast};
export default {queryWeatherApi5dayForecast};
