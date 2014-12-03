var Storage = require('../Storage');

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

        x = 60; y = 300;
        this.terroristText = this.game.add.text(x, y, 'Shoot separatists', textConfig);
        this.game.add.sprite(x + 25, y + 70, 'soldier');

        x += 160;
        this.truckText = this.game.add.text(x, y, 'Destroy trucks and tanks\n to get batteries', textConfig);
        this.game.add.sprite(x + 25, y + 70, 'truck');
        this.game.add.sprite(x + 30, y + 120, 'tank');

        x += 160;
        this.batteryText = this.game.add.text(x, y, 'Collect batteries to\nkeep your flashlight\nworking', textConfig);
        this.game.add.sprite(x + 30, y + 70, 'battery');

        x += 200;
        this.game.add.sprite(x + 50, y + 0, 'tree1');
        this.game.add.sprite(x + 30, y + 20, 'tree');
        this.game.add.sprite(x - 30, y + 50, 'evergreen');
        this.game.add.sprite(x + 100, y + 30, 'evergreen');

        this.game.add.button(this.game.width - 300, this.game.height - 100, 'play', this.onStartClick, this);

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
