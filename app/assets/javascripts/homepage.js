$(window).ready(function() {
  $('button').on('click', function() {
    $.getJSON('/movies.json', function(data) {
      
