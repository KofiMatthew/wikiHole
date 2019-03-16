function youTubeSearch(searchTerm) {
	const queryURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+ searchTerm + '&key=' + keys.youtube;
	
	return new Promise((resolve, reject) => {

		fetch(queryURL, { method: "GET" })
	  	.then(res => res.json())
			.then(jsonData => {
			const randChoice = jsonData.items[Math.floor(Math.random()*jsonData.items.length)];
			const videoId = randChoice.id.videoId;
	    
	    getYouTubeVideo(videoId);
			resolve(videoId);
		})
		.catch(err => console.error(err));
	});
};

function getYouTubeVideo(videoId) {
	const url = 'https://www.youtube.com/embed/' + videoId;

  const ytPlayer = $(`
    <iframe
      id="player"
      type="text/html"
      width="640"
      height="390"
      src="${url}"
      frameborder="0"
    ></iframe>`);

  $('#you-tube-container').html(ytPlayer)
}