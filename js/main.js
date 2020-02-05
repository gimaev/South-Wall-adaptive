$(document).ready(function(){

    $( window ).scroll(function() {
        $("#kar").css( "display", "inline" ).fadeOut( "slow" );
      });

    $('#hideQuote').click(function(){
        $( ".jumbotron" ).slideUp("slow", function() {
          });
    });

    $(".prices").hover(
        function() {
            $(this).css({"font-weight": "bolder"});
        },
        function() {
            $(this).css({"font-weight": "normal"});
    });

    $('.card').hover(
				
        function () {
            $(this).animate({ 'zoom': 1.1 }, 400);
        }, 
        function () {
            $(this).animate({ 'zoom': 1 }, 400);
        }
     );


});