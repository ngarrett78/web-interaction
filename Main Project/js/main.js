$(document).ready(function(){
	
	/* =====================	smooth scrolling to anchor links  ==================== */
  $('a[href*=#]').click(function() {
	  
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
	
    && location.hostname == this.hostname) {
		
      var $target = $(this.hash);
      $target = $target.length && $target
      || $('[name=' + this.hash.slice(1) +']');
      	if ($target.length) {
			
        var targetOffset = $target.offset().top;
		
        $('html,body')
        .animate({scrollTop: targetOffset}, 1000);
		
       return false;
      }
    }
  });


    /* ===========================  jquery effects 2 ============================ */
	
	 $("#hide").click(function(){
        $("#hidden").hide(300);
    });
    $("#show").click(function(){
        $("#hidden").show(300);
    });
  
  /* ====================  HTML5 audio features	================================= */
  
  var audio

	window.onload = function (){		
	audio=document.getElementById("audio");}	
	function clicked(){		
	audio.currentTime -=5;		
	}
	
	/* ==========================  image gallery	========================= */
	
			$('.fancybox').fancybox();
			
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});
	  
	  
}); //end document ready

