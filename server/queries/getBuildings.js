const pg    = require('pg');
const creds = require('./../../aws-credentials.js');
const rs    = creds.rs;

const connectionString = `redshift://${rs.user}:${rs.password}@${rs.host}:${rs.port}/${rs.database}`;

module.exports = (req, res) => {
  
  const client = new pg.Client(connectionString);
  client.connect();
  
  const q = 'SELECT bldg_nm,surv_photos_count \
             FROM uhawaii_ext_buildings';

  client.query(q, (err, data) => {
    client.end();
    if (err) res.status(500).send(err.message);
    else res.status(200).send(data.rows);
  });

};
