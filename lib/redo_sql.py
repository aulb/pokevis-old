import os

os.system('rm master.sqlite')
os.system('python dbsetup.py')
os.system('python build.py')