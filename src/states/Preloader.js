/**
 * Created by risto on 19.10.14.
 */

var Preloader = function (game) {}

Preloader.prototype = {
    preload: function() {
        this.game.stage.backgroundColor = '#16181a';
        this.preloadBg = this.add.sprite((320-297)/2, (480-145)/2, 'preloaderBg');
        this.preloadBar = this.add.sprite((320-158)/2, (480-50)/2, 'preloaderBar');

        this.load.setPreloadSprite(this.preloadBar);
//        this.load.image('ball', 'img/ball.png');
//        this.load.image('hole', 'img/hole.png');
//        this.load.image('element-w', 'img/element-w.png');
//        this.load.image('element-h', 'img/element-h.png');
//        this.load.image('panel', 'img/panel.png');
//        this.load.image('title', 'img/title.png');
//        this.load.image('button-pause', 'img/button-pause.png');
//        this.load.image('button-start', 'img/button-start.png');
//        this.load.image('screen-bg', 'img/screen-bg.png');
//        this.load.image('screen-mainmenu', 'img/screen-mainmenu.png');
//        this.load.image('screen-howtoplay', 'img/screen-howtoplay.png');
//
//        this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
//

        var imgP = './img/';

        this.load.image('preloaderBg',  imgP + 'loading-bg.png');
        this.load.image('preloaderBar', imgP + 'loading-bar.png');
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
        this.load.image('background',   imgP + 'background.jpg');
        this.load.image('main-theme',   imgP + 'main_theme.jpg');

        // Button
        this.load.image('new-game', imgP + 'button/new_game.png');
//        this.load.image('new-game-hover', 'img/button/new_game_hover.png');
//        this.load.image('new-game-click', 'img/button/new_game_click.png');

        this.load.image('tutorial', imgP + 'button/tutorial.png');
//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');
//        this.load.image('tutorial-click', 'img/button/tutorial_click.png');

        this.load.image('fullscreen', imgP + 'button/fullscreen.png');
//        this.load.image('fullscreen-hover', 'img/button/fullscreen_hover.png');
//        this.load.image('fullscreen-click', 'img/button/fullscreen_click.png');


//        this.load.image('tutorial', 'img/button/tutorial.png');
//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');

        this.load.spritesheet('mute', 'img/mute.png', 34, 34, 3);

        this.load.audio('shot', ['snd/shot.wav']);
        this.load.audio('dead', ['snd/dead.wav']);
    },
    create: function() {

//        this.game.state.start("Game");
        this.game.state.start('MainMenu');
    }
};

module.exports = Preloader;
