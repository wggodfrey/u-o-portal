import psycopg2 as pg

def init_table(conn):
  curs = conn.cursor()
  curs.execute('DROP TABLE IF EXISTS photos')
  curs.execute('CREATE TABLE photos (building_id VARCHAR(8), room_id VARCHAR(15), w INT, h INT, src VARCHAR(30))')
  curs.execute('ALTER TABLE photos ADD CONSTRAINT constrain_fkey FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE')
  curs.execute('CREATE INDEX ON photos (building_id)')
  curs.execute('CREATE INDEX ON photos (room_id)')

  with open('database/seed/photos/photos.csv', 'r') as photos:
    curs.copy_from(photos, 'photos', sep=',')
  conn.commit()

conn = pg.connect(dbname='manoa', host='localhost', user='will', password='pass')
init_table(conn)
conn.close()
