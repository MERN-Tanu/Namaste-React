import Comments from "./Comments";

const VideoCards = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  //   console.log("info", info);
  return (
    <div className="p-2 m-7 w-72 shadow-lg ">
      <img alt="thumbnail" className="rounded-lg" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCards info={info} />
    </div>
  );
};

export default VideoCards;
