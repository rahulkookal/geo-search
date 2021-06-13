const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const NodeGeocoder = require('node-geocoder');

const options = {
    provider: 'opencage',
    apiKey: '3f8000c11f4f4782b010ea154674df76',
    formatter: null
};


const getCoOrdinate = async (address) => {
    const geocoder = NodeGeocoder(options);
    const res = await geocoder.geocode(address);
    return res[0]
}
module.exports = getCoOrdinate