$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#old-enough').show();
  } else {
    let timeTill = 18 - age;
    
    if (age === 1) {
      timeTill = timeTill + " year";
    } else {
      timeTill = timeTill + " years";
    }
    
    $("#time-till").text(timeTill);
    $('#not-old-enough').show();
  }
});