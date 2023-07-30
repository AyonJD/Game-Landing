import { useEffect, useRef } from "react";

const InfiniteVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    // Function to loop the video when it ends
    const handleVideoEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    // Add an event listener to loop the video when it ends
    video.addEventListener('ended', handleVideoEnded);

    // Clean up the event listener when the component unmounts
    return () => {
      video.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      style={{ width: '100%', height: 'auto' }}
    >
      <source src="/game.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
};

export default InfiniteVideo;
