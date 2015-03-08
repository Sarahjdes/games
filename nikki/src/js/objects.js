(function() {
	'use strict';

	function Objects (scene) {
        this.scene = scene;
		this.play = this.scene.play;
        this.game = this.play.game;
		
		this.init();
		
	}

 	Objects.prototype = {

 		init: function() {


 		},

 		update: function() {
 			
 		},

 		addAriel: function () {
            var ariel = new window['ariel'].Ariel(this);
 			this.ariels.add(ariel);
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
