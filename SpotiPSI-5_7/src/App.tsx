import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AllSongsPage from './components/allSongPage/AllSongsPage.tsx';
import FavoritesPage from './components/favourites/FavoutiresPage.tsx';
import Header from './components/header/Header';
import PageTracker from './components/pageTracker/pageTracker.tsx';
import Player from './components/player/Player';
import Sidebar from './components/sidebar/Sidebar';
import PlaylistsPage from './components/playlistPage/PlaylistsPage';
import Playlist from './components/playlist/Playlist.tsx';
import FetchPlaylists from './api/fetchPlaylists.tsx';
import UseFetchFavs from './fetch/fetchFavs.ts';
import UseFetchSongs from './fetch/fetchSongs.ts';


function App() {
  const [activePage, setActivePage] = useState<string>('allSongs');

  // had problems using state because fetch already has a state and we cant do hook inside hook
  const songsList = UseFetchSongs(activePage);
  const favSongsIds = UseFetchFavs(activePage);
  const playlistsList = FetchPlaylists('playlist')
  useEffect(() => {
    console.log(`Page changed to ${activePage}`);
  }, [activePage]);

  return (
    <>
      <Router>
        <PageTracker setActivePage={setActivePage} />
        <Box>
          <Header />
          <Box id="main-section">
            <Sidebar />
            <Box id="songs-section">
              <Routes>
                <Route path="/songs" element={<AllSongsPage songsList={songsList} favSongsId={favSongsIds} />} />
                <Route path="/playlists/*" element={<PlaylistsPage />} />
                <Route path="/favorites" element={<FavoritesPage favSongsId={favSongsIds} songsList={songsList} />} />
                <Route path="/" element={<AllSongsPage songsList={songsList} favSongsId={favSongsIds} />} />
                {playlistsList.map(({ playlistId, name, songIds }) => (
                  <Route key={playlistId} path={`/playlists/${playlistId}`} element={<Playlist name={name} songs={songIds} allSongs={songsList} />} />
                ))}
              </Routes>
            </Box>
          </Box>
          <Player />
        </Box >
      </Router >
    </>
  );
}

export default App;