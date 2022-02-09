//function還未使用、code待簡化

/*
var validateField = function(fieldElem, infoMessage, validateFn) {
	// TODO: Implement validateField.
	fieldElem.keypress(function(){
		$("#test").html(" " + "<span class=\"info\">" + infoMessage + "</span>");
	});
	fieldElem.change(function(){
		//console.log(fieldElem.val());
		console.log(validateFn);
		console.log(typeof validateFn);
		if (validateFn == true){
			//alert("ok");
			$("#test").html(" " + "<span class=\"ok\">OK</span>");
		}else{
			//alert("error");
			$("#test").html(" " + "<span class=\"error\">Error</span>");
		}
	});
};
*/

$(document).ready(function() {
	// TODO: Use validateField to validate form fields on the page.
	//keydown()、keypress()、keyup()待複習

	$("#username").after("<span id=test></span>");
	$("#password").after("<span id=test2></span>");
	$("#email").after("<span id=test3></span>");

	//username
	let fieldElem1 = $("#username");
	let infoMessage1 = "The username field must contain only alphabetical or numeric characters.";
	let letterNumber = /^[0-9a-zA-Z]+$/;
	//let validateFn1 = function(){ (fieldElem1.val().match(letterNumber)) }
	
	fieldElem1.keydown(function(){
		$("#test").html(" " + "<span class=\"info\">" + infoMessage1 + "</span>");
	});

	fieldElem1.change(function(){
		//alert("The text has been changed.");
		console.log(fieldElem1.val());
		console.log(fieldElem1.val().match(letterNumber));
		console.log(typeof fieldElem1.val().match(letterNumber));
		if (fieldElem1.val().match(letterNumber)){
			//alert("ok");
			$("#test").html(" " + "<span class=\"ok\">OK</span>");
		}else{
			//alert("error");
			$("#test").html(" " + "<span class=\"error\">Error</span>");
		}
	});
	//validateField(fieldElem1, infoMessage1, validateFn1);


	//password
	let fieldElem2 = $("#password");
	let infoMessage2 = "The password field should be at least 8 characters long.";
	//let validateFn2 = 0;
	//validateField(fieldElem2, infoMessage2, validateFn2);
	
	fieldElem2.keydown(function(){
		$("#test2").html(" " + "<span class=\"info\">" + infoMessage2 + "</span>");
	});

	fieldElem2.change(function(){
		//alert("The text has been changed.");
		console.log(fieldElem2.val().length);
		if (fieldElem2.val().length >= 8){
			//alert("ok");
			$("#test2").html(" " + "<span class=\"ok\">OK</span>");
		}else{
			//alert("error");
			$("#test2").html(" " + "<span class=\"error\">Error</span>");
		}
	});


	//email
	let fieldElem3 = $("#email");
	let infoMessage3 = "The email address field should contain a @ character.";
	//let validateFn3 = 0;
	//validateField(fieldElem3, infoMessage3, validateFn3);

	fieldElem3.keydown(function(){
		$("#test3").html(" " + "<span class=\"info\">" + infoMessage3 + "</span>");
	});

	fieldElem3.change(function(){
		//alert("The text has been changed.");
		if (fieldElem3.val().includes("@")){
			//alert("ok");
			$("#test3").html(" " + "<span class=\"ok\">OK</span>");
		}else{
			//alert("error");
			$("#test3").html(" " + "<span class=\"error\">Error</span>");
		}
	});
	
	
	//console.log($("input").attr("name"));
	//console.log($("#username").val());
});
