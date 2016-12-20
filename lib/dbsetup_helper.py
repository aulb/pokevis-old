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


def build_aux(filename, database_name):
    data = load_data(filename)
    for index, info in enumerate(data):
        if index > 0: # Get all from here
            info = ["'" + x + "'" if isinstance(x, basestring) else x for x in info]
            info = ",".join(info)
            insert_query = """INSERT INTO {} VALUES ({})""".format(database_name,
                                                                   info)
            cursor.execute(insert_query)

    conn.commit()

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


# Testing testing
if __name__ == '__main__':
    pass