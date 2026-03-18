import React from 'react';

interface SongProps {
  songName: string;
  songArtist: string;
}

const Song: React.FC<SongProps> = ({ songName, songArtist }) => {
  return (
    <div className="oneSong">
      <p>{songName}</p>
      <p>{songArtist}</p>
    </div>
  );
};

export default Song;