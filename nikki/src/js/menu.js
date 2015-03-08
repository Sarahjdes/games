(function() {
    'use strict';

    function Menu(menu) {
        this.menu = menu;
        this.game = this.menu.game;
    }

    Menu.prototype = {

        create: function(){

            var nikkiLogo = this.game.add.sprite(this.game.world.centerX, 200, 'nikkiLogo'); 
            nikkiLogo.anchor.setTo(0.5, 0.5);
            nikkiLogo.scale.x = 0.5;
            nikkiLogo.scale.y = 0.5;

            var startLabel = this.game.add.text(this.game.world.centerX, this.game.world.height-80, 'Appuie sur la touche HAUT de ton clavier pour commencer!', { font: '25px Cambria', fill: '#FFFFFF'}); 
            startLabel.anchor.setTo(0.5, 0.5);

            var upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP); 

            upKey.onDown.addOnce(this.start, this); 
        
        },

        start: function(){
            
            this.game.state.start('play'); 

        },

    };

    window['nikki'] = window['nikki'] || {};
    window['nikki'].Menu = Menu;

}());