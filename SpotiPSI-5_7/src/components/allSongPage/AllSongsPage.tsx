import React from 'react';
import Song from '../components/song/Song';

interface SongInfo {
  name: string;
  artist: string;
}

interface AllSongsPageProps {
  songs: SongInfo[];
}

const AllSongsPage: React.FC<AllSongsPageProps> = ({ songs }) => {
  return (
    <div className="page-container">
      <div id="songs-list">
        {songs.map((song, index) => (
          <Song
            key={index}
            songName={song.name}
            songArtist={song.artist}
          />
        ))}
      </div>
    </div>
  );
};

export default AllSongsPage;