import React, { useEffect, useRef, useState } from 'react'
import "./board.css"
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import VerschiebeStapeln from './VerschiebeStapeln';
import ZufallsKarte from './zufallsKarte';

import {cardsData} from "./Cards/importCards"

function Board() {
	const [cardDeck, setCardDeck] = useState(cardsData) 
  
  
  const [gs1, setgs1] = useState([])
  const [gs2, setgs2] = useState([])
  const [gs3, setgs3] = useState([])
  const [gs4, setgs4] = useState([])

  
  const [zk, setZk] = useState([])


  function updateCurrentDeck(newDeck) {
    alert("test")
    setCardDeck(newDeck)
  }
	

  return (
    <div id='board'>
      <ZufallsKarte currentDeck={cardDeck}/>
        <div id='vierStapeln'>{/*oben links*/}
            <div id='pikStapel' className='gewinnStapel'></div>
            <div id='kreuzStapel' className='gewinnStapel'></div>
            <div id='herzStapel' className='gewinnStapel'></div>
            <div id='karoStapel' className='gewinnStapel'></div>
        </div> 
		<VerschiebeStapeln updateDeck={updateCurrentDeck}/>
    </div>
  )
}

export default Board