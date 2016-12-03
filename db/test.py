"""
Queries to generate single and dual types.
http://i.imgur.com/c1z5YTa.png
By: reddit@user:ROMaster2
"""

import sqlite3
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

def query_single(id):
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
	WHERE  sec.fk_type_id IS NULL 
	"""
	cursor.execute(query, str(id))
	pokemon_ids = cursor.fetchall()
	return pokemon_ids


def query_double(id1, id2, gen_id):
	"""
	SELECT ct.fk_pokemon_id
	FROM (
	        (SELECT fk_pokemon_id
	         FROM pokemon_type pt
	         WHERE pt.fk_type_id=?)
	      UNION
	        (SELECT fk_pokemon_id
	         FROM pokemon_type pt
	         WHERE pt.fk_type_id=?)) ct
	JOIN
	  (SELECT fk_pokemon_id
	   FROM fully_evolved fe
	   WHERE generation_until=?) fe ON fe.fk_pokemon_id = ct.fk_pokemon_id
	"""
	cursor.execute(query, str(id1))
	pokemon_ids = cursor.fetchall()
	return pokemon_ids


if __name__ == '__main__':
	types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fight', 'fire',
		 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
		 'psychic', 'rock', 'steel', 'water']

	arrange_by_color = [1,1]

	# Fetch upper triangular only
	# counter = 1
	# for i in range(1,18):
	# 	for j in range(counter,18):
	# 		# If they're the same then query for singular type
	# 		if i == j:
	# 			query_single()
	# 		# If they're different then query for different typings
	# 		else:
	# 			query_double()

