var counter = 0;

$(document).ready(function() {
	// search button click handler
	$("#search-icon").on("click", function(event) {
		event.preventDefault();
		const searchTerm = $("#wikiSearch").val().trim();
		allSearch(searchTerm);
	});
});

// calls each search API
function allSearch(searchTerm) {
	wikiSearch(searchTerm);
	
	//make sure youTube is the last one called because it calls the history function
	youTubeSearch(searchTerm);
};

function youTubeSearch(searchTerm) {
	const key = '987654321abcde';
	const queryURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='+ searchTerm + '&key=' + key;
	callYoutube(queryURL)
	// replace youTubeSearch() with the AJAX method below
	/* $.ajax({
			url: queryURL,
			method: "GET"
		}).then(response => {})
	*/		.then(response => {
			response = JSON.parse(response);
			const randChoice = response.items[Math.floor(Math.random()*response.items.length)];
			const videoId = randChoice.id.videoId;
			newYTVideo(videoId);
			history(videoId, searchTerm);
		})
		.catch(err => console.error(err));
};

// Wikipedia search
function wikiSearch(searchTerm) {    
	const queryURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&uselang=user&errorformat=plaintext&search=' + searchTerm;

	// replace callWikipedia() with the AJAX method below
	/* $.ajax({
			url: queryURL,
			method: "GET"
		}).then(response => {})
	*/
	callWikipedia(queryURL)
		.then(response => {
			response = JSON.parse(response);
			
			const wikiPara = $("<p id='wikiParagraph'>")
				.append(response[2])
				.css({ cursor: "pointer" })
				.dblclick(e => {
					const range =
						window.getSelection() ||
						document.getSelection() ||
						document.selection.createRange();
					
					const searchTerm = $.trim(range.toString());
					if (searchTerm) allSearch(searchTerm);
					e.stopPropagation();
				});

			$("#wikiPara").html(wikiPara);
			$("#wikiTitle").text(response[0]);
		})
		.catch(err => console.error(err));    
};

function history(videoId, searchTerm) {
	counter++;
	const newHist = $("<ul>")
		.text(counter);
	const videoLink = $("<li>")
		.addClass('histLink')
		.attr("data", videoId)
		.text(searchTerm);
	newHist.append(videoLink);
	$("#histList").append(newHist);
};

var displayHistItem = function() {
	const videoId = $(this).attr("data");
	newYTVideo(videoId);
};

$(document).on("click", ".histLink", displayHistItem);

	

