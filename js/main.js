(function(){

	$( ".form-submit button" ).on("click", function() {
	  $("form").hide();
	  $("form").parent().siblings(".text-center").hide();
	  $(".post-submit").parent().removeClass('hidden');
	});

})();