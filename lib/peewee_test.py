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

http://stackoverflow.com/questions/1581183/prepared-statements-and-the-in-expression
https://google.github.io/styleguide/pyguide.html
https://github.com/coleifer/peewee
Redo SQLs

This database is pretty much static, read-only
"""
from peewee import *

database_filename = 'master_peewee.db'
database = SqliteDatabase(database_filename)

def create_tables():
	database.connect()
	database.create_tables([Ability, 
							Classification, 
							Competitive, 
							FinalEvolution,
							Generation,
							Pokemon,
							PokemonAbility,
							PokemonClassification,
							PokemonCompetitive,
							PokemonSprite,
							PokemonType,
							Type])


class PokeModel(Model):
	class Meta:
		database = database


# Definition
class Generation():
	pk = IntegerField(primary_key=True)
	name = CharField()


# Definition
class Ability(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()
	flavour_text = CharField()
	generation = ForeignKeyField(Generation, related_name='gen')


# Definition
class Classification():
	pk = IntegerField(primary_key=True)
	name = CharField()


# Definition
class Competitive():
	pk = IntegerField(primary_key=True)
	name = CharField()
	generation = ForeignKeyField(Generation)


# Many to many, sorta
class FinalEvolution():
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	generation_start = ForeignKeyField(Generation)
	generation_until = ForeignKeyField(Generation)


# Definition
class Pokemon():
	pk = IntegerField(primary_key=True)
	species_id = IntegerField() # Should be self referential
	name = CharField()
	hp = IntegerField()
	attack = IntegerField()
	defense = IntegerField()
	special_attack = IntegerField()
	special_defense = IntegerField()
	speed = IntegerField()
	bst = IntegerField()
	height = IntegerField() 
	weight = IntegerField() 
	base_experience = IntegerField()
	generation = ForeignKeyField(Generation)
	is_default = BooleanField()


# Many to Many
class PokemonClassification():
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	classification = ForeignKeyField(Classification)


# Many to Many
class PokemonCompetitive():
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	tier = ForeignKeyField(Competitive)


# 1 - 1
class PokemonSprite():
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	spritename = CharField()


# Many to Many
class PokemonType():
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	type = ForeignKeyField(Type)
	slot = IntegerField()
	generation_start = ForeignKeyField(Generation)
	generation_until = ForeignKeyField(Generation)

# Definition
class Type():
	pk = IntegerField(primary_key=True)


if __name__ == '__main__':
	# Fill database with csv
	pass

