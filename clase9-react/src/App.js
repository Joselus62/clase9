import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Video from './components/videos/video';
import Audio from './components/audio/audio'

function App() {
  return (
    <div className="App">
        <Navbar></Navbar>
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Video></Video><br/>
        <Audio></Audio>
        
        <p>
          <code></code> Esto es una Prueba de Inserción de Video.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    
    </div>
  
  );
}

export default App;
