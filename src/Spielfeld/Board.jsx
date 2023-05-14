import React, { useEffect, useRef, useState } from 'react'
import "./board.css"
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import VerschiebeStapeln from './VerschiebeStapeln';

import {cardsData} from "./Cards/importCards"

function Board() {
	const [cardDeck, setCardDeck] = useState(cardsData) 
  
  
  const [gs1, setgs1] = useState([])
  const [gs2, setgs2] = useState([])
  const [gs3, setgs3] = useState([])
  const [gs4, setgs4] = useState([])

  
  const [zk, setZk] = useState([])


	

  return (
    <div id='board'>
        <div id='zufaelligeKartenStapel'>{/*oben rechts*/}
            <button id='naechsteKarte'><img src={umgedrehteKarte} alt="" /></button>
            <div id='zufallskarte'></div>
        </div> 
        <div id='vierStapeln'>{/*oben links*/}
            <div id='stapel1' className='gewinnStapel'></div>
            <div id='stapel2' className='gewinnStapel'></div>
            <div id='stapel3' className='gewinnStapel'></div>
            <div id='stapel4' className='gewinnStapel'></div>
        </div> 
		<VerschiebeStapeln/>
    </div>
  )
}

export default Board