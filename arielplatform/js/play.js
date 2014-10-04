var jumpTimer = 0;

var score = 0;

var congratulations; 

var playState = {

    create: function() { 
    	// Fuction called after 'preload' to setup the game    

    	// Set up map
    	this.map = this.game.add.tilemap('map');
        this.map.addTilesetImage('tileset');

    	this.layer = this.map.createLayer('Calque de Tile 1');
    	this.layer.resizeWorld();

        this.map.setCollisionBetween(1,66);

    	//this.layer.debug = true;

        // Display instruction  ->  between tiles and player, second bg
        this.instructions = this.game.add.sprite(400, game.world.centerY, 'instructions');
        this.instructions.anchor.set(0.5);

        // Display trivia
        this.trivia01 = this.game.add.sprite(2656, 0, 'trivia01');
        this.trivia02 = this.game.add.sprite(3168, 352, 'trivia02');
        this.trivia03 = this.game.add.sprite(1120, 0, 'trivia03');
        this.trivia04 = this.game.add.sprite(3648, 128, 'trivia04');
        this.trivia05 = this.game.add.sprite(1984, 192, 'trivia05');



    	// Set up player
    	this.player = this.game.add.sprite(384, 256, 'player');
    	this.game.physics.enable(this.player); 	// enable physics on this player

        this.player.body.damping = 1;
    	this.player.body.collideWorldBounds = true;
        this.player.body.gravity.y = 1250;
        this.player.animations.add('left', [0, 1, 2], 10, true);
        this.player.animations.add('right', [4, 5, 6], 10, true);

        game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys(); 

        // Trap
        this.trapOpen = this.game.add.sprite(992,0,'trapOpen');       // Open trap is behind
        this.trapClosed = this.game.add.sprite(992,0,'trapClosed');   // Closed trap is on top
        this.game.physics.enable(this.trapClosed);                      // Physics is only enabled on closed
        this.trapClosed.body.immovable = true;

        // Score 
        this.collectableSlots = game.add.sprite(8, 8, 'collectableSlots'); 
        this.collectableSlots.fixedToCamera = true;
        this.collectableSlots.alpha = 0.8;
        this.collectableSlotsOutline = game.add.sprite(8, 8, 'collectableSlotsOutline');
        this.collectableSlotsOutline.fixedToCamera = true;

        // Collectables
        this.collectables = this.game.add.group();
        this.collectables.enableBody = true;

        this.createCollectable(4,6);
        this.createCollectable(39,4);
        this.createCollectable(64,3);
        this.createCollectable(86,12);
        this.createCollectable(117,1);

        // Congratulation message
        this.congratsSprite = this.game.add.sprite(992,this.game.height/2,'congratulations');
        this.congratsSprite.anchor.set(0.5);
        this.congratsSprite.visible = false; 

    },
    
    update: function() {
		// Function called 60 times per second

		this.game.physics.arcade.collide(this.layer, this.player);
        this.game.physics.arcade.collide(this.layer, this.collectables);
        this.game.physics.arcade.collide(this.player, this.trapClosed);

        this.game.physics.arcade.overlap(this.player, this.collectables, this.collectCollectable, null, this.game);
        this.game.physics.arcade.overlap(this.player, this.trapClosed, this.endGame, null, this.game);

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
            this.player.body.velocity.y = -200;
            jumpTimer = 1;                                              // Sets it != 0 so player is allowed to jump
        } else if(this.cursors.up.isDown && (jumpTimer != 0)) {
            if(jumpTimer > 10){                                         // Has reached max duration of the jump
                jumpTimer = 0;                                          // Doesn't allow the player to jump anymore
            } else if(this.player.body.velocity.y == 0){
                jumpTimer = 10;
            } else {
                jumpTimer++;                                            // While player is jumping, some kind of timer ++
                this.player.body.velocity.y = -375;
            }
        } else if(jumpTimer != 0){                                      // Resets the "timer" when player is on floor && !jumping
            jumpTimer = 0;
        } 

        console.log("(" + Math.round(this.player.position.x/32 + 1) + "," + Math.round(this.player.position.y/32 + 1) + ")");

        // Kill trap when score reaches 5
        if(score == 5){
            this.trapClosed.kill();
        }

        if(Math.round(this.player.position.x/32 + 1) == 32 && Math.round(this.player.position.y/32 + 1) <= 3) {
            this.endGame();
        }

    },

    createCollectable: function(x,y) {
        this.collectable = this.collectables.create((x-1)*32+40, (y-1)*32+40, 'collectable'); 
        this.collectable.body.allowGravity = false;
    },

    collectCollectable: function(player, collectable) {
        this.collectableScore = game.add.sprite(56+(score*48), 57, 'collectableScore');
        this.collectableScore.fixedToCamera = true;

        score++;

        collectable.kill();
    },

    endGame: function(){
        this.player.kill();
        this.congratsSprite.visible = true;
    }

};



// Palette from http://www.colourlovers.com/palette/1473/Ocean_Five