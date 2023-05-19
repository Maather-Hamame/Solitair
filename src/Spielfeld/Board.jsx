import React, { useEffect, useRef, useState } from 'react'
import "./board.css"
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import VerschiebeStapeln from './VerschiebeStapeln';
import ZufallsKarte from './zufallsKarte'; 
import { getDeck, updateDeck, deck, newDeck, randomizeCards } from './DeckControls';

import {cardsData} from "./Cards/importCards"
import GewinnStapel from './GewinnStapel';

function Board() {
	const [cardDeck, setCardDeck] = useState(cardsData) 

  const cardDeckRef = useRef(cardsData)

  const gewinnKey = useRef(Math.random())


  
  
  
  
  const readyZKStapel = useRef(false)

  function showZKStapel() {
    readyZKStapel.current = true
  }

  
  const updategBoard = () => {

      setGStapel(<GewinnStapel updateB={updategBoard} key={Math.random()}/>)
      //updateDeck()
  }

  const [gStapel, setGStapel] = useState(<GewinnStapel key={gewinnKey.current} updateB={updategBoard}/>)

  useEffect(() => {
    randomizeCards()
  }, [])



  return (
    <div id='board'>
      <ZufallsKarte updateB={updategBoard}/>
      {gStapel}
		<VerschiebeStapeln showZK={showZKStapel} updateB={updategBoard}/>
    </div>
  )
}

export default Board