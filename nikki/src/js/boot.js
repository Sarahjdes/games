(function () {
    'use strict';

    function Boot() {}

    Boot.prototype = {

    preload: function(){


    },

    create: function(){

        //in console, type this.game to make sure it exists

        this.game.stage.backgroundColor = '#D77FB2';

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        this.game.state.start('preloader');

    }, 

    };

    window['nikki'] = window['nikki'] || {};
    window['nikki'].Boot = Boot;

}());

