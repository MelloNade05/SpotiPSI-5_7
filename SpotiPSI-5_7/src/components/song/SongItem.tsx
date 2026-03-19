import React, { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PlayArrow from '@mui/icons-material/PlayArrow';
import Add from '@mui/icons-material/Add';
import useStyles from './SongItemStyles';
import type { Song } from '../../types';
import { Typography, Box, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { toggleFav } from '../../api/toggleFavApi';
import FetchPlaylists from '../../api/fetchPlaylists';
import { useState, useRef, useEffect } from 'react';
import { addToPlaylists } from '../../api/postPlaylists.ts';


interface SongItemProps extends Song {
  isFavorite: boolean;
}

const SongItem: React.FC<SongItemProps> = ({ id, id: songId, name, artist, isFavorite  }) => {
    const { classes } = useStyles();
    const playlistsList = FetchPlaylists();
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
                                {playlistsList.map(({ id, name }) => (
                                    <Box className={classes.playlistItem} onClick={async () => {
                                        setIsOpen(false);
                                        const success = await addToPlaylists(id, songId);
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