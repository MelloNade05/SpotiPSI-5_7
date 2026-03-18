import React from 'react';
import SongItem from '../song/SongItem';
import useStyles from './allSongsPageStyles';
import { Box, Typography } from '@mui/material';

interface SongInfo {
    id: number
    name: string;
    artist: string;
}

interface AllSongsPageProps {
    songs: SongInfo[];

}

const AllSongsPage: React.FC<AllSongsPageProps> = ({ songs }) => {
    const { classes } = useStyles();
    return (
        <Box className={classes.pageContainer}>
            <Typography variant="h4" className={classes.header} gutterBottom
                sx={{ fontWeight: 'Bold' }}> כל השירים
            </Typography>
            <Box id="songs-list">
                {songs.map((song, index) => (
                    <SongItem
                        key={index}
                        name={song.name}
                        artist={song.artist}
                        id={song.id}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default AllSongsPage;
