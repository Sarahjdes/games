var menuState = {

	create: function(){

		var arielLogo = game.add.sprite(game.world.centerX, 120, 'arielLogo'); 
		arielLogo.anchor.setTo(0.5, 0.5);

		var arielTitle = game.add.sprite(game.world.centerX, 265, 'arielTitle');
		arielTitle.anchor.setTo(0.5, 0.5);

		var arielTome = game.add.sprite(game.world.centerX, 325, 'arielTome');
		arielTome.anchor.setTo(0.5, 0.5);

		var keyUp = game.add.sprite(650, 450, 'keyUp');
		keyUp.anchor.setTo(0.5, 0.5);

		var startLabel = game.add.text(game.world.centerX, game.world.height-80, 'Appuie sur HAUT pour commencer!', { font: '25px Cambria', fill: '#000000'}); 
		startLabel.anchor.setTo(0.5, 0.5);

		var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP); 

		// Start game when UP is pressed
		upKey.onDown.addOnce(this.start, this); 

	}, 

	start: function(){

		game.state.start('play'); 

	},
};