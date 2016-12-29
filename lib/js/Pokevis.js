define('lib/js/Pokevis', [], function() {
	var Pokevis = {
		spritePath: 'lib/assets/sprites/',
		typePath:'lib/assets/types/',
		colors: ['#BBBDAF', '#A35449', '#75A4F9', 
				 '#AD5CA2', '#F0CA42', '#CDBD72', 
				 '#C3D221', '#7673DA', '#C3C1D7', 
				 '#F95643', '#53AFFE', '#8ED752', 
				 '#F8E64E', '#FB61B4', '#66EBFF', 
				 '#8B76FF', '#8E6856', '#F9AEFE'],
		
		types: ['normal', 'fighting', 'flying',
				'poison','ground','rock', 
				'bug', 'ghost', 'steel', 
				'fire', 'water','grass', 
				'electric', 'psychic','ice', 
				'dragon', 'dark', 'fairy'],

		hexToRgb: function(hex) {
		    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		    return result ? {
		        r: parseInt(result[1], 16),
		        b: parseInt(result[2], 16),
		        g: parseInt(result[3], 16)
		    } : null;
		},


		rgbObjToStr: function(rgbObj) {
			var rgb = 'rgb(' + rgbObj['r'] + ',' + 
				 			   rgbObj['g'] + ',' + 
				 			   rgbObj['b'] + ')'; 
			return rgb;
		},


		tipColor: function(rgbObj1, rgbObj2) {
			if (rgbObj1 == null || rgbObj2 == null) {
				return null;
			}
		 	avgR = Math.floor(rgbObj1['r'] * 0.7 + rgbObj2['r'] * 0.3);
			avgG = Math.floor(rgbObj1['b'] * 0.7 + rgbObj2['b'] * 0.3);	
			avgB = Math.floor(rgbObj1['g'] * 0.7 + rgbObj2['g'] * 0.3);
			return {r: avgR, g: avgG, b: avgB}
		}
	};

	return Pokevis;
});