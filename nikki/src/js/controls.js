(function() {
  	'use strict';

  	function Controls(scene) {
  		this.scene = scene;
        this.play = this.scene.play;
        this.game = this.play.game;
        this.objects = this.scene.objects;
        //this.utils = this.play.utils;

        this.init();
        this.defineKeys();
  	}

  	Controls.prototype = {
  		init: function() {
            
  		},

        update: function () {
            /*
            if(this.cursors.left.isDown){
                console.log('gauche');
                //this.objects.ariels.animations.play('left');
                this.objects.ariels.body.velocity.x = -150; 
        } else if(this.cursors.right.isDown){
            this.player.animations.play('right');
            this.player.body.velocity.x = 150;
        } else {
            //this.player.animations.stop();
            //this.player.frame = 3;
        }
        
        if(this.cursors.down.isDown){
            this.player.body.velocity.y = 0;
        }
        
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
        */
        },
        
        defineKeys: function () {
            this.cursors = this.game.input.keyboard.createCursorKeys(); 
        },
  	};

  	window['ariel'] = window['ariel'] || {};
  	window['ariel'].Controls = Controls;

}());
