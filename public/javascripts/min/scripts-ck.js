$(document).ready(function(){$("#entry_form").validate();$(function(){var a=$("#entries-gallery");a.isotope({itemSelector:".photo",getSortData:{number:function(a){return parseInt(a.find(".number").text(),10)},weight:function(a){return parseFloat(a.find(".weight").text().replace(/[\(\)]/g,""))},name:function(a){return a.find(".name").text()}}})});$(".alert-message.prompt").delay(2500).fadeOut("slow");$("#login-tip").hide().delay(1200).fadeIn(1e3).delay(100);$(".slide").hide();$(".show").show();$(".show").click(function(){$(this).next(".slide").slideToggle()});$("#new-entry").hide();$(".showbtn").show();$(".showbtn").click(function(){$("#new-entry").delay(200).slideToggle()});$("#entries-gallery li").filter(function(a){return a%2==1}).addClass("alt");if($.fn.countdown){var a=$("time#expires-at"),b=Date.parse(a.attr("datetime")),c=new Date(b);a.countdown({until:c,format:"dHMS"})}$(".likebtn").click(function(){var a=this;$(this).addClass("disabled");$.post($(this).attr("the_link"),function(b){if(b.valid){$(a).find(".likecount").html("("+b.likes_count+")");$(a).removeClass("disabled");$(a).addClass("on")}else{alert(b.message);$(a).removeClass("disabled");$(a).addClass("on")}},"json")})});