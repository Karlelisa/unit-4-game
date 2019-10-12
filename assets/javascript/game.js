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
      wins++;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      counter = 0;
      $("#wins").text(wins);
      alert("You win!");
      $("#you-win").text("You WIN!!");
      $("#number-to-guess").text(randomNumber);
      $("#crystal-score").text(counter);
    }

    else if (counter >= randomNumber) {
      losses++;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      counter = 0;
      $("#losses").text(losses);
      alert("You lose!!");
      $("#you-loose").text("You Loose!!");
      $("#number-to-guess").text(randomNumber);
      $("#crystal-score").text(counter);

    }


  });
});