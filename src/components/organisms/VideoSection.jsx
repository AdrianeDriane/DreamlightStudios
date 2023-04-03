import React from 'react';
import dreamlightVideoBg from '../../assets/videos/dreamlight_webpage_video.mp4';

function VideoSection() {
  return (
    <section className="w-full h-screen">
      <div className="absolute w-full h-full bg-transparent inset-0 bg-gradient-to-b from-black to-transparent opacity-60" />
      <video
        className="w-full h-full object-cover"
        src={dreamlightVideoBg}
        autoPlay
        loop
        muted
      />
    </section>
  );
}

export default VideoSection;
