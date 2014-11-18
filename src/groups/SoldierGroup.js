
var EnemyGroup = require('./EnemyGroup');

var SoldierGroup = function (game) {
    this.AMMOUNT = 5;

    EnemyGroup.call(this, game);

    this.key = 'soldier';
    this.setAll('enableBody', true);
    this.createMultiple(this.AMMOUNT, 'soldier');
};

SoldierGroup.prototype = Object.create(EnemyGroup.prototype);
SoldierGroup.prototype.construct = SoldierGroup;

module.exports = SoldierGroup;
