import './App.css';
import AllSongsPage from './components/allSongPage/AllSongsPage.tsx';
import Header from './components/header/Header';
import Player from './components/player/player';
import Sidebar from './components/sidebar/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import FetchSongs from './fetchSongs.tsx'

function PlaylistsPage() {
  return (
    <div>

    </div>
  );
}

function FavoritesPage() {
  return (
    <div>

    </div>
  );
}


function App() {
  const songsList = FetchSongs()
  return (
    <>
      <Router>
        <Box>
          <Header />
          <Box  id="main-section">
            <Sidebar />
            <Routes>
              <Route path="/songs" element={<AllSongsPage songs={songsList} />} />
              <Route path="/playlists" element={<PlaylistsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/" element={<AllSongsPage songs={songsList} />} />
            </Routes>
          </Box>
          <Player />
        </Box >
      </Router >
    </>
  );
}

export default App;