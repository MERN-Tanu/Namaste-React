const GOOGLE_API_KEY = "AIzaSyA8moyYFF5reXaQlqWu2WSuYtgLgDg1qkw";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// const G_API_KEY = "AIzaSyCMN7WeMsuMsdU7B29ZIR2QfYdsitJTD2Y";
// export const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&&maxResults=100&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key=${GOOGLE_API_KEY}`;
//   "https://youtube.googleapis.com/youtube/v3/commentThreads?key=" + G_API_KEY;

// export const COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&maxResults=100&${channelId}=${GOOGLE_API_KEY}`;

export const getCommentAPIURL = (videoId) => {
  return `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=100&videoId=${videoId}&key=${GOOGLE_API_KEY}`;
};

export const getplaylistIdAPIURL = (videoId) => {
  return `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${GOOGLE_API_KEY}`;
};

export const OFFSET_LIVE_SET = 10;
