//timeOut、timeInterval要再調整

var createSlideshow = function(slideshowElem, duration) {
	// TODO: Implement createSlideshow.

	//test1
	/*
	let clock = setInterval(function(){
		slideshowElem.fadeOut();
	}, duration); 
	let clock2 = setInterval(function(){
		slideshowElem.fadeIn();
	}, duration*4);
	*/

	//test2
	/*
	let clock3 = setInterval(function(){
		slideshowElem.fadeToggle();
	}, duration); 
	*/

	//test3
	/*
	slideshowElem.fadeOut(duration);
	let clock4 = setInterval(function(){
		slideshowElem.fadeToggle();
	}, duration);
	 */
	
	//test4
	slideshowElem.fadeOut();
	setInterval(function(){
		slideshowElem.fadeIn();
		setTimeout(function(){ slideshowElem.fadeOut(); }, 3000);
	}, duration)

};


$(document).ready(function() {
	// TODO: Use createSlideshow to create a slideshow on the page.
	const imgArr = [];
	$(".slideshow").children().each(function(){
		imgArr.push(this);
	});
	
	console.log(imgArr);
	console.log(imgArr[0]);
	console.log(imgArr[4]);
	console.log(typeof imgArr); //object
	console.log(typeof imgArr[0]); //object
	console.log(typeof $("img")); //object
	console.log(imgArr.length);
	
	//let timer = 0;
	//let timer = 3000;

	/*
	for (let i = imgArr.length - 1; i >= 0; i--){
		console.log("i:" + i);
		timer += 2500;
		createSlideshow($(imgArr[i]), timer);
		console.log("timer: " + timer);

		//if (i == 0) {
			//i = imgArr.length - 1;
		//}
		//if (timer == 10000) {
			//break;
		//}
	}
	*/

	let clockA = setTimeout(function(){ createSlideshow($(imgArr[4]), 15000); }, 3000);
	let clockB = setTimeout(function(){ createSlideshow($(imgArr[3]), 15000); }, 6000);
	let clockC = setTimeout(function(){ createSlideshow($(imgArr[2]), 15000); }, 9000);
	let clockD = setTimeout(function(){ createSlideshow($(imgArr[1]), 15000); }, 12000);
	//let clockE = setTimeout(function(){ createSlideshow($(imgArr[0]), 12000); }, 15000);

	//setTimeout(function() { $(imgArr[4]).fadeOut(); }, 0);
	//setTimeout(function() { $(imgArr[3]).fadeOut(); }, 3000);

});


