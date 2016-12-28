var Pokevis = (function() {
	var colors = ['#BBBDAF', '#A35449', '#75A4F9', 
			  '#AD5CA2', '#F0CA42', '#CDBD72', 
			  '#C3D221', '#7673DA', '#C3C1D7', 
			  '#F95643', '#53AFFE', '#8ED752', 
			  '#F8E64E', '#FB61B4', '#66EBFF', 
			  '#8B76FF', '#8E6856', '#F9AEFE'];

	var types = ['normal', 'fighting', 'flying'
			   	 'poison','ground','rock', 
			   	 'bug', 'ghost', 'steel', 
			   	 'fire', 'water','grass', 
			   	 'electric', 'psychic','ice', 
			   	 'dragon', 'dark', 'fairy'];

	var hexToRgb = function(hex) {
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	    return result ? {
	        r: parseInt(result[1], 16),
	        b: parseInt(result[2], 16),
	        g: parseInt(result[3], 16)
	    } : null;
	};

	var retobj = {
		colors: colors,
		types: types,
		hexToRgb: hexToRgb
	};

	return retobj;

})(); // Immediately invoked functions