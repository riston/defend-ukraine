
var EnemyGroup = require('./EnemyGroup');

var TankGroup = function (game) {
    this.AMMOUNT = 2;

    EnemyGroup.call(this, game);

    this.key = 'tank';
    this.setAll('enableBody', true);
    this.setAll('outOfBoundsKill', true);

    this.createMultiple(this.AMMOUNT, 'tank');
};

TankGroup.prototype = Object.create(EnemyGroup.prototype);
TankGroup.prototype.construct = TankGroup;

TankGroup.prototype.moveStep = function () {

    this.forEachDead(this._addSpriteMove, this);
};

TankGroup.prototype._addSpriteMove = function (enemy) {

    var vanHalen = function (v) {

        return Math.sin(v * Math.PI) * 1;
    };

    var dir  = this.game.math.chanceRoll();
    var sx, sy, ex, ey;

    enemy.move = this.game.add.tween(enemy);
    enemy.jump = this.game.add.tween(enemy);

    if (dir) {
        sx = 0;
        sy = this.game.rnd.integerInRange(50, this.game.height - 75);
        ex = this.game.width;
        enemy.scale.x *= -1;
    }
    else {
        sx = this.game.width;
        sy = this.game.rnd.integerInRange(50, this.game.height - 75);
        ex = 0;
    }

    enemy.x = sx;
    enemy.move.to({ x: ex }, 15 * 1000);

    enemy.jump.to({ y: sy }, 15 * 1000, vanHalen, true, 0, Number.MAX_VALUE, 0);
    enemy.move.start();
};

module.exports = TankGroup;
