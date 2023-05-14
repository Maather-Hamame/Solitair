import './App.css';
import Start from './Homepage/Start';
import Board from './Spielfeld/Board';
import React, {useState} from 'react';

function App() {

  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    setGameStarted(true)
  }

  return (
    <div className="App">
      {!gameStarted ? <Start startGame={startGame}/> : <Board/>}
    </div>
  );
}



export default App;
