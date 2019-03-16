function listenNotesSearch(searchTerm) {
	const url = 'https://listennotes.p.rapidapi.com/api/v1/search?sort_by_date=0&type=episode&offset=0&len_min=1&len_max=10&language=English&safe_mode=1&q=' + searchTerm;

	return new Promise((resolve, reject) => {
		fetch(url, {
	    method: "GET",
	    headers: {
	      "X-RapidAPI-Key":keys.listenNotes
	    }
	  })
	  	.then(res => res.json())
	    .then(jsonData => {
	    	const results = jsonData.results;
	    	const randomInt = Math.floor(Math.random() * results.length);
	    	const podcast = results[randomInt];

	    	addListenNotesPlayer(podcast);

	    	// AFAIK, can't look up by ID
	    	// So resolve with title to use as search term when clicking history
	    	resolve(podcast.title_original);
	    })
	    .catch(err => {console.error(err)});
	  });
}

function addListenNotesPlayer(podcast) {
	const player = `
		<div class="row">
			<div class="col-3">
				<img src="${podcast.image}" style="width:100%;" />
			</div>
			<div class="col-9" style="color:white;">
				<strong>${podcast.title_original}</strong>
				<br />${podcast.description_highlighted}
			</div>
		</div>
		<audio controls style="width:100%;">
		  <source src="${podcast.audio}" type="audio/mpeg">
		  Your browser does not support the audio tag.
		</audio>
		<br />
		<img src="./assets/Images/listennoteslogo.png" />
		<br /><br /><br />
	`;

	$('#listen-notes-container').html(player);
}