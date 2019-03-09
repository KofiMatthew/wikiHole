function callYoutube(url) {
  const baseUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10';
  const query = '&q=';
  const key = '&key=';

  return new Promise((resolve, reject) => {
    !url
      ? reject('need to give callYoutube a URL')
      : typeof url !== 'string'
      ? reject('callYoutube URL must be a string')
      : url.slice(0, baseUrl.length) !== baseUrl
      ? reject('something is missing in the youtube URL')
      : url.indexOf(query) === -1
      ? reject('the search query part of your youtube URL is broken')
      : url.indexOf(key) === -1
      ? reject('the API key part of your youtube URL is broken')
      : query.length + url.indexOf(query) === url.indexOf(key)
        || key.length + url.indexOf(key) === url.indexOf(query)
        || url.slice(-1) === '='
      ? reject('need a youtube search term and an API key')
      : !/^(ftp|http|https):\/\/[^ "]+$/.test(url)
      ? reject('invalid youtube URL; some characters that don\'t belong')
      : setTimeout(() => resolve(JSON.stringify(youtubeMockData)), 250);
  });
};


/*
// testing
const hello = 'yay you did it'

callYoutube('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10')
  .then((result) => console.log(result))
  .catch((err) => console.error(err));
*/

const youtubeMockData = {
 "kind": "youtube#searchListResponse",
 "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/xylkJ9ko8KExIxrlg_9s0_MKsBI\"",
 "nextPageToken": "CAoQAA",
 "regionCode": "US",
 "pageInfo": {
  "totalResults": 1000000,
  "resultsPerPage": 10
 },
 "items": [
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/cWwZjY8Py3pBRvZn5_6jgIV9m7w\"",
   "id": {
    "kind": "youtube#channel",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw"
   },
   "snippet": {
    "publishedAt": "2016-03-01T23:06:33.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "Complex",
    "description": "COMPLEX is a community of creators and curators, armed with the Internet, committed to surfacing and sharing the voices and conversations that define our new ...",
    "thumbnails": {
     "default": {
      "url": "https://yt3.ggpht.com/-wFBSus4fnCU/AAAAAAAAAAI/AAAAAAAAAAA/getgwWzNqJ8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
     },
     "medium": {
      "url": "https://yt3.ggpht.com/-wFBSus4fnCU/AAAAAAAAAAI/AAAAAAAAAAA/getgwWzNqJ8/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
     },
     "high": {
      "url": "https://yt3.ggpht.com/-wFBSus4fnCU/AAAAAAAAAAI/AAAAAAAAAAA/getgwWzNqJ8/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "upcoming"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/JSeLvhE5eTDUtT1RotT7kFxxPiw\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "EvdzQdnZPcw"
   },
   "snippet": {
    "publishedAt": "2019-03-04T15:00:04.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "Billie Eilish Goes Sneaker Shopping With Complex",
    "description": "Billie Eilish goes Sneaker Shopping at Stadium Goods in New York City and talks about how Riff Raff's music got her into Jordans, potentially working with ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/EvdzQdnZPcw/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/EvdzQdnZPcw/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/EvdzQdnZPcw/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/XQ_Bg8Hw81JqV7sHrrKebXsIUsc\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "hlQpxSLlDmI"
   },
   "snippet": {
    "publishedAt": "2019-03-07T16:30:00.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "R. Kelly&#39;s Girlfriends Defend Him, Can Rap Moguls Pool Money to Buy Sports Team? | Everyday Struggle",
    "description": "On Thursday's (March 7) episode of #EverydayStruggle, Nadeska, Wayno and DJ Akademiks kick off the show recapping R.Kelly's bizarre interview from ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/hlQpxSLlDmI/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/hlQpxSLlDmI/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/hlQpxSLlDmI/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/brEf_jZYVjJ3xZSFIUFVMA1XuFE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "UVMCPg4uKyw"
   },
   "snippet": {
    "publishedAt": "2019-03-06T16:31:46.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "R Kelly Cries Big Tears and Claims to Be Innocent, Lil Skies Heat Check | Everyday Struggle",
    "description": "On Wednesday's (March 6) episode of #EverydayStruggle, Nadeska, Wayno and DJ Akademiks kick off the show discussing R. Kelly's very first interview since ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/UVMCPg4uKyw/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/UVMCPg4uKyw/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/UVMCPg4uKyw/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/NNQdukwl1p30zPpn39yURgbrTZc\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "hmOzHFkvZNQ"
   },
   "snippet": {
    "publishedAt": "2019-03-06T18:00:11.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "Complex Summer 2019 Internship | #LIFEATCOMPLEX",
    "description": "On this episode our NFL intern, Brandon Bell, shares what he has learned during his two week internship with Complex. Later on Arman lets the viewers know ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/hmOzHFkvZNQ/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/hmOzHFkvZNQ/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/hmOzHFkvZNQ/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/uuLn-ThAToUArEoC5yBEVYo7rW8\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "K5A238it4Rg"
   },
   "snippet": {
    "publishedAt": "2019-02-18T15:02:05.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "Lil Pump Goes Sneaker Shopping With Complex",
    "description": "Lil Pump goes Sneaker Shopping with Complex's Joe La Puma at Flight Club in Los Angeles and talks about burning his producer's sneakers, how Smokepurpp ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/K5A238it4Rg/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/K5A238it4Rg/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/K5A238it4Rg/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/yEb8VgAkQV8uoQ1QYoJSDmvKBiE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "FnQLeRtNXXY"
   },
   "snippet": {
    "publishedAt": "2019-02-25T15:00:02.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "Chris D&#39;Elia Goes Sneaker Shopping With Complex",
    "description": "Comedian Chris D'Elia goes Sneaker Shopping with Complex's Joe La Puma at Flight Club in Los Angeles and hilariously talks about the sizing on Yeezys, the ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/FnQLeRtNXXY/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/FnQLeRtNXXY/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/FnQLeRtNXXY/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/5oEXzAFmHb8QIO8mX2EZrM0zEeQ\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "ajTuRQtm-eo"
   },
   "snippet": {
    "publishedAt": "2019-01-28T15:00:00.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "Future Goes Sneaker Shopping With Complex",
    "description": "Future goes Sneaker Shopping with Complex's Joe La Puma at Barney's New York in New York City and talks about his Reebok deal, doing \"Jumpman\" with ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/ajTuRQtm-eo/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/ajTuRQtm-eo/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/ajTuRQtm-eo/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/QyaplLgK69hwBGJ0Fek-OkZ5_HQ\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "ydICElkIN-8"
   },
   "snippet": {
    "publishedAt": "2019-01-21T15:00:12.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "YBN Cordae Goes Sneaker Shopping With Complex",
    "description": "YBN Cordae goes Sneaker Shopping at Flight Club in Los Angeles with Complex's Joe La Puma and flexes serious sneaker knowledge, while talking about ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/ydICElkIN-8/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/ydICElkIN-8/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/ydICElkIN-8/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  },
  {
   "kind": "youtube#searchResult",
   "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/R9palWyRo8MbJDv2XMM43ZPXNmE\"",
   "id": {
    "kind": "youtube#video",
    "videoId": "Q1Yd8BwKSyU"
   },
   "snippet": {
    "publishedAt": "2019-03-05T16:30:01.000Z",
    "channelId": "UCE_--R1P5-kfBzHTca0dsnw",
    "title": "DaBaby Album Review, Kodak &amp; Lil Wayne, Lil C-Note Facing Absurd Felony Charge | Everyday Struggle",
    "description": "On Tuesday's (March 5) episode of #EverydayStruggle, Nadeska, Wayno and DJ Akademiks open the show sharing their thoughts on DaBaby's first major ...",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/Q1Yd8BwKSyU/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/Q1Yd8BwKSyU/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/Q1Yd8BwKSyU/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "Complex",
    "liveBroadcastContent": "none"
   }
  }
 ]
}