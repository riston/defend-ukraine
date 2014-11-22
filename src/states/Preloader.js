/**
 * Created by risto on 19.10.14.
 */

var Preloader = function (game) {}

Preloader.prototype = {
    preload: function() {
        var imgP = './img/';
        var cX = this.game.world.centerX;
        var cY = this.game.world.centerY;
        this.game.stage.backgroundColor = '#16181a';

        this.preloadBg = this.add.sprite(cX - (297 / 2), cY - (145 / 2) + 200, 'preloaderBg');
        this.preloadBar = this.add.sprite(cX - (158 / 2), cY - (50 / 2) + 200, 'preloaderBar');

        this.load.setPreloadSprite(this.preloadBar);
        this.load.image('bullet',       imgP + 'shot.png');
        this.load.image('bullet-shell', imgP + 'bullet.png');
        this.load.image('soldier',      imgP + 'soldier.png');
        this.load.image('light',        imgP + 'light.png');
        this.load.image('flashlight',   imgP + 'flashlight.png');
        this.load.image('gun',          imgP + 'gun.png');
        this.load.image('tank',         imgP + 'tank.png');
        this.load.image('truck',        imgP + 'truck.png');
        this.load.image('evergreen',    imgP + 'evergreen.png');
        this.load.image('tree',         imgP + 'tree.png');
        this.load.image('battery',      imgP + 'battery.png');
        this.load.image('tree1',        imgP + 'tree1.png');
        this.load.image('background',   imgP + 'background.jpg');
        this.load.image('main-theme',   imgP + 'main_theme.jpg');

        // Button
        this.load.image('play', imgP + 'button/play.png');

        this.load.image('new-game', imgP + 'button/new_game.png');
        this.load.image('new-game-hover', imgP + 'button/new_game_hover.png');
        this.load.image('new-game-click', imgP + 'button/new_game_click.png');

        this.load.image('tutorial', imgP + 'button/tutorial.png');
        this.load.image('tutorial-hover', imgP + 'button/tutorial_hover.png');
        this.load.image('tutorial-click', imgP + 'button/tutorial_click.png');

        this.load.image('fullscreen', imgP + 'button/fullscreen.png');
        this.load.image('fullscreen-hover', imgP + 'button/fullscreen_hover.png');
        this.load.image('fullscreen-click', imgP + 'button/fullscreen_click.png');


//        this.load.image('tutorial', 'img/button/tutorial.png');
//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');

        this.load.spritesheet('mute', 'img/mute.png', 34, 34, 3);

        this.load.audio('shot', ['snd/shot.wav']);
        this.load.audio('dead', ['snd/dead.wav']);

    },
    create: function() {

        this.game.state.start('MainMenu');
    }
};

module.exports = Preloader;
