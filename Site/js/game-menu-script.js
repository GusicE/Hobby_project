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

$(".classBtn").click(function() {
   // Hides all ingame menu's.
    $(".charCreationInfoText").addClass(" not_visible").removeClass("visible");

   // Shows appropriate one.
   var classChoice = $(this).data("claschoice"); // Fetches the value of the data-clas attribute.
   $(".charCreationInfoText[data-claschoice="+classChoice+"]").addClass(" visible").removeClass("not_visible");
});


var overlayWrapper = document.getElementById('overlay_window_wrapper');
var overlay = document.getElementById('welcome_screen');
var intro = document.getElementById('intro');
var intro1 = document.getElementById('introText_1');
var intro2 = document.getElementById('introText_2');
var intro3 = document.getElementById('introText_3');
var intro4 = document.getElementById('introText_4');
var intro5 = document.getElementById('introText_5');
var audio1 = document.getElementById('mainMenuAudio');
var audio2 = document.getElementById('introAudio');
var charCreationScreen = document.getElementById('charCreationScreen');
var charCreationScreen1 = document.getElementById('charCreationScreen_1');
var charCreationScreenAcceptBtn = document.getElementById('charCreationScreen_Accept_Btn');
	
function clickStart() {
    overlay.classList.add("hide");
    intro1.classList.add("show");
    setTimeout(function() {intro2.classList.add('show');}, 6000);
    setTimeout(function() {intro3.classList.add('show');}, 11000);
    setTimeout(function() {intro1.classList.add('hide2');}, 17000);
    setTimeout(function() {intro2.classList.add('hide2');}, 17000);
    setTimeout(function() {intro3.classList.add('hide2');}, 17000);       
    setTimeout(function() {intro4.classList.add('show');}, 18000);
    setTimeout(function() {intro5.classList.add('show');}, 21000);
    audioFadeOut(audio1);
    audio2.play();
}


var Hero = {
    name: "",
    gender: "",
    class: "",
    strenght: "",
    constitution: "",
    dexterity: "",
    intelligence: "",
    luck: "",    
}


function createChar() {
    audioFadeOut(audio2);
    intro.classList.add('hide');
    charCreationScreen.classList.add("show");
}

function startGame() {
    charCreationScreen.classList.add('hide');
    overlayWrapper.classList.add('hide');
}

function nextStep1() {
    var charCreationGender = document.getElementById('charCreationGender');
    var charCreationClass = document.getElementById('charCreationClass');
    
    var gender = document.getElementsByName('gender');
    
    for (var i = 0, length = gender.length; i < length; i++) {
        if (gender[i].checked) {
            // do whatever you want with the checked radio
            Hero.gender = gender[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    
    var charSummaryGender = document.getElementById('charSummaryGender');
    
    charSummaryGender.innerHTML = Hero.gender;
    
    charCreationGender.classList.add('hidden2');
    charCreationClass.classList.remove('hidden2');
}



function nextStep2() {
    var charCreationClass = document.getElementById('charCreationClass');
    var charCreationName = document.getElementById('charCreationName');
    
    var clas = document.getElementsByName('class');
    
    for (var i = 0, length = clas.length; i < length; i++) {
        if (clas[i].checked) {
            // do whatever you want with the checked radio
            Hero.class = clas[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
    
    var charSummaryClass = document.getElementById('charSummaryClass');
    charSummaryClass.innerHTML = Hero.class;
    
    charCreationClass.classList.add('hidden2');
    charCreationName.classList.remove('hidden2');
}



function nextStep4() {
    var charCreationName = document.getElementById('charCreationName');
    var name = document.getElementById('charCreationNameInput');
    
    Hero.name = name.value;
    
    var charSummaryName = document.getElementById('charSummaryName');
    charSummaryName.innerHTML = Hero.name;
    charCreationName.classList.add('hidden2');
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


