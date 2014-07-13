var loadState = {
	
	preload: function(){

		// Add loading label
		var loadingLabel = game.add.text(game.world.centerX, 150, 'Loading...', { font: '30px Cambria', fill: '#EDC951'}); 
		loadingLabel.anchor.setTo(0.5, 0.5); 


		// Add progress bar 
		var progressBar = game.add.sprite(game.world.centerX, 200, 'progressBar');
		progressBar.anchor.setTo(0.5, 0.5);

		// Load all assets 
		game.load.spritesheet('player', 'assets/ariel_spritesheet.png', 32, 32); 
		game.load.image('collectable', 'assets/collectable.png');
		game.load.image('tiles', 'assets/arielplatform_tiles.png');
		game.load.tilemap('map', 'assets/tilemap.csv', null, Phaser.Tilemap.CSV);
		game.load.image('arielLogo', 'assets/arielLogo.png');

	}, 

	create: function(){

		game.state.start('menu'); 
	}

};