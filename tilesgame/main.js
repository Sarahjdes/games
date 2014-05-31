// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(320, 480, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that will contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
		this.game.stage.backgroundColor = '#AFCF95';

		// Load the tile sprite
		this.game.load.image('tile', 'assets/tile.png');

    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game   

    	this.tiles = game.add.group();
		this.tiles.createMultiple(10, 'tile'); 

    	this.addOneTile(0, 0);
    	this.addOneTile(80, 120);
    },
    
    update: function() {
		// Function called 60 times per second
    },

    addOneTile: function(x, y) {
    	// Function adds a tile to the screen

    	// Gets first dead tile of group
    	var tile = this.tiles.getFirstDead();

    	// Set new position of tile
    	tile.reset(x, y);	// No need for this, b/c it is a local var within this function

    	// Sets velocity
    	tile.body.velocity.y = 100;

    	// Kills a tile when off screen
    	tile.outOfBoundsKill = true;

    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 