function apiNewsSearch(searchTerm) {
	/* const key = 'enter key here' */
	const key = prompt('gimme apiNews key');
	console.log(searchTerm);
    const queryURL = 'https://newsapi.org/v2/everything?' + 'q=' + searchTerm + '&sortBy=relevancy&' + 'apiKey=' + key;
		console.log(queryURL);

	//function to call apiNews and process response
	return new Promise ((resolve, reject) =>{
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.then(function(response) {
			const randChoice = response.articles[Math.floor(Math.random()*response.articles.length)];
			const Article = $('<div>')
				.attr("id", "newsPara");
			const title = $('<p>')
				.text(randChoice.title)
				.attr("id", "newsTitle");
			const para = $('<p>')
				.text(randChoice.content);	
			const source = $('<p>')
				.text(randChoice.source.name);
			const pub = (randChoice.publishedAt).substring(0, 10);
			const pubdate = $('<p>')
				.text(pub);
			const newsUrl = randChoice.url
			const link = $('<a id = "goToNews">')
				.text('go to article')
				.attr('href', newsUrl)
				.attr('target', '_blank');

			Article
				.append(title, para, link, source, pubdate)
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
			$('#apiNews-container').html(Article);
		
		resolve(searchTerm);
	})
	.catch(err => console.error(err));
	});   
};