(function() {
    'use strict';

    function Scene(play){
        this.play = play;
        this.game = this.play.game;

        this.levelMap();

        this.addInstructions();

        this.objects = new window['nikki'].Objects(this);

        this.map = null;
        
    }

    Scene.prototype = {
        init: function() {
            
        }, 

        update: function() {
            this.objects.update();

            this.game.physics.arcade.collide(this.layer, this.objects.heros);
            this.game.physics.arcade.collide(this.layer, this.objects.baddies);

        },

        levelMap: function() {
            this.map = this.game.add.tilemap('map');
            this.map.addTilesetImage('RPGpack_sheet');

            this.layer = this.map.createLayer('Calque de Tile 1');
            this.layer.resizeWorld();

            this.layer.debug = false;

            this.map.setCollision(52);
        },

        addInstructions: function() {
            
        }
        
    };

    window['nikki'] = window['nikki'] || {};
    window['nikki'].Scene = Scene;
}());