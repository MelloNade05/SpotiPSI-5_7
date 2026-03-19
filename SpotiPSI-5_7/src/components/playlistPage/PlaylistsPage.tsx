import useStyles from './playlistsPageStyles.tsx';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import FetchPlaylists from '../../api/fetchPlaylists.tsx';
import type { PlaylistType } from '../../types.ts';
import { useEffect, useState } from 'react';
import Popup from '../popup/Popup.tsx';
import { updatePlaylists } from '../../api/postPlaylists.ts';
import PlaylistItem from './playlistItem/PlaylistItem.tsx';

function PlaylistsPage() {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const fetchedPlaylists = FetchPlaylists();
  const [playlistsList, setPlaylists] = useState<PlaylistType[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    setPlaylists(fetchedPlaylists);
  }, [fetchedPlaylists]);

  const handleOpen = () => setIsPopupOpen(true);
  const handleClose = () => setIsPopupOpen(false);

  const handleSubmit = (name: string) => {
    const newPlaylist: PlaylistType = {
      id: `${playlistsList.length + 1}`,
      name,
      songIds: []
    };
    updatePlaylists(newPlaylist);
    setPlaylists((prev) => [...prev, newPlaylist]);
    setIsPopupOpen(false);
    console.log(playlistsList);
  };

  return (
    <Box>
      <Box className={classes.top}>
        <Button className={classes.btn} variant="outlined" onClick={handleOpen}>צור פלייליסט +</Button>
        <Typography variant="h4" className={classes.header} gutterBottom sx={{ fontWeight: 'bold' }}>הפלייליסטים שלי</Typography>
      </Box>

      <Popup isOpen={isPopupOpen} onClose={handleClose} onSubmit={handleSubmit} />

      <Box className={classes.playlists}>
        <List>
          {playlistsList.map(({ id, name, songIds }) => (
            <ListItem key={id}>
              <PlaylistItem
                name={name}
                songsAmount={songIds.length}
                selected={location.pathname === `/playlists/${id}`}
                onClick={() => navigate(`/playlists/${id}`)}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

export default PlaylistsPage;