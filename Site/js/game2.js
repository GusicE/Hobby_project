$(document).ready( function(){
    //Get the canvas &
    var c = $('#gameCanvas');
    var ct = c.get(0).getContext('2d');
    var container = $(c).parent();

    //Run function when browser resizes
    $(window).resize( respondCanvas );

    function respondCanvas(){
        ct.save();
        c.attr('width', $(container).width() ); //max width
        c.attr('height', $(container).height() ); //max height

        //Call a function to redraw other content (texts, images etc)
        ct.restore();
    }

    //Initial call
    respondCanvas();
});




var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

/**
 * Define an object to hold all our images for the game so images
 * are only ever created once. This type of object is known as a
 * singleton.
 */
 var imageRepository = new function() {
	// Define images
	this.character = new Image();
    this.tile1 = new Image();
    this.tile2 = new Image();
     this.wall_end_both = new Image();
     this.wall_end_left = new Image();
     this.wall_end_right = new Image();
     this.wall_middle1 = new Image();
     this.wall_middle2 = new Image();
     this.wall_middle3 = new Image();
     this.wall_middle_cracked = new Image();
     
    // Define image width and height
    this.character.width = 50;
    this.character.height = 50;
    this.tile1.width = 64;
    this.tile1.height = 64;
    this.tile2.width = 64;
    this.tile2.height = 64;
     
	// Set images src
	this.character.src = "../img/test/character.png";
    this.tile1.src = "../img/test/tile1.png";
    this.tile2.src = "../img/test/tile2.png";
     this.wall_end_both = "../img/test/wall_end_both.png";
     this.wall_end_left = "../img/test/wall_end_left.png";
     this.wall_end_right = "../img/test/wall_end_right.png";
     this.wall_middle1 = "../img/test/wall_middle1.png";
     this.wall_middle2 = "../img/test/wall_middle2.png";
     this.wall_middle3 = "../img/test/wall_middle3.png";
     this.wall_middle_cracked = "../img/test/wall_middle_cracked.png";
}
 
var map = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,0,0,1,1,1,1,0,0,1],
    [1,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1]
];

var posX = 0;
var posY = 0;

for (var i=0; i < map.length; i++){
    for (var j=0; j < map[i].length; j++) {
        
        if(map[i][j] == 0) {
            ctx.drawImage(imageRepository.tile1, posX, posY, 64, 64);
        }
        if(map[i][j] == 1) {
            ctx.drawImage(imageRepository.tile2, posX, posY, 64, 64);
        }
        posX += 64;
    }
    posX = 0;
    posY += 64;
}

