
var EnemyGroup = function (game, key) {

    Phaser.Group.call(this, game);

    this.key = key;
    this.ENEMY_HEALTH = 100;
    this.REWARD = 10;
    this.health = 0;
};

EnemyGroup.prototype = Object.create(Phaser.Group.prototype);
EnemyGroup.prototype.construct = EnemyGroup;

EnemyGroup.prototype.spawn = function (enemy) {

    enemy.alpha = 0;
    enemy.enableBody = true;

    enemy.reset(
        this.game.rnd.integerInRange(0, this.game.width - 64),
        this.game.rnd.integerInRange(0, this.game.height - 64)
    );

    this.game.add.tween(enemy)
        .to({ alpha: 1 }, Phaser.Easing.Linear.Out)
        .start();

    enemy.health = this.ENEMY_HEALTH;
    this.game.physics.enable(enemy, Phaser.Physics.ARCADE);

};

EnemyGroup.prototype.spawnAll = function () {

    this.forEachDead(this._spawn, this);
};

module.exports = EnemyGroup;