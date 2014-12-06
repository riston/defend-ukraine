/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by risto on 19.10.14.
	 */
	var Boot = __webpack_require__(1);
	var Preloader = __webpack_require__(2);
	var MainMenu = __webpack_require__(3);
	var Game = __webpack_require__(4);
	var Story = __webpack_require__(5);

	var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

	game.state.add('Preloader', Preloader);
	game.state.add('Boot', Boot);
	game.state.add('MainMenu', MainMenu);
	game.state.add('Game', Game);
	game.state.add('Story', Story);

	game.state.start('Boot');


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

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

	        // TODO: font hack to load it from Google
	        this.storyText = this.game.add.text(60, 100, 'AAA', {
	            font: '18px Creepster',
	        });

	        this.game.input.maxPointers = 1;

	        // this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
	        this.game.stage.scale.pageAlignHorizontally = true;
	        this.game.stage.scale.pageAlignVertically = true;

	        this.game.state.start('Preloader');
	    }
	};

	module.exports = Boot;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by risto on 19.10.14.
	 */

	var Preloader = function (game) { }

	Preloader.prototype = {

	    preload: function() {
	        var imgP = './img/';
	        var cX = this.game.world.centerX;
	        var cY = this.game.world.centerY;
	        this.game.stage.backgroundColor = '#16181a';

	        this.preloadBg = this.add.sprite(cX - (297 / 2), cY - (145 / 2) + 200, 'preloaderBg');
	        this.preloadBar = this.add.sprite(cX - (158 / 2), cY - (50 / 2) + 200, 'preloaderBar');

	        this.load.setPreloadSprite(this.preloadBar);
	        this.load.spritesheet('explosion', imgP + 'explosion.png', 64, 64, 16);
	        this.load.image('bullet',       imgP + 'shot.png');
	        this.load.image('bullet-shell', imgP + 'bullet.png');
	        this.load.image('soldier',      imgP + 'soldier.png');
	        this.load.image('light',        imgP + 'light.png');
	        this.load.image('flashlight',   imgP + 'flashlight.png');
	        this.load.image('gun',          imgP + 'gun.png');
	        this.load.image('tank',         imgP + 'tank.png');
	        this.load.image('truck',        imgP + 'truck.png');
	        this.load.image('evergreen',    imgP + 'evergreen.png');
	        this.load.image('tree',         imgP + 'tree.png');
	        this.load.image('battery',      imgP + 'battery.png');
	        this.load.image('tree1',        imgP + 'tree1.png');
	        this.load.image('background',   imgP + 'background.jpg');
	        this.load.image('main-theme',   imgP + 'main_theme.jpg');

	        // Button
	        this.load.image('play', imgP + 'button/play.png');

	        this.load.image('new-game', imgP + 'button/new_game.png');
	        this.load.image('new-game-hover', imgP + 'button/new_game_hover.png');
	        this.load.image('new-game-click', imgP + 'button/new_game_click.png');

	        this.load.image('tutorial', imgP + 'button/tutorial.png');
	        this.load.image('tutorial-hover', imgP + 'button/tutorial_hover.png');
	        this.load.image('tutorial-click', imgP + 'button/tutorial_click.png');

	        this.load.image('fullscreen', imgP + 'button/fullscreen.png');
	        this.load.image('fullscreen-hover', imgP + 'button/fullscreen_hover.png');
	        this.load.image('fullscreen-click', imgP + 'button/fullscreen_click.png');


	//        this.load.image('tutorial', 'img/button/tutorial.png');
	//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');

	        this.load.spritesheet('mute', 'img/mute.png', 34, 34, 3);

	        this.load.audio('shot', ['snd/shot.wav']);
	        this.load.audio('dead', ['snd/dead.wav']);
	        this.load.audio('over', ['snd/over.wav']);
	    },
	    create: function() {

	        this.game.state.start('MainMenu');
	    }
	};

	module.exports = Preloader;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by risto on 19.10.14.
	 */
	var Storage = __webpack_require__(6);
	var InteractiveButton = __webpack_require__(13);

	var MainMenu = function(game) {};

	MainMenu.prototype = {

	    create: function() {
	        var x = this.game.width - 300;
	        var y = 260;

	        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
	        this.game.scale.maxWidth = 2880;
	        this.game.scale.maxHeight = 1920;

	        this.game.stage.scale.pageAlignHorizontally = true;
	        this.game.stage.scale.pageAlignVertically = true;

	        this.game.scale.enterFullScreen.add(this._onEnterFullScreen, this);
	        this.game.scale.leaveFullScreen.add(this._onLeaveFullScreen, this);

	        // Add background
	        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'main-theme');
	        this.background.anchor.set(0.5, 0.47);

	        // Show the last score
	        this._displayLastScore();

	        this.game.add.existing(new InteractiveButton(this.game, x, y, 'new-game', this._onStartClick, this));

	        y += 70;
	        this.game.add.existing(new InteractiveButton(this.game, x, y, 'tutorial', this._onTutorialClick, this));

	        y += 70;
	        this.game.add.existing(new InteractiveButton(this.game, x, y, 'fullscreen', this._onFullscreen, this));
	    },

	    _displayLastScore: function () {
	        var score;

	        if (Storage.isSupported && Storage.get('defend.score')) {

	            score = Storage.get('defend.score');

	            this.scoreText = this.game.add.text(
	                this.game.width - 250, 130, 'Last score:\n' + score || 0, {
	                font: '24px Creepster',
	                fill: '#ffffff',
	                align: 'center',
	            });
	            this.scoreText.angle = 10;
	        }
	    },

	    _onEnterFullScreen: function () {

	        console.log('Enter full screen');
	        this.game.scale.refresh();
	    },

	    _onLeaveFullScreen: function () {

	        console.log('Leave full screen');
	    },

	    _onFullscreen: function () {

	        this.game.scale.startFullScreen();
	    },

	    _onStartClick: function () {

	        console.log('Start game');
	        var state = 'Game';

	        if (Storage.isSupported() &&
	            Storage.get('defend.showIntro') !== 'false') {

	            state = 'Story';
	        }

	        this.game.state.start(state);
	    },

	    _onTutorialClick: function () {

	        this.game.state.start('Story');
	    }
	};

	module.exports = MainMenu;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by risto on 25.10.14.
	 */
	var Storage        = __webpack_require__(6);
	var SoldierGroup   = __webpack_require__(7);
	var TruckGroup     = __webpack_require__(8);
	var TankGroup      = __webpack_require__(9);
	var BatteryGroup   = __webpack_require__(10);
	var ExplosionGroup = __webpack_require__(11);

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

	        this._generateTerrain();

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

	        // Battery
	        this.batteries = new BatteryGroup(this.game);

	        // Explosion
	        this.explosion = new ExplosionGroup(this.game);

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

	        this.graphics = this.game.add.graphics(0, 0);
	    },

	    _onTimer: function () {

	        this.batteryLevel -= 3;
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

	        // Follow the light
	        this.light.cameraOffset.x = this.game.input.x;
	        this.light.cameraOffset.y = this.game.input.y;

	        var targetAngle = this.game.math.angleBetween(
	            this.game.input.x, this.game.input.y,
	            this.gun.position.x, this.gun.position.y
	        );
	        this.gun.rotation = targetAngle;

	        // Clear the full-screen graphics
	        this.graphics.clear();

	        // Flashlight is dead, so are you
	        if (this.batteryLevel <= 0) {

	            this._saveScore();
	            this.game.state.start('MainMenu');
	        }

	        // Check tank outside
	        this.tanks.checkWorld();

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

	    _generateTerrain: function () {

	        var terrainGroup = this.game.add.group();
	        var spriteNames = [ 'tree', 'evergreen', 'tree1' ];
	        var x, y;

	        terrainGroup.z = 3;
	        spriteNames.forEach(function (name) {

	            var len = this.game.rnd.integerInRange(1, 4);

	            for (var i = 0; i < len; i++) {
	                x = this.game.rnd.integerInRange(0, this.game.width);
	                y = this.game.rnd.integerInRange(100, this.game.height - 100);

	                terrainGroup.add(new Phaser.Sprite(this.game, x, y, name));
	            }
	        }, this);

	        return terrainGroup;
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
	        // this.tanks.forEachAlive(this._renderGroup, this);
	    },

	    _renderGroup: function (tank) {
	        this.game.debug.body(tank);
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
	        this.game.physics.arcade.overlap(bullet, this.trucks, this._collisionHandler, null, this);
	        this.game.physics.arcade.overlap(bullet, this.tanks, this._collisionHandler, null, this);
	        this.game.physics.arcade.overlap(bullet, this.batteries, this._batteryCollision, null, this);
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
	        var x, y;

	        enemy.damage(this.rnd.integerInRange(5, 15));

	        if (enemy.health <= 0) {

	            this.score += score;
	            this.game.sound.play('dead');
	            this._setText('+' + score + ' points');

	            console.log('Kill');

	            if (enemy.key === "tank" ||
	                enemy.key === "truck") {

	                x = enemy.x + enemy.width / 2;
	                y = enemy.y + enemy.height / 2;

	                // Add explode animation
	                this.explosion.spawnTo(x, y);

	                if (this.game.math.chanceRoll(20)) {

	                    this.batteries.spawn(x, y);
	                }
	            }

	            enemy.kill();
	        }
	    },

	    _batteryCollision: function (bullet, battery) {
	        var boost = 15;

	        if (this.batteryLevel + boost > 100) {

	            this.batteryLevel = 100;
	        }
	        this.batteryLevel += boost;

	        var angle = this.game.add.tween(battery);

	        angle.to({ angle: '+360' }, 1000, Phaser.Easing.Linear.Out);
	        angle.onComplete.add(function () {

	            var scale = this.game.add.tween(battery.scale);
	            scale.to({ x: 3, y: 3 });

	            var alpha = this.game.add.tween(battery);
	            alpha.to({ alpha: 0});
	            alpha.onComplete.add(function () {

	                // Remove battery if not visible
	                battery.kill();

	                // Reset the values
	                battery.angle = 0;
	                battery.alpha = 1;
	                battery.scale.x = 1;
	                battery.scale.y = 1;

	            }, this);

	            scale.start();
	            alpha.start();

	        }, this);

	        angle.start();
	    },

	    _addBattery: function (x, y) {
	        var battery = this.game.add.sprite(x, y, 'battery');
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Storage = __webpack_require__(6);
	var InteractiveButton = __webpack_require__(13);

	var Story = function(game) {
	    this.TEXT_SPEED = 70;
	};

	Story.prototype = {

	    preload: function() {

	    },

	    create: function() {

	        var textConfig = {};
	        var x, y;

	        this.text = [
	            'Group of Ukraine soldiers were heading back to military base,',
	            'while their road were crossed with separatists near Donetsk.',
	            'After heavy battle, you were the only survivor...',
	            '',
	            'Separatists backup has just arrived, ',
	            'so you have to hold the last line and keep your flashlight working !!!',
	            'Good luck.',
	        ];

	        this.written = '';

	        // Add background
	        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
	        this.background.anchor.set(0.5, 0.5);

	        this.titleText = this.game.add.text(60, 60, 'Defend-ukraine', {
	            font: '34px Creepster',
	            fill: '#ffffff',
	        });

	        this.storyText = this.game.add.text(60, 100, 'Story should be located here', {
	            font: '22px Creepster',
	            fill: '#ffffff',
	        });

	        textConfig = {
	            font: '18px Creepster',
	            fill: '#ffffff',
	        };

	        x = 60; y = 350;
	        this.terroristText = this.game.add.text(x, y, 'Shoot separatists', textConfig);
	        this.game.add.sprite(x + 25, y + 70, 'soldier');

	        x += 160;
	        this.truckText = this.game.add.text(x, y, 'Destroy trucks and tanks\n to get batteries', textConfig);
	        this.game.add.sprite(x + 25, y + 70, 'truck');
	        this.game.add.sprite(x + 30, y + 120, 'tank');

	        x += 190;
	        this.batteryText = this.game.add.text(x, y, 'Collect batteries to\nkeep your flashlight\nworking', textConfig);
	        this.game.add.sprite(x + 30, y + 70, 'battery');

	        x += 200;
	        this.game.add.sprite(x + 50, y + 0, 'tree1');
	        this.game.add.sprite(x + 30, y + 20, 'tree');
	        this.game.add.sprite(x - 30, y + 50, 'evergreen');
	        this.game.add.sprite(x + 100, y + 30, 'evergreen');

	        this.game.add.existing(
	            new InteractiveButton(
	                this.game,
	                this.game.width - 300,
	                this.game.height - 100,
	                'play',
	                this.onStartClick, this));

	        this.line  = 0;
	        this.pos   = 0;
	        this.delta = this.game.time.now;

	        this.textEnd = false;
	    },

	    update: function () {

	        if ((this.game.time.now - this.delta) > this.TEXT_SPEED
	            && !this.textEnd) {

	            if (this.text.length <= this.line) {

	                this.textEnd = true;
	            }
	            else {

	                this.written += this.text[this.line].charAt(this.pos++);
	                this.storyText.setText(this.written);

	                if (this.text[this.line].length <= this.pos) {

	                    // Reached line end
	                    this.line++;
	                    this.pos = 0;
	                    this.written += '\n';
	                }

	                this.delta = this.game.time.now;
	            }

	        }
	    },

	    onStartClick: function () {

	        if (Storage.isSupported()) {

	            Storage.set('defend.showIntro', false);
	        }

	        console.log('Start game');
	        this.game.state.start('Game');
	    }
	};

	module.exports = Story;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	
	var Storage = {

	    isSupported: function () {

	        try {
	            return 'localStorage' in window &&
	                window.localStorage !== null;
	        } catch (e) {

	            return false;
	        }
	    },

	    get: function (key) {

	        return localStorage.getItem(key);
	    },

	    set: function (key, value) {

	        return localStorage.setItem(key, value);
	    }

	};

	module.exports = Storage;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	
	var EnemyGroup = __webpack_require__(12);

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


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	
	var EnemyGroup = __webpack_require__(12);

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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	
	var EnemyGroup = __webpack_require__(12);

	var TankGroup = function (game) {
	    this.AMMOUNT = 2;

	    EnemyGroup.call(this, game);

	    this.key = 'tank';
	    this.createMultiple(this.AMMOUNT, 'tank');
	    this.setAll('enableBody', true);
	    this.setAll('outOfBoundsKill', true);
	    this.setAll('physicsBodyType', Phaser.Physics.ARCADE);
	};

	TankGroup.prototype = Object.create(EnemyGroup.prototype);
	TankGroup.prototype.construct = TankGroup;

	TankGroup.prototype.moveStep = function () {

	    this.forEachDead(this._addSpriteMove, this);
	};

	/**
	 * Manual check for borders.
	 */
	TankGroup.prototype.checkWorld = function () {

	    this.forEach(function (tank) {

	        if (tank.x <= 0 || tank.x >= this.game.width) {
	            tank.kill();
	        }
	    }, this);
	};

	TankGroup.prototype._addSpriteMove = function (enemy) {

	    var vanHalen = function (v) {

	        return Math.sin(v * Math.PI) * 1;
	    };

	    var dir  = this.game.math.chanceRoll();
	    var margin = 75;
	    var sx, sy, ex, ey;

	    enemy.move = this.game.add.tween(enemy);
	    enemy.jump = this.game.add.tween(enemy);
	    enemy.anchor.x = 0.5;
	    enemy.anchor.y = 0.5;

	    if (dir) {
	        sx = -margin;
	        sy = this.game.rnd.integerInRange(50, this.game.height - 75);
	        ex = this.game.width + margin;
	        enemy.scale.x *= -1;
	    }
	    else {
	        sx = this.game.width + margin;
	        sy = this.game.rnd.integerInRange(50, this.game.height - 75);
	        ex = -margin;
	    }

	    enemy.move.to({ x: ex }, 15 * 1000);

	    enemy.jump.to({ y: sy }, 15 * 1000, vanHalen, true, 0, Number.MAX_VALUE, 0);
	    enemy.move.start();
	};

	module.exports = TankGroup;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	
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


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	
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


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	
	var EnemyGroup = function (game, key) {

	    Phaser.Group.call(this, game);

	    this.key = key;
	    this.ENEMY_HEALTH = 100;
	    this.REWARD = 10;
	    this.health = 0;

	    this.setAll('anchor.x', 0.5);
	    this.setAll('anchor.y', 0.5);
	};

	EnemyGroup.prototype = Object.create(Phaser.Group.prototype);
	EnemyGroup.prototype.construct = EnemyGroup;

	EnemyGroup.prototype.spawn = function (enemy) {

	    enemy.alpha = 0;
	    enemy.enableBody = true;
	    enemy.body.collideWorldBounds = false;

	    enemy.reset(
	        this.game.rnd.integerInRange(0, this.game.width - 64),
	        this.game.rnd.integerInRange(0, this.game.height - 64)
	    );

	    enemy.checkWorldBounds = true;
	    enemy.outOfBoundsKill = true;

	    this.game.add.tween(enemy)
	        .to({ alpha: 1 }, Phaser.Easing.Linear.Out)
	        .start();

	    enemy.health = this.ENEMY_HEALTH;
	};

	EnemyGroup.prototype.spawnAll = function () {

	    this.forEachDead(this._spawn, this);
	};

	module.exports = EnemyGroup;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	
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


/***/ }
/******/ ])