const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.json')[env]
const pointInPolygon = require('@turf/boolean-point-in-polygon').default;
const pointEqual = require('@turf/boolean-equal').default;

const getDeliveryArea = async (lat, long) => {
    //TODO: Move this to cache/redis
    const deliveryAreas = await config.deliveryArea
    const searchAddress = {
        "type": "Point",
        "coordinates": [long, lat]
    }

    const area = deliveryAreas.find(
        (area) => {
            return (area.geometry.type == 'Polygon') ? pointInPolygon(searchAddress, area.geometry) : pointEqual(searchAddress, area.geometry)
        })
    return area
}
module.exports = getDeliveryArea