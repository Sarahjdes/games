var loadState = {
	
	preload: function(){

		// Add loading label
		var loadingLabel = game.add.text(game.world.centerX, 150, 'Chargement...', { font: '30px Cambria', fill: '#EDC951'}); 
		loadingLabel.anchor.setTo(0.5, 0.5); 


		// Add progress bar 
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);

		// Load all assets 
		game.load.spritesheet('player', 'assets/ariel_spritesheet.png', 24, 32); 
		game.load.image('collectableSlots', 'assets/collectableSlots.png');
		game.load.image('collectableSlotsOutline', 'assets/collectableSlotsOutline.png');
		game.load.image('collectableScore', 'assets/collectableScore.png');
		game.load.image('collectable', 'assets/collectable.png');
		game.load.image('tileset', 'assets/tileset.png');
		game.load.tilemap('map', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
		game.load.image('arielLogo', 'assets/arielLogo.png');
		game.load.image('arielTitle', 'assets/arielTitle.png');
		game.load.image('arielTome', 'assets/arielTome.png');
		game.load.image('keyUp', 'assets/keyUp.png');
		game.load.image('trapClosed', 'assets/trapClosed.png');
		game.load.image('trapOpen', 'assets/trapOpen.png');
		game.load.image('trivia01', 'assets/trivia01.png');
		game.load.image('trivia02', 'assets/trivia02.png');
		game.load.image('trivia03', 'assets/trivia03.png');
		game.load.image('trivia04', 'assets/trivia04.png');
		game.load.image('trivia05', 'assets/trivia05.png');
		game.load.image('instructions', 'assets/instructions.png');				// http://www.colourlovers.com/palette/483939/A_Pup_in_my_Cup
		game.load.image('congratulations', 'assets/congratulations.png');		// http://www.colourlovers.com/palette/2856327/Ice_Queen

	}, 

	create: function(){

		game.state.start('menu'); 
	}

};
