const history = [];
const apiCalls = {
  youtube: e => getYouTubeVideo(e.target.id),
  wikipedia: e => wikiSearch(e.target.id),
};

const hideMe = $(".hideMe");
hideMe.hide();

$(document).ready(function() {
	// search button click handler
	$("#search-icon").on("click", function(event) {
		hideMe.show();
		event.preventDefault();
		const searchTerm = $("#wikiSearch").val().trim();
		allSearch(searchTerm);
	});
});

// calls each search API and builds a history object
async function allSearch(searchTerm) {
	const wikipedia = await wikiSearch(searchTerm);
	const youtube = await youTubeSearch(searchTerm);
	const listenNotes = await listenNotesSearch(searchTerm);
	const historyObj = {
		wikipedia,
		youtube,
		listenNotes,
		searchTerm,
	};

	appendHistory(historyObj);
};

function appendHistory(historyObj) {
	const newHist = $("<ul>").text(history.length + ': ' + historyObj.searchTerm);

	history.push(historyObj);

	Object.keys(historyObj).forEach(key => {
		const func = key + 'Call';
		if (key !== 'searchTerm') {
			const element = $("<li>")
				.attr("id", historyObj[key])
				.text(key)
				.click(apiCalls[key]);

			newHist.append(element);
		}
	});
	console.log(newHist);

	$("#histList").append(newHist);
};

/* THIS DOESN"T WORK
$('#wikiSearch').keyup(function() {
	const value = this.value;
	console.log(value[value.length - 1])
	if (this.key === 13) {
		console.log('sdkhdskjdhfd')
		event
		const searchTerm = $("#wikiSearch").val().trim();
		//alert(searchTerm)
		//allSearch(searchTerm);
	}
})
*/