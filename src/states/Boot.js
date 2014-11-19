/**
 * Created by risto on 19.10.14.
 */

var Boot = function(game) {};

Boot.prototype = {

    preload: function() {
        var imgP = './img/';

        this.load.image('preloaderBg',  imgP + 'loading-bg.png');
        this.load.image('preloaderBar', imgP + 'loading-bar.png');
    },

    create: function() {
        this.game.input.maxPointers = 1;

        // this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
        this.game.stage.scale.pageAlignHorizontally = true;
        this.game.stage.scale.pageAlignVertically = true;

        this.game.state.start('Preloader');
    }
};

module.exports = Boot;
