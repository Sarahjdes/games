var game = new Phaser.Game(800, 512, Phaser.AUTO, 'game_div');

game.state.add('boot', bootState); 
game.state.add('load', loadState); 
game.state.add('menu', menuState); 
game.state.add('play', playState); 

game.state.start('boot');