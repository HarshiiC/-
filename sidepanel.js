$(document).ready(function() {
    // Function to open the side panel
    $("#menu").click(function() {
        $("#sidePanel").css("width", "250px");
    });

    // Function to close the side panel
    $(".close-btn").click(function() {
        $("#sidePanel").css("width", "0");
    });
});
