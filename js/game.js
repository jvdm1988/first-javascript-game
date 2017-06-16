$('document').ready(function() {
  ion.sound.play("skyhigh");

  $(".clickMe").click(function() {
    $('.namePrompt').hide();
    var nameValue = $(".input").val();
    $('.playerName').html(nameValue);
  });
});

$(".rabbit1").css("display", "none");
$(".carrot").css("display", "none");
$(".rabbitplus").css("display", "none");

var timeUp;

//-----------------------------------------------------------
// Function to start game and activate countdown when click start:

var startGame = function() {
  if (timeUp) {
    return;
  }
  // Function for 30 sec countdown:
  timeUp = setInterval(timer, 1000);
  // no var on timeUp because we want it global

  var count = 30;

  function timer() {
    count = count - 1;
    $("h2").replaceWith("<h2> " + count + " </h2>");

    if (count <= 0) {
      clearInterval(timeUp);
      timeUp = null;
      endGame();
    }
  }

  first = setInterval(randomRabbit, 1000);
  second = setInterval(randomRabbit, 3000);
  third = setInterval(randomRabbit, 5000);
  fourth = setInterval(randomCarrot, 4000);

};

var endGame = function() {
  clearInterval(timeUp);

  clearInterval(first);
  clearInterval(second);
  clearInterval(third);
  clearInterval(fourth);
};

//---------------------------------------------------------
//Function to randomly show rabbit and carrot:

var randomRabbit = function() {
  var row = Math.floor(Math.random() * 8) + 1;
  var col = Math.floor(Math.random() * 10) + 1;

  $(".cell-" + row + "-" + col + " > .rabbit1").css("display", "inline");
  $(".cell-" + row + "-" + col + " > .grass1").css("display", "none");
  $(".cell-" + row + "-" + col + " > .carrot").css("display", "none");

  setTimeout(function() {
    $(".cell-" + row + "-" + col + " > .rabbit1").css("display", "none");
    $(".cell-" + row + "-" + col + " > .grass1").css("display", "inline");
    $(".cell-" + row + "-" + col + " > .carrot").css("display", "none");
  }, 2000);
};

var randomCarrot = function() {
  var row = Math.floor(Math.random() * 8) + 1;
  var col = Math.floor(Math.random() * 10) + 1;

  $(".cell-" + row + "-" + col + " > .rabbit1").css("display", "none");
  $(".cell-" + row + "-" + col + " > .grass1").css("display", ("none"));
  $(".cell-" + row + "-" + col + " > .carrot").css("display", "inline");

  setTimeout(function() {
    $(".cell-" + row + "-" + col + " > .rabbit1").css("display", "none");
    $(".cell-" + row + "-" + col + " > .grass1").css("display", "inline");
    $(".cell-" + row + "-" + col + " > .carrot").css("display", "none");
  }, 3000);
};


//-----------------------------------------------------------
// Function to start game:

$(document).ready(function() {
  $(".start").click(function() {
    startGame();
  });

  // Function to end game:

  $(".end").click(function() {
    endGame();
  });
});

// $(document).ready(function () {
//   $(".rabbit1").click (function () {
//     alert ("+1"); // how to create a non pop up alert?
//   });
// });
//----------------------------------------------------------
//Function for rabbit score:

var myScore = 0;

function rabbitScore() {
  myScore += 1;
  $("h4").replaceWith("<h4> SCORE: " + myScore + " </h4>");
}

$(".rabbit1").click(function() {
  rabbitScore();
});

// Function for carrot score:

function carrotScore() {
  myScore += 2;
  $("h4").replaceWith("<h4> SCORE: " + myScore + " </h4>");
}

$(".carrot").click(function() {
  carrotScore();
});

//----------------------------------------------------
// Functions instructions modal pop up

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
// Function to active sound on click rabbit1

ion.sound({
  sounds: [
    {name: "Cursor1", volume: 1},
    {name: "coin2"},
    {name: "skyhigh", loop:true}
  ],
  // path to the folderwhere the sound files are
  path: "./sounds/sounds/",
  //starts loading sound files even before you use them
  preload: true,
  // multiple sounds at once
  multiplay: true,
  //90% volume
  volume: 0.3
});

// Play sound

$(document).ready(function() {
  $(".rabbit1").click(function() {
    ion.sound.play("Cursor1");
  });
  $(".carrot").click(function() {
    ion.sound.play("coin2");
  });
});
