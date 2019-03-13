const apiCalls = {
  youtube: e => {

console.log(url)
    const ytPlayer = $(`
      <iframe
        id="player"
        type="text/html"
        width="640"
        height="390"
        src="${url}"
        frameborder="0"
      ></iframe>`);

    $('#youtube-video').html(ytPlayer)
  },
  wikipedia: e => wikiSearch(e.target.id),
};