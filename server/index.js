const path    = require('path');
const morgan  = require('morgan');
const express = require('express');
const app     = express();
app.use(express.static(path.join(__dirname,'./../public' )));
app.use(express.static(path.join(__dirname,'./../node_modules')));
app.use(morgan('combined'));

const router = require('./routes');
app.use('/', router);

const port = 1502;
app.listen(port, () => {
  console.log(`>>>>>>>>>>>> listening on port ${port}`);
});