(function() {
	'use strict';

  	var Enemy = function (objects,coordinates) {
        this.objects = objects;
        this.play = this.objects.scene.play;
        this.game = this.play.game;

        this.key = 'paparazzi';                                         // texture from preload
        Phaser.Sprite.call(this, this.game, coordinates[0][0], coordinates[0][1], this.key);    // places the player
        //this.anchor.setTo(0.5, 0.5);

        this.init(coordinates);
        this.directionArray(coordinates);
        this.destinationCoordinates(coordinates);
        this.animateSprite();
        this.physics();

        this.cursors = this.game.input.keyboard.createCursorKeys(); 
  	};


    Enemy.prototype = Object.create(Phaser.Sprite.prototype);
    Enemy.prototype.contructor = Enemy;

    Enemy.prototype.init = function (coordinates) {
        //console.log(coordinates[0][0]);
        //console.log(coordinates[0][1]);
    };


    Enemy.prototype.directionArray = function (coordinates) {       // according to Ilian, this can be shortened even more
        if (coordinates[1][0] - coordinates[0][0] > 0) {
            this.direction = ['right','x',1]
        } else if (coordinates[1][0] - coordinates[0][0] < 0) {
            this.direction = ['left','x',-1]
        } else if (coordinates[1][1] - coordinates[0][1] > 0) {
            this.direction = ['up','y',1]
        } else if (coordinates[1][1] - coordinates[0][1] < 0) {
            this.direction = ['down','y',-1]
        } 
    };


    Enemy.prototype.destinationCoordinates = function (coordinates) {
        this.destinationX = coordinates[1][0];
        this.destinationY = coordinates[1][1];

        console.log("Dest X : " + this.destinationX);
        console.log("Dest Y : " + this.destinationY);
        
    }; 


    Enemy.prototype.update = function () { 

        if (this.destinationX == this.body.position.x && this.destinationY == this.body.position.y) {
            console.log('You have arrived!');
            this.body.velocity.x = 0;
        } else {
            this.animations.play(this.direction[0]);
                if (this.direction[1] == 'x') {
                    this.body.velocity.x = this.direction[2] * 120;
                } else if (this.direction[1] == 'y') {
                    this.body.velocity.y = this.direction[2] * 120;
                }
        }
    };


    Enemy.prototype.animateSprite = function () {
        this.frame = 3;
        this.animations.add('left', [2, 1, 0], 10, true);
        this.animations.add('right', [4, 5, 6], 10, true);
    };


    Enemy.prototype.physics = function () {         
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
    };

  	window['nikki'] = window['nikki'] || {};
  	window['nikki'].Enemy = Enemy;
}());
