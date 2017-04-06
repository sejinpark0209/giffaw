


$(document).on("ready", function(){
	//Sample Response, Trending, use for loop to print out 25 top images on the page

	$.ajax({
		method: "GET",
		url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
		dataType: "Json",
		success: onSuccess,
		data: $('form').serialize()
	})

	function onSuccess(response) {
		for(var i = 0; i < 25; i++) {
			$('.gif-gallery').append('response.data[i].type.url')
		}
		// for(var i = 0; i < .data[i].type.image.fixed_height.url; i++) {
		// 	console.log(data[i].type.image.fixed_height.url);
	}


	$.ajax({
		method: "GET",
		url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
		dataType: "Json",
		success: findImage,
		data: $('form').serialize()
	})
	function findImage(response) {
		for(var i = 0; i < 9; i++) {
			$('.gif-gallery').attr("src", response.data[i].type.url)
		}

	}
});