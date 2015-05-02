(function() {
	'use strict';

  	var Enemy = function (objects,coordinates) {
        this.objects = objects;
        this.play = this.objects.scene.play;
        this.game = this.play.game;

        this.key = 'paparazzi';                                         // texture from preload
        Phaser.Sprite.call(this, this.game, coordinates[0][0], coordinates[0][1], this.key);    // places the player
        //this.anchor.setTo(0.5, 0.5);

        this.treatCoordinates(coordinates);
        this.animateSprite();
        this.physics();

        this.cursors = this.game.input.keyboard.createCursorKeys(); 
  	};


    Enemy.prototype = Object.create(Phaser.Sprite.prototype);
    Enemy.prototype.contructor = Enemy;

    Enemy.prototype.init = function (coordinates) {
        console.log(coordinates[0][0]);
        console.log(coordinates[0][1]);
    };


    Enemy.prototype.update = function () { 
            if (this.direction > 0) {
                 this.animations.play('right');
            } else {
                this.animations.play('left');
            }
            this.body.velocity[this.axis] = this.direction * 120;
            this.checkPosition();
            
    };


    Enemy.prototype.treatCoordinates = function (coordinates) {
        if (coordinates[0][1] == coordinates[1][1]) {
            this.pointA = coordinates[0][0];
            this.pointB = coordinates[1][0];
            this.axis = 'x';
        } else if (coordinates[0][0] == coordinates[1][0]) {
            this.pointA = coordinates[0][1];
            this.pointB = coordinates[1][1];
            this.axis = 'y';
        } else {
            console.log('something is wrong with (' + coordinates[0][0] + ',' + coordinates[0][1] + ')(' + coordinates[1][0] + ',' + coordinates[1][1] + ')');
        }
        if (this.pointB >= this.pointA){
            this.direction = 1; 
        } else {
            this.direction = -1;
        }

    };
 

    Enemy.prototype.checkPosition = function () {
        if (this.direction > 0) {
            if (this.pointB - this.body.position[this.axis] > 0) {
                console.log('right');
            } else {
                console.log('right and change');
                
                this.changeDirection();
            }
        } else {
            if (this.pointA - this.body.position[this.axis] > 0) {
                console.log('left and change');
                
                this.changeDirection();
            } else {
                console.log('left');
            }
        }
    };


    Enemy.prototype.changeDirection = function () {
        this.direction *= -1;
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
