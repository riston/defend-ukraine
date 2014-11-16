/**
 * Created by risto on 19.10.14.
 */

var Boot = function(game) {};

Boot.prototype = {

    preload: function() {

        this.load.image('preloaderBg', 'img/loading-bg.png');
        this.load.image('preloaderBar', 'img/loading-bar.png');
//        this.load.image('start-button', 'img/new_game_button.png');
        this.load.image('bullet', 'img/shot.png');
        this.load.image('bullet-shell', 'img/bullet.png');
        this.load.image('soldier', 'img/soldier.png');
        this.load.image('light', 'img/light.png');
        this.load.image('flashlight', 'img/flashlight.png');
        this.load.image('gun', 'img/gun.png');
        this.load.image('tank', 'img/tank.png');
        this.load.image('truck', 'img/truck.png');
        this.load.image('evergreen', 'img/evergreen.png');
        this.load.image('tree', 'img/tree.png');
        this.load.image('background', 'img/background.jpg');
        this.load.image('main-theme', 'img/main_theme.jpg');

        // Button
        this.load.image('new-game', 'img/button/new_game.png');
//        this.load.image('new-game-hover', 'img/button/new_game_hover.png');
//        this.load.image('new-game-click', 'img/button/new_game_click.png');

        this.load.image('tutorial', 'img/button/tutorial.png');
//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');
//        this.load.image('tutorial-click', 'img/button/tutorial_click.png');

        this.load.image('fullscreen', 'img/button/fullscreen.png');
//        this.load.image('fullscreen-hover', 'img/button/fullscreen_hover.png');
//        this.load.image('fullscreen-click', 'img/button/fullscreen_click.png');


//        this.load.image('tutorial', 'img/button/tutorial.png');
//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');

        this.load.spritesheet('mute', 'img/mute.png', 34, 34, 3);

        this.load.audio('shot', ['snd/shot.wav']);
        this.load.audio('dead', ['snd/dead.wav']);
    },

    create: function() {
        this.game.input.maxPointers = 1;

//        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
//        this.game.stage.scale.pageAlignHorizontally = true;
//        this.game.stage.scale.pageAlignVertically = true;

        this.game.state.start('Preloader');
    }
};

module.exports = Boot;
