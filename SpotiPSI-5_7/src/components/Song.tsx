import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Favourite from '@mui/icons-material/Favorite';
import Add from '@mui/icons-material/Add';
import useStyles from './SongStyles';

export interface SongProps {
    songName: string;
    songArtist: string;
}

const Song: React.FC<SongProps> = ({ songName, songArtist }) => {
    const { classes } = useStyles();

    return (
        <div className={classes.songContainer}>
            <h1>כל השירים</h1>
            <div className={classes.songInfoLine}>
                <p className={classes.text}>{songName}</p>
                <p className={classes.text}>{songArtist}</p>
                <IconButton className={classes.iconButton} aria-label="Play Arrow">
                    <PlayArrow />
                </IconButton>
            </div>

            <div className={classes.songFuncs}>
                <Stack direction="row" spacing={1}>
                    <IconButton className={classes.iconButton} aria-label="Favourite">
                        <Favourite />
                    </IconButton>

                    <IconButton className={classes.iconButton} aria-label="Add">
                        <Add />
                    </IconButton>
                </Stack>
            </div>
        </div>
    );
};

export default Song;