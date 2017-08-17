$(".ingame_menu_tab").click(function() {
   // Hides all ingame menu's.
    $(".ingame_menu").addClass(" not_visible").removeClass("visible");
    $(".ingame_menu_tab").removeClass("active");

   // Shows appropriate one.
   var info = $(this).data("ingamemenu"); // Fetches the value of the data-clas attribute.
   $(".ingame_menu[data-ingamemenu="+info+"]").addClass(" visible").removeClass("not_visible");
    $(".ingame_menu_tab[data-ingamemenu="+info+"]").addClass(" active");
});




$(".inv_tab").click(function() {
   // Hides all inventory tabs.
    $(".inv_wrapper").addClass(" not_visible").removeClass("visible");
    $(".inv_tab").removeClass("active_inv_tab");

   // Shows appropriate one.
   var info = $(this).data("inv"); // Fetches the value of the data-clas attribute.
   $(".inv_wrapper[data-inv="+info+"]").addClass(" visible").removeClass("not_visible");
    $(".inv_tab[data-inv="+info+"]").addClass(" active_inv_tab");
});

var overlay = document.getElementById('welcome_screen');
var intro1 = document.getElementById('introText_1');
var intro2 = document.getElementById('introText_2');
var audio1 = document.getElementById('mainMenuAudio');
var audio2 = document.getElementById('introAudio');
	
function clickStart() {
    overlay.classList.add("hide");
    intro1.classList.add("show");
    intro2.classList.add("show2");
    audioFadeOut(audio1);
    audio2.play();
}

function audioFadeIn(track) {
var audio = track;    
var vol = 0.1;
var interval = 500; // 500ms interval
    
audio.volume = vol;    

var fadeout = setInterval(
  function() {
    // Reduce volume by 0.05 as long as it is above 0
    // This works as long as you start with a multiple of 0.05!
    if (vol < 1) {
      vol += 0.05;
      audio.volume = vol;
    }
    else {
      // Stop the setInterval when 0 is reached
      clearInterval(fadeout);
    }
  }, interval);
};

function audioFadeOut(track) {
var audio = track;    
var vol = 1;
var interval = 100; // 500ms interval
    
audio.volume = vol;    

var fadeout = setInterval(
  function() {
    // Reduce volume by 0.05 as long as it is above 0
    // This works as long as you start with a multiple of 0.05!
    if (vol > 0) {
      vol -= 0.05;
      audio.volume = vol;
    }
    else {
      // Stop the setInterval when 0 is reached
      clearInterval(fadeout);
      audio.pause();
    }
  }, interval);
};