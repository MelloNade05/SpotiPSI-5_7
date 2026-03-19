import React from 'react';
import useStyles from './allSongsPageStyles';
import { Box, Typography } from '@mui/material';
import SongsTable from '../songTable/SongsTable';
import type { Song } from '../../types';

interface AllSongsPageProps {
    songs: Song[];
    favSongsIds:string[];

}

const AllSongsPage: React.FC<AllSongsPageProps> = ({ songs , favSongsIds}) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.pageContainer}>
            <Typography variant="h4" className={classes.header} gutterBottom
                sx={{ fontWeight: 'Bold' }}> כל השירים
            </Typography>
            <SongsTable songList={songs} favSongsIds={favSongsIds}/>
        </Box>
    );
};

export default AllSongsPage;
