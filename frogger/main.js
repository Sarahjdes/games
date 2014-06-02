// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(480, 480, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
		// Color scheme -- http://www.colourlovers.com/palette/1930/cheer_up_emo_kid

		this.game.load.tilemap('map', 'assets/tilemap.csv', null, Phaser.Tilemap.CSV);
		this.game.load.image('tiles', 'assets/frogger_tiles.png');

		this.game.load.image('frog', 'assets/frog.png');

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

    	// 
    	this.map.setCollisionBetween(3, 1);

    	// Place frog
    	this.frog = this.game.add.sprite(224, 448, 'frog');
    	this.frog.inputEnabled = true;

    	// Config keyboard
    	this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    	this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    	this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    	this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT)

    },
    
    update: function() {
		// Function called 60 times per second

		// Move frog
		//this.upKey.onDown.add(function() {this.frog.y--; console.log(this.frog.y);}, this);
		//this.downKey.onDown.add(function(downKey) {this.frog.y += 1;}, this);


		if (this.upKey.isDown) {
			this.frog.y--;
			console.log(this.frog.y);
		} else if (this.downKey.isDown) {
			this.frog.y++;
		}



    },
};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 