const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname,'./public' )));
app.use(express.static(path.join(__dirname,'./node_modules')));

const router = require('./server/routes');
app.use('/', router);
// app.get('/bldgs', (req, res) => {
//   console.log(req);
//   res.status(200).send('hiiiii')
// });

module.exports = app;