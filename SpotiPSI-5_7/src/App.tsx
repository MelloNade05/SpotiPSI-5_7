import './App.css';
import AllSongsPage from './components/allSongPage/AllSongsPage.tsx';
import Header from './components/header/Header';
import Player from './components/player/Player';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import FetchSongs from './api/fetchSongs.tsx'
import PlaylistsPage from './components/playlistPage/PlaylistsPage.tsx';
import Playlist from './components/playlist/Playlist.tsx';
import FetchPlaylists from './api/fetchPlaylists.tsx';


function FavoritesPage() {
  return (
    <div>

    </div>
  );
}

function App() {
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
                <Route path="/songs" element={<AllSongsPage songs={songsList} />} />
                <Route path="/playlists/*" element={<PlaylistsPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/" element={<AllSongsPage songs={songsList} />} />
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