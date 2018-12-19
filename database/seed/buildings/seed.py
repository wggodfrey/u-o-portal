import psycopg2 as pg

def init_table(conn):
  curs = conn.cursor()
  curs.execute('DROP TABLE IF EXISTS buildings')
  curs.execute('CREATE TABLE buildings (id VARCHAR(8) PRIMARY KEY, nm VARCHAR(100), lat NUMERIC, lng NUMERIC)')
  with open('database/seed/buildings/buildings.csv', 'r') as buildings:
    curs.copy_from(buildings, 'buildings', sep=',')
  conn.commit()

conn = pg.connect(dbname='manoa', host='localhost', user='will', password='pass')
init_table(conn)
conn.close()
