import './App.css';
import google from './google.png'
import microphone from './microphone.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={google} alt="google" />
        <div class="container">
          <input type="text" placeholder="  Search Google or type a URL" />
          <img src={microphone} alt="microphone" />

        </div>
        <div className="position">
        <button id="searcch"> google search</button>
        <button >i'm feeling lucky</button>
        </div>
       
      </header>

      <user />
    </div>
  );
}

export default App;
