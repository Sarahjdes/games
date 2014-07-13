var bootState = {
	
	preload: function(){

		game.load.image('progressBar', 'assets/progressBar.png');

	},

	create: function(){

		game.stage.backgroundColor = '#00A0B0';

		game.physics.startSystem(Phaser.Physics.ARCADE);

		game.state.start('load');

	}, 

};