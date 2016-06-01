$(document).ready(function() {
	$(".add-film-form").submit(function(event) {
		event.preventDefault()
		var data = $(this).serialize();
		// $.post('https://mighty-eyrie-15280.herokuapp.com/films', data, function(data, textStatus, xhr) {
		// 	console.log(data);
		// 	/*optional stuff to do after success */
		// 	$("#results").append(data.message);
		// });
		$.ajax({
			url: 'https://mighty-eyrie-15280.herokuapp.com/films',
			type: 'POST',
			dataType: 'json',
			data: data
		})
		.done(function(data) {
			console.log("success");
			$("#results").append(data.message);
		})
		.fail(function(error) {
			var msg = JSON.parse(error.responseText).message;
			$("#results").append(msg);
		})
		.always(function() {
			console.log("complete");
		});
	});
});
