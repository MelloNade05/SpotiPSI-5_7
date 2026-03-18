import { Box } from '@mui/material'
import './App.css'
import AllSongsPage from './components/allSongPage/AllSongsPage.tsx'
import Header from './components/header/Header'
import Player from './components/player/player'
import Sidebar from './components/sidebar/Sidebar'
import FetchSongs from './fetchSongs.tsx'

function App() {
  const songsList = FetchSongs()
  return (
    <>
    <Header />
      <Box id="main-section">
        <Sidebar />
        <AllSongsPage songs={songsList}/>
      </Box>
      <Player />
    </>
  )
}

export default App
