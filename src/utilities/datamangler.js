function returnDailyWeatherFromRawAPIOutput(apiOutput) {
  const list = apiOutput.list;
  var everyEighthForecast = [];
  var count = 0;
  list.forEach(function (element) {
    count++;
    if (count % 8 == 0) {
      everyEighthForecast.push(element);
      count = 0;
    }
  });
  //console.log(everyEighthForecast);
  return everyEighthForecast;
}


export default returnDailyWeatherFromRawAPIOutput;
