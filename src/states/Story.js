var Storage = require('../Storage');

var Story = function(game) {
    this.TEXT_SPEED = 70;
};

Story.prototype = {

    preload: function() {

    },

    create: function() {

        this.text = [
            'Group of Ukraine soldiers were heading back to base,',
            'while their group were crossed with separatists near Donetsk.',
            'After heavy battle, you were the only survivor. ',
            '',
            'Separatists backup has just arrived, ',
            'so you have to hold the line and keep your flashlight alive.',
        ];

        this.written = '';

        // Add background
        this.background = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'background');
        this.background.anchor.set(0.5, 0.5);

        this.titleText = this.game.add.text(60, 60, 'Defend-ukraine', {
            font: '34px Creepster',
            fill: '#ffffff',
        });

        this.storyText = this.game.add.text(60, 100, 'Defend-ukraine', {
            font: '22px Creepster',
            fill: '#ffffff',
        });

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
