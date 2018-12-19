const models = require('./../../database/models.js');

const controller = {}

controller.buildings = {
  get: (req, res) => {
    models.buildings.get((err, data) => {
      if (err) res.status(500).send(err.message);
      else res.status(200).send(data.rows);
    });
  }
}

controller.rooms = {
  get: (req, res) => {
    models.rooms.get((err, data) => {
      if (err) res.status(500).send(err.message);
      else res.status(200).send(data.rows);
    },req.params);
  }
}

controller.photos = {
  get: (req, res) => {
    models.photos.get((err, data) => {
      if (err) res.status(500).send(err.message);
      else res.status(200).send(data.rows);
    },req.params);
  },
  post: (req, res) => {
    models.photos.post((err, data) => {
      if(err) res.status(500).send(err.message);
      else res.status(200).send(data.rows);
    }, req.params, req.body);
  }
}


module.exports = controller;