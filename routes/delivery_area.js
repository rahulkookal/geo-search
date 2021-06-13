var express = require('express');
var router = express.Router();
const getDeliveryArea = require('../lib/get_delivery_area')
const getCoOrdinate = require('../lib/get_coordinate')

/* GET users listing. */
router.get('/', async function(req, res, next) {
    try {
        const {
            address
        } = req.query
        const {
            latitude,
            longitude
        } = await getCoOrdinate(address)
        result = await getDeliveryArea(latitude, longitude)
        res.json(result.properties)
    } catch (error) {
        res.json({
            'Name': 'Not found'
        })
    }
});

module.exports = router;