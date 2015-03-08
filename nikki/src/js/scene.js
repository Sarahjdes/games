(function() {
    'use strict';

    function Scene(play){
        this.play = play;
        this.game = this.play.game;

        this.levelMap();

        this.addInstructions();

        this.objects = new window['nikki'].Objects(this);
        this.controls = new window['nikki'].Controls(this);

        this.map = null;
        
    }

    Scene.prototype = {
        init: function() {
            
        }, 

        update: function() {
            this.objects.update();
            this.controls.update();

        },

        levelMap: function() {
            
        },

        addInstructions: function() {
            
        }
        
    };

    window['nikki'] = window['nikki'] || {};
    window['nikki'].Scene = Scene;
}());