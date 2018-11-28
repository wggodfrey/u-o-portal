const getBuildings = require('./queries/getBuildings');

const router = require('express').Router();
router.route('/bldgs').get(getBuildings);


module.exports = router;