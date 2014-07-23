var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update});
game.state.add('game', Game);
game.state.start('game');

function preload() {
    cursors = game.input.keyboard.createCursorKeys();
    this.load.image('ground', 'assets/platform.png');
    this.load.spritesheet('dude', 'assets/hero.png', 32,48);
}

function create() {
			// Reponsive and centered canvas
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

			this.scale.minWidth = 320;
			this.scale.minHeight = 200;
			this.scale.maxWidth = 720;
			this.scale.maxHeight = 480;

			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;

			this.scale.setScreenSize(true);
        Phaser.inputEnabled = true;

			// Change stage background color
			this.game.stage.backgroundColor = '#d0f4f7';

			// Enable arcade physics
	   this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 1200;

			// Add a scrolling ground
		this.ground = this.game.add.tileSprite(0, 550, 400, 70, 'ground');
		this.ground.autoScroll(-100, 0);
        game.physics.arcade.enable(ground);
        this.ground.body.immovable = true;
        this.ground.body.allowGravity = true;
        this.player = this.game.add.sprite(32, 0, 'dude');
        game.physics.arcade.enable(this.player);
        this.player.body.allowGravity = true;
        this.player.body.collideWorldBound=true;
    cursors = game.input.keyboard.createCursorKeys();
        game.physics.arcade.enable(this.player);
        game.camera.follow(player);
        this.player.animations.add('left',[0,1,2,3],10,true);
        this.player.animations.add('right',[5,6,7,8],10,true);
        this.player.frame=4;
        pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        resumeButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

}

function update() {
    game.physics.arcade.collide(this.player, this.ground);
        this.ground.autoScroll(-100, 0);
}