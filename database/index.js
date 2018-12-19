const pg = require('pg');
const connectionString = 'postgres://will:pass@localhost:5432/manoa';

module.exports = new pg.Client(connectionString);