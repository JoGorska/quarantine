// Configure Phaser. 
// Sets width, height, canvas type & physics engine
// 'parent' is the id of the div on the page that will hold the canvas
// 'mode: Phaser.Scale.FIT' ensures the canvas will scale to fit the div,
// while maintaining 4:3 aspect ratio
var config = {
    type: Phaser.CANVAS,
    parent: 'game-area',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 0
            }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    backgroundColor: 0x333333
};

// Instantiate Phaser
var game = new Phaser.Game(config);

// Declare game variables
var ball;
var paddle;

function preload(){
    this.load.image('ball', 'assets/img/ball.png');
    this.load.image('paddle', 'assets/img/paddle.png');
}

function create(){
    // Create the ball object. Applies physics, set original co-ordinates, and asigns art based on keyword as set in preloader 
    ball = this.physics.add.sprite(400, 575, 'ball');
    // Tells ball to collide with world boundaries
    ball.setCollideWorldBounds(true);
    // Lets ball bounce
    ball.setBounce(1, 1);
    // Sets initial velocity of ball
    ball.setVelocity(200, -200);

    // Create the ball object. Applies physics, set original co-ordinates, and asigns art based on keyword as set in preloader
    paddle = this.physics.add.sprite(400, 595, 'paddle');
    // Prevents paddle from being pushed away when collision with ball occurs
    paddle.setImmovable(true)

    // Allows ball and paddle to collide
    this.physics.add.collider(ball, paddle);
}

function update(){
    // Moves the paddle along the x axis based on player input (mouse or touch)
    // Defaults to 400 (half of width declared in config) to center the paddle on load
    paddle.x = this.input.x || 400;
}