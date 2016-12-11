import sqlite3
sqlite = 'master.sqlite'
conn = sqlite3.connect(sqlite)
c = conn.cursor()

# Only latest data
### Pokemon Main
c.execute('''
CREATE TABLE pokemon (
	pk_pokemon_id 		INT		PRIMARY KEY,
	species_id 			INT,
	name				TEXT, 
	hp 					INT, 
	attack 				INT, 
	defense 			INT, 
	special_attack  	INT, 
	special_defense		INT, 
	speed 				INT, 
	bst					INT, 
	height				INT, 
	weight				INT, 
	base_experience 	INT, 
	fk_generation_id	INT,
	is_default 			BOOL)
''')

# Ability
c.execute('''
CREATE TABLE ability (
	pk_ability_id 		INT 	PRIMARY KEY,
	ability_name 		TEXT,
	flavour_text 	 	TEXT,
	fk_generation_id 	INT)
''')

# Pokemon Ability
c.execute('''
CREATE TABLE pokemon_ability (
	pk_pokemon_ability_id 	INT 	PRIMARY KEY,
	fk_pokemon_id 			INT,
	fk_ability_id 			INT,
	slot 					INT)
''')

# Type
c.execute('''
CREATE TABLE type (
	pk_type_id 			INT 	PRIMARY KEY,
	type_name 			TEXT,
	fk_generation_id 	INT)
''')

# Pokemon Type
c.execute('''
CREATE TABLE pokemon_type (
	pk_pokemon_type_id 	INT 	PRIMARY KEY,
	fk_pokemon_id 		INT,
	fk_type_id 			INT,
	slot 				INT,
	generation_start INT,
	generation_until INT)
''')

# Generation 
c.execute('''
CREATE TABLE generation (
	pk_generation_id 	INT 	PRIMARY KEY,
	generation_name 	TEXT)
''')

# Competitive
c.execute('''
CREATE TABLE competitive (
	pk_tier_id 			INT 	PRIMARY KEY,
	tier_name 			TEXT,
	fk_generation_id 	INT)
''')

# Competitive Pokemon
c.execute('''
CREATE TABLE pokemon_competitive (
	pk_pokemon_competitive_id INT PRIMARY KEY,
	fk_pokemon_id INT,
	fk_tier_id)
''')

c.execute('''
CREATE TABLE fully_evolved (
	pk_fully_evolved_id INT PRIMARY KEY,
	fk_pokemon_id INT,
	generation_start INT,
	generation_until INT)
''')

c.execute('''
CREATE TABLE pokemon_sprite (
	pk_pokemon_sprite_id INT PRIMARY KEY,
	fk_pokemon_id INT,
	spritename TEXT)
''')

conn.commit()
conn.close()
