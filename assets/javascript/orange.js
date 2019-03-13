const history = [];

$(document).ready(function() {
	// search button click handler
	$("#search-icon").on("click", function(event) {
		event.preventDefault();
		const searchTerm = $("#wikiSearch").val().trim();
		allSearch(searchTerm);
	});
});

// calls each search API and builds a history object
async function allSearch(searchTerm) {
	const wikipedia = await wikiSearch(searchTerm);
	const youtube = await youTubeSearch(searchTerm);
	const historyObj = {
		wikipedia,
		youtube,
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

	$("#histList").append(newHist);
};

// THIS DOESN"T WORK
$('wikiSearch').keyup(() => {
	if (this.key === 13) {
		event.preventDefault();
		const searchTerm = $("#wikiSearch").val().trim();
		allSearch(searchTerm);
	}
})
