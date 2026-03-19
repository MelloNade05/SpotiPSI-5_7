import { Box, Typography } from '@mui/material';
import React from 'react';
import type { SongTableProps } from '../../types';
import SongsTable from '../songsTable/SongsTable';
import useStyles from './allSongsPageStyles';


const AllSongsPage: React.FC<SongTableProps> = ({ songsList, favSongsId }) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.pageContainer}>
            <Typography variant="h4" className={classes.header} gutterBottom
                sx={{ fontWeight: 'Bold' }}> כל השירים
            </Typography>
            <SongsTable songsList={songsList} favSongsId={favSongsId} />
        </Box>
    );
};

export default AllSongsPage;
