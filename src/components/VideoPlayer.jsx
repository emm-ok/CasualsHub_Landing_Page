import { useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoPlayer = ({ youtubeUrl, thumbnail }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const getEmbedUrl = (url) => {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&showinfo=0&modestbranding=1`;
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 my-12">
      <div
        className={`relative w-full rounded-xl overflow-hidden transition-transform duration-700 ${
          isPlaying ? "scale-105 h-[50vh] sm:h-[60vh]" : "h-[300px] sm:h-[400px]"
        }`}
        style={{ transformOrigin: "center" }}
      >
        {isPlaying ? (
          <iframe
            src={getEmbedUrl(youtubeUrl)}
            title="YouTube video"
            className="w-full h-full rounded-xl"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="w-full h-full cursor-pointer relative group"
          >
            <img
              src={thumbnail}
              alt="Video thumbnail"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-ping absolute h-20 w-20 rounded-full bg-white opacity-75" />
              <div className="relative z-10 flex items-center justify-center bg-white rounded-full w-16 h-16 shadow-lg hover:scale-110 transition-transform">
                <FaPlay className="text-xl text-black ml-1" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
