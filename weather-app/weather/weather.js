const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/586e2e0a0daddb56b05fd30e6b712203/${lat},${lng}`,
    json: true
  }, (error, res, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io servers.');
    } else if (res.statusCode === 400) {
      callback('Unable to fetch weather.');
    }
      else if (!error && res.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
    }
  });
};

module.exports.getWeather = getWeather;
