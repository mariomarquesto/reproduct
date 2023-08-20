import ReactAudioPlayer from 'react-audio-player';
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <h1>FRANCISCO MARQUESTO</h1>
        <h2>audio</h2>

        <ReactAudioPlayer
          src="./src/audio/AudioFran.mp3" // Asegúrate de que la ruta sea correcta
          autoPlay
          controls
        />
      </div>

    </>
  )
}

export default App
