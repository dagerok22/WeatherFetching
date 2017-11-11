var express = require('express');
var router = express.Router();
var weather = require('./weather/weatherFetcher');

router.get('/', (request, response) => {
    response.sendfile('public/index.html');
});

router.get('/:city', weather.sendWeatherOfChosenCity);

module.exports = {
    router
};