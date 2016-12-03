import sqlite3


if __name__ == '__main__':
	types = ['bug', 'dark', 'dragon', 'electric', 'fairy', 'fight', 'fire',
		 'flying', 'ghost', 'grass', 'ground', 'ice', 'normal', 'poison',
		 'psychic', 'rock', 'steel', 'water']

	arrange_by_color = [1,1]

# """
# SELECT primary.fk_pokemon_id
# ((SELECT fk_pokemon_id, fk_type
# FROM pokemon_type pt
# WHERE pt.type=?) primary LEFT JOIN
# (SELECT fk_pokemon_id, fk_type
# FROM pokemon_type pt
# WHERE slot=2)) secondary
# WHERE 
# secondary.fk_type IS NULL
# """

# """
# SELECT correct_type.fk_pokemon_id ((SELECT fk_pokemon_id
# FROM pokemon_type pt 
# WHERE pt.type=?) UNION
# (SELECT fk_pokemon_id
# FROM pokemon_type pt
# WHERE pt.type=?)) correct_type JOIN
# (SELECT fk_pokemon_id
# FROM fully_evolved fe 
# WHERE generation_until=?) fe ON fe.fk_pokemon_id = pt.fk_pokemon_id
# """

# 		1,normal,1
# 2,fighting,1
# 3,flying,1
# 4,poison,1
# 5,ground,1
# 6,rock,1
# 7,bug,1
# 8,ghost,1
# 9,steel,2
# 10,fire,1
# 11,water,1
# 12,grass,1
# 13,electric,1
# 14,psychic,1
# 15,ice,1
# 16,dragon,1
# 17,dark,2
# 18,fairy,6