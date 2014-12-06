
var InteractiveButton = function (game, x, y, sprite, callback, callbackContext) {

    Phaser.Button.call(this, game, x, y, sprite, callback, callbackContext);

    this.key = sprite;

    this.events.onInputOver.add(this._onInputOver, this);
    this.events.onInputOut.add(this._onInputOut, this);
};

InteractiveButton.prototype = Object.create(Phaser.Button.prototype);
InteractiveButton.prototype.construct = InteractiveButton;

InteractiveButton.prototype._onInputOver = function (button) {
    this.game.sound.play('over');
    button.blendMode = PIXI.blendModes.ADD;
};

InteractiveButton.prototype._onInputOut = function (button) {

    button.blendMode = PIXI.blendModes.NORMAL;
};


module.exports = InteractiveButton;
