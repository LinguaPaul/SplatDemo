window.onload = function(){

	// Pause flag
	var paused = true;
    
    var Menu = function(game){};
  function Menu() {}
  
  Menu.prototype = {
    preload: function() {
 			// Load assets
        this.load.image('ground', 'assets/ground.png');
        this.load.spritesheet('bird', 'assets/bird.png',38,40);
        this.load.image('btnPause', 'assets/btn-pause.png');
        this.load.image('btnPlay', 'assets/btn-play.png');
        this.load.image('panel', 'assets/panel.png');
        this.load.spritesheet('hero', 'assets/leapfrog.png', 165, 225);
    },
    create: function() {
        console.log('Menu has started');
      // add the background sprite
      this.background = this.game.add.sprite(0,0,'background');
      
      // add the ground sprite as a tile
      // and start scrolling in the negative x direction
      this.ground = this.game.add.tileSprite(0,400, 335,112,'ground');
      this.ground.autoScroll(-200,0);
    
      // add our start button with a callback
      this.startButton = this.game.add.button(this.game.width/2, 300, 'startButton', this.startClick, this);
      this.startButton.anchor.setTo(0.5,0.5);
    },
    startClick: function() {
      // start button click handler
      // start the 'play' state
      this.game.state.start('game');
    }
  };
  
var Winner = function(game){};
  function Winner() {}
  
  Winner.prototype = {
    preload: function() {
 
    },
    create: function() {
        console.log('Win Game has started');
      // add the background sprite
      this.background = this.game.add.sprite(0,0,'background');
      
      // add the ground sprite as a tile
      // and start scrolling in the negative x direction
      this.ground = this.game.add.tileSprite(0,400, 335,112,'ground');
      this.ground.autoScroll(-200,0);
  };

	// Create our game unique game state
	var Game = function(game){};

	Game.prototype = {
		preload: function(){
		},

		create: function(){
			// Reponsive and centered canvas
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
        console.log('Game has started');
                cursors = game.input.keyboard.createCursorKeys();


			this.scale.minWidth = 320;
			this.scale.minHeight = 200;
			this.scale.maxWidth = 720;
			this.scale.maxHeight = 480;

			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;

			this.scale.setScreenSize(true);


			// Change stage background color
			this.game.stage.backgroundColor = '#d0f4f7';

			// Enable arcade physics
			this.game.physics.startSystem(Phaser.Physics.ARCADE);

			// Add hero
			this.hero = this.game.add.sprite(180, 60, 'hero');

            this.winKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
this.winKey.onDown.add(this.game.state.start(Winner);
					},

		update: function(){
		},

	// Create game state and start phaser
	var game = new Phaser.Game(480, 320, Phaser.AUTO, 'game');
    game.state.add('menu', Game);
    game.state.add('Winner', Game);
	game.state.add('game', Game);
	game.state.start('menu');
};