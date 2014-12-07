
var ExplosionGroup = function (game) {

    Phaser.Group.call(this, game);

    this.AMMOUNT = 3;
    this.key = 'explosion';

    this.createMultiple(this.AMMOUNT, 'explosion');
};

ExplosionGroup.prototype = Object.create(Phaser.Group.prototype);
ExplosionGroup.prototype.construct = ExplosionGroup;

ExplosionGroup.prototype.spawnTo = function (x, y) {

    var explosion = this.getFirstDead();

    if (!explosion) {
        return;
    }

    explosion.reset(x, y);

    explosion.anchor.set(0.5, 0.5);

    // Playing an animation ( 'key', frameRate, loop )
    explosion.loadTexture('explosion', 0);
    // Adding an animation ( 'key' )
    explosion.animations.add('explode');
    // To play the animation with the new texture ( 'key', frameRate, loop, killOnComplete)
    explosion.animations.play('explode', 7, false, true);
};

module.exports = ExplosionGroup;
