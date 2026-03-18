import './App.css'
import AllSongsPage from './components/allSongPage/AllSongsPage'
import Header from './components/header/Header'
import Player from './components/player/player'
import Sidebar from './components/sidebar/Sidebar'

const songs = [
  { name: "Song 1", artist: "Artist A" },
  { name: "Song 2", artist: "Artist B" },
  { name: "Song 3", artist: "Artist C" },
];

function App() {

  return (
    <>
    <Header />
      <div id="main-section">
        <Sidebar />
        <AllSongsPage songs={songs}/>
      </div>
      <Player />
    </>
  )
}

export default App
