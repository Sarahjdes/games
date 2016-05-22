(function() {
	'use strict';

  	var Enemy = function (objects,tilesCoordinates,speed) {
        this.objects = objects;
        this.play = this.objects.scene.play;
        this.game = this.play.game;

        this.key = 'paparazzi';                                         // texture from preload
        Phaser.Sprite.call(this, this.game, tilesCoordinates[0][0], tilesCoordinates[0][1], this.key);    // places the player
        //this.anchor.setTo(0.5, 0.5);

        this.speed = speed;

        this.coordinates = [[10,10],[50,10]];

        this.tilesToCoordinates(tilesCoordinates);

        this.treatCoordinates(tilesCoordinates);
        this.animateSprite();
        this.physics();

        this.cursors = this.game.input.keyboard.createCursorKeys(); 
  	};


    Enemy.prototype = Object.create(Phaser.Sprite.prototype);
    Enemy.prototype.contructor = Enemy;

    Enemy.prototype.init = function (tilesCoordinates) {
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
            this.body.velocity[this.directionAxis] = this.direction * this.speed;
            this.checkPosition();
            this.body.velocity[this.directionAxis] = this.direction * this.speed;
            
    };


    Enemy.prototype.tilesToCoordinates = function (tilesCoordinates) {
        for(var i = 0, length = tilesCoordinates.length; i < length; i++) {
            tilesCoordinates[0][i] /= 2;
            tilesCoordinates[1][i] /= 2;
            debugger
        }
    };



    Enemy.prototype.treatCoordinates = function (tilesCoordinates) {
        if (this.coordinates[0][1] == this.coordinates[1][1]) {
            this.pointA = this.coordinates[0][0];
            this.pointB = this.coordinates[1][0];
            this.directionAxis = 'x';
        } else if (this.coordinates[0][0] == this.coordinates[1][0]) {
            this.pointA = this.coordinates[0][1];
            this.pointB = this.coordinates[1][1];
            this.directionAxis = 'y';
        } else {
            console.log('something is wrong with (' + this.coordinates[0][0] + ',' + this.coordinates[0][1] + ')(' + this.coordinates[1][0] + ',' + this.coordinates[1][1] + ')');
        }
        if (this.pointB >= this.pointA){
            this.direction = 1; 
        } else {
            this.direction = -1;
        }
debugger
    };
 

    Enemy.prototype.checkPosition = function () {
        if (this.body.position[this.directionAxis] < this.pointA && this.body.position[this.directionAxis] < this.pointB) {
            this.changeDirection();
        } else if (this.body.position[this.directionAxis] > this.pointA && this.body.position[this.directionAxis] > this.pointB) {
            this.changeDirection();
        }
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
