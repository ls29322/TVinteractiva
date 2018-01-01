
$(document).ready(function(){
	
	$.caph.focus.activate(function(nearestFocusableFinderProvider, controllerProvider) {
		
	    controllerProvider.onFocused(function(event, originalEvent) {
	    	$(event.currentTarget).css({
				border: '3px solid red'
				});
	    	
	    	//if map is ready
	    	if($('.countryPanel').length > 0){
	    		//set to the panel the value of the country
	    		$('.countryPanel').text($(event.currentTarget).attr('id'));
	    	}
	    	
	    });
	    
	    controllerProvider.onSelected(function(event, originalEvent) {
	    	//if it's a virtual keyboard button
	    	if($(event.currentTarget).attr("class").split(' ')[0] === 'jQKeyboardBtn'){
	    		getKeyPressedValue(event.currentTarget);
	    	}
	    	//if it's the login button
	    	if(($(event.currentTarget).attr("id")) === 'loginButton'){
	    		//check the value of the input
	    		username = $('#testInput').val();

	    		if(username.length == 0){
	    			//some advice?
	    			console.log("Error message: username is empty");
	    		}
	    		else{
	    			goPage("flickrGallery");
	    		}	    		
	    	}
	    
		});
	    
		controllerProvider.onBlurred(function(event, originalEvent) {
        	$(event.currentTarget).css({
				border : '3px solid transparent'
        	});
	    });
	
	});	
});