const superagent = require("superagent");

function sendWeatherOfChosenCity(request, response) {

    function getWeatherPromise(request, response, city) {
        return new Promise((resolve, reject) => {
            "use strict";
            superagent
                .get("wttr.in/" + city)
                .end((err, res) => {
                    if (err) {
                        reject(err);
                    }else {
                        resolve(res);
                    }
                });
        });
    }

    const weatherPromise = getWeatherPromise(request, response, request.params["city"]);
    weatherPromise
        .then(res=>{
            "use strict";
            response.end(res.text);
        })
        .catch(err=>{
            "use strict";
            response.statusCode(500);
            response.end(err);
        })
}

module.exports = {
    sendWeatherOfChosenCity,
};