/**
 * Created by risto on 25.10.14.
 */
var Storage = require('../Storage');
var SoldierGroup = require('../groups/SoldierGroup');
var TruckGroup = require('../groups/TruckGroup');
var TankGroup = require('../groups/TankGroup');

var Game = function(game) {

    this.BULLET_RADIUS = 30;
    this.SHOT_DELAY = 200;
    this.ENEMY_HEALTH = 30;

    this.lastBulletShotAt = 0;
};

Game.prototype = {

    create: function() {
        this.game.sound.mute = true;

        this.game.input.maxPointers = 1;
        this.game.stage.backgroundColor = '#182d3b';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        // Variable decleration
        this.batteryLevel = 100;
        this.score = 0;

        // Add background
        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
        this.background.anchor.set(0.5, 0.5);

        // Tanks pool
        this.tanks = new TankGroup(this.game);
        this.tanks.spawnAll();
        this.tanks.moveStep();

        // Truck pool
        this.trucks = new TruckGroup(this.game);
        this.trucks.spawnAll();

        // Soldiers pool
        this.soldiers = new SoldierGroup(this.game);
        this.soldiers.spawnAll();

        // Bullets pool
        this.bullets = this.add.group();
        this.bullets.createMultiple(10, 'bullet');
        this.bullets.forEach(function (bullet) {

            bullet.bulletShotAt = 0;
            bullet.enableBody = true;
            bullet.reset(0,0);
            bullet.anchor.setTo(0.5, 0.5);
            this.game.physics.enable(bullet, Phaser.Physics.ARCADE);

            bullet.kill();
        }, this);

        // Add light
        this.light = this.game.add.sprite(100, 200, 'light');
        this.light.anchor = new Phaser.Point(0.5, 0.5);
        this.light.fixedToCamera = true;
        this.game.physics.enable(this.light, Phaser.Physics.ARCADE);

        this.game.add.sprite(
            this.game.width - 40,
            this.game.height - 25, 'flashlight');

        this.gun = this.game.add.sprite(
                this.game.width / 2,
                this.game.height, 'gun');

        this.gun.anchor.setTo(0.7, 0.5);

        this.shellEmitter = this.game.add.emitter(
            this.game.world.centerX, this.game.height - 10, 3);

        this.shellEmitter.makeParticles('bullet-shell');
        this.shellEmitter.setXSpeed(100, 300);
        this.shellEmitter.setYSpeed(-50, -200);
        this.shellEmitter.maxParticles = 3;
        this.shellEmitter.lifespan = 800;
        this.shellEmitter.gravity = 200;

        // Show FPS
        this.game.time.advancedTiming = true;

        this.fpsText = this.game.add.text(20, 20, '', {
            font: '16px Creepster',
            fill: '#ffffff',
            fontWeight: 'normal'
        });

        this.loopTimer = this.game.time.events.loop(1000, this._onTimer, this);

        this.enemyMove = this.game.time.events.repeat(Phaser.Timer.SECOND * 3, 10, this._onTimer, this);

        // Mute button
        this.muteButton = this.game.add.button(
            this.game.width - 100, this.game.height - 50,
            'mute', this._onMuteClick, this, 1, 0, 2);

        // Score button
        this.scoreText = this.game.add.text(
            this.game.width - 250, this.game.height - 50, 'Score:',{
            font: "32px Creepster",
            fill: '#ffffff',
        });

        this.infoText = this.game.add.text(
            this.game.width / 2, 70, '',{
            font: "32px Creepster",
            fill: '#ffffff',
        });

        // Change camera location if mouse has moved
        this.game.input.mouse.onMouseMove = this._onMouseMove.bind(this);

        this.graphics = this.game.add.graphics(0, 0);
    },

    _onMouseMove: function (ev) {

        this.light.cameraOffset.x = ev.offsetX;
        this.light.cameraOffset.y = ev.offsetY;

        var targetAngle = this.game.math.angleBetween(
            ev.x, ev.y,
            this.gun.position.x, this.gun.position.y
        );

        if (this.game.math.degToRad(0) <= targetAngle ||
            this.game.math.degToRad(180) >= targetAngle) {

            this.gun.rotation = targetAngle;
        }
    },

    _onTimer: function () {

        this.batteryLevel -= 5;
        console.log('Called timer');

        this.soldiers.forEach(function (enemy) {

            enemy.body.velocity.x = this.rnd.integerInRange(-15, 15);
        }, this);
    },

    updateFPS: function () {

        if (this.game.time.fps !== 0) {
            this.fpsText.setText(this.game.time.fps + ' FPS');
        }
    },

    updateScore: function () {

        this.scoreText.setText('Score: ' + this.score);
    },

    update: function () {

        // Clear the full-screen graphics
        this.graphics.clear();

        // Flashlight is dead, so are you
        if (this.batteryLevel <= 0) {

            this._saveScore();
            this.game.state.start('MainMenu');
        }

        this.updateScore();
        this.updateFPS();

        // Spawn dead enemies
        this.soldiers.forEachDead(this._spawnEnemy, this);
        this.trucks.forEachDead(this._spawnEnemy, this);
        this.tanks.forEachDead(this._spawnEnemy, this);

        // Check for collisions
        this.bullets.forEachExists(function (bullet) {

            if (!bullet || !bullet.bulletShotAt) {
                return;
            }

            if (!bullet.bounce &&
                    ~~(this.game.time.now - bullet.bulletShotAt ) >= 100) {

                bullet.alpha = 1;
                bullet.bounce = this.game.add.tween(bullet);
                bullet.bounce.to({ alpha: 0 }, Phaser.Easing.Linear.Out);
                bullet.bounce.onComplete.add(function() {

                    bullet.bounce = undefined;
                    bullet.kill();
                }, this);
                bullet.bounce.start();

            }
        }, this);

        // Pointer is down
        if (this.input.activePointer.isDown) {
            var x = this.input.activePointer.position.x,
                y = this.input.activePointer.position.y;

            this.shellEmitter.emitParticle();

            this._fireGun(x, y);
        }

        this._drawHealth();
    },

    _drawHealth: function () {

        var step = 100 - this.batteryLevel;

        this.graphics.lineStyle(2, 0xFFFFFF, 1);

        this.graphics.drawRect(
            this.game.width - 40,
            this.game.height - 130, 20, 100);
        this.graphics.beginFill(0xFFFFFF, 1);
        this.graphics.drawRect(
                this.game.width - 40,
                this.game.height - 130 + step, 20, 100 - step);

        this.graphics.endFill();
    },

    _spawnEnemy: function (enemy) {

        enemy.alpha = 0;
        enemy.enableBody = true;

        enemy.reset(
            this.rnd.integerInRange(0, this.game.width - 64),
            this.rnd.integerInRange(0, this.game.height - 64)
        );

        this.game.add.tween(enemy)
            .to({ alpha: 1 }, Phaser.Easing.Linear.Out)
            .start();


        if (enemy.key === "tank") {
            this.tanks._addSpriteMove(enemy);
        }

        enemy.health = this.ENEMY_HEALTH;
        this.game.physics.enable(enemy, Phaser.Physics.ARCADE);
    },

    render: function () {

        this.game.debug.body(this.bullets);
    },

    _fireGun: function (x, y) {

        if (this.game.time.now - this.lastBulletShotAt < this.SHOT_DELAY) {
            return;
        }

        this.lastBulletShotAt = this.game.time.now;

        var bullet = this.bullets.getFirstDead();

        // Get the bullet
        if (!bullet || bullet === null) {
            return;
        }

        bullet.bulletShotAt = this.lastBulletShotAt;

        bullet.revive();
        bullet.reset(
                x + this.rnd.integerInRange(-20, 20),
                y + this.rnd.integerInRange(-20, 20)
        );
        this.game.sound.play('shot');

        // Check for overlapping with bullet
        this.game.physics.arcade.overlap(bullet, this.soldiers, this._collisionHandler, null, this);
        this.game.physics.arcade.overlap(bullet, this.tanks, this._collisionHandler, null, this);
        this.game.physics.arcade.overlap(bullet, this.trucks, this._collisionHandler, null, this);
    },

    _saveScore: function () {

        if (!Storage.isSupported) {
            return;
        }

        Storage.set('defend.score', this.score || 0);
    },

    _setText: function (text) {

        this.infoText.alpha = 1;
        this.infoText.setText(text);
        this.infoText.x = this.game.width / 2;
        this.game.add.tween(this.infoText)
            .to({ alpha: 0, x: '+40' }, Phaser.Easing.Linear.Out)
            .start();
    },

    _collisionHandler: function (bullet, enemy) {

        var score = 10;

        console.log('Collison', enemy.health);
        enemy.damage(this.rnd.integerInRange(5, 15));

        if (enemy.health <= 0) {

            this.score += score;
            this.game.sound.play('dead');
            this._setText('+' + score + ' points');

            enemy.kill();
        }
    },

    _onMuteClick: function () {

        console.log('Mute');
        this.game.sound.mute = !this.game.sound.mute;

        if (this.game.sound.mute) {
            this.muteButton.frame = 2;
        }
        else {
            this.muteButton.frame = 1;
        }
    }

};

module.exports = Game;
