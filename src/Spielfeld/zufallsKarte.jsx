import React, { useEffect, useRef, useState } from 'react'
import "./board.css"
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import VerschiebeStapeln from './VerschiebeStapeln';

import {cardsData} from "./Cards/importCards"
import { getDeck, updateDeck, zufallsKarten, deck, selectOrMoveCard } from './DeckControls';


function ZufallsKarte() {
 
  const [currentZufallsKarte, setCurrentZufallskarte] = useState({})
  const zufallskartenRef = useRef()
  const kartenIndex = useRef(0)

  const readyRef = useRef(false)


  
  function nextCard(index) {
    console.log(zufallskartenRef.current)

    for(let i = 0; i < zufallsKarten.length; i++){
      zufallsKarten[i].visible = false;
    }

    if(kartenIndex.current + 1 == zufallsKarten.length){
      kartenIndex.current = 0;

    } else {

      kartenIndex.current++;
    }
    zufallsKarten[index].visible = true;

    setCurrentZufallskarte(zufallsKarten[index])
  }

  var Karten = []

  for(let i = 0; i < zufallsKarten.length; i++){
    Karten[i] = <img src={zufallsKarten[i].image} onClick={() => selectOrMoveCard(zufallsKarten[i])} id={currentZufallsKarte.visible ? (currentZufallsKarte.type + currentZufallsKarte.number) : null} className={'card zk ' + (!zufallsKarten[i].visible ? "notVisible" : null)}  alt=""/>
  }

  return (
    <div id='zufaelligeKartenStapel'>{/*oben rechts*/}
            <button id='naechsteKarte' onClick={() => nextCard(kartenIndex.current)}><img src={umgedrehteKarte} alt="" /></button>
          
            {Karten}
        </div> 
  )
}

export default ZufallsKarte