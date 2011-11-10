$(document).ready(function(){

    // Show & hide new idea container
    $(".slide").hide();
    $(".show").show();
    
    $('.show').click(function(){
    $(this).next(".slide").slideToggle();
    });

    // Show & hide new idea container
    $("#new-entry ").hide();
    $(".showbtn").show();
    
    $('.showbtn').click(function(){
    $("#new-entry ").slideToggle();
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

