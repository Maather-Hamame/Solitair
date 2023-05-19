import React, {  useRef, useState } from 'react'
import "./board.css"
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";

import { zufallsKarten,  selectOrMoveCard } from './DeckControls';


function ZufallsKarte() {
 
  const [currentZufallsKarte, setCurrentZufallskarte] = useState({})
  const kartenIndex = useRef(0)



  
  function nextCard(index) {

    for(let i = 0; i < zufallsKarten.length; i++){
      zufallsKarten[i].visible = false;
    }

    if(kartenIndex.current + 1 === zufallsKarten.length){
      kartenIndex.current = 0;

    } else {

      kartenIndex.current++;
    }
    zufallsKarten[index].visible = true;

    setCurrentZufallskarte(zufallsKarten[index])
  }

  var Karten = []

  for(let i = 0; i < zufallsKarten.length; i++){
    Karten[i] = <img src={zufallsKarten[i].image} key={Math.random()} onClick={() => selectOrMoveCard(zufallsKarten[i])} id={zufallsKarten[i].visible ? (zufallsKarten[i].type + zufallsKarten[i].number) : null} className={'card zk ' + (!zufallsKarten[i].visible ? "notVisible " : "") + (zufallsKarten[i].type === "kreuz" ? "black" : zufallsKarten[i].type === "pik" ? "black" : "red")}  alt=""/>
  }

  return (
    <div id='zufaelligeKartenStapel'>{/*oben rechts*/}
            <button id='naechsteKarte' onClick={() => nextCard(kartenIndex.current)}><img src={umgedrehteKarte} alt="" /></button>
          
            {Karten}
        </div> 
  )
}

export default ZufallsKarte