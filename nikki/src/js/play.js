(function() {
    'use strict';

    function Play() {

    }

    Play.prototype = {
        create: function () {
            this.scene = new window['nikki'].Scene(this);
        },

        update: function () {
            this.scene.update();
        },

    };

    window['nikki'] = window['nikki'] || {};
    window['nikki'].Play = Play;

}());
