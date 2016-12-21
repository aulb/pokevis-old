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

https://github.com/coleifer/peewee/issues/692
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


def query_single(type_id, gen, slot):
	pri = PokemonType.alias()
	sec = PokemonType.alias()
	# query = (pri
	# 			.select(pri.pokemon)
	# 			.where(pri.slot == slot,
	# 				   pri.gen_start == gen,
	# 				   pri.gen_until == gen)
	# 			.join(sec, JOIN.LEFT_OUTER, on=(pri.pokemon == sec.pokemon))
	# 			.alias('test'))

	query = (pri
		.select(pri.pokemon, sec.pokemon)
		.join(sec, JOIN.LEFT_OUTER, on=(pri.pokemon == sec.pokemon))
		.alias('test'))	
	return query



if __name__ == '__main__':
	pass