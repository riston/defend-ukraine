/**
 * Created by risto on 19.10.14.
 */
var Boot = require('./states/Boot');
var Preloader = require('./states/Preloader');
var MainMenu = require('./states/MainMenu');
var Game = require('./states/Game');

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('Preloader', Preloader);
game.state.add('Boot', Boot);
game.state.add('MainMenu', MainMenu);
game.state.add('Game', Game);

game.state.start('Preloader');
