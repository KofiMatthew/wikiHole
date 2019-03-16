const history = [];
const apiCalls = {
  youtube: e => getYouTubeVideo(e.target.id),
  wikipedia: e => wikiSearch(e.target.id),
  listenNotes: e => listenNotesSearch(e.target.id),
  apiNews:e => apiNewsSearch(e.target.id),
};

const keys = {
	youtube: prompt('youtube key, plz'),
	listenNotes: prompt('listenNotes key, plz'),
	apiNews: prompt('apiNews key, plz'),
};

$(document).ready(function() {
	const hideMe = $(".hideMe").hide();

	$("#search-icon").on("click", function(event) {
		hideMe.show();
		event.preventDefault();
		const searchTerm = $("#wikiSearch").val().trim();
		allSearch(searchTerm);
	});
});

// Calls each search API and builds a history object containing
// 	 whatever each API needs to get back to that specific content
async function allSearch(searchTerm) {
	const wikipedia = await wikiSearch(searchTerm);
	const youtube = await youTubeSearch(searchTerm);
  const listenNotes = await listenNotesSearch(searchTerm);
	const apiNews = await apiNewsSearch(searchTerm);
	
	const historyItem = {
		wikipedia,
		youtube,
		listenNotes,
    apiNews,
		searchTerm,
	};

	appendHistory(historyItem);
};

// Displays the contents of the history item
// Also adds to the history array, in case we have time for Firebase
function appendHistory(historyItem) {
	const newHist = $("<ul>").text(history.length + ': ' + historyItem.searchTerm);

	history.push(historyItem);

	// Getting one specific piece of content can vary depending on the API
	// So we select the proper function for doing so from the apiCalls object  
	Object.keys(historyItem).forEach(key => {
		const func = key + 'Call';

		if (key !== 'searchTerm') {
			const element = $("<li>")
				.attr("id", historyItem[key])
				.text(key)
				.click(apiCalls[key]);

			newHist.append(element);
		}
	});

	$("#histList").append(newHist);
};