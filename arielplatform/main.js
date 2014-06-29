// Initialize Phaser, and creates a 400x490px game
var game = new Phaser.Game(800, 512, Phaser.AUTO, 'game_div');

// Creates a new 'main' state that wil contain the game
var main_state = {

    preload: function() { 
		// Function called first to load all the assets

		// Tilemap set up
		this.game.load.tilemap('map', 'assets/tilemap.csv', null, Phaser.Tilemap.CSV);
		this.game.load.image('tiles', 'assets/arielplatform_tiles.png'); 

		// Sprites
		this.game.load.image('player', 'assets/ariel.png');
        this.game.load.image('collectable', 'assets/collectable.png');

    },

    create: function() { 
    	// Fuction called after 'preload' to setup the game    

    	// Enable physics on this game
    	this.game.physics.startSystem(Phaser.Physics.ARCADE); 

    	// Set up map
    	this.map = this.game.add.tilemap('map', 32, 32);
    	this.map.addTilesetImage('tiles');

    	this.map.setCollisionBetween(2,5);

    	this.layer = this.map.createLayer(0);
    	this.layer.resizeWorld();

    	// this.layer.debug = true;

    	// Set up player
    	this.player = this.game.add.sprite(300, 175, 'player');
    	this.game.physics.enable(this.player); 	// enable physics on this player

    	this.game.physics.arcade.gravity.y = 300;

        this.player.body.damping = 1;
    	this.player.body.collideWorldBounds = true;
        this.player.body.gravity.y = 1000;

        game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys(); 

        // Collectables
        this.collectables = this.game.add.group();
        this.collectables.enableBody = true;


        this.createCollectable(4,6);

    },
    
    update: function() {
		// Function called 60 times per second

		this.game.physics.arcade.collide(this.layer, this.player);
        this.game.physics.arcade.collide(this.layer, this.collectables);

        this.game.physics.arcade.overlap(this.player, this.collectables, this.collectCollectable, null, this.game);

        this.player.body.velocity.x = 0;

        if(this.cursors.left.isDown){
            this.player.body.velocity.x = -150; 
        } else if(this.cursors.right.isDown){
            this.player.body.velocity.x = 150;
        }

        if(this.cursors.down.isDown){
            this.player.body.velocity.y = 300;
        }

        if(this.cursors.up.isDown && this.player.body.onFloor()){
            this.player.body.velocity.y = -600;
        }

        console.log(this.player.body.velocity.y);

    },

    createCollectable: function(x,y) {
        this.collectable = this.collectables.create((x-1)*32+8, (y-1)*32+8, 'collectable'); 
        this.collectable.body.allowGravity = false;
    },

    collectCollectable: function(player, collectable) {
        collectable.kill();
    },
};


// Add and start the 'main' state to start the game
game.state.add('main', main_state);  
game.state.start('main'); 


// Palette from http://www.colourlovers.com/palette/1473/Ocean_Five