const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=92c4125dbe53debdc252d8ede2eb4c2a&query=' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const wData = body.current
            callback(undefined, `${wData.weather_descriptions[0]}. It is currently ${wData.temperature} degress out. It feels like ${wData.feelslike} degress out and humidity is ${wData.humidity}.`)
        }
    })
}

module.exports = forecast