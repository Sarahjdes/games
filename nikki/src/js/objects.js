(function() {
	'use strict';

	function Objects (scene) {
        this.scene = scene;
		this.play = this.scene.play;
        this.game = this.play.game;
		
        this.heros = new Phaser.Group(this.play.game);
        this.baddies = new Phaser.Group(this.play.game);

		this.init();
		
	}

 	Objects.prototype = {

 		init: function() {
 			this.addPlayer();
 			this.addEnemy([[500,400],[500,200]],150);
 			this.addEnemy([[100,300],[200,300]],120);
 		},

 		update: function() {
 			
 		},

 		addPlayer: function () {
 			var nikki = new window['nikki'].Player(this);
 			this.heros.add(nikki);
 		},

 		addEnemy: function (coordinates,speed) {
  			var paparazzi = new window['nikki'].Enemy(this,coordinates,speed);
 			this.baddies.add(paparazzi);
 		},

 		checkWin: function () {
 			var win = false;
 			// if... will change its value
            if (win) {
                this.play.onWin();
            }
        }
 		
	};

	window['nikki'] = window['nikki'] || {};
	window['nikki'].Objects = Objects;

}());
