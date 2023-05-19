import React, { useEffect, useRef, useState } from 'react'
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import {cardsData} from "./Cards/importCards"
import { getDeck, updateDeck, selectOrMoveCard, deck, randomizeCards, alleGS } from './DeckControls';
import Pik0 from "./Cards/Pik0.png"
import Kreuz0 from "./Cards/Kreuz0.jpg"
import Herz0 from "./Cards/Herz0.png"
import Karo0 from "./Cards/Karo0.png"



function GewinnStapel() {
	const [cardDeck, setCardDeck] = useState(cardsData) 

    const gs1Ref = useRef()
    const gs2Ref = useRef()
    const gs3Ref = useRef()
    const gs4Ref = useRef()


    const selectedCard = useRef([])
	const [startNum, setStartNum] = useState(0)

    const startCards = [
        {
            color: "black", number: 0,
            currentPosition: "gs", type: "pik",
            visible: true, image: Pik0
        },
        {
            color: "black", number: 0,
            currentPosition: "gs", type: "kreuz",
            visible: true, image: Kreuz0
        },
        {
            color: "red", number: 0,
            currentPosition: "gs", type: "herz",
            visible: true, image: Herz0
        },{
            color: "red", number: 0,
            currentPosition: "gs", type: "karo",
            visible: true, image: Karo0
        },
    ]
    



  return (
    <div id='vierStapeln'>
        <div id='pikStapel' className='gewinnStapel'>
            <img id="pik0" className='card' src={Pik0} alt='' onClick={() => selectOrMoveCard(startCards[0])}/>
				{	
					alleGS[0].map(card => {
                        if(typeof card != "undefined"){
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
                            )
                        }
					})
				}	
		</div>
        <div id='kreuzStapel' className='gewinnStapel'>
            <img id="kreuz0" className='card' src={Kreuz0}alt='' onClick={() => selectOrMoveCard(startCards[1])}/>
				{
					alleGS[1].map(card => {
                        if(typeof card != "undefined"){
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)}
					})
				}	
		</div>
        <div id='herzStapel' className='gewinnStapel'>
            <img id="herz0" className='card' src={Herz0} alt='' onClick={() => selectOrMoveCard(startCards[2])}/>
				{
					alleGS[2].map(card => {
                        if(typeof card != "undefined"){
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)}
					})
				}	
		</div>
            <div id='karoStapel' className='gewinnStapel'>
            <img id="karo0" className='card' src={Karo0} alt='' onClick={() => selectOrMoveCard(startCards[3])}/>
				{
					alleGS[3].map(card => {
                        if(typeof card != "undefined"){
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)}
					})
				}	
			</div>
        </div>
  )
}

export default GewinnStapel