var superagent = require('superagent');
function sendWeatherOfChosenCity(request, response) {

    function printWeatherOfTheCity(request, response, city) {
        superagent.get('wttr.in/' + city)
            .end((err, res) => {
                if (err) {
                    return response.status(500).send(err);
                }

                response.send(res.text)
            });
    }

    printWeatherOfTheCity(request, response, request.param('city'));
}

module.exports = {
    sendWeatherOfChosenCity
};