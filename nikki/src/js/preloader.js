(function() {
    'use strict';

    function Preloader() {
        this.ready = false;
    }

    Preloader.prototype = {

        preload: function () {
            this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

            this.load.image('nikkiLogo', 'assets/images/nikkiLogo.png');

        },

        update: function () {
            if (!!this.ready) {
                this.game.state.start('menu');
            }
        },

        onLoadComplete: function () {
            this.ready = true;
        }
    };

    window['nikki'] = window['nikki'] || {};
    window['nikki'].Preloader = Preloader;

}());
