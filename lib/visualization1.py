"""
Queries to generate single and dual types.
http://i.imgur.com/c1z5YTa.png
By: reddit@user:ROMaster2

http://imgur.com/PnOqyam
By: reddit@user:glitterizer

- Strict mode 		: main and secondary type is non interchangeable
- Lax mode 			: main and secondary type is interchangeable
- No Arceus & Silv	: no arceus/silvally forms 
- No Forms 			: absolutely no other forms (rotom forms, alola, megas, all)
- No Megas 			: forms allowed but no megas 
- No Legendaries 	: *future*
- Generation 		: only include pokemon up to x generation 
"""
import sqlite3
import json
from random import randint
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

TYPE_LIST = ['Normal', 'Fighting', 'Flying',
			 'Poison', 'Ground', 'Rock', 
			 'Bug', 'Ghost', 'Steel', 
			 'Fire', 'Water', 'Grass', 
			 'Electric', 'Psychic', 'Ice', 
			 'Dragon', 'Dark', 'Fairy']  

def query_single(id, gen_start=1, gen_until=7):
	query = """
	SELECT pri.fk_pokemon_id 
	FROM   (SELECT fk_pokemon_id, 
	               fk_type_id 
	        FROM   pokemon_type pt 
	        WHERE  pt.fk_type_id = ? 
	               AND pt.slot = 1 
	               AND pt.generation_start <= ?
	               AND pt.generation_until >= ?) pri 
	       LEFT JOIN (SELECT fk_pokemon_id, 
	                         fk_type_id 
	                  FROM   pokemon_type pt 
	                  WHERE  pt.slot = 2
	                  AND pt.generation_start <= ?
	                  AND pt.generation_until >= ?) sec 
	              ON pri.fk_pokemon_id = sec.fk_pokemon_id 
	WHERE  sec.fk_type_id IS NULL 
	"""
	cursor.execute(query,
		[str(id), 
		 str(gen_start), 
		 str(gen_until),
		 str(gen_start),
		 str(gen_until)])
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
	         AND pt.generation_start <= ?
	         AND pt.generation_until >= ?
	        INTERSECT 
	        SELECT fk_pokemon_id 
	         FROM   pokemon_type pt 
	         WHERE  pt.fk_type_id = ?
	         AND pt.generation_start <= ?
	         AND pt.generation_until >= ?) ct 
	"""

	cursor.execute(query, [str(id1), str(gen_start), str(gen_until), 
						   str(id2), str(gen_start), str(gen_until)])
	pokemon_ids = cursor.fetchall()
	if len(pokemon_ids) == 0:
		return []
	return pokemon_ids[randint(0, len(pokemon_ids) - 1)]


def find_sprite(pokemon_id):
	query = """
	SELECT spritename
	FROM pokemon_sprite
	WHERE fk_pokemon_id = ?
	"""

	cursor.execute(query, [str(pokemon_id)])
	spritename = cursor.fetchone()
	return spritename[0]


def generate_json():
	# a = {
	# "lax": {...}, "strict": {
	# 		"1": {
	# 			"dragon": {
	# 				"normal": "001.png"
	# 			}
	# 		}
	# 	}
	# }

	# Generate only upper triangular
	counter = 1
	gen = 7
	master = {}
	for gen in range(1,8):
		generation = {}
		for i in range(1,19):
			primary_type = TYPE_LIST[i - 1].lower()
			primary = {}
			for j in range(counter,19):
				secondary_type = TYPE_LIST[j - 1].lower()
				# If they're the same then query for singular type
				if i == j:
					pokemon_id = query_single(i, gen, gen)
				# If they're different then query for different typings
				else:
					pokemon_id = query_double(i, j, gen, gen)

				if pokemon_id == []:
					primary[secondary_type] = ""
				else:
					primary[secondary_type] = find_sprite(pokemon_id[0])
			generation[primary_type] = primary
			counter += 1
		master[str(gen)] = generation

		# Reset counter
		counter = 1
	return master


if __name__ == '__main__':
	COLOR_LIST = ['#BBBDAF', 
				  '#A35449', 
				  '#75A4F9', 
				  '#AD5CA2', 
				  '#F0CA42', 
				  '#CDBD72', 
				  '#C3D221', 
				  '#7673DA', 
				  '#C3C1D7', 
				  '#F95643', 
				  '#53AFFE', 
				  '#8ED752', 
				  '#F8E64E', 
				  '#FB61B4', 
				  '#66EBFF', 
				  '#8B76FF', 
				  '#8E6856', 
				  '#F9AEFE'];
	COLOR_MAP = dict(zip(TYPE_LIST, COLOR_LIST))

	json_dump = json.dumps(generate_json())
	filename = "visualization1.json"
	with open(filename, 'w') as outfile: 
		outfile.write(json_dump)