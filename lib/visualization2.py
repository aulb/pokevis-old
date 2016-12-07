"""
Queries to generate types per generation ala serebii
Todo:
"""
import sqlite3
from random import randint
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

def basic_type_count(type_id, gen):
	query = """
	SELECT COUNT(*)
	FROM   pokemon_type pt 
	       JOIN pokemon p 
	         ON pt.fk_pokemon_id = p.pk_pokemon_id 
	WHERE p.fk_generation_id <= ?
	AND pt.fk_type_id = ?
	"""
	cursor.execute(query, (str(type_id), str(gen)))
	return cursor.fetchone()

def type_exclude():
	# Exclude all forms
	# Exclude all megas
	pass


if __name__ == '__main__':
	pass
	# types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fight', 'fire',
	# 	 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
	# 	 'psychic', 'rock', 'steel', 'water']

	# arrange_by_color = [1,1]

	# # Fetch upper triangular only
	# counter = 1
	# gen = 7
	# for i in range(1,19):
	# 	for j in range(counter,19):
	# 		print i, j
	# 		# If they're the same then query for singular type
	# 		if i == j:
	# 			print query_single(i, gen, gen)
	# 		# If they're different then query for different typings
	# 		else:
	# 			print query_double(i, j, gen, gen)
	# 	counter += 1

