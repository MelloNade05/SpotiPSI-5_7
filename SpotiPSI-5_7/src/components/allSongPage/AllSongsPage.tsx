import React from 'react';
import Song from '../song/Song';
import useStyles from './allSongsPage';

interface SongInfo {
    name: string;
    artist: string;
}
interface AllSongsPageProps {
    songs: SongInfo[];

}

const AllSongsPage: React.FC<AllSongsPageProps> = ({ songs }) => {
    const { classes } = useStyles();
    return (
        <div className={classes.pageContainer}>
            <h1 className={classes.header}> כל השירים</h1>
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