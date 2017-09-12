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
    level: "",
    neededxp: "",
    currentxp: "",
    atrPoints: "",
    health: "",
    currentHealth: "",
    attack: "",
    attackSpeed: "",
    DPS: "",
    armor: ""
}


function createChar() {
    audioFadeOut(audio2);
    intro.classList.add('hide');
    charCreationScreen.classList.add("show");
}

function startGame() {

    
    var Hname = document.getElementsByClassName('char_name');
    var Hlevel = document.getElementsByClassName('char_lvl_span');
    var Hclass = document.getElementsByClassName('char_class');
    var Hneededxp = document.getElementsByClassName('char_xp_span');
    var Hcurrentxp = document.getElementsByClassName('char_xp_current_span');
    var HatrPoints = document.getElementsByClassName('char_atr_points_span');
    
    var Hstr = document.getElementsByClassName('str');
    var Hcons = document.getElementsByClassName('cons');
    var Hdext = document.getElementsByClassName('dext');
    var Hinteli = document.getElementsByClassName('inteli');
    var Hluck = document.getElementsByClassName('luck');
    
    Hero.level = "1";
    Hero.neededxp = "100";
    Hero.currentxp = "0";
    Hero.atrPoints = "0";
    
    for (i = 0; i < Hname.length; ++i) {
    Hname[i].innerHTML = Hero.name;
    };
    
    for (i = 0; i < Hlevel.length; ++i) {
    Hlevel[i].innerHTML = Hero.level;
    };
    
    for (i = 0; i < Hclass.length; ++i) {
    Hclass[i].innerHTML = Hero.class;
    };
    
    for (i = 0; i < Hneededxp.length; ++i) {
    Hneededxp[i].innerHTML = Hero.neededxp;
    };
    
    for (i = 0; i < Hcurrentxp.length; ++i) {
    Hcurrentxp[i].innerHTML = Hero.currentxp;
    };
    
    for (i = 0; i < HatrPoints.length; ++i) {
    HatrPoints[i].innerHTML = Hero.atrPoints;
    };
    
    
    for (i = 0; i < Hstr.length; ++i) {
    Hstr[i].innerHTML = Hero.strenght;
    };
    for (i = 0; i < Hcons.length; ++i) {
    Hcons[i].innerHTML = Hero.constitution;
    };
    for (i = 0; i < Hdext.length; ++i) {
    Hdext[i].innerHTML = Hero.dexterity;
    };
    for (i = 0; i < Hinteli.length; ++i) {
    Hinteli[i].innerHTML = Hero.intelligence;
    };
    for (i = 0; i < Hluck.length; ++i) {
    Hluck[i].innerHTML = Hero.luck;
    };
    
    Hero.health = Hero.constitution * 40;
    Hero.currentHealth = Hero.health;
    Hero.attack = "10";
    Hero.attackSpeed = "1";
    Hero.DPS = Hero.attack * Hero.attackSpeed;
    Hero.armor = "10";
    
    var Hhealth = document.getElementsByClassName('char_hp_stats');
    var HcurrentHealth = document.getElementsByClassName('char_hp_stats_current');
    var Hattack = document.getElementsByClassName('char_atk_nbr_dmg');
    var HattackSpeed = document.getElementsByClassName('char_atk_nbr_speed');
    var Hdps = document.getElementsByClassName('char_atk_nbr_dps');
    var Harmor = document.getElementsByClassName('char_armor_nbr');
    
    for (i = 0; i < Hhealth.length; ++i) {
    Hhealth[i].innerHTML = Hero.health;
    };

    for (i = 0; i < HcurrentHealth.length; ++i) {
    HcurrentHealth[i].innerHTML = Hero.currentHealth;
    };
    
    for (i = 0; i < Hattack.length; ++i) {
    Hattack[i].innerHTML = Hero.attack;
    };
    
    for (i = 0; i < HattackSpeed.length; ++i) {
    HattackSpeed[i].innerHTML = Hero.attackSpeed;
    };
    
    for (i = 0; i < Hdps.length; ++i) {
    Hdps[i].innerHTML = Hero.DPS;
    };
    
    for (i = 0; i < Harmor.length; ++i) {
    Harmor[i].innerHTML = Hero.armor;
    };
    
    
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
    var charCreationAtrib = document.getElementById('charCreationAtrib');
    
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
    charCreationAtrib.classList.remove('hidden2');
    rerollStats();
}

