var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      type: 'video',
      key: options.key,
      q: options.query,
      maxResults: options.max
    },
    success: function (response) {
      console.log("response is",response.items);
      callback(response.items);
    }
  });
  // TODO
};

window.searchYouTube = searchYouTube;



// $('.form-control').text() + '&format=5'