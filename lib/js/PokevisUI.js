//https://toddmotto.com/mastering-the-module-pattern/
/*
I bet when you first started out writing jQuery/JavaScript, that you dumped all your code in one file and it was just function, function, function
*/
define('lib/js/PokevisUI', [], function() {
	var PokevisUI = {
		/*
		Returns the checked radio button from a collection of radio buttons.
		*/
		getCheckedRadio: function(radios) {
			for (var i = 0, length = radios.length; i < length; i++) {
			    if (radios[i].checked) {
			    	// return checked radio right away
			    	// logically there should only be one
			        return radios[i];
			    }
			}
			return null;
		},


		/*
		Returns a collection of checked check boxes from a collection of
		check boxes.
		*/
		getCheckedBox: function(boxes) {
			var retlist = [];
			for (var i = 0, length = boxes.length; i < length; i++) {
				if (boxes[i].checked) {
					retlist.push(boxes[i]);
				}
			}
			return retlist || null;
		},


		/*
		Check all of the check boxes. Haven't found a good way to do
		this yet other than iterating over all the boxes.
		*/
		checkAllBox: function(boxes) {
			for (var i = 0, length = boxes.length; i < length; i++) {
				boxes[i].checked = true;
			}
		},


		/*
		Returns a list of values from checked check boxes.
		*/
		getCheckedBoxValue: function(boxes) {
			var retlist = [];
			for (var i = 0, length = boxes.length; i < length; i++) {
				if (boxes[i].checked) {
					retlist.push(boxes[i].value);
				}
			}
			return retlist;
		},


		/*
		Specific to Pokevis. 
		Input:
		Generation 	: Integer [0 - 6] denoting generation gen 1 to 7
		
		Disable the radio buttons passed in based on their value and the 
		generation. 'FORM' was introduced in generation three, so it makes
		sense for anything below generation three to not have this option
		available. 'MEGA' was introduced in generation six, likewise, it
		makes sense for anything below generation six to not have this
		option.

		When the user selects another generation while 'FORM' or 'MEGA'
		is selected, it should check if chosen generation has already
		been introduced to the selected exclusion mode. 
		*/
		disableOption: function(generation, radios) {
			var checkDefault = false;
			var defaultRadio = null;
			// Make sure generation is int
			generation = parseInt(generation);

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
		}
	};

	return PokevisUI;
});