var shownStr = document.getElementById('charCreationStr');
var shownCons = document.getElementById('charCreationCons');
var shownDext = document.getElementById('charCreationDext');
var shownInteli = document.getElementById('charCreationInteli');
var shownLuck = document.getElementById('charCreationLuck');
var shownTotal = document.getElementById('charCreationTotal');

function getRandom(min, max) {
  var Random = Math.floor(Math.random() * (max - min + 1)) + min;
  return Random;
}

var tempStats = {
    str: "",
    cons: "",
    dext: "",
    inteli: "",
    luck: ""
}

function rerollStats() {
    
    tempStats = {
    str: getRandom(10, 20),
    cons: getRandom(10, 20),
    dext: getRandom(10, 20),
    inteli: getRandom(10, 20),
    luck: getRandom(8, 17)
    }
    
    shownStr.innerHTML = tempStats.str;
    shownCons.innerHTML = tempStats.cons;
    shownDext.innerHTML = tempStats.dext;
    shownInteli.innerHTML = tempStats.inteli;
    shownLuck.innerHTML = tempStats.luck;
    shownTotal.innerHTML = tempStats.str + tempStats.cons + tempStats.dext + tempStats.inteli + tempStats.luck;
}

var savedStats = {
        str: "",
        cons: "",
        dext: "",
        inteli: "",
        luck: ""
}

function saveStats() {
        savedStats.str = shownStr.innerHTML;
        savedStats.cons = shownCons.innerHTML;
        savedStats.dext = shownDext.innerHTML;
        savedStats.inteli = shownInteli.innerHTML;
        savedStats.luck = shownLuck.innerHTML;
    
        var loadBtn = document.getElementById('charAtribload');
        loadBtn.setAttribute( "onClick", "loadStats()" )
        loadBtn.classList.remove('inactive');
}

function loadStats() {
    shownStr.innerHTML = savedStats.str;
    shownCons.innerHTML = savedStats.cons;
    shownDext.innerHTML = savedStats.dext;
    shownInteli.innerHTML = savedStats.inteli;
    shownLuck.innerHTML = savedStats.luck;
    shownTotal.innerHTML = parseInt(savedStats.str) + parseInt(savedStats.cons) + parseInt(savedStats.dext) + parseInt(savedStats.inteli) + parseInt(savedStats.luck);
}

function nextStep3() {
    var charCreationAtrib = document.getElementById('charCreationAtrib');
    var charCreationName = document.getElementById('charCreationName');
    
    var charSummaryStr = document.getElementById('charSummaryStr');
    var charSummaryCons = document.getElementById('charSummaryCons');
    var charSummaryDext = document.getElementById('charSummaryDext');
    var charSummaryInteli = document.getElementById('charSummaryInteli');
    var charSummaryLuck = document.getElementById('charSummaryLuck');
    
    Hero.strenght = shownStr.innerHTML;
    Hero.constitution = shownCons.innerHTML;
    Hero.dexterity = shownDext.innerHTML;
    Hero.intelligence = shownInteli.innerHTML;
    Hero.luck = shownLuck.innerHTML;
    
    charSummaryStr.innerHTML = Hero.strenght;
    charSummaryCons.innerHTML = Hero.constitution;
    charSummaryDext.innerHTML = Hero.dexterity;
    charSummaryInteli.innerHTML = Hero.intelligence;
    charSummaryLuck.innerHTML = Hero.luck;
    
    charCreationAtrib.classList.add('hidden2');
    charCreationName.classList.remove('hidden2');
}



function nextStep4() {
    var charCreationName = document.getElementById('charCreationName');
    var charCreationFinal = document.getElementById('charCreationFinal');
    var activeAvatar = document.getElementsByClassName('activeAvatar');
    var avatarPlaceholder = document.getElementById('charAvatarPlaceholder');
    
    var name = document.getElementById('charCreationNameInput');
    
    Hero.name = name.value;
    
    avatarPlaceholder.src = activeAvatar[0].src;
    var charSummaryName = document.getElementById('charSummaryName');
    charSummaryName.innerHTML = Hero.name;
    charCreationName.classList.add('hidden2');
    charCreationFinal.classList.remove('hidden2');
}

function restartCharCreation() {
    charCreationFinal.classList.add('hidden2');
    charCreationGender.classList.remove('hidden2');
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

