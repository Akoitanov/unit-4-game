// make 4 crystal which are generates spec. amount of points.
//if your score matches the random number you win.
// you lose if the score above the random number.
//each game the crystals generates a new points or results.
//4 crystals have to generate 1 to 12 number
//random number between 50 and 80 (80-50=30) then adding 1.

var random_result;
var lost = 0;
var win = 0;
var previous = 0;
// $('.crystal').attr('class');

var resetAndStart = function () {

    $(".crystals").empty();

    var images =['../images/sapphire.jpg',
    '../images/blue.png',
    '../images/coralgem.png',
    '../images/pinkgem.png'];

random_result = Math.floor(Math.random() * 69 ) + 30;



$("#result").html('Random Result: ' + random_result);

for(var i = 0; i < 4; i++){

var random = Math.floor(Math.random() * 11) + 1;
//console.log(random);



var crystal = $("<div>");
crystal.attr({
    "class": 'crystal',
    "data-random": random
});

crystal.css({
   "background-image":"url('" + images[i] + "')",
   "background-size":"cover"

});


$(".crystals").append(crystal);

   }
$("#previous").html(previous);
}

resetAndStart();


$(document).on('click', ".crystal", function () {

   var num = parseInt($(this).attr("data-random"));

   previous += num;

   $("#previous").html("Total score: " + previous);
   
   console.log(previous);

   if(previous > random_result){

      lost++;

      $("#lost").html("You lost: " + lost);

      previous = 0;

      resetAndStart();
   }
   else if(previous === random_result){

       win++;

       $("#win").html("You win: " + win);

       previous = 0;

       resetAndStart();
   }

});