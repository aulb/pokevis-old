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


OPTIONS = {
	"DEFAULT": [12, 14, 11], 
	"NO-MEGA": [12, 14, 11, 16, 17],
	"NO-FORM": [12, 14, 11, 16, 17, 9, 13],
	"NO-LEGENDARY": [12, 14, 3, 4]
}


def get_pokemon_type(gen, type_id=None, slot=None, alias=None):
	# Base query
	query = (PokemonType
		.select(PokemonType.pokemon,
				PokemonType.pokemon_type)
		.where(PokemonType.gen_start == gen,
			   PokemonType.gen_until == gen))

	if type_id is not None:
		query = query.where(PokemonType.pokemon_type == type_id)

	if slot is not None:
		query = query.where(PokemonType.slot == slot)

	if alias is not None:
		query = query.alias(alias)

	return query


def get_pokemon_classification(option, alias=None):
	option = OPTIONS[option]
	query = (PokemonClassification
		.select(PokemonClassification.pokemon,
			    PokemonClassification.classification)
		.where(PokemonClassification.classification << option))

	if alias is not None:
		query = query.alias(alias)

	return query


def get_single(gen, type_id, option="DEFAULT"):
	# Main type
	pri = get_pokemon_type(gen, type_id, 1, 'pri')
	# Need to left join with secondary type and check for nulls
	sec = get_pokemon_type(gen=gen, slot=2, alias='sec')
	# Left join again wtih classification to get rid
	# of redundant pokemons and perhaps extra stuff
	exclude = get_pokemon_classification(option, 'exclude')

	# Build main query
	main = (pri
		.join(sec.c, 
			JOIN.LEFT_OUTER, 
			on=(sec.c.pokemon == pri.c.pokemon))
		.switch(pri)
		.join(exclude.c,
			JOIN.LEFT_OUTER,
			on=(exclude.c.pokemon == pri.c.pokemon))
		.alias('main'))

	wrap = (main
		.select(pri.c.pokemon)
		.where(exclude.c.classification >> None,
			sec.c.pokemon_type >> None)
		)

	return wrap



if __name__ == '__main__':
	pass