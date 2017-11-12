const express = require("express");
const router = express.Router();
const weather = require("./weather/weatherFetcher");
const {rootPath,} = require("../config");

router.get("/", (request, response) => {
    response.sendFile(rootPath + "/public/index.html");
});

router.get("/:city", weather.sendWeatherOfChosenCity);

module.exports = {
    router,
};