var $ = jQuery;
$(document).ready(function(){
	$('.mobile_button').click(function(e){
		e.preventDefault()
		$('#navigation').slideToggle();
	});
	
	// Twitter feed slider
	$('#twitter_bxslider').bxSlider({
	  mode: 'fade',
	  controls: false,
	  pager:false,
	  auto:true
	});
	
})