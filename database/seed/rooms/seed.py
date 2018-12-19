import psycopg2 as pg

def init_table(conn):
  curs = conn.cursor()
  curs.execute('DROP TABLE IF EXISTS rooms')
  curs.execute('CREATE TABLE rooms (id VARCHAR(15) PRIMARY KEY, nm VARCHAR(40), floor VARCHAR(3), nsf INT, capacity INT, nces_code VARCHAR(5), nces_cat VARCHAR(40), nces_det VARCHAR(40), dept VARCHAR(60), building_id VARCHAR(8))')
  curs.execute('ALTER TABLE rooms ADD CONSTRAINT constrain_fkey FOREIGN KEY (building_id) REFERENCES buildings(id) ON DELETE CASCADE')
  curs.execute('CREATE INDEX ON rooms (nces_code)')
  curs.execute('CREATE INDEX ON rooms (nces_cat)')
  curs.execute('CREATE INDEX ON rooms (dept)')
  curs.execute('CREATE INDEX ON rooms (building_id)')

  with open('database/seed/rooms/rooms.csv', 'r') as rooms:
    curs.copy_from(rooms, 'rooms', sep=',')
  conn.commit()

conn = pg.connect(dbname='manoa', host='localhost', user='will', password='pass')
init_table(conn)
conn.close()
