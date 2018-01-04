window.onload = function(){
	
	document.addEventListener("keydown", function(e) {
		if(e.keyCode){

			//Generic Key-Cases
			switch (e.keyCode){
				//GO BACK
				case VK_BACK:
					if(currentPage != 1 ){
						userPath.pop();
						goPage(nameOfPage(userPath[userPath.length-1]));
						userPath.pop();
					}
					break;
				default:
						break;
			}			
			
			
			switch (currentPage){
				//MAIN PAGE
				case 1:
					switch (e.keyCode){
						case VK_ENTER:
							goPage($(".focused").attr("name"));
							break;
						default:
								break;
					}
					break;
				//FLICKR FORM
				case 2:
					switch (e.keyCode){
						case VK_ENTER:
							//Initiate keyboard
							activateKeypad('#testInput');
					    	//goes to flickrGallery according to username
					    	if(usernameIsValid()){goPage("flickrGallery");}
							break;
						case VK_RIGHT:
						case VK_UP:
						case VK_DOWN:
						case VK_LEFT:
							e.preventDefault();
							break;
						default:
							break;
					 }
					break;
				//FLICKR GALLERY
				case 3:
				//COUNTRY GALLERY
				case 6:
					switch (e.keyCode){
						case VK_ENTER:
							focused.url = $('.focused > .image').first().attr('src');
							focused.id = $('.focused > .image').first().attr('id');
							if(focused.url.length > 0){goPage('photoViewer');}
							break;
						case VK_GREEN:
							goPage('europeMap');
							break;
						case VK_UP:
							e.preventDefault();
							window.scrollBy(0, -280);
							break;
						case VK_DOWN:
							e.preventDefault();
							window.scrollBy(0, 280);
							break;
						default:
								break;
					}
					break;
				//PHOTO VIEWER
				case 4:
					switch (e.keyCode){
						case VK_ENTER:
							break;
						case VK_YELLOW:
							rotateDeg("clock");
							 break;

						case VK_BLUE:
							rotateDeg("counterClock");
							break;
							
						case VK_GREEN:
							goPage('europeMap');
							break;
							
						case VK_RED:
							goPage('fullscreen');
							break;
							
						case VK_RIGHT:
							console.log(focused);
							
							break;
							
						case VK_LEFT:
							break;
							
						default:
								break;
					}
					break;
				//EUROPE MAP
				case 5:
					switch (e.keyCode){
						case VK_ENTER:
							goPage('countryGallery');
							break;
						default:
								break;
					}
					break;
					
				case 7:
					switch (e.keyCode){
						case VK_ENTER:
							break;
						case VK_RED:
							if(currentPage != 1 ){
								userPath.pop();
								goPage(nameOfPage(userPath[userPath.length-1]));
								userPath.pop();
							}
							break;
						default:
								break;
					}
					break;
			}
		}
			
	},false);
};