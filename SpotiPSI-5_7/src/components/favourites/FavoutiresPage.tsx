import React from 'react';
import useStyles from './FavouritesPageStyles';

import { Typography, Box} from '@mui/material';

import type { Song } from '../../types';
import SongsTable from '../songTable/SongsTable';

interface FavoritesPageProps{
    favSongsIds:string[];
    songs: Song[];
};


const FavoritesPage: React.FC<FavoritesPageProps> = ({ favSongsIds, songs }) => {
    const { classes } = useStyles();
    const favSongsList = songs.filter((song) => (
                favSongsIds.includes(song.id) ));
    return (
        <Box className={classes.pageContainer}>
            <Typography variant="h4" className={classes.header} gutterBottom
                sx={{ fontWeight: 'Bold' }}> המועדפים שלי
            </Typography>
            
            <SongsTable songList={favSongsList} favSongsIds={favSongsIds}/>
        </Box>
    );
};

export default FavoritesPage;