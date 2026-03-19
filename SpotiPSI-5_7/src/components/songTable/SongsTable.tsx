import React from 'react';
import SongItem from '../song/SongItem';
import { Box } from '@mui/material';
import type { Song } from '../../types';



interface SongTableProps {
    songList: Song[];
    favSongsIds: string[];

}

const SongsTable: React.FC<SongTableProps> = ({ songList , favSongsIds}) => {
    return (
        <Box id="songs-list">
            {songList.map((song, index) => (
                <SongItem
                    key={index}
                    name={song.name}
                    artist={song.artist}
                    id={song.id}
                    isFavorite={favSongsIds.includes(song.id)}
                />
            ))}
        </Box>
    );
};

export default SongsTable;
