/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */

var imageRepository = new function() {
    //Define images
    this.background = new Image();
	this.spaceship = new Image();
	this.bullet = new Image();
	
	//Ensure all images have loaded before starting the game
	var numImages = 3;
	var numLoaded = 0;
	function imageLoaded () {
		numLoaded++;
		if (numLoaded === numImages) {
			window.init();
		}
	}
	this.background.onload = function() {
		imageLoaded();
	}
	this.spaceship.onload = function() {
		imageLoaded();
	}
    this.bulled.onload = function() {
		imageLoaded();
	}
	
    // Set images src
	this.background.src = "../img/test/bg.png";
	this.spaceship.src = "../img/test/ship.png";
	this.bullet.src = "../img/test/bullet.png";
}

/**
 * Creates the Drawable object which will be the base class for
 * all drawable objects in the game. Sets up default variables
 * that all child objects will inherit, as well as the default
 * functions.
 */

function Drawable() {
    this.init = function(x, y, width, height) {
        // Default variables
        this.x = x;
        this.y = y;
		this.width = width;
		this.height = height;
    }
    this.speeds = 0;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    
    // Define abstract function to be implemented in child objects
	this.draw = function() {
	};
}


/**
 * Custom Pool object. Holds Bullet objects to be managed to prevent
 * garbage collection.
 */
 
function Pool(maxSize) {
	var size = maxSize; //Max bullets allowed in the pool
	var Pool = [];
	/*
	 * Populates the pool array with Bullet objects
	*/
	this.init = function() {
		for (var i = 0; i < size; i++) {
			// Initalize the bullet object
			var bullet = new Bullet();
			bullet.init(0,0, imageRepository.bullet.width, imageRepository.bullet.height);
			pool[i] = bullet;
		}
	};
	/*
	 * Grabs the last item in the list and initializes it and
	 * pushes it to the front of the array.
	 */
	this.get = function(x, y, speed) {
		if(!pool[size - 1].alive) {
			pool[size -1].spawn(x, y, speed);
			pool.unshift(pool.pop());
		}
	};
	/*
	 * Used for the ship to be able to get two bullets at once. If
	 * only the get() function is used twice, the ship is able to
	 * fire and only have 1 bullet spawn instead of 2.
	 */
	this.getTwo = function(x1, y1, speed1, x2, y2, speed2) {
		if(!pool[size - 1].alive &&
		   !pool[size - 2].alive) {
				this.get(x1, y1, speed1);
				this.get(x2, y2, speed2);
			 }
	};
	/*
	 * Draws any in use Bullets. If a bullet goes off the screen,
	 * clears it and pushes it to the front of the array.
	 */ 
	
	this.animate = function() {
		for (var i = 0; i < size; i++) {
			// Only draw until we find a bullet that is not alive
			if (pool[i].alive) {
				if (pool[i].draw()) {
					pool[i].clear();
					pool.push((pool.splice(i,1))[0]);
				}
			}
			else
				break;
		}
	};
}
 
 



/**
 * Creates the Background object which will become a child of
 * the Drawable object. The background is drawn on the "background"
 * canvas and creates the illusion of moving by panning the image.
 */

function Background() {
    this.speed = 1; // Redefine speed of the background for panning
    
    // Implement abstract function
    this.draw = function() {
        // Pan background
        this.y += this.speed;
        this.context.drawImage(imageRepository.background, this.x, this.y);
        // Draw another image at the top edge of the first image
		this.context.drawImage(imageRepository.background, this.x, this.y - this.canvasHeight);
        
        // If the image scrolled off the screen, reset
		if (this.y >= this.canvasHeight)
			this.y = 0;
    };
}
// Set Background to inherit properties from Drawable
Background.prototype = new Drawable();

/**
 * The animation loop. Calls the requestAnimationFrame shim to
 * optimize the game loop and draws all game objects. This
 * function must be a gobal function and cannot be within an
 * object.
 */
function animate() {
	requestAnimFrame( animate );
	game.background.draw();
}

/**
 * Creates the Game object which will hold all objects and data for
 * the game.
 */
function Game() {
	/*
	 * Gets canvas information and context and sets up all game
	 * objects.
	 * Returns true if the canvas is supported and false if it
	 * is not. This is to stop the animation script from constantly
	 * running on older browsers.
	 */
	this.init = function() {
		// Get the canvas element
		this.bgCanvas = document.getElementById('background');
		// Test to see if canvas is supported
		if (this.bgCanvas.getContext) {
			this.bgContext = this.bgCanvas.getContext('2d');
			// Initialize objects to contain their context and canvas
			// information
			Background.prototype.context = this.bgContext;
			Background.prototype.canvasWidth = this.bgCanvas.width;
			Background.prototype.canvasHeight = this.bgCanvas.height;
			// Initialize the background object
			this.background = new Background();
			this.background.init(0,0); // Set draw point to 0,0
			return true;
		} else {
			return false;
		}
	};
	// Start the animation loop
	this.start = function() {
		animate();
	};
}

/**
 * requestAnim shim layer by Paul Irish
 * Finds the first API that works to optimize the animation loop,
 * otherwise defaults to setTimeout().
 */
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame   ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame    ||
			window.oRequestAnimationFrame      ||
			window.msRequestAnimationFrame     ||
			function(/* function */ callback, /* DOMElement */ element){
				window.setTimeout(callback, 1000 / 60);
			};
})();

/**
 * Initialize the Game and starts it.
 */
var game = new Game();
function init() {
	if(game.init())
		game.start();
}
