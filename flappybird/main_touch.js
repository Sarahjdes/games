// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets

		// Change the bg color of the game
		this.game.stage.backgroundColor = '#71c5cf';

		// Load the bird sprite
		this.game.load.image('bird', 'assets/bird.png');

		// Load the pipe sprite
		this.game.load.image('pipe', 'assets/pipe.png');
    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game   

    	// Display bird on screen
    	this.bird = this.game.add.sprite(100, 245, 'bird'); 

    	// Add gravity to bird to make it fall
    	this.bird.body.gravity.y = 1000;

    	// Call 'jump' when spacekey is hit
    	//var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	this.game.input.onDown.add(this.jump, this);

    	// Create group of 20 pipes
    	this.pipes = game.add.group();
    	this.pipes.createMultiple(20, 'pipe');

    	// Add timer
    	this.timer = this.game.time.events.loop(1500, this.addRowOfPipes, this);

    	// Score label
    	this.score = 0;
    	var style = { font: "30px Arial", fill: "#ffffff" };
    	this.labelScore = this.game.add.text(20, 20, "0", style);

    	//this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
    	//this.game.scale.startFullScreen();

    	this.game.stage.scaleMode = Phaser.StageScaleMode.EXACT_FIT;
    	this.game.stage.scale.startFullScreen();

    },
    
    update: function() {
		// Function called 60 times per second

		// If bird is out of the game, call restart function
		if(this.bird.inWorld == false)
			this.restartGame();

		// Kill bird when it touches pipe
		this.game.physics.overlap(this.bird, this.pipes, this.restartGame, null, this);

    },

    jump: function() {
    	this.bird.body.velocity.y = -350;
    },

	restartGame: function() {
		// Stop timer
		this.game.time.events.remove(this.timer);

		// Start the 'main' state, which restarts the game
		this.game.state.start('main');
	},

	addOnePipe: function(x, y) {
		// Get the first dead pipe of group
		var pipe = this.pipes.getFirstDead();

		// Set new position of the pipe
		pipe.reset(x, y);

		// Add velocity to the pipe to make it move left
		pipe.body.velocity.x = -200;

		// Kill the pipe when it is no longer visible
		pipe.outOfBoundsKill = true; 
	},

	addRowOfPipes: function() {
		var hole = Math.floor(Math.random()*5)+1;

		for (var i = 0; i < 8; i++)
			if(i != hole && i != hole+1)
				this.addOnePipe(400, i*60+10);

		this.score += 1; 
		this.labelScore.content = this.score;

	},

};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 