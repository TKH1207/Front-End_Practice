var createAccordian = function(accordianElem) {
	// TODO: Implement createAccordian.

};

$(document).ready(function() {
	// TODO: Use createAccordian to made the FAQ page expandable and collapsible.
	$("p").slideUp();
	$("a").click(function(){
		$(this).next().slideToggle();
	});
});
