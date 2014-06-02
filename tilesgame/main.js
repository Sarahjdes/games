// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(320, 480, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that will contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets
		this.game.stage.backgroundColor = '#AFCF95';

		// Load the tile sprite
		this.game.load.image('tile', 'assets/tile.png');
        this.game.load.image('tile2', 'assets/tile2.png');
        this.game.load.image('tile3', 'assets/tile3.png');

    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game   

        this.badtiles = game.add.group();
        this.badtiles.createMultiple(200, 'tile'); 

    	this.goodtiles = game.add.group();
		this.goodtiles.createMultiple(200, 'tile2'); 

        this.timer = this.game.time.events.loop(1200, this.addRow, this);

        this.tile.inputEnabled = true;
        this.tile.events.onInputOver.add(this.tileIsTouched, this);

    },
    
    update: function() {
		// Function called 60 times per second
    },

    addOneTile: function(x, y, tiletype) {
    	// Function adds a tile to the screen

    	// Gets first dead tile of group
        if(tiletype == 'good'){
            var tile = this.goodtiles.getFirstDead();
        } else if (tiletype == 'bad'){
            var tile = this.badtiles.getFirstDead();
        }

    	// Set new position of tile
    	tile.reset(x, y);	// No need for this, b/c it is a local var within this function

    	// Sets velocity
    	tile.body.velocity.y = 100;

    	// Kills a tile when off screen
    	tile.outOfBoundsKill = true;

    },

    addRow: function() {
    	// Adds a row of tiles at top of screen

    	// Picks the bad tile
        var bad = Math.floor(Math.random() * 4);

        for(var i = 0; i < 4; i++){
            if(i != bad){
                this.addOneTile(i*80,0, 'good');
            } else {
                this.addOneTile(i*80,0, 'bad');
            }
        }

    },

    tileIsTouched: function() {
        // When a tile is touched, it is killed and replaced by a new one

        this.tile.kill();

    }, 

};

// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 
