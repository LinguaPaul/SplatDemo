window.onload = function(){

	// Pause flag
	var paused = true;
    var counter=0;
    var minute=0;
    
//menu state
var Menu = function(game){};  
  Menu.prototype = {
    preload: function() {
        this.load.spritesheet('start', 'assets/start.png',800,400);
        this.load.spritesheet('firstaid', 'assets/firstaid.png',32,32);
    },
      
    create: function() {
        // Reponsive and centered canvas
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.minWidth = 320;
			this.scale.minHeight = 200;
			this.scale.maxWidth = 720;
			this.scale.maxHeight = 480;

			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;

			this.scale.setScreenSize(true);
        
        console.log('Menu has started');
        
      //creates ground and starts scrolling it
      this.background = this.game.add.image(-5, -15,'start');
    },
      
    startClick: function() {
      // start the 'gameplay' state
      this.game.state.start('gameplay');
    },
      
    update: function() {
      this.startButton = this.game.add.button(this.game.width/2,this.game.height/2,'firstaid',this.startClick,this);
      this.startButton.anchor.setTo(0.5,0.5);
        }
    }
  };


    
//winner state
var Winner = function(game){};  
  Winner.prototype = {
    preload: function() {
    },
    create: function() {
        console.log('Win Game has started');
        //console.log(counter);
      // add the ground sprite as a tile
      // and start scrolling in the negative x direction
      this.win = this.game.add.image(-5, -15,'background');
      endText = game.add.text(-120+this.game.width/2,100+this.game.height/2, 'Congratulations!', { font: "32px Arial", fill: "#ffffff", align: "middle" });
    },
      
    update:function(){
    }
  };
        
    
    
//Gameplay state
var gameplay = function(game){};
	gameplay.prototype = {
		preload: function(){
			// Load assets
            this.load.image('background', 'assets/background.png');
            this.load.spritesheet('blueB', 'assets/blueB.png',42,160);
            this.load.spritesheet('greenB', 'assets/greenB.png',42,160);
            this.load.spritesheet('redB', 'assets/redB.png',40,160);
            this.load.spritesheet('yellowB', 'assets/yellowB.png',43,160);
            this.load.spritesheet('purpleB', 'assets/purpleB.png',41,160);

            this.load.spritesheet('timer', 'assets/timer.png', 256, 256);
		},

		create: function(){
			// Reponsive and centered canvas
			this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            
        console.log('Game has started');
         // add our start button with a callback
            this.startButton = this.game.add.button(this.game.width/2, 30, 'firstaid', this.startClick, this);
      this.startButton.anchor.setTo(0.5,0.5);

			this.scale.minWidth = 320;
			this.scale.minHeight = 200;
			this.scale.maxWidth = 720;
			this.scale.maxHeight = 480;

			this.scale.pageAlignHorizontally = true;
			this.scale.pageAlignVertically = true;

			this.scale.setScreenSize(true);

			// Enable arcade physics
			this.game.physics.startSystem(Phaser.Physics.ARCADE);
			this.game.physics.arcade.gravity.y = 200;
            
            //add background
            this.background = this.game.add.sprite(0, 0, 'background');

			// Add some moving birds
    	this.balloons = game.add.group();
			for(var i=0; i<15; i++){
                this.colorint = this.game.rnd.integerInRange(1, 5);
                if(this.colorint == 1){
				balloon = this.game.add.sprite(250, 250, 'blueB');
                }
                else if(this.colorint == 2){
				balloon = this.game.add.sprite(250, 250, 'redB');
                }
                else if(this.colorint == 3){
				balloon = this.game.add.sprite(250, 250, 'greenB');
                }
                else if(this.colorint == 4){
				balloon = this.game.add.sprite(250, 250, 'yellowB');
                }
                else if(this.colorint == 5){
				balloon = this.game.add.sprite(250, 250, 'purpleB');
                }
				balloon.anchor.setTo(0.5, 0.5);
				this.balloons.add(balloon);
                
   				// Move birds
   				this.game.physics.arcade.enableBody(balloon);
   				balloon.body.allowGravity = false;
				balloon.body.velocity.x = -this.game.rnd.integerInRange(-30, 30);
                balloon.body.velocity.y = -this.game.rnd.integerInRange(-30, 30);
                balloon.animations.add('pop',[0,1,2,3],15,false);
                balloon.body.collideWorldBounds = true;
	            balloon.body.bounce.setTo(1, 1);
                balloon.inputEnabled = true;
                balloon.events.onInputDown.add(this.listener, this);

			}
           
            //add timer
            this.timerImage = this.game.add.sprite(25, 275, 'timer');
            timerText = game.add.text(40,320, '0:00', { font: "20px Arial", fill: "#000000", align: "middle" });
             
            //start timer
            //this.currentTimer = this.game.time.create(false);
            //this.currentTimer.loop(Phaser.Timer.SECOND, this.updateTimer, this);
            //this.currentTimer.start();
        },

		update: function(){
		},
    
        /* updateTimer: function() {
            counter++;
            if(counter==60){
                minute++;
                counter=0;
            }
            if (counter<10){
            timerText.setText(minute+':0'+counter);
            }
            else{
                timerText.setText(minute+':'+counter);
            }
    }, */

		correctAnswer: function(){
    },
        
        incorrectAnswer: function(){
		},
            
        //this will be replaced by a JQuery call once the game recognizes that it has been won.
    startClick: function() {
      this.game.state.start('winner');
    },
    listener: function() {
    balloon.animations.play('pop');
},
	};

	// Create game state and start phaser
	var game = new Phaser.Game(600, 385, Phaser.AUTO, 'game');
    //game.state.add('menu', Menu);
	game.state.add('gameplay', gameplay);
    game.state.add('winner', Winner);
	game.state.start('gameplay');