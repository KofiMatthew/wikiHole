const apiCalls = {
  youtube: e => {

console.log(url)
    const ytPlayer = $(`
      <iframe
        id="player"
        type="text/html"
        src="${url}"
        frameborder="0"
      ></iframe>`);

    $('#youtube-video').html(ytPlayer)
  },
  wikipedia: e => wikiSearch(e.target.id),
};