
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
      clearInterval(first);
      clearInterval(second);
      clearInterval(third);
    }
   }

   // Add 1 rabbit setinterval timer, 2000
  //  var rabbitOne = setInterval(randomRabbit, 1000);
    first = setInterval(randomRabbit, 1000);
    second = setInterval(randomRabbit, 3000);
    third = setInterval(randomRabbit, 5000);

  //  setTimeout(function(){
  //    clearInterval(rabbitOne);
  //  }, 3000);
};

var endGame = function () {
  clearInterval(timeUp);

  clearInterval(first);
  clearInterval(second);
  clearInterval(third);
};

//---------------------------------------------------------
//function to randomly show rabbit:
var randomRabbit = function () {
  var row =  Math.floor(Math.random() * 8) + 1;
  var col = Math.floor(Math.random() * 10) + 1;

  $(".cell-" + row + "-" + col + " > .rabbit1").css ("display", "inline");
  $(".cell-" + row + "-" + col + " > .grass1").css ("display", "none");


setTimeout(function () {
  $(".cell-" + row + "-" + col + " > .rabbit1").css ("display", "none");
  $(".cell-" + row + "-" + col + " > .grass1").css ("display", "inline");
}, 2000);
};
//-----------------------------------------------------------
// function to start game:

$(document).ready(function () {
  $(".start").click (function () {
    startGame();
  });

// function to end game:

  $(".end").click (function () {
    endGame();
  });
});

// $(document).ready(function () {
//   $(".rabbit1").click (function () {
//     alert ("+1"); // how to create a non pop up alert?
//   });
// });
//----------------------------------------------------------

//function for score:
var score = 0;

function gameScore() {
  score=score+1;
  $("h4").replaceWith("<h4> SCORE: " + score + " </h4>");
  }

$(".rabbit1").click (function () {

  gameScore();
});

// functions instructions modal pop up

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

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
