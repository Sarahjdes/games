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
                if (this.directionAxis == 'x') {
                    this.animations.play('right');
                } else if (this.directionAxis == 'y') {
                    this.animations.play('down');
                }
            } else if (this.direction < 0) {
                if (this.directionAxis == 'x') {
                    this.animations.play('left');
                } else if (this.directionAxis == 'y') {
                    this.animations.play('up');
                }
            }
            this.body.velocity[this.directionAxis] = this.direction * 120;
            this.checkPosition();
            this.body.velocity[this.directionAxis] = this.direction * 120;
            
    };


    Enemy.prototype.treatCoordinates = function (coordinates) {
        if (coordinates[0][1] == coordinates[1][1]) {
            this.pointA = coordinates[0][0];
            this.pointB = coordinates[1][0];
            this.directionAxis = 'x';
        } else if (coordinates[0][0] == coordinates[1][0]) {
            this.pointA = coordinates[0][1];
            this.pointB = coordinates[1][1];
            this.directionAxis = 'y';
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
        if (this.body.position[this.directionAxis] < this.pointA && this.body.position[this.directionAxis] < this.pointB) {
            this.changeDirection();
        } else if (this.body.position[this.directionAxis] > this.pointA && this.body.position[this.directionAxis] > this.pointB) {
            this.changeDirection();
        }

        console.log(this.body.position[this.directionAxis]);
        console.log(this.pointA);
        console.log(this.pointB);
    };


    Enemy.prototype.changeDirection = function () {
        this.direction *= -1;
    };


    Enemy.prototype.animateSprite = function () {
        this.frame = 24;
        this.animations.add('up', [24, 17, 10, 3], 10, true);
        this.animations.add('down', [24, 31, 38, 45], 10, true);
        this.animations.add('left', [24, 23, 21, 21], 10, true);
        this.animations.add('right', [24, 25, 26, 27], 10, true);
    };


    Enemy.prototype.physics = function () {         
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
    };

  	window['nikki'] = window['nikki'] || {};
  	window['nikki'].Enemy = Enemy;
}());
