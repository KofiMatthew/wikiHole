function wikiSearch(searchTerm) {    
	const queryURL = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&uselang=user&errorformat=plaintext&search=' + searchTerm + '&callback=?';

	return new Promise((resolve, reject) => {
		$.getJSON(queryURL).then(response => {
			const title = response[0];
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
			$("#wikiTitle").text(title);

			resolve(searchTerm);
		})
		.catch(err => console.error(err));    
	});
};