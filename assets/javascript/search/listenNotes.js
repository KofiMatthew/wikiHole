function listenNotesSearch() {
	/* const key = prompt('give me ur youtube key');

	const queryURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+ searchTerm + '&key=' + key;
	return new Promise((resolve, reject) => {
		$.ajax({
			url: queryURL,
			method: "GET"
		}).then(response => {
			const randChoice = response.items[Math.floor(Math.random()*response.items.length)];
			const videoId = randChoice.id.videoId;
			const url = 'http://www.youtube.com/embed/' + videoId;

			const ytPlayer = $(`
				<iframe
					id="player"
					type="text/html"
					width="640"
					height="390"
					src="${url}"
					frameborder="0"
				></iframe>`);

			$('#you-tube-container').html(ytPlayer);

			resolve(videoId);
		})
		.catch(err => console.error(err));
	}); */
	};