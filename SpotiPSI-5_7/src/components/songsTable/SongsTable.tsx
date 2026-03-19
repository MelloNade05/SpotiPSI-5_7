import React from 'react';
import SongItem from '../song/SongItem';
import { Box, List, ListItem } from '@mui/material';
import useStyles from './songsTableStyles';

interface SongInfo {
    id: string;
    name: string;
    artist: string;
}

export interface SongsTableProps {
    songs: SongInfo[];
}

const SongsTable: React.FC<SongsTableProps> = ({ songs }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.songsList}>
            <List>
                {songs.map((song, index) => (
                    <SongItem
                        key={index}
                        name={song.name}
                        artist={song.artist}
                        id={song.id}
                    />
                ))}
            </List>
        </Box>
    );
};

export default SongsTable;
