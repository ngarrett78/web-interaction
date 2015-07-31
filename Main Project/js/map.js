// JavaScript Document// JavaScript Document
// Written by Chris Converse
// for Lynda.com

$(document).ready(function() {
// begin Ready

	//...................................................
	// When the form changes
	$('#mapForm').change(function() {
	
		var selectedContinent = $('#mapForm option:selected').val();
		if (selectedContinent == 'ALL'){
			$('a.dot').slideDown(1000);
		}else{
			$('a.dot[continent = "'+selectedContinent+'"]').slideDown(1000);
			$('a.dot[continent != "'+selectedContinent+'"]').slideUp(1000);
		}
		
	});
	
	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var region = '.region_detail#' + $(this).attr('region');
		var htmlCode = $(region).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .region_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

// end Ready
});