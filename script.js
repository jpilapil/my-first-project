// toggle dropdown fucntions

$(".title-1").click(function () {
   $(".text-1").toggle();
   $(".plus-button-1").toggle();
   $(".minus-button-1").toggle();
});

$(".title-2").click(function () {
   $(".text-2").toggle();
   $(".plus-button-2").toggle();
   $(".minus-button-2").toggle();
});

$(".title-3").click(function () {
   $(".text-3").toggle();
   $(".plus-button-3").toggle();
   $(".minus-button-3").toggle();
});

// change send button to say "send personal/professional request"
$("#business-inquiry").click(function () {
   $("#email-button").html("SEND PROFESSIONAL REQUEST");
});

$("#personal-inquiry").click(function () {
   $("#email-button").html("SEND PERSONAL REQUEST");
});

// make send button clickable when textarea is filled
$("#email-body").keypress(function () {
   $("#email-button").removeAttr("disabled");
});

// send email via external window
$("#email-button").click(function () {
   window.open(
      "mailto:justin.pilapil@yahoo.com?subject=Hello&body=" +
         $("#email-body").val(),
      "_blank"
   );
});
