import csv
import os
import os.path
import sys
import glob
import sqlite3

# Temporary generation
conn = sqlite3.connect('master.sqlite')
cursor = conn.cursor()

#https://jeffknupp.com/blog/2013/04/07/improve-your-python-yield-and-generators-explained/
DIR_LOCATION = os.path.dirname(os.path.realpath("__file__"))
DATA_LOCATION = os.path.join(os.path.join(DIR_LOCATION, 'csv'), '')

def build_aux(filename, database_name):
	data = load_data(filename)
	for index, info in enumerate(data):
		if index > 0:
			info = ["'" + x + "'" if isinstance(x, basestring) else x for x in info]
			info = ",".join(info)
			insert_query = """INSERT INTO {} VALUES ({})""".format(database_name,
																   info)
			cursor.execute(insert_query)

	conn.commit()


def build():
	csvs = glob.glob(os.path.join(DATA_LOCATION, '*'))
	for csv in csvs:
		# Determine database_name # oman
		database_name = csv.split("/")[-1].split(".")[0]
		build_aux(csv, database_name)



def with_iter(context, iterable=None):
    if iterable is None:
        iterable = context
    with context:
        for value in iterable:
            yield value


def load_data(fileName):
    # with_iter closes the file when it has finished
    return csv.reader(with_iter(open(fileName, 'rt')), delimiter=',')


if __name__ == '__main__':
	# If import skip
	build()