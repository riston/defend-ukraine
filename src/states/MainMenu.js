/**
 * Created by risto on 19.10.14.
 */
var Storage = require('../Storage');

var MainMenu = function(game) {};

MainMenu.prototype = {

    create: function() {
        var x = this.game.width - 300;
        var y = 260;

        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.game.scale.enterFullScreen.add(this._onEnterFullScreen, this);
        this.game.scale.leaveFullScreen.add(this._onLeaveFullScreen, this);


        // Add background
        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'main-theme');
        this.background.anchor.set(0.5, 0.47);

        this.game.add.button(x, y, 'new-game', this.onStartClick, this);
        y += 70;
        this.game.add.button(x, y, 'tutorial', this.onStartClick, this);
        y += 70;
        this.game.add.button(x, y, 'fullscreen', this.onFullscreen, this);

        if (Storage.isSupported && Storage.get('defend.score')) {

            this.scoreText = this.game.add.text(
                this.game.width - 250, 130, 'Last score:\n' + Storage.get('defend.score') || 0, {
                font: '24px Creepster',
                fill: '#ffffff',
                align: 'center',
            });
            this.scoreText.angle = 10;
        }
    },

    _onEnterFullScreen: function () {

        console.log('Enter full screen');
        this.game.scale.refresh();
    },

    _onLeaveFullScreen: function () {

        console.log('Leave full screen');
    },

    onFullscreen: function () {

        this.game.scale.startFullScreen();
    },

    onStartClick: function () {

        console.log('Start game');
        this.game.state.start('Game');
    }
};

module.exports = MainMenu;