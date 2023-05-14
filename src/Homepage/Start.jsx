import React from 'react'


function Start({startGame}) {
  return (
    <div id='StartSeite'>
        <h1>Willkommen bei Online-Solitär!</h1>
        <button id='startBtn' onClick={startGame}>Neues Spiel starten!</button>
    </div>
  )
}

export default Start