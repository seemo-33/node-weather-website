const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic2VlbW8tMTMiLCJhIjoiY2twd3JweWp2MDNyYTJybG95d2l4MzhweCJ9.y0UGqEkmZnEvsC6eEeHD5w&limit=1'

    request({ url, json : true }, (error, { body }) =>{
        if(error){
            callback('Unable to connect to the Geo service!')
        }else if(body.features.length === 0){
            callback('Unable to find the geo location! Please try with something else!')
        }else {
            callback(undefined, {
                lattitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location  : body.features[0].place_name
            })
        }
    })
}

module.exports = geocode



//geocoding

// const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2VlbW8tMTMiLCJhIjoiY2twd3JweWp2MDNyYTJybG95d2l4MzhweCJ9.y0UGqEkmZnEvsC6eEeHD5w&limit=1' //Los%20Angeles

// request({url : geoUrl, json : true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the Geo service!')
//     } else if (response.body.features.length === 0){
//         console.log('Unable to find the geo location! Please try with something else!')
//     } else {
//         const lattitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log('Lattide : ' + lattitude)
//         console.log('Longitude : ' + longitude)
//     }
    
// })
