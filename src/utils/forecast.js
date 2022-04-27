const request = require('request')

const forecast = (lattitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=996734b9dc56d39038499053ca66bd26&query=' + lattitude + ',' + longitude

    request({ url, json : true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to the weather service!')
        } else if (body.error){
            callback('Unable to find location!')
        } else{
            callback( undefined, 'It is currently ' + body.current.temperature + 
                     ' degrees out. There is ' + body.current.precip + '% chance of rain. The weather is ' 
                     + body.current.weather_descriptions + ' with a wind speed of ' + 
                     body.current.wind_speed + ' and wind direction is from ' + body.current.wind_dir)
        }        
    })
}

module.exports = forecast


// const url = 'http://api.weatherstack.com/current?access_key=996734b9dc56d39038499053ca66bd26&query=40.7128,-74.0060'  //&language=es' //weatherstack API

// request({ url : url, json : true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service!')
//     } else if (response.body.error){
//         console.log('Unable to find location!')
//     } else{
//         console.log( response.body.current.weather_descriptions + '. It is currently ' + response.body.current.temperature + 
//             ' degrees out. There is ' + response.body.current.precip + '% chance of rain')
//     }

// })