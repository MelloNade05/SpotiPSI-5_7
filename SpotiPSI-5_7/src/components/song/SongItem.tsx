import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Add from '@mui/icons-material/Add';
import useStyles from './SongItemStyles';
import type { Song } from '../../types';
import { Typography, Box } from '@mui/material';
import { Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';


const SongItem: React.FC<Song> = ({ name, artist }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.songContainer}>
            <Box className={classes.songInfoLine}>
                <IconButton className={classes.playicon} aria-label="Play Arrow">
                    <PlayArrow fontSize="large" />
                </IconButton>
                <Typography variant="body1" className={classes.text} gutterBottom> {name} </Typography>
                <Typography variant="body1" className={classes.text} gutterBottom> - </Typography>
                <Typography variant="body1" className={classes.text} gutterBottom> {artist} </Typography>
            </Box>

            <Box className={classes.songFuncs}>
                <Stack direction="row" spacing={1}>
                    <IconButton className={classes.addIcon} aria-label="Add">
                        <Add />
                    </IconButton>
                    <Checkbox className={classes.favoriteIcon} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                </Stack>
            </Box>
        </Box>
    );
};

export default SongItem;