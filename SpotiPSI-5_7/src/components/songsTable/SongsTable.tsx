import React from 'react';
import SongItem from '../song/SongItem';
import { Box, List } from '@mui/material';
import useStyles from './songsTableStyles';
import type { SongTableProps } from '../../types';

const SongsTable: React.FC<SongTableProps> = ({ songsList, favSongsId }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.songsList}>
            <List>
                {songsList.map((song, index) => (
                    <SongItem
                        key={index}
                        name={song.name}
                        artist={song.artist}
                        id={song.id}
                        isFavorite={favSongsId.includes(song.id)}
                    />
                ))}
            </List>
        </Box>
    );
};

export default SongsTable;
