import urllib
import requests
import time
import string

def pad_zero(zero_amount, number):
	number = str(number)
	pad_amount = zero_amount - len(number)
	return '0' * pad_amount + number


def save_form(poke_list, flags):
	base = 'http://www.serebii.net/pokedex-sm/icon/'
	spritebase = './assets/sprites/'
	for i in poke_list:
		for t in flags:
			current = pad_zero(3, i) + t + '.png'
			fetch_from = base + current
			spritename = spritebase + current
			r = requests.get(fetch_from)
			time.sleep(0.25)
			if r.status_code == 200:
				urllib.urlretrieve(fetch_from, spritename)
				print "Saving " + spritename
				time.sleep(1)
			else:
				time.sleep(0.35)

if __name__ == '__main__':
	base = 'http://www.serebii.net/pokedex-sm/icon/'
	spritebase = 'sprites/'

	for i in range(1, 822):
		current = base + pad_zero(3, i) + '.png'
		spritename = spritebase + pad_zero(3, i) + '.png'
		urllib.urlretrieve(current, spritename)
		print "Saving " + spritename
		time.sleep(1)

	traverse = ['d', 's', 'a', '-e', '-p', '-b', '-w', '-s', '-d', '-z', '-f', '-a', '-t', '-pau', '-zen']
	forms_only = [386, 412, 413, 421, 422, 423, 479, 487, 492, 
				  555, 641, 642, 645, 646, 647, 648, 658, 669, 
				  670, 671, 681, 718, 720, 741, 746, 745]

	traverse_mega = ['-m', '-mx', '-my']
	mega_only = [3, 6, 9, 15, 18, 65, 80, 94,
				 115, 127, 130, 142, 150, 181, 
				 208, 212, 214, 229, 248, 254, 
				 257, 260, 282, 302, 303, 306, 
				 308, 310, 319, 323, 334, 354, 
				 359, 362, 373, 376, 380, 381, 
				 384, 428, 445, 448, 460, 475, 
				 531, 719]

	traverse_alola = ['-a']
	alola_only = [19, 20, 26, 27, 28, 37, 38, 50, 51,
				  52, 53, 74, 75, 76, 88, 89, 103, 105]

	traverse_all = ["-" + x for x in list(string.ascii_lowercase)]
	weird_mons = [666, 676]

	save_form(forms_only, traverse)
	save_form(mega_only, traverse_mega)
	save_form(alola_only, traverse_alola)
	save_form(weird_mons, traverse_all)
