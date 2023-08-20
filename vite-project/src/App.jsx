import { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>HOLAAAAA</h1>
      </div>
      <div className="audio-container">
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
