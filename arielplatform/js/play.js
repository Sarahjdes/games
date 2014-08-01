var jumpTimer = 0;

var score = 0;

var playState = {

    create: function() { 
    	// Fuction called after 'preload' to setup the game    

    	// Set up map
    	this.map = this.game.add.tilemap('map', 32, 32);
    	this.map.addTilesetImage('tiles');

    	this.map.setCollisionBetween(2,5);

    	this.layer = this.map.createLayer(0);
    	this.layer.resizeWorld();

    	// this.layer.debug = true;

    	// Set up player
    	this.player = this.game.add.sprite(240, 100, 'player');
    	this.game.physics.enable(this.player); 	// enable physics on this player

        this.player.body.damping = 1;
    	this.player.body.collideWorldBounds = true;
        this.player.body.gravity.y = 1250;
        this.player.animations.add('left', [0, 1, 2], 10, true);
        this.player.animations.add('right', [4, 5, 6], 10, true);

        game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys(); 

        // Score 
        this.collectableSlots = game.add.sprite(8, 8, 'collectableSlots'); 
        this.collectableSlots.fixedToCamera = true;

        // Collectables
        this.collectables = this.game.add.group();
        this.collectables.enableBody = true;

        this.createCollectable(4,6);
        this.createCollectable(4,12);
        this.createCollectable(4,10);
        this.createCollectable(4,11);
        this.createCollectable(4,9);

        // Trap
        this.trap = this.game.add.sprite(320,352, 'trap'); 
        this.game.physics.enable(this.trap);        // Enables physics on trap so it can check for collide in update
        this.trap.body.immovable = true;            // Makes it immovable so it won't move when touched by player

    },
    
    update: function() {
		// Function called 60 times per second

		this.game.physics.arcade.collide(this.layer, this.player);
        this.game.physics.arcade.collide(this.layer, this.collectables);
        this.game.physics.arcade.collide(this.player, this.trap);

        this.game.physics.arcade.overlap(this.player, this.collectables, this.collectCollectable, null, this.game);

        this.player.body.velocity.x = 0;

        if(this.cursors.left.isDown){
            this.player.animations.play('left');
            this.player.body.velocity.x = -150; 
        } else if(this.cursors.right.isDown){
            this.player.animations.play('right');
            this.player.body.velocity.x = 150;
        } else {
            this.player.animations.stop();
            this.player.frame = 3;
        }
        /*
        if(this.cursors.down.isDown){
            this.player.body.velocity.y = 0;
        }
        */
        if(this.cursors.up.isDown && this.player.body.onFloor()){       // Key is pressed and player is on floor
            this.player.body.velocity.y = -375;
            jumpTimer = 1;                                              // Sets it != 0 so player is allowed to jump
        } else if(this.cursors.up.isDown && (jumpTimer != 0)) {
            if(jumpTimer > 15){                                         // Has reached max duration of the jump
                jumpTimer = 0;                                          // Doesn't allow the player to jump anymore
            } else if(this.player.body.velocity.y == 0){
                jumpTimer = 15;
            } else {
                jumpTimer++;                                            // While player is jumping, some kind of timer ++
                this.player.body.velocity.y = -375;
            }
        } else if(jumpTimer != 0){                                      // Resets the "timer" when player is on floor && !jumping
            jumpTimer = 0;
        } 

        console.log("(" + Math.round(this.player.position.x/32 + 1) + "," + Math.round(this.player.position.y/32 + 1) + ")");

    },

    createCollectable: function(x,y) {
        this.collectable = this.collectables.create((x-1)*32+8, (y-1)*32+8, 'collectable'); 
        this.collectable.body.allowGravity = false;
    },

    collectCollectable: function(player, collectable) {
        this.collectableScore = game.add.sprite(24+(score*48), 24, 'collectableScore');
        this.collectableScore.fixedToCamera = true;

        score++;

        collectable.kill();

        if(score == 5){
        }
    },
};



// Palette from http://www.colourlovers.com/palette/1473/Ocean_Five