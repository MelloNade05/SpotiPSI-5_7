import React from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Favourite from '@mui/icons-material/Favorite';
import Add from '@mui/icons-material/Add';
import useStyles from './SongItemStyles';
import type { Song } from '../../types';
import { Typography , Divider, backdropClasses, Box} from '@mui/material';


const SongItem: React.FC<Song> = ({name, artist }) => {
    const { classes } = useStyles();

    return (
        <Box className={classes.songContainer}>

            <Box className={classes.songInfoLine}>
                <IconButton className={classes.iconButton} aria-label="Play Arrow">
                    <PlayArrow />
                </IconButton>
                <Typography variant="body1" className={classes.text} gutterBottom> {name} </Typography>
                <Typography variant="body1" className={classes.text} gutterBottom> - </Typography>
                <Typography variant="body1" className={classes.text} gutterBottom> {artist} </Typography>
            </Box>

            <Box className={classes.songFuncs}>
                <Stack direction="row" spacing={1}>
                    <IconButton className={classes.iconButton} aria-label="Favourite">
                        <Favourite />
                    </IconButton>

                    <IconButton className={classes.iconButton} aria-label="Add">
                        <Add />
                    </IconButton>
                </Stack>
            </Box>
        </Box>
    );
};

export default SongItem;