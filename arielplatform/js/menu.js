var menuState = {

	create: function(){

		var arielLogo = game.add.sprite(game.world.centerX, 120, 'arielLogo'); 
		arielLogo.anchor.setTo(0.5, 0.5);

		//var nameLabel = game.add.text(game.world.centerX, 80, 'Ariel à l\'école des espions', { font: '50px Cambria', fill: '#6A4A3C'});
		//nameLabel.anchor.setTo(0.5, 0.5); 

		var scoreLabel = game.add.text(game.world.centerX, game.world.centerY, 'Meilleur score: ', { font: '25px Cambria', fill: '#6A4A3C'});
		scoreLabel.anchor.setTo(0.5, 0.5); 

		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'Appuyer sur HAUT pour commencer', { font: '25px Cambria', fill: '#6A4A3C'}); 
		startLabel.anchor.setTo(0.5, 0.5);

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP); 

		// Start game when UP is pressed
		upKey.onDown.addOnce(this.start, this); 

	}, 

	start: function(){

		game.state.start('play'); 

	},
};