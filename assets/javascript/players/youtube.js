function newYTVideo(videoId) {
  const url = 'http://www.youtube.com/embed/' + videoId;
  const ytPlayer = $(`
    <iframe
      id="player"
      type="text/html"
      width="640"
      height="390"
      src="${url}"
      frameborder="0"
    ></iframe>`);

  $('#you-tube-container').html(ytPlayer) 
}