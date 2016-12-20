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
PrimaryKeyField is autoincrementing
"""
from peewee import *
from dbsetup_helper import *
import csv
import os
import os.path
import sys

# Create new sqlite everytime
database_filename = 'master_orm.sqlite'
if os.path.isfile(database_filename): 
	os.system('rm master_orm.sqlite')
database = SqliteDatabase(database_filename)
database.set_autocommit(False)

"""
Create all the necessary tables for Pokemon. Declare all tables here.
"""
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
							Type],
							safe=True)


class PokeModel(Model):
	class Meta:
		database = database


# Definition
class Generation(PokeModel):
	pk = IntegerField(primary_key=True) 
	name = CharField()


# Definition
class Type(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()
	gen = ForeignKeyField(Generation, to_field='pk')


# Definition
class Ability(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()
	flavour_text = CharField()
	gen = ForeignKeyField(Generation, to_field='pk', related_name='ability_gen_introduced')


# Definition
class Pokemon(PokeModel):
	pk = IntegerField(primary_key=True)
	species_id = IntegerField() # Should be self referential
	name = CharField()
	hp = IntegerField()
	attack = IntegerField()
	defense = IntegerField()
	sp_attack = IntegerField()
	sp_defense = IntegerField()
	speed = IntegerField()
	bst = IntegerField()
	height = IntegerField() 
	weight = IntegerField() 
	base_exp = IntegerField()
	gen = ForeignKeyField(Generation, to_field='pk')
	is_default = BooleanField()

# Definition
class Classification(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()


# Definition
class Competitive(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()
	gen = ForeignKeyField(Generation, to_field='pk')


# Many to many, sorta
class FinalEvolution(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	gen_start = ForeignKeyField(Generation, to_field='pk', related_name='gen_start')
	gen_until = ForeignKeyField(Generation, to_field='pk', related_name='gen_until') 


# Many to Many
class PokemonClassification(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	classification = ForeignKeyField(Classification)


# Many to Many
class PokemonCompetitive(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	tier = ForeignKeyField(Competitive)


# 1 - 1
class PokemonSprite(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	spritename = CharField()


# Many to Many
class PokemonType(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	pokemon_type = ForeignKeyField(Type)
	slot = IntegerField()
	gen_start = ForeignKeyField(Generation, to_field='pk', related_name='gen_start')
	gen_until = ForeignKeyField(Generation, to_field='pk', related_name='gen_until')


# Many to Many
class PokemonAbility(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	ability = ForeignKeyField(Ability)
	slot = IntegerField()


if __name__ == '__main__':
	# Fill database with csv
	create_tables()