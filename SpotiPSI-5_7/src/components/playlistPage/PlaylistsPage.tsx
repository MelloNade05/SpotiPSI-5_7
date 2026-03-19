import PlaylistItem from '../playlistItem/PlaylistItem';
import Playlist from '../playlist/Playlist';
import useStyles from './playlistsPageStyles.tsx';
import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import FetchPlaylists from '../../fetchPlaylists.tsx';
import type { PlaylistType } from '../../types.ts';
import { useState } from 'react';
import Popup from '../popup/Popup.tsx';

function Sidebar() {
  const { classes } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const [playlistsList, setPlaylists] = useState<PlaylistType[]>(FetchPlaylists());
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpen = () => setIsPopupOpen(true);
  const handleClose = () => setIsPopupOpen(false);

  const handleSubmit = (name: string) => {
    console.log('Name from popup:', name);

    const newPlaylist: PlaylistType = {
      id: `${playlistsList.length + 1}`,
      name,
      songIds: [],
    };

    setPlaylists((prev) => [...prev, newPlaylist]);
    setIsPopupOpen(false);
  };

  return (
    <Box>
      <Box className={classes.top}>
        <Typography variant="h4" className={classes.header} gutterBottom sx={{ fontWeight: 'bold' }}>הפלייליסטים שלי</Typography>
      </Box>

      <Button className={classes.btn} variant="outlined" onClick={handleOpen}> צור פלייליסט + </Button>

      <Popup isOpen={isPopupOpen} onClose={handleClose} onSubmit={handleSubmit} />

      <Box className={classes.playlists}>
        <List>
          {playlistsList.map(({ id, name }) => (
            <ListItem key={id}>
              <PlaylistItem
                name={name}
                songsAmount={playlistsList.length}
                selected={location.pathname === `/playlists/${id}`}
                onClick={() => navigate(`/playlists/${id}`)}
              />
            </ListItem>
          ))}
        </List>

        <Routes>
          {playlistsList.map(({ id, songIds }) => (
            <Route
              key={id}
              path={`/playlists/${id}`}
              element={<Playlist songs={songIds} />}
            />
          ))}
        </Routes>
      </Box>
    </Box>
  );
}

export default Sidebar;