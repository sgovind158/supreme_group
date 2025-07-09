"use client"
import React, { useEffect, useState } from 'react';

interface ShowVideoProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const CIRCLE_LENGTH = 2 * Math.PI * 23; // 2πr, r=23

const ShowVideo: React.FC<ShowVideoProps> = ({ videoRef }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const updateProgress = () => {
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * CIRCLE_LENGTH);
    }
  };

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);

  video.addEventListener('timeupdate', updateProgress);
  video.addEventListener('play', handlePlay);
  video.addEventListener('pause', handlePause);

  return () => {
    video.removeEventListener('timeupdate', updateProgress);
    video.removeEventListener('play', handlePlay);
    video.removeEventListener('pause', handlePause);
  };
}, [videoRef]);

const handlePlayPause = () => {
  const video = videoRef.current;
  if (!video) return;
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

  return (
    <div
      className="video-control-1 absolute right-0 top-0 bottom-0 my-auto z-50 flex items-center"
      style={{
        translate: "none",
        rotate: "none",
        scale: "none",
        opacity: 1,
        transform: "translate(0px, 0px)"
      }}
    >
    <div className="relative inline-block z-50">
      {/* Play/Pause Button */}
      <button
        type="button"
        className="p-3 2xl:p-4 rounded-full z-10 relative"
        onClick={handlePlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? (
          // Pause icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2m6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2"
            />
          </svg>
        ) : (
          // Play icon
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 12 12">
            <path
              fill="currentColor"
              d="M4.496 1.994A1 1 0 0 0 3 2.862v6.277a1 1 0 0 0 1.496.868l5.492-3.139a1 1 0 0 0 0-1.736z"
            />
          </svg>
        )}
      </button>

      {/* Circular Progress */}
      <svg
        className="absolute top-0 left-0 z-0"
        width="100%"
        height="100%"
        viewBox="0 0 48 48"
        style={{ transform: "rotate(-90deg)" }}
      >
        {/* Background circle */}
        <circle
          cx={24}
          cy={24}
          r={23}
          fill="none"
          stroke="rgba(255, 255, 255, 0.3)"
          strokeWidth="2.5"
        />
        {/* Progress circle */}
        <circle
          cx={24}
          cy={24}
          r={23}
          fill="none"
          stroke="white"
          strokeWidth="2.5"
          strokeDasharray={CIRCLE_LENGTH}
          strokeDashoffset={CIRCLE_LENGTH - progress}
          style={{ transition: 'stroke-dashoffset 0.2s linear' }}
        />
      </svg>
    </div>
    </div>
  );
};

export default ShowVideo;