(function(){

	//On form submit the form and title fades out an the thank you message fades in.
	$( ".form-submit button" ).on("click", function() {
		  $( "form" ).fadeOut(function() {
				$(".post-submit").parent().fadeIn().removeClass("hidden");
		  });
		  $("form").parent().siblings(".text-center").fadeOut();
	});

})();