import { Favorite, FavoriteBorder } from '@mui/icons-material';
import Add from '@mui/icons-material/Add';
import PlayArrow from '@mui/icons-material/PlayArrow';
import { Box, Checkbox, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import React, { useEffect, useRef, useState } from 'react';
import UseFetchPlaylists from '../../api/fetchPlaylists';
import { addToPlaylists } from '../../api/postPlaylists.ts';
import { toggleFav } from '../../api/toggleFavApi';
import type { Song } from '../../types';
import useStyles from './SongItemStyles';


interface SongItemProps extends Song {
    isFavorite: boolean;
}

const SongItem: React.FC<SongItemProps> = ({ id, name, artist, isFavorite }) => {
    const { classes } = useStyles();
    const playlistsList = UseFetchPlaylists('playlist');
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const [favoriteValue, setFavoriteValue] = useState(isFavorite);

    const changeFav = async () => {
        const response = await toggleFav(id, !favoriteValue);
        if (response) {
            setFavoriteValue(prev => !prev);
        }
    };


    return (
        <Box className={classes.songContainer}>
            <Box className={classes.songInfoLine}>
                <IconButton className={classes.playicon} aria-label="Play Arrow">
                    <PlayArrow fontSize="large" />
                </IconButton>
                <Typography variant="body1" className={classes.text} gutterBottom>{name}</Typography>
                <Typography variant="body1" className={classes.text} gutterBottom>-</Typography>
                <Typography variant="body1" className={classes.text} gutterBottom>{artist}</Typography>
            </Box>

            <Box className={classes.songFuncs}>
                <Stack direction="row" spacing={1}>
                    <Box position="relative" ref={dropdownRef}>
                        <IconButton
                            className={classes.addIcon}
                            aria-label="Add"
                            onClick={() => setIsOpen((prev) => !prev)}>
                            <Add />
                        </IconButton>

                        {isOpen && (
                            <Box className={classes.dropdown}>
                                {playlistsList.map(({ playlistId, name} , index) => (
                                    <Box className={classes.playlistItem} key={index} onClick={async () => {
                                        setIsOpen(false);
                                        const success = await addToPlaylists(playlistId, id);
                                        if (success) {
                                            window.location.reload();
                                        }
                                    }}>{name}</Box>
                                ))}
                            </Box>
                        )}
                    </Box>

                    <Checkbox
                        className={classes.favoriteIcon}
                        icon={<FavoriteBorder />}
                        checkedIcon={<Favorite />}
                        onChange={changeFav} checked={favoriteValue} />
                </Stack>
            </Box>
        </Box>
    );
};

export default SongItem;