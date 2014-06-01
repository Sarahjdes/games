// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(480, 480, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
		// Color scheme -- http://www.colourlovers.com/palette/1930/cheer_up_emo_kid

		this.game.load.tilemap('map', 'assets/tilemap.csv', null, Phaser.Tilemap.CSV);
		this.game.load.image('tiles', 'assets/frogger_tiles.png');

    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game    

    	//  Because we're loading CSV map data we have to specify the tile size here or we can't render it
    	this.map = this.game.add.tilemap('map', 32, 32);

    	//  Now add in the tileset
    	this.map.addTilesetImage('tiles');
    
    	//  Create our layer
    	this.layer = this.map.createLayer(0);

    	//  Resize the world
    	this.layer.resizeWorld();

    },
    
    update: function() {
		// Function called 60 times per second
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 