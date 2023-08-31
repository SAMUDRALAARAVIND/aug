const container = document.getElementById("container");
const apiKey = "AIzaSyDvo2p4xMEI3GC-PWH02_0OAIN1h88k4rE";
const url = "https://www.googleapis.com/youtube/v3/commentThreads";
/*
Whenever we make network call we will receive 
let promise = fetch(url);


A promise object can be handled in two ways 

1. Using .then and .catch ( promise chaining ) 
2. async / await 

*/

// function loadComments() {
//   let videoId = "_OP1tS88kbg";
//   const prom = fetch(
//     `${url}?key=${apiKey}&videoId=${videoId}&maxResults=3&part=snippet`
//   );

//   prom.then((response) => {
//     let p = response.json(); // json method returns a promise which will collect all the packets of data.
//     // p is going to be fulfilled when all the packets of data are received
//     p.then((data) => {
//       data.items.forEach((item) => {
//         // console.log(item);
//         // const authorName =
//         //   item.snippet.topLevelComment.snippet.authorDisplayName;
//         //   const commentText = item.snippet.topLevelComment.snippet.textDisplay;
//         //   const likeCount = item.snippet.topLevelComment.snippet.likeCount;
//         const repliesCount = item.snippet.totalReplyCount;
//         //   const profileUrl = item.snippet.topLevelComment.snippet.authorProfileImageUrl ;
//         //   const publishedTime  = item.snippet.topLevelComment.snippet.publishedAt;

//         const {
//           authorDisplayName,
//           textDisplay,
//           likeCount,
//           authorProfileImageUrl: profileUrl,
//           publishedAt,
//         } = item.snippet.topLevelComment.snippet;
//       });
//     });
//   });
// }

/**
 * {
    "kind": "youtube#commentThread",
    "etag": "QP70epVZ3WpqFcmnj1KoP5_vrOI",
    "id": "UgzPKgVIOXBr9ruXAbF4AaABAg",
    "snippet": {
        "channelId": "UCY6KjrDBN_tIRFT_QNqQbRQ",
        "videoId": "_OP1tS88kbg",
        "topLevelComment": {
            "kind": "youtube#comment",
            "etag": "8XhI6kK2aMDCYxTZHj1vljTCfK4",
            "id": "UgzPKgVIOXBr9ruXAbF4AaABAg",
            "snippet": {
                "channelId": "UCY6KjrDBN_tIRFT_QNqQbRQ",
                "videoId": "_OP1tS88kbg",
                "textDisplay": "What do you want to say to your future Moon Kids!? 😅",
                "textOriginal": "What do you want to say to your future Moon Kids!? 😅",
                "authorDisplayName": "Madan Gowri",
                "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AOPolaQepsauS4EWVO_uCnNgKzfEJrFiezWM0IFI8rAJU0s=s48-c-k-c0x00ffffff-no-rj",
                "authorChannelUrl": "http://www.youtube.com/channel/UCY6KjrDBN_tIRFT_QNqQbRQ",
                "authorChannelId": {
                    "value": "UCY6KjrDBN_tIRFT_QNqQbRQ"
                },
                "canRate": true,
                "viewerRating": "none",
                "likeCount": 511,
                "publishedAt": "2023-08-29T16:16:53Z",
                "updatedAt": "2023-08-29T16:16:53Z"
            }
        },
        "canReply": true,
        "totalReplyCount": 103,
        "isPublic": true
    }
}
 */

// loadComments();

// async function loadComments() {
//   let videoId = "_OP1tS88kbg";
//   let endpoint = `${url}?key=${apiKey}&videoId=${videoId}&maxResults=3&part=snippet`;

//   const response = await fetch(endpoint);
//   const result = await response.json();

//   result.items.forEach((item) => {
//     const repliesCount = item.snippet.totalReplyCount;
//     const {
//       authorDisplayName,
//       textDisplay,
//       likeCount,
//       authorProfileImageUrl: profileUrl,
//       publishedAt,
//     } = item.snippet.topLevelComment.snippet;

//     console.log(authorDisplayName);
//   });
// }

// loadComments();
