var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
game.state.add('game', Game);
game.state.start('game');

function preload() {
    cursors = game.input.keyboard.createCursorKeys();
    this.load.image('ground', 'assets/platform.png');
    this.load.spritesheet('dude', 'assets/hero.png', 32,48);
    game.load.spritesheet('bird', 'assets/bird.png',38,40);
    game.load.spritesheet('frog', 'assets/leapfrog.png', 165, 225);
    game.load.spritesheet('fish', 'assets/fish.png',200,100);
}

function create() {
    game.state.add('Start');
    game.state.add('Play');
    game.state.add('Win');
    
    Phaser.inputEnabled = true;

			// Change stage background color
	this.game.stage.backgroundColor = '#d0f4f7';

			// Enable arcade physics
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.gravity.y = 1200;



			// Add a scrolling ground
    this.ground = this.game.add.tileSprite(0, 550, 800, 70, 'ground');
	this.ground.autoScroll(-100, 0);
    this.game.physics.arcade.enable(ground);
    
    this.ground.body.immovable = true;
    this.ground.body.allowGravity = true;    
    player = game.add.sprite(100, 313, 'frog');
    game.physics.arcade.enable(player);
    player.body.gravity.y=300;
    player.body.collideWorldBound=true;
    player.animations.add('left',[33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58],15,true);
    player.animations.add('right',[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],15,true);

    cursors = game.input.keyboard.createCursorKeys();

}

function update() {
    this.game.physics.arcade.collide(this.player, this.ground);
        this.ground.autoScroll(-100, 0);
}