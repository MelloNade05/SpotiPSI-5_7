import './App.css'
import Header from './components/header/Header'
import Player from './components/player/Player'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
      <Header />
      <div id="main-section">
        <Sidebar />
      </div>
      <Player />
    </>
  )
}

export default App
