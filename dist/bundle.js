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

	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'game');
	game.state.add('Boot', Boot);
	game.state.add('Preloader', Preloader);
	game.state.add('MainMenu', MainMenu);
	game.state.add('Game', Game);

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

	        this.load.image('preloaderBg', 'img/loading-bg.png');
	        this.load.image('preloaderBar', 'img/loading-bar.png');
	//        this.load.image('start-button', 'img/new_game_button.png');
	        this.load.image('bullet', 'img/shot.png');
	        this.load.image('bullet-shell', 'img/bullet.png');
	        this.load.image('soldier', 'img/soldier.png');
	        this.load.image('light', 'img/light.png');
	        this.load.image('flashlight', 'img/flashlight.png');
	        this.load.image('gun', 'img/gun.png');
	        this.load.image('tank', 'img/tank.png');
	        this.load.image('background', 'img/background.jpg');
	        this.load.image('main-theme', 'img/main_theme.jpg');

	        // Button
	        this.load.image('new-game', 'img/button/new_game.png');
	//        this.load.image('new-game-hover', 'img/button/new_game_hover.png');
	//        this.load.image('new-game-click', 'img/button/new_game_click.png');

	        this.load.image('tutorial', 'img/button/tutorial.png');
	//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');
	//        this.load.image('tutorial-click', 'img/button/tutorial_click.png');

	        this.load.image('fullscreen', 'img/button/fullscreen.png');
	//        this.load.image('fullscreen-hover', 'img/button/fullscreen_hover.png');
	//        this.load.image('fullscreen-click', 'img/button/fullscreen_click.png');


	//        this.load.image('tutorial', 'img/button/tutorial.png');
	//        this.load.image('tutorial-hover', 'img/button/tutorial_hover.png');

	        this.load.spritesheet('mute', 'img/mute.png', 34, 34, 3);

	        this.load.audio('shot', ['snd/shot.wav']);
	        this.load.audio('dead', ['snd/dead.wav']);
	    },

	    create: function() {
	        this.game.input.maxPointers = 1;

	//        this.game.stage.scaleMode = Phaser.StageScaleMode.SHOW_ALL;
	//        this.game.stage.scale.pageAlignHorizontally = true;
	//        this.game.stage.scale.pageAlignVertically = true;

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

	var Preloader = function (game) {}

	Preloader.prototype = {
	    preload: function() {
	        this.game.stage.backgroundColor = '#16181a';
	        this.preloadBg = this.add.sprite((320-297)/2, (480-145)/2, 'preloaderBg');
	        this.preloadBar = this.add.sprite((320-158)/2, (480-50)/2, 'preloaderBar');

	        this.load.setPreloadSprite(this.preloadBar);
	//        this.load.image('ball', 'img/ball.png');
	//        this.load.image('hole', 'img/hole.png');
	//        this.load.image('element-w', 'img/element-w.png');
	//        this.load.image('element-h', 'img/element-h.png');
	//        this.load.image('panel', 'img/panel.png');
	//        this.load.image('title', 'img/title.png');
	//        this.load.image('button-pause', 'img/button-pause.png');
	//        this.load.image('button-start', 'img/button-start.png');
	//        this.load.image('screen-bg', 'img/screen-bg.png');
	//        this.load.image('screen-mainmenu', 'img/screen-mainmenu.png');
	//        this.load.image('screen-howtoplay', 'img/screen-howtoplay.png');
	//
	//        this.load.spritesheet('button-audio', 'img/button-audio.png', 35, 35);
	//

	    },
	    create: function() {

	//        this.game.state.start("Game");
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

	var MainMenu = function(game) {};

	MainMenu.prototype = {

	    create: function() {
	        var x = this.game.width - 300;
	        var y = 260;

	        this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

	        this.game.scale.enterFullScreen.add(this._onEnterFullScreen, this);
	        this.game.scale.leaveFullScreen.add(this._onLeaveFullScreen, this);

	        // Add background
	        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'main-theme');
	        this.background.anchor.set(0.5, 0.47);

	        this.game.add.button(x, y, 'new-game', this.onStartClick, this);
	        y += 70;
	        this.game.add.button(x, y, 'tutorial', this.onStartClick, this);
	        y += 70;
	        this.game.add.button(x, y, 'fullscreen', this.onFullscreen, this);

	    },

	    _onEnterFullScreen: function () {
	        console.log('Enter full screen');
	        this.game.scale.refresh();
	    },

	    _onLeaveFullScreen: function () {
	        console.log('Leave full screen');
	    },

	    onFullscreen: function () {
	        this.game.scale.startFullScreen();
	    },

	    onStartClick: function () {
	        console.log('Start game');

	        this.game.state.start('Game');
	    }
	};

	module.exports = MainMenu;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by risto on 25.10.14.
	 */

	var Game = function(game) {
	    this.BULLET_RADIUS = 30;
	    this.SHOT_DELAY = 200;
	    this.ENEMY_HEALTH = 100;

	    this.lastBulletShotAt = 0;
	};

	Game.prototype = {

	    create: function() {
	        this.game.sound.mute = true;

	        this.game.input.maxPointers = 1;
	        this.game.stage.backgroundColor = '#182d3b';
	        this.game.physics.startSystem(Phaser.Physics.ARCADE);

	        this.batteryLevel = 100;

	        // Add background
	        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
	        this.background.anchor.set(0.5, 0.5);

	        // Enemies pool
	        this.enemies = this.add.group();
	        this.enemies.setAll('enableBody', true);
	        this.enemies.createMultiple(5, 'soldier');
	        this.enemies.forEach(this._spawnEnemy, this);

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

	        // Show FPS
	        this.game.time.advancedTiming = true;

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

	        this.game.add.sprite(300, 200, 'tank');

	//        this.shellEmitter.start(false, 5000, 50);

	//        this.game.add.tween(this.shellEmitter)
	//            .to( { emitX: 600 }, 2000, Phaser.Easing.Back.InOut, true, 0, Number.MAX_VALUE, true);

	        this.fpsText = this.game.add.text(20, 20, '', {
	            font: "16px Creepster",
	            fill: '#ffffff',
	            fontWeight: 'normal'
	        });

	        this.loopTimer = this.game.time.events.loop(1000, this._onTimer, this);

	        // Mute button
	        this.muteButton = this.game.add.button(this.game.width - 100, this.game.height - 50,
	            'mute', this._onMuteClick, this, 1, 0, 2);

	        // Change camera location if mouse has moved
	        this.game.input.mouse.onMouseMove = function (evt) {
	            this.light.cameraOffset.x = evt.offsetX;
	            this.light.cameraOffset.y = evt.offsetY;

	            var targetAngle = this.game.math.angleBetween(
	                evt.x, evt.y,
	                this.gun.position.x, this.gun.position.y
	            );

	            if (this.game.math.degToRad(0) <= targetAngle ||
	                this.game.math.degToRad(180) >= targetAngle) {

	                this.gun.rotation = targetAngle;
	            }

	        }.bind(this);

	        this.graphics = this.game.add.graphics(0, 0);
	    },

	    _onTimer: function () {
	        this.batteryLevel -= 5;
	        console.log('Called timer');
	    },

	    updateFPS: function () {

	        if (this.game.time.fps !== 0) {
	            this.fpsText.setText(this.game.time.fps + ' FPS');
	        }
	    },

	    update: function () {

	        // Clear the full-screen graphics
	        this.graphics.clear();

	//        console.log(this.game.input);

	//        this.gun.rotation = ang;

	        // Flashlight is dead so are you
	        if (this.batteryLevel <= 0) {

	            this.game.state.start('MainMenu');
	        }

	        this.updateFPS();

	        this.enemies.forEachDead(function (enemy) {
	            this._spawnEnemy(enemy);

	//            enemy.alpha = 0;
	//            enemy.bounce = this.game.add.tween(enemy);
	//            enemy.bounce.to({ alpha: 0 }, Phaser.Easing.Linear.Out);
	//            enemy.bounce.start();
	        }, this);

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

	//                debugger;
	//                bullet..bounce.onUpdateCallback(function (e) {
	//                   console.log('E', e);
	//                });
	//                bullet.bounce.onCompleteCallback(function () {
	//                    console.log('Completed');
	//                });

	//                this.game.add.tween(bullet.x)
	//                    .to({ x: 0 }, 1000, Phaser.Easing.Linear.None, true);
	////                    .start();
	            }
	        }, this);

	        // Pointer is down
	        if (this.input.activePointer.isDown) {
	            var x = this.input.activePointer.position.x,
	                y = this.input.activePointer.position.y;

	            this.shellEmitter.emitParticle();
	//            this._updateCircle(x, y);

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

	        enemy.enableBody = true;
	        enemy.reset(
	            this.rnd.integerInRange(0, this.game.width - 64),
	            this.rnd.integerInRange(0, this.game.height - 64)
	        );
	        enemy.health = this.ENEMY_HEALTH;
	        this.game.physics.enable(enemy, Phaser.Physics.ARCADE);
	    },

	    _updateCircle: function (x, y) {

	        // draw a circle
	        this.graphics.lineStyle(0);
	        this.graphics.beginFill(0xFFFF0B, 0.5);
	        this.graphics.drawCircle(x, y, 50);
	        this.graphics.endFill();
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

	        var collide = this.game.physics.arcade.overlap(bullet, this.enemies, this._collisionHandler, null, this);
	    },

	    _collisionHandler: function (bullet, enemy) {

	        console.log('Collison', enemy.health);
	        enemy.damage(this.rnd.integerInRange(5, 15));

	        if (enemy.health <= 0) {
	            this.game.sound.play('dead');
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

/***/ }
/******/ ])