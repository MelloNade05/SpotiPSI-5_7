import React from 'react';
import useStyles from './FavouritesPageStyles';
import { Box, Typography } from '@mui/material';
import type { SongTableProps } from '../../types';
import SongsTable from '../songsTable/SongsTable';


const FavoritesPage: React.FC<SongTableProps> = ({ songsList, favSongsId }) => {
    const { classes } = useStyles();
    const favSongsList = songsList.filter((song) => (
        favSongsId.includes(song.id)));
    return (
        <Box className={classes.pageContainer}>
            <Typography variant="h4" className={classes.header} gutterBottom
                sx={{ fontWeight: 'Bold' }}> המועדפים שלי
            </Typography>

            <SongsTable songsList={favSongsList} favSongsId={favSongsId} />
        </Box>
    );
};

export default FavoritesPage;