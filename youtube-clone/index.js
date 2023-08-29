/**
 * Create a Project
 *
 * Click on APIs & Services
 *
 * Go to Credentials Section on the left
 *
 * Click On create Credentials at the top and choose API Key
 *
 * Generate the API Key and copy and save it somewhere
 *
 * Above Credentials on the left click on library and search for youtube api v3
 *
 * enable
 *
 */

const apiKey = "add_your_api_key";

const url = "https://www.googleapis.com/youtube/v3/search";

async function fetchVideos() {
  const searchQuery = "Rahul Gandhi";
  const response = await fetch(
    `${url}?key=${apiKey}&q=${searchQuery}&part=snippet&maxResults=20`
  );
  const result = await response.json();
  result.items.forEach((videoItem) => {
    console.log(videoItem.snippet.description);
  });
}

fetchVideos();
// Search API
