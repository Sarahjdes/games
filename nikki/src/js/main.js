window.onload = function () {
    'use strict';

    var game,
        ns = window['nikki'];

    game = new Phaser.Game(800, 512, Phaser.AUTO, 'nikki-game');
    game.state.add('boot', ns.Boot);
    game.state.add('preloader', ns.Preloader);
    game.state.add('menu', ns.Menu);
    game.state.add('play', ns.Play);

    game.state.start('boot');
};
