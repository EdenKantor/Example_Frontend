import React from 'react';
import { useSpotify } from '../utils/SpotifyPlayerLogic'; // Access Spotify logic

const SpotifyPlayer = () => {
  const { isPlaying } = useSpotify(); // Get play state

  return (
    <div className="fixed bottom-0 left-0 w-full">
      {isPlaying && (
        <iframe
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/track/2KH16WveTQWT6KOG9Rg6e2?utm_source=generator&autoplay=true&loop=true"
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyPlayer;
