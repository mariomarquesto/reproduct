import ReactAudioPlayer from 'react-audio-player';
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <h1>FRANCISCO MARQUESTO</h1>


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
