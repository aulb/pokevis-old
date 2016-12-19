"""
Queries to generate types per generation ala serebii
Todo:
http://zeroviscosity.com/d3-js-step-by-step/step-1-a-basic-pie-chart
http://plnkr.co/edit/2p0zmp?p=preview
"""
import sqlite3
from random import randint
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

def main_type_count(id, gen):
	query = """
	SELECT COUNT(*)
	FROM  pokemon_type pt 
	WHERE pt.fk_type_id = ?
	AND slot=1
	AND generation_start <= ?
	AND generation_until >= ?
	"""
	cursor.execute(query, (str(id), str(gen), str(gen)))
	return cursor.fetchone()


def secondary_type_count(id1, id2, gen):
	query = """
	SELECT COUNT(*) 
	FROM (SELECT fk_pokemon_id
		  FROM   pokemon_type pt 
		  WHERE pt.fk_type_id = ?
		  AND slot = 1
		  AND generation_start <= ?
		  AND generation_until >= ?
		  INTERSECT 
		  SELECT fk_pokemon_id 
		  FROM   pokemon_type pt 
		  WHERE  pt.fk_type_id = ?
		  AND slot = 2
		  AND pt.generation_start <= ?
		  AND pt.generation_until >= ?) t
	"""
	cursor.execute(query, (str(id1), 
						   str(gen), 
						   str(gen),
						   str(id2),
						   str(gen), 
						   str(gen)))
	return cursor.fetchone()


def type_exclude():
	# Exclude all forms
	# Exclude all megas
	pass


def generate_all_json():
	pass


if __name__ == '__main__':



	TYPE_LIST = ['Grass','Fire','Water','Bug','Normal','Poison',
	            'Electric','Ground','Fairy','Fighting','Psychic',
	            'Rock','Ghost','Ice','Dragon','Dark','Steel','Flying']

	COLOR_LIST = ['#8ED752', '#F95643', '#53AFFE', '#C3D221', '#BBBDAF', '#AD5CA2', 
	              '#F8E64E', '#F0CA42', '#F9AEFE', '#A35449', '#FB61B4', '#CDBD72', 
	              '#7673DA', '#66EBFF', '#8B76FF', '#8E6856', '#C3C1D7', '#75A4F9']
	COLOR_MAP = dict(zip(TYPE_LIST, COLOR_LIST))
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

