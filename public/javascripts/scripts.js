$(document).ready(function(){

    $('.alert-message.prompt').delay(2000).fadeOut('slow');

    // Show & hide new idea container
    $(".slide").hide();
    $(".show").show();
    
    $('.show').click(function(){
    $(this).next(".slide").slideToggle();
    });

    // Show & hide new idea container
    $("#new-entry").hide();
    $(".showbtn").show();
    
    $('.showbtn').click(function(){
    $("#new-entry").delay(200).slideToggle();
    });

    // Show & hide new idea container
    $("#page-navigation").show();
    $(".showbtn").show();
    
    $('.showbtn').click(function(){
    $("#page-navigation").fadeToggle(100);
    });
    
    // Add alt class to photoboard
    $('#entries-gallery li').filter(function(index){
    return (index%2 == 1);
    }).addClass('alt');
    
    // Add alt class to photoboard
    $('#entries-gallery li').filter(function(index){
    return (index%5 == 4);
    }).addClass('last');

    // check for countdown plugin
    if($.fn.countdown) {
        // grab clock element and extract "expires at" timestamp
    	var $time = $("time#expires-at"),
          timestamp = Date.parse($time.attr('datetime')),
          expiresAt = new Date(timestamp);
          $time.countdown({
            until: expiresAt,
            format: 'dHMS'
          });
        
}
});

