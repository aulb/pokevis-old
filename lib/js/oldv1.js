/*
 * Todo: 
 * - Cleanup this code
 * - https://github.com/airbnb/javascript
 *
 */
// https://en.wikipedia.org/wiki/Lab_color_space
// http://stackoverflow.com/questions/398224/how-to-mix-colors-naturally-with-c
// http://stackoverflow.com/questions/14819058/mixing-two-colors-naturally-in-javascript

const COLORS = ['#BBBDAF', 
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

const TYPES = ['normal',
			   'fighting',
			   'flying',
			   'poison',
			   'ground',
			   'rock', 
			   'bug', 
			   'ghost', 
			   'steel', 
			   'fire', 
			   'water',
			   'grass', 
			   'electric', 
			   'psychic',
			   'ice', 
			   'dragon', 
			   'dark', 
			   'fairy']; 

var PATH = 'lib/assets/sprites/';
var PATH2 = 'lib/assets/types/';
var uniqueTableDiv = document.getElementById('uniqueTableDiv');


function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        b: parseInt(result[2], 16),
        g: parseInt(result[3], 16)
    } : null;
}


function rgbObjToStr(rgbObj) {
	var rgb = 'rgb(' + rgbObj['r'] + ',' + 
		 			   rgbObj['g'] + ',' + 
		 			   rgbObj['b'] + ',);'; 
	return rgb;
};


function tipColor(rgbObj1, rgbObj2) {
	if (rgbObj1 == null || rgbObj2 == null) {
		return null;
	}
 	avgR = Math.floor(rgbObj1['r'] * 0.7 + rgbObj2['r'] * 0.3);
	avgG = Math.floor(rgbObj1['b'] * 0.7 + rgbObj2['b'] * 0.3);	
	avgB = Math.floor(rgbObj1['g'] * 0.7 + rgbObj2['g'] * 0.3);
	return {r: avgR, g: avgG, b: avgB}
}


function getPokePath(i, j, gen, option, mode) {
	return DATA[mode][gen][option][i - 1][j - 1];
}

function getTypePath(i) {
	return TYPES[i - 1] + '.gif'
}


function rgbObjToStr(rgbObj) {
	var rgb = 'rgb(' + rgbObj['r'] + ',' + 
		 			   rgbObj['g'] + ',' + 
		 			   rgbObj['b'] + ')'; 
	return rgb;
};


function createTable(generation, exclude, mode) {
	/*
		var options = {
			generation: generation,
			exclude: exclude,
			mode: mode	
		};

		var tableProp = {
			tableId: 'uniqueTable',
			cellHeight: '38px',
			cellWidth: '38px',
			colorPallete: Pokevis.colors	
		};
	*/

	// Prepare table
	var tbl = document.createElement('table');
	tbl.id = 'uniqueTable'; //tableProp.tableId;

	// Prepare table body
	var tblBody = document.createElement('tbody');

	/*
	Cell creation happens here. There are 18 types but we have to 
	skip i,j = 0,0 to adjust the headers.
	*/
	// Iterate over main type
	for (var i = 0; i < 19; i++) {
		var row = document.createElement('tr');
		// Iterate over secondary type
		for (var j = 0; j < 19; j++) {
			var cell = document.createElement('td');
			cell.style.height = '38px';
			cell.style.width = '38px';

			if (i == 0 && j == 0) {} 
			else if (i == 0) {
				cell.style.backgroundColor = COLORS[j - 1];
				var cellText = document.createTextNode(TYPES[j - 1][0]);
				cell.appendChild(cellText);
			} else if (j == 0) {
				cell.style.backgroundColor = COLORS[i - 1];
				var cellText = document.createTextNode(TYPES[i - 1][0]);
				cell.appendChild(cellText);
			} else {
				var img = document.createElement('img');
				pokePath = getPokePath(i, j, generation, exclude, mode);
				if (pokePath != '') {
					img.setAttribute('src', PATH + pokePath);
				}
				iColor = hexToRgb(COLORS[j - 1]);
				jColor = hexToRgb(COLORS[i - 1]);
				averageColor = tipColor(jColor, iColor);

				console.log(rgbObjToStr(averageColor));
				cell.style.backgroundColor = rgbObjToStr(averageColor);
				cell.appendChild(img);

			}
			row.appendChild(cell);

		}
		tblBody.appendChild(row);
	}

	tbl.appendChild(tblBody);
	uniqueTableDiv.appendChild(tbl);
}

function getCheckedRadio(radios) {
	for (var i = 0, length = radios.length; i < length; i++) {
	    if (radios[i].checked) {
	        // do whatever you want with the checked radio
	        return radios[i];

	        // only one radio can be logically checked, don't check the rest
	        break;
	    }
	}
	return null;
}

function disableOptions(generation, radios) {
	var checkDefault = false;
	var defaultRadio = null;
	// Disable first
	for (var i = 0, length = radios.length; i < length; i++) {
		if (radios[i].value == 'DEFAULT') {
			defaultRadio = radios[i];
		}
    	// Check per generation, and disable everything
    	if (generation < 2) {
    		// Disable radio buttons with forms/megas
    		if (radios[i].value == 'NO-FORM' || 
    			radios[i].value == 'NO-MEGA') {
    			radios[i].disabled = true;

    			// Check if its checked
    			if (radios[i].checked) {
    				checkDefault = true;
    			}
    		}
    	} else if (generation > 1 && generation < 5) {
    		// Don't forget to enable option for non megas
    		if (radios[i].value == 'NO-MEGA') {
    			radios[i].disabled = true;

    			// Check if its checked
    			if (radios[i].checked) {
    				checkDefault = true;
    			}
    		} else {
    			radios[i].disabled = false;
    		}
    	} else {
    		// Enable all options for generation six onwards
    		radios[i].disabled = false;
    	}
	}

	if (checkDefault) {
		defaultRadio.checked = true;
	}
};

// Initialization
var generationForm = document.getElementById('generationOption');
var generationOption = document.getElementsByName('generationOption')
var modeForm = document.getElementById('modeOption');
var modeOption = document.getElementsByName('modeOption');
var excludeForm = document.getElementById('excludeOption');
var excludeOption = document.getElementsByName('excludeOption');
generation = getCheckedRadio(generationOption).value;
mode = getCheckedRadio(modeOption).value;
exclude = getCheckedRadio(excludeOption).value;
createTable(generation, exclude, mode);

generationForm.addEventListener('change', function() {
	// cannot remove child if its not there
	uniqueTableDiv.removeChild(document.getElementById('uniqueTable'));
	generation = getCheckedRadio(generationOption).value;
	disableOptions(parseInt(generation), excludeOption);
	exclude = getCheckedRadio(excludeOption).value;
	createTable(generation, exclude, mode);
});

modeForm.addEventListener('change', function() {
	uniqueTableDiv.removeChild(document.getElementById('uniqueTable'));
	mode = getCheckedRadio(modeOption).value;
	createTable(generation, exclude, mode);
});

excludeForm.addEventListener('change', function() {
	uniqueTableDiv.removeChild(document.getElementById('uniqueTable'));
	exclude = getCheckedRadio(excludeOption).value;
	createTable(generation, exclude, mode);
});
