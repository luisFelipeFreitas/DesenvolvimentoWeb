$(function() {
   $("#menu-btn").click(function(){
      $("#menu-lateral").toggle('slow'); 
      $("#menu-btn").removeClass("d-block");
      $("#close-btn").addClass("d-block");
   });

   $("#close-btn").click(function(){
      $("#menu-lateral").toggle('slow');
      $("#menu-btn").addClass("d-block");
      $("#close-btn").removeClass("d-block");
   });


});
