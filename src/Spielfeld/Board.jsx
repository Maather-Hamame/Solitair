import React, { useEffect, useRef, useState } from 'react'
import "./board.css"
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import VerschiebeStapeln from './VerschiebeStapeln';
import ZufallsKarte from './zufallsKarte'; 
import { getDeck, updateDeck, deck, newDeck } from './DeckControls';

import {cardsData} from "./Cards/importCards"
import GewinnStapel from './GewinnStapel';

function Board() {
	const [cardDeck, setCardDeck] = useState(cardsData) 

  const cardDeckRef = useRef(cardsData)

  var gStapel = <GewinnStapel/>
  
  
  const [gs1, setgs1] = useState([])
  const [gs2, setgs2] = useState([])
  const [gs3, setgs3] = useState([])
  const [gs4, setgs4] = useState([])
  const [updateBoard, setUpdateBoard] = useState(0)
  
  
  const readyZKStapel = useRef(false)

  function showZKStapel() {
    readyZKStapel.current = true
  }

  useEffect(() => {
    gStapel = <GewinnStapel/>
  }, [deck])



  return (
    <div id='board'>
      <ZufallsKarte />
        {gStapel}
		<VerschiebeStapeln showZK={showZKStapel}/>
    </div>
  )
}

export default Board