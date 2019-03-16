const apiCalls = {
  youtube: e => {

    const ytPlayer = $(`
      <iframe
        id="player"
        type="text/html"
        src="${url}"
        frameborder="0"
      ></iframe>`);

    $('#you-tube-container').html(ytPlayer)
  },
  wikipedia: e => wikiSearch(e.target.id),
  apiNews: e => {
    alert("I've been clicked!");
    apiNewsSearch(e.target.id);
  },
  
};
