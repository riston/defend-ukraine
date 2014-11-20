
var BatteryGroup = function (game, key) {

    Phaser.Group.call(this, game);

    this.AMMOUNT = 10;
    this.key = 'battery';
    this.createMultiple(this.AMMOUNT, 'battery');
};

BatteryGroup.prototype = Object.create(Phaser.Group.prototype);
BatteryGroup.prototype.construct = BatteryGroup;

BatteryGroup.prototype.spawn = function (x, y) {

    var battery = this.getFirstDead();

    if (!battery) {
        return;
    }

    battery.reset(x, y);

    battery.anchor.set(0.5, 0.5);
    this.game.physics.enable(battery, Phaser.Physics.ARCADE);
};


BatteryGroup.prototype.spawnAll = function () {

    this.forEachDead(this._spawn, this);
};

module.exports = BatteryGroup;
