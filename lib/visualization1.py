"""
Queries to generate single and dual types.
http://i.imgur.com/c1z5YTa.png
By: reddit@user:ROMaster2
"""
import sqlite3
from random import randint
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

def query_single(id, gen_start=1, gen_until=7):
	query = """
	SELECT pri.fk_pokemon_id 
	FROM   (SELECT fk_pokemon_id, 
	               fk_type_id 
	        FROM   pokemon_type pt 
	        WHERE  pt.fk_type_id = ? 
	               AND pt.slot = 1) pri 
	       LEFT JOIN (SELECT fk_pokemon_id, 
	                         fk_type_id 
	                  FROM   pokemon_type pt 
	                  WHERE  pt.slot = 2) sec 
	              ON pri.fk_pokemon_id = sec.fk_pokemon_id 
	       JOIN fully_evolved fe 
	         ON fe.fk_pokemon_id = pri.fk_pokemon_id 
	WHERE  sec.fk_type_id IS NULL 
	       AND fe.generation_start <= ? 
	       AND fe.generation_until >= ? 
	"""
	cursor.execute(query,[str(id), str(gen_start), str(gen_until)])
	pokemon_ids = cursor.fetchall()
	if len(pokemon_ids) == 0:
		return []
	return pokemon_ids[randint(0, len(pokemon_ids) - 1)]


def query_double(id1, id2, gen_start=1, gen_until=7):
	query = """
	SELECT ct.fk_pokemon_id 
	FROM   (SELECT fk_pokemon_id 
	         FROM   pokemon_type pt 
	         WHERE  pt.fk_type_id = ?
	        INTERSECT 
	        SELECT fk_pokemon_id 
	         FROM   pokemon_type pt 
	         WHERE  pt.fk_type_id = ?) ct 
	       JOIN fully_evolved fe 
	         ON fe.fk_pokemon_id = ct.fk_pokemon_id 
	WHERE  generation_start <=? 
	       AND generation_until >=? 
	"""

	query = """
	SELECT ct.fk_pokemon_id, p.name
	FROM   (SELECT fk_pokemon_id 
	         FROM   pokemon_type pt 
	         WHERE  pt.fk_type_id = ?
	        INTERSECT 
	        SELECT fk_pokemon_id 
	         FROM   pokemon_type pt 
	         WHERE  pt.fk_type_id = ?) ct 
	       JOIN fully_evolved fe 
	         ON fe.fk_pokemon_id = ct.fk_pokemon_id 
	       JOIN pokemon p 
	         ON p.pk_pokemon_id = ct.fk_pokemon_id
	WHERE  generation_start <=? 
	       AND generation_until >=? 
	"""
	cursor.execute(query, [str(id1), str(id2), str(gen_start), str(gen_until)])
	pokemon_ids = cursor.fetchall()
	if len(pokemon_ids) == 0:
		return []
	return pokemon_ids[randint(0, len(pokemon_ids) - 1)]


if __name__ == '__main__':
	types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fight', 'fire',
		 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
		 'psychic', 'rock', 'steel', 'water']

	arrange_by_color = [1,1]

	# Fetch upper triangular only
	counter = 1
	gen = 7
	for i in range(1,19):
		for j in range(counter,19):
			print i, j
			# If they're the same then query for singular type
			if i == j:
				print query_single(i, gen, gen)
			# If they're different then query for different typings
			else:
				print query_double(i, j, gen, gen)
		counter += 1

