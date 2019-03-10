
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
	youTubeSearch(searchTerm);
};

function youTubeSearch(searchTerm) {
	const queryURL = '';
	callYoutube(queryURL)
		.then(response => {
			response = JSON.parse(response);
			
			newYTVideo('r3BO6GP9NMY');
		})
		.catch(err => console.error(err));
}

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
					alert("you clicked me!", searchTerm)

					if (searchTerm) allSearch(searchTerm);

					e.stopPropagation();
				});

			$("#wikiPara").append(wikiPara);
			$("#wikiTitle").text(response[0]);
		})
		.catch(err => console.error(err));    
};
