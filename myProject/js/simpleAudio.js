window.onload = function() {
	
		
	//CreateJS for some audio with the presentation
	
	if(!createjs.Sound.initializeDefaultPlugins()){return;};
	
	//SoundJS has the ability to preload sounds
	
	createjs.Sound.registerSound({id:"soundId", src:"audio/dubz.mp3|audio/dubz.ogg"});
	
	//listen for the file to load
	
	createjs.Sound.addEventListener("fileload", handleFileLoad);
	
	function handleFileLoad(event){
		//A sound has been louded
		//Once per every sound loaded
		
		console.log("preloaded:", event.src);
		
		//Play the loaded sound
		//createjs.Sound.play(event.src);
		
		}
	
	
	}
	
function playMusic(){
	
	//play the sound when the button is clicked
	createjs.Sound.play("soundId");
	}
