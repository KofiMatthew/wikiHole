function listenNotesSearch(searchTerm) {
	const url = 'https://listennotes.p.rapidapi.com/api/v1/search?sort_by_date=0&type=episode&offset=0&len_min=1&len_max=10&language=English&safe_mode=1&q=' + searchTerm;
	const key = prompt('gimme listennoteskey')
	return new Promise((resolve, reject) => {
		fetch(url, {
	    method: "GET",
	    headers: {
	      "X-RapidAPI-Key":key
	    }
	  })
	  	.then(res => res.json())
	    .then(jsonData => {
	    	const results = jsonData.results;
	    	const randomInt = Math.floor(Math.random() * results.length);
	    	const podcast = results[randomInt];
	    	console.log(podcast)

	    	addListenNotesPlayer(podcast);
	    	resolve(podcast.id);
	    })
	    .catch(err => console.error(err));
	  });
}

function addListenNotesPlayer(podcast) {
	const mp3Url = podcast.audio;
	const description = podcast.description_highlighted;
	const explicit = podcast.explicit;

	const player = `
	<div class="row">
		<div class="col-3-lg">
			<img src="${podcast.image}" width="100%" />
		</div>
		<div class="col-9-lg text-center">
			<audio controls>
			  <source src="${mp3Url}" type="audio/mpeg">
			  Your browser does not support the audio tag.
			</audio>
		</div>
	</div>
	<strong>${podcast.title_highlighted}</strong>
	<br />${podcast.description_highlighted}
	`;

	//if explicit append explicit notice

	$('#listen-notes-container').html(player);
}