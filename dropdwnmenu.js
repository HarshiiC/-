src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"

// Get the dropdown menu
const dropdownMenu = document.getElementById('dropdownMenu');

// Set the initial display style of the dropdown menu to 'none'
dropdownMenu.style.display = 'none';

// Add event listener to the menu button
document.getElementById('menu').addEventListener('click', function(event) {
    // Prevent the document click event from firing
    event.stopPropagation();

    // Toggle the display style of the dropdown menu
    dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
});

// Add event listener to the dropdown menu
dropdownMenu.addEventListener('click', function(event) {
    // Prevent the document click event from firing
    event.stopPropagation();
});

// Add event listener to the document
document.addEventListener('click', function() {
    // Hide the dropdown menu
    dropdownMenu.style.display = 'none';
});

$(document).ready(function(){
    $("menu").click(function(){
      $("dropdownMenu").hide();})
  });