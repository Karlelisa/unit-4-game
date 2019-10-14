$(document).ready(function () {

  // This sets the "Number to Guess" as a random number between 19 and 120.
  let randomNumber = Math.floor(Math.random() * 120) + 19;
  $("#number-to-guess").text(randomNumber);

  // variables to track totals
  let total = 0;
  let wins = 0;
  let losses = 0;

  // This sets each crystal with a random number between 1 and 12.
  //https://api.jquery.com/jQuery.each/ and concepts from the crystal class activity and this following site: https://youtu.be/Cc3K2jDdKTo
  $('.crystal-image').each(function () {
    console.log($(this))
    let numberOptions = Math.floor(Math.random() * 12) + 1;
    $(this).attr("data-crystalvalue", numberOptions);
  })


  //$('.crystal-image').sum(function () {})

  //This is from the crystal class activity and this following site: https://youtu.be/Cc3K2jDdKTo
  $(".crystal-image").click(function () {

    //This extracts the value of each crystal once it is clicked and converts the HTML element to a whole number
    let crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);

    console.log(crystalValue)

    //This adds the crystalValue to the user's total (Your Total Score) with every click.
    total += crystalValue;
    $("#crystal-score").text(total);



    //Win or Loose scores
    if (total === randomNumber) {
      wins++;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      numberOptions = Math.floor(Math.random() * 12) + 1;
      crystalValue = $(this).attr("data-crystalvalue", numberOptions);
      total = 0;
      $("#wins").text(wins);
      $("#number-to-guess").text(randomNumber);
      $("#crystal-score").text(total);
    }

    else if (total > randomNumber) {
      losses++;
      randomNumber = Math.floor(Math.random() * 120) + 19;
      numberOptions = Math.floor(Math.random() * 12) + 1;
      crystalValue = $(this).attr("data-crystalvalue", numberOptions);
      total = 0;
      $("#losses").text(losses);
      $("#number-to-guess").text(randomNumber);
      $("#crystal-score").text(total);
    }


  });

});