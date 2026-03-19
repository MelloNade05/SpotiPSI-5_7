import './App.css';
import AllSongsPage from './components/allSongPage/AllSongsPage.tsx';
import Header from './components/header/Header';
import Player from './components/player/Player';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import PlaylistsPage from './components/playlistPage/PlaylistsPage';
import Playlist from './components/playlist/Playlist.tsx';
import FetchPlaylists from './api/fetchPlaylists.tsx';

import FavoritesPage from './components/favourites/FavoutiresPage.tsx';
import { useEffect, useState } from 'react';
import type { Song } from './types.ts';

import FetchFavs from './fetch/fetchFavs.ts';
import FetchSongs from './fetch/fetchSongs.ts'


function App() {
  // const [songsList, setSongsList] = useState<Song[]>([]);
  // const [favSongsIds, setFavSongsIds] = useState<string[]>([]);
  
  // useEffect(() => {
  //   const loadSongs = async () => {
  //     const songs = await FetchSongs();
  //     setSongsList(songs);
  //   };
  //   loadSongs();
  // }, []);

  // useEffect(() => {
  //   const loadFavs = async () => {
  //     const favs = await FetchFavs();
  //     setFavSongsIds(favs);
  //   };
  //   loadFavs();
  // }, []);

  const songsList = FetchSongs()
  const playlistsList = FetchPlaylists()

  return (
    <>
      <Router>
        <Box>
          <Header />
          <Box id="main-section">
            <Sidebar />
            <Box id="songs-section">
              <Routes>
                <Route path="/songs" element={<AllSongsPage songs={FetchSongs()} favSongsIds={FetchFavs()}/>} />
                <Route path="/playlists/*" element={<PlaylistsPage />} />
                <Route path="/favorites" element={<FavoritesPage favSongsIds={FetchFavs()} songs={FetchSongs()}/>} />
                <Route path="/" element={<AllSongsPage songs={FetchSongs()} favSongsIds={FetchFavs()} />} />
                {playlistsList.map(({ id, name, songIds }) => (
                  <Route key={id} path={`/playlists/${id}`} element={<Playlist name={name} songs={songIds} allSongs={songsList} />} />
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