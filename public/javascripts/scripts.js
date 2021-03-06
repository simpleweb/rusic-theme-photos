$(document).ready(function(){

    $("#entry_form").validate();

    $(function(){
      
      var $container = $('#entries-gallery');
      
      $container.isotope({
        itemSelector : '.photo',
        getSortData : {
          number : function( $elem ) {
            return parseInt( $elem.find('.number').text(), 10 );
          },
          weight : function( $elem ) {
            return parseFloat( $elem.find('.weight').text().replace( /[\(\)]/g, '') );
          },
          name : function ( $elem ) {
            return $elem.find('.name').text();
          }
        }
      });
      
    });

    $('.alert-message.prompt').delay(2500).fadeOut('slow');

    // Fade in login prompt
    $('#login-tip').hide().delay(1200).fadeIn(1000).delay(100);

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

    // Add alt class to photoboard
    $('#entries-gallery li').filter(function(index){
    return (index%2 == 1);
    }).addClass('alt');

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

// AJAXIFY LIKE BUTTONS
$('.likebtn').click(function(){

    var button = this;

    $(this).addClass('disabled');

    $.post($(this).attr('the_link'), function(data) {
      if(data.valid){
        $(button).find(".likecount").html('('+data.likes_count+')');
        $(button).removeClass('disabled');
        $(button).addClass('on');
      }else{
        alert(data.message);
        $(button).removeClass('disabled');
        $(button).addClass('on');
      }
    }, 'json');
  });


});

