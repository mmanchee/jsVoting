$(document).ready(function() {
  const age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#old-enough').show();
  } else {
    $('#not-old-enough').show();
  }
});