const apiKey = "AIzaSyDvo2p4xMEI3GC-PWH02_0OAIN1h88k4rE";
const baseUrl = "https://www.googleapis.com/youtube/v3";

const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");
const container = document.getElementById("container");

function calculateTheTimeGap(publishTime) {
  let publishDate = new Date(publishTime);
  let currentDate = new Date();

  let secondsGap = (currentDate.getTime() - publishDate.getTime()) / 1000;

  const secondsPerDay = 24 * 60 * 60;
  const secondsPerWeek = 7 * secondsPerDay;
  const secondsPerMonth = 30 * secondsPerDay;
  const secondsPerYear = 365 * secondsPerDay;

  if (secondsGap < secondsPerDay) {
    return `${Math.ceil(secondsGap / (60 * 60))}hrs ago`;
  }
  if (secondsGap < secondsPerWeek) {
    return `${Math.ceil(secondsGap / secondsPerWeek)} weeks ago`;
  }
  if (secondsGap < secondsPerMonth) {
    return `${Math.ceil(secondsGap / secondsPerMonth)} months ago`;
  }

  return `${Math.ceil(secondsGap / secondsPerYear)} years ago`;
}

function navigateToVideoDetails(videoId) {
  document.cookie = `id=${videoId}; path=/youtube-clone/play-video.html`;
  window.location.href = "http://127.0.0.1:5500/youtube-clone/play-video.html";
}

function renderVideosOntoUI(videosList) {
  // videosList will be an array of video objects.
  container.innerHTML = "";
  videosList.forEach((video) => {
    const videoContainer = document.createElement("div");
    videoContainer.className = "video";
    videoContainer.innerHTML = `
        <img
            src="${video.snippet.thumbnails.high.url}"
            class="thumbnail"
            alt="thumbnail"
        />
        <div class="bottom-container">
            <div class="logo-container">
            <img class="logo" src="${video.channelLogo}" alt="Channel Logo" />
            </div>
            <div class="title-container">
            <p class="title">
                ${video.snippet.title}
            </p>
            <p class="gray-text">${video.snippet.channelTitle}</p>
            <p class="gray-text">${
              video.statistics.viewCount
            } . ${calculateTheTimeGap(video.snippet.publishTime)}</p>
            </div>
        </div>`;

    videoContainer.addEventListener("click", () => {
      navigateToVideoDetails(video.id.videoId);
    });

    container.appendChild(videoContainer);
  });
}

async function fetchChannelLogo(channelId) {
  const endpoint = `${baseUrl}/channels?key=${apiKey}&id=${channelId}&part=snippet`;

  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    return result.items[0].snippet.thumbnails.high.url;
  } catch (error) {
    alert("Failed to load channel logo for ", channelId);
  }
}
/**
 * this will take videoId and returns the statics of the video.
 */
async function getVideoStatistics(videoId) {
  // https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDvo2p4xMEI3GC-PWH02_0OAIN1h88k4rE&part=statistics
  const endpoint = `${baseUrl}/videos?key=${apiKey}&part=statistics&id=${videoId}`;
  try {
    const response = await fetch(endpoint);
    const result = await response.json();
    return result.items[0].statistics;
  } catch (error) {
    alert("Failed to fetch Statistics for ", videoId);
  }
}

/**
 *  <div class="video">
        <img
          src="https://picsum.photos/200/300"
          class="thumbnail"
          alt="thumbnail"
        />
        <div class="bottom-container">
          <div class="logo-container">
            <img class="logo" src="https://picsum.photos/40/40" alt="" />
          </div>
          <div class="title-container">
            <p class="title">
              Lorem ipsum dolor sit amet, consecte adipiscing elit.
            </p>
            <p class="gray-text">James Gouse</p>
            <p class="gray-text">15K Views . 1 week ago</p>
          </div>
        </div>
      </div>
 */

async function fetchSearchResults(searchString) {
  // searchString will the input entered by the user
  const endpoint = `${baseUrl}/search?key=${apiKey}&q=${searchString}&part=snippet&maxResults=5`;
  try {
    const response = await fetch(endpoint);
    const result = await response.json();

    for (let i = 0; i < result.items.length; i++) {
      let videoId = result.items[i].id.videoId;
      let channelId = result.items[i].snippet.channelId;

      let statistics = await getVideoStatistics(videoId);
      let channelLogo = await fetchChannelLogo(channelId);

      result.items[i].statistics = statistics;
      result.items[i].channelLogo = channelLogo;
    }

    renderVideosOntoUI(result.items); // 2
  } catch (error) {
    alert("Some error occured");
  }
}

//  {
//     "kind": "youtube#searchResult",
//     "etag": "Dn_HjQZj7iXCRkRlNQXL3xxXTxE",
//     "id": {
//         "kind": "youtube#video",
//         "videoId": "_O_9HUZvJK4"
//     },
//     "snippet": {
//         "publishedAt": "2023-07-31T13:18:46Z",
//         "channelId": "UCJsApDpIBPpRRg0n9ZVmKAQ",
//         "title": "Weather obsession of Bangalore people📈🤣 #shorts #ahmedmasood #bangalore #ytshorts",
//         "description": "",
//         "thumbnails": {
//             "default": {
//                 "url": "https://i.ytimg.com/vi/_O_9HUZvJK4/default.jpg",
//                 "width": 120,
//                 "height": 90
//             },
//             "medium": {
//                 "url": "https://i.ytimg.com/vi/_O_9HUZvJK4/mqdefault.jpg",
//                 "width": 320,
//                 "height": 180
//             },
//             "high": {
//                 "url": "https://i.ytimg.com/vi/_O_9HUZvJK4/hqdefault.jpg",
//                 "width": 480,
//                 "height": 360
//             }
//         },
//         "channelTitle": "Ahmed Masood",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-07-31T13:18:46Z"
//     },
//     "statistics" :
// }
searchButton.addEventListener("click", () => {
  const searchValue = searchInput.value;
  fetchSearchResults(searchValue);
});
