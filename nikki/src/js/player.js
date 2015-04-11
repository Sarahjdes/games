(function() {
	'use strict';

  	var Player = function (objects) {
        this.objects = objects;
        this.play = this.objects.scene.play;
        this.game = this.play.game;

        this.key = 'nikki';                                         // texture from preload
        Phaser.Sprite.call(this, this.game, 75, 75, this.key);    // places the player
        this.anchor.setTo(0.5, 0.5);

        this.animateSprite();
        this.physics();

        this.cursors = this.game.input.keyboard.createCursorKeys(); 

  	};

    Player.prototype = Object.create(Phaser.Sprite.prototype);
    Player.prototype.contructor = Player;

  	Player.prototype.update = function () {
        this.body.velocity.set(0);
        if(this.cursors.left.isDown){
            this.animations.play('left');
            this.body.velocity.x = -250; 
        } else if(this.cursors.right.isDown){
            this.animations.play('right');
            this.body.velocity.x = 250;
        } else if(this.cursors.up.isDown){
            this.animations.play('up');
            this.body.velocity.y = -250;
        } else if(this.cursors.down.isDown){
            this.animations.play('down');
            this.body.velocity.y = 250;
        } else {
            this.animations.stop();
        }
    };


    Player.prototype.animateSprite = function () {
        this.frame = 24;
        this.animations.add('up', [24, 17, 10, 3], 10, true);
        this.animations.add('down', [24, 31, 38, 45], 10, true);
        this.animations.add('left', [24, 23, 21, 21], 10, true);
        this.animations.add('right', [24, 25, 26, 27], 10, true);
    };


    Player.prototype.physics = function () {         
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
    };

  	window['nikki'] = window['nikki'] || {};
  	window['nikki'].Player = Player;
}());
