const db = require('./index.js');
db.connect();

const models = {};

models.buildings = {
  get: (cb) => {
    const q = `
              SELECT buildings.id, buildings.nm, buildings.lat, buildings.lng,
                     SUM(CASE WHEN rooms.nces_cat = 'Classroom' THEN rooms.nsf ELSE 0 END) as classroom_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Classroom' THEN 1 ELSE 0 END) as classroom_cnt,
                     SUM(CASE WHEN rooms.nces_cat = 'Class Laboratory' THEN rooms.nsf ELSE 0 END) as classlab_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Class Laboratory' THEN 1 ELSE 0 END) as classlab_cnt,
                     SUM(CASE WHEN rooms.nces_cat = 'Open Laboratory' THEN rooms.nsf ELSE 0 END) as openlab_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Open Laboratory' THEN 1 ELSE 0 END) as openlab_cnt,
                     SUM(CASE WHEN rooms.nces_cat = 'Research Laboratory' THEN rooms.nsf ELSE 0 END) as researchlab_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Research Laboratory' THEN 1 ELSE 0 END) as researchlab_cnt,
                     SUM(CASE WHEN rooms.nces_cat = 'Office Facilities' THEN rooms.nsf ELSE 0 END) as officefac_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Office Facilities' THEN 1 ELSE 0 END) as officefac_cnt,
                     SUM(CASE WHEN rooms.nces_cat = 'Study Facilities' THEN rooms.nsf ELSE 0 END) as studyfac_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Study Facilities' THEN 1 ELSE 0 END) as studyfac_cnt,
                     SUM(CASE WHEN rooms.nces_cat = 'Special Use Facilities' THEN rooms.nsf ELSE 0 END) as specialuse_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'General Use Facilities' THEN rooms.nsf ELSE 0 END) as generaluse_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Support Facilities' THEN rooms.nsf ELSE 0 END) as support_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Health Care Facilities' THEN rooms.nsf ELSE 0 END) as healthcare_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Residential Facilities' THEN rooms.nsf ELSE 0 END) as residential_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Circulation' THEN rooms.nsf ELSE 0 END) as circulation_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Building Service' THEN rooms.nsf ELSE 0 END) as bldgsvc_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Mechanical' THEN rooms.nsf ELSE 0 END) as mechanical_nsf,
                     SUM(CASE WHEN rooms.nces_cat = 'Unclassified Space' THEN rooms.nsf ELSE 0 END) as unclassified_nsf
              FROM buildings 
              INNER JOIN rooms ON rooms.building_id = buildings.id
              GROUP BY buildings.id
              ORDER BY buildings.nm ASC`;
    db.query(q, cb);
  }
}

models.rooms = {
  get: (cb, opts) => {
    const q = `
              SELECT rooms.*,  
                     buildings.nm as building_nm
              FROM rooms 
              INNER JOIN buildings ON rooms.building_id = buildings.id
              WHERE building_id = '${opts.building_id}' 
              ORDER BY rooms.nm ASC`;
    db.query(q, cb);
  }
}

//TODO: REFACTOR QUERY TO USE ONLY 1 ID - ROOM ID IS UNIQUE
models.photos = {
  get: (cb, opts) => {
    const q = `
              SELECT *  
              FROM photos 
              WHERE building_id = '${opts.building_id}' ${opts.room_id !== 'ALL'? 'and ': ''}
                    ${opts.room_id !== 'ALL'? 'room_id = \'' + opts.room_id + '\'': ''}
              ORDER BY src ASC`;
    db.query(q, cb);
  },
  post: (cb, opts, file) => {
    console.log(cb, opts, file);
    cb(null, 'hi');
  }
}

module.exports = models;
