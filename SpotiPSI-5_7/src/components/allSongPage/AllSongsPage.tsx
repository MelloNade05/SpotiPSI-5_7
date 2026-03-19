import React from 'react';
import useStyles from './allSongsPageStyles';
import { Box, Typography } from '@mui/material';
import SongsTable from '../songsTable/SongsTable';
import type { SongsTableProps } from '../songsTable/SongsTable';


const AllSongsPage: React.FC<SongsTableProps> = ({ songs }) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.pageContainer}>
            <Typography variant="h4" className={classes.header} gutterBottom
                sx={{ fontWeight: 'Bold' }}> כל השירים
            </Typography>
            <SongsTable songs={songs} />
        </Box>
    );
};

export default AllSongsPage;
