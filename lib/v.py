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
from Pokeclass import *
import json

# Type list grabbed from the kaggle website
TYPES = ['Normal', 
		 'Fighting', 
		 'Flying',
		 'Poison', 
		 'Ground', 
		 'Rock', 
		 'Bug', 
		 'Ghost', 
		 'Steel', 
		 'Fire', 
		 'Water', 
		 'Grass', 
		 'Electric',
		 'Psychic', 
		 'Ice', 
		 'Dragon', 
		 'Dark', 
		 'Fairy']  

# Color corresponding to each type, can simply just zip these two
COLORS = ['#BBBDAF', 
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


# Various options for exclusions, i.e no megas, no forms
OPTIONS = {
	'DEFAULT': [12, 14, 11], 
	'NO-MEGA': [12, 14, 11, 16, 17],
	'NO-FORM': [12, 14, 11, 16, 17, 9, 13],
	'NO-LEGENDARY': [12, 14, 3, 4]
}


# NO NEED FOR THIS JUST USE http://docs.peewee-orm.com/en/latest/peewee/querying.html#counting-records
"""
Decorator to get count Pokemon by their primary type.
"""
# def count(f):
# 	def count_wrap(*args, **kwargs):
# 		query = f(*args, **kwargs).select(fn.COUNT('*'))
# 		return query
# 	return count_wrap


"""
Basic query to get Pokemon with a given type id.
TODO: figure out a way to clean up selection variable
""" 
def get_pokemon_type(gen, 
					 type_id=None, 
					 slot=None, 
					 selection=[], 
					 alias=None):
	# Hardcode this
	if 'pokemon' not in selection:
		selection.append('pokemon')

	# Base select and where clause
	selecting = [getattr(PokemonType, s) for s in selection]
	query = (PokemonType
		.select(*selecting)
		.where(PokemonType.gen_start <= gen,
			   PokemonType.gen_until >= gen))

	if type_id is not None:
		query = query.where(PokemonType.pokemon_type == type_id)

	if slot is not None:
		query = query.where(PokemonType.slot == slot)

	if alias is not None:
		query = query.alias(alias)

	return query


"""
Basic query to get Pokemon's classification given classification id.
"""
def get_pokemon_classification(option, 
							   alias=None):
	option = OPTIONS[option]
	query = (PokemonClassification
		.select(PokemonClassification.pokemon,
			    PokemonClassification.classification)
		.where(PokemonClassification.classification << option))

	if alias is not None:
		query = query.alias(alias)

	return query


"""
Basic query to get Pokemon's sprite given pokemon id.
"""
def get_spritename(pokemon):
	query = (PokemonSprite
		.select(PokemonSprite.spritename)
		.where(PokemonSprite.pokemon == pokemon))

	return query


"""
Query to get singly typed Pokemon(s).
"""
def get_single_type_pokemon(gen, 
							type_id, 
							selection=['pokemon_type'],
							option='DEFAULT'):
	# Main type
	pri = get_pokemon_type(gen=gen, 
						   type_id=type_id, 
						   slot=1, 
						   alias='pri')
	# Need to left join with secondary type and check for nulls
	sec = get_pokemon_type(gen=gen, 
						   slot=2, 
						   selection=selection,
						   alias='sec')
	# Left join again wtih classification to get rid
	# of redundant pokemons and perhaps extra stuff
	exclude = get_pokemon_classification(option, 'exclude')


	# Build main query
	main = (Pokemon
		.select(Pokemon.pk, 
				Pokemon.name)
		.join(pri,
			on=(pri.c.pokemon == Pokemon.pk))
		.switch(Pokemon)
		.join(sec, 
			JOIN.LEFT_OUTER, 
			on=(sec.c.pokemon == pri.c.pokemon))
		.switch(Pokemon)
		.join(exclude,
			JOIN.LEFT_OUTER,
			on=(exclude.c.pokemon == pri.c.pokemon))
		.where(exclude.c.classification >> None,
			sec.c.pokemon_type >> None))

	return main


"""
Query to get doubly typed Pokemon(s).
"""
def get_double_type_pokemon(gen, 
							type_id1, 
							type_id2, 
							option='DEFAULT', 
							mode='LAX'):
	# No need for aliases here since we are intersecting
	# pri and sec stands for primary and secondary
	if mode is 'STRICT':
		pri = get_pokemon_type(gen=gen, type_id=type_id1, slot=1)
		sec = get_pokemon_type(gen=gen, type_id=type_id2, slot=2)
	else: # mode is 'LAX'
		pri = get_pokemon_type(gen=gen, type_id=type_id1)
		sec = get_pokemon_type(gen=gen, type_id=type_id2)
			
	main = (pri & sec).alias('main')
	exclude = get_pokemon_classification(option, 'exclude')

	# Build main query
	main = (Pokemon
		.select(Pokemon.pk, 
				Pokemon.name)
		.join(main,
			on=(main.c.pokemon == Pokemon.pk))
		.switch(Pokemon)
		.join(exclude,
			JOIN.LEFT_OUTER,
			on=(exclude.c.pokemon == main.c.pokemon))
		.where(exclude.c.classification >> None))

	return main


if __name__ == '__main__':
	# a = get_single(3,14)
	# # Default
	# for i in a:
	# 	print i.name


	# No legendary
	a = get_single_type_pokemon(1,14)

	b = get_double_type_pokemon(gen=7, 
		  type_id1=9, 
		  type_id2=3, 
		  option='DEFAULT', 
		  mode='STRICT')

	print a.count()

