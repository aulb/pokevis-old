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
import csv
import os
import os.path
import sys

database_filename = 'master_peewee.db'
database = SqliteDatabase(database_filename)

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
							Type])


"""
Automatically fill all the tables using the files in the csv folder.
"""
def build():
	csvs = glob.glob(os.path.join(DATA_LOCATION, '*'))
	for csv in csvs:
		print "Building " + csv
		# Determine database_name # oman
		database_name = csv.split("/")[-1].split(".")[0]
		build_aux(csv, database_name)


"""
Helper functions for build()
"""
def with_iter(context, iterable=None):
    if iterable is None:
        iterable = context
    with context:
        for value in iterable:
            yield value


def load_data(filename):
    # with_iter closes the file when it has finished
    return csv.reader(with_iter(open(filename, 'rt')), delimiter=',')


class PokeModel(Model):
	class Meta:
		database = database


# Definition
class Generation(PokeModel):
	pk = PrimaryKeyField()
	name = CharField()


# Definition
class Type(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()
	generation = ForeignKeyField(Generation, to_field='pk')


# Definition
class Ability(PokeModel):
	pk = PrimaryKeyField()
	name = CharField()
	flavour_text = CharField()
	generation = ForeignKeyField(Generation, to_field='pk', related_name='ability_gen_introduced')


# Definition
class Pokemon(PokeModel):
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
	generation = ForeignKeyField(Generation, to_field='pk')
	is_default = BooleanField()

# Definition
class Classification(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()


# Definition
class Competitive(PokeModel):
	pk = IntegerField(primary_key=True)
	name = CharField()
	generation = ForeignKeyField(Generation, to_field='pk')


# Many to many, sorta
class FinalEvolution(PokeModel):
	pk = IntegerField(primary_key=True)
	pokemon = ForeignKeyField(Pokemon)
	generation_start = ForeignKeyField(Generation, to_field='pk', related_name='evo_gen_start')
	generation_until = ForeignKeyField(Generation, to_field='pk', related_name='evo_gen_until') 


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
	generation_start = ForeignKeyField(Generation, to_field='pk', related_name='type_gen_start')
	generation_until = ForeignKeyField(Generation, to_field='pk', related_name='type_gen_until')


if __name__ == '__main__':
	# Fill database with csv
	pass