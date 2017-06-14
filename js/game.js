
$(".rabbit1").css ("display", "none");

var timeUp;

//-----------------------------------------------------------
var startGame = function () {
  if (timeUp) {
    return;
  }

  // Function for 30 sec countdown:
  timeUp=setInterval(timer, 1000); //1000 will run it every 1 second
  // no var on timeUp because we want it global

  var count=30;

  function timer() {
    count=count-1;
    $("h2").replaceWith("<h2> " + count + " </h2>");

    if (count <= 0) {
      clearInterval(timeUp);
      timeUp = null;
    }
   }
};

var endGame = function () {
  $(".end").click (function () {
  clearInterval(timeUp);
});
};

//-----------------------------------------------------------
// function to start game:

$(document).ready(function () {
  $(".start").click (function () {
    startGame();
  });

// function to end game:

  $(".end").click (function () {
    endGame ();
  });

});


//---------------------------------------------------------
//function to randomly show rabbit:
var showRabbit = (function() {

  var row =  $(".cell ").Math.floor(Math.random() * 4) + 1;
  var cell = $(".cell").Math.floor(Math.random() * 4) + 1;





});
//
// });


//----------------------------------------------------------

//function for userClickCount:





//---------------------------------------------------------

// // init bunch of sounds
// ion.sound({
//     sounds: [
//         {name: "beer_can_opening"},
//         {name: "bell_ring"},
//         {name: "branch_break"},
//         {name: "button_click"}
//     ],
//
//     // path to the folderwhere the sound files are
//     path: "./sounds/sounds/",
//
//     //starts loading sound files even before you use them
//     preload: true,
//
//     // multiple sounds at once
//     multiplay: true,
//
//     //90% volume
//     volume: 0.9
// });
//
// // play sound
//
// $(document).ready (function () {
//   $(".open-beer").click (function () {
//
//   ion.sound.play("beer_can_opening");
// });
// });
