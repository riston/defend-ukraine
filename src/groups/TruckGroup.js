
var EnemyGroup = require('./EnemyGroup');

var TruckGroup = function (game) {
    this.AMMOUNT = 1;

    EnemyGroup.call(this, game);

    this.key = 'truck';
    this.setAll('enableBody', true);
    this.createMultiple(this.AMMOUNT, 'truck');
};

TruckGroup.prototype = Object.create(EnemyGroup.prototype);
TruckGroup.prototype.construct = TruckGroup;

module.exports = TruckGroup;
