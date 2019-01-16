const controller = require('./controllers');

const router = require('express').Router();
router.route('/buildings').get(controller.buildings.get);
router.route('/rooms/:building_id').get(controller.rooms.get);
router.route('/photos/:building_id/:room_id').get(controller.photos.get);

module.exports = router;