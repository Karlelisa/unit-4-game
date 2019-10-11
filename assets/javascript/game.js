//

$(document).ready(function () {

  // This sets the "Number to Guess" as a random number between 19 and 120.
  let randomNumber = Math.floor(Math.random() * 120) + 19;
  $("#number-to-guess").text(randomNumber);

  // variables to track totals
  let counter = 0;
  let wins = 0;
  let losses = 0;



  // This sets each crystal with a random nunber between 1 and 12.
  //https://api.jquery.com/jQuery.each/ and concepts from the crystal class activity and this following site: https://youtu.be/Cc3K2jDdKTo
  $('.crystal-image').each(function () {
    console.log($(this))
    let numberOptions = Math.floor(Math.random() * 12) + 1;
    $(this).attr("data-crystalvalue", numberOptions);

  })


  //This is from the crystal class activity and this following site: https://youtu.be/Cc3K2jDdKTo
  $(".crystal-image").click(function () {

    //This extracts the value of each crystal once it is clicked and converts the HTML element to a whole number
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    console.log(crystalValue)

    //This adds the crystalValue to the user's counter (Your Total Score) with every click.
    counter += crystalValue;
    $("#crystal-score").text(counter);

    alert("New score: " + counter);


    //Win or Loose scores
    if (counter === randomNumber) {
      wins++
      $("#wins").text(wins);
      alert("You win!");
      //$(resetGame());
    }

    else if (counter >= randomNumber) {
      losses++
      $("#losses").text(losses);
      alert("You lose!!");
      //$(resetGame());
    }

    //******NOTE: Set something like if wins or looses equal 5 then game over. Set a game reset function.******
    /*  if (wins === 5 || losses === 5) {
       alert("Game Over!! Play again to collect more crystals");
       $(gameOver());
     } */


    //This resets the game after you win or loose. It only resets the randomNumber, crystalvalues and the total score.

    /*    $(function resetGame() {
         randomNumber = " ";
         crystalValue = " ";
         counter = 0;
   
       }); */


    //It is game over after the player wins 5 times or looses 5 times.

    /* $(function gameOver() {
      randomNumber = "";
      crystalValue = "";
      counter = 0;
      wins = 0;
      losses = 0;

    }); */
    //$('#random-number').text(lotteryNumber)

  });
});