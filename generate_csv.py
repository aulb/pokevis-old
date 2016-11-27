#!/usr/bin/env python
# -*- coding: utf-8 -*-
import csv
import os
import os.path
import sys
import sqlite3

# Temporary yolo script to make one beautiful CSV
# Move base_experience to pokemon_extra
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

def isstr(s):
	return isinstance(s, basestring)


def write_to_csv(filename):
	with open(filename, "wb") as csv_file:              
	    csv_writer = csv.writer(csv_file)
	    csv_writer.writerow([i[0] for i in cursor.description]) # write headers
	    # Go around the UTF-8 
	    #csv_writer.writerows(cursor)
	    rows = cursor.fetchall()
	    for row in rows:
	    	row = [x.encode('utf-8') if isstr(x) else x for x in row]
	    	csv_writer.writerow(row)

def generate_pokemon():
	pokemon_query = """
		SELECT *
		FROM pokemon
		ORDER BY pk_pokemon_id, species_id
	"""
	cursor.execute(pokemon_query)
	write_to_csv("pokemon.csv")


def generate_type():
	type_query = """
		SELECT *
		FROM type
	"""
	cursor.execute(type_query)
	write_to_csv("type.csv")
	

def generate_ability():
	ability_query = """
		SELECT *
		FROM ability
	"""
	cursor.execute(ability_query)
	write_to_csv("ability.csv")


def generate_pokemon_ability():
	pokemon_ability_query = """
		SELECT *
		FROM pokemon_ability	
		ORDER BY fk_pokemon_id, slot
	"""
	cursor.execute(pokemon_ability_query)
	write_to_csv("pokemon_ability.csv")


def generate_pokemon_type():
	pokemon_type_query = """
		SELECT *
		FROM pokemon_type
		ORDER BY fk_pokemon_id, slot
	"""
	cursor.execute(pokemon_type_query)
	write_to_csv("pokemon_type.csv")

def generate_generation():
	generation_query = """
		SELECT *
		FROM generation
	"""
	cursor.execute(generation_query)
	write_to_csv("generation.csv")


if __name__ == '__main__':
	generate_type()
	generate_ability()
	generate_pokemon()
	generate_pokemon_ability()
	generate_pokemon_type()
	generate_generation()