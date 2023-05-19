import React, { useEffect, useRef, useState } from 'react'
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import {cardsData} from "./Cards/importCards"
import { getDeck, updateDeck, selectOrMoveCard, showUpperCards, deck, randomizeCards, alleVS } from './DeckControls';



function VerschiebeStapeln({showZK, updateB}) {
	const [cardDeck, setCardDeck] = useState(cardsData) 
    var refCardDeck;

    const vs1LC = useRef()
    const vs2LC = useRef()
    const vs3LC = useRef()
    const vs4LC = useRef()
    const vs5LC = useRef()
    const vs6LC = useRef()
    const vs7LC = useRef()

    const selectedCard = useRef([])
	const [startNum, setStartNum] = useState(0)
    
  const  [ready, setReady] = useState(false)

  useEffect(() => {
	setTimeout(() => {
		console.log(getDeck())
	showUpperCards()
	setReady(true)
	}, 300)	
    }, [])

	




    



  return (
    <div id='verschiebeStapeln'>{/*mitte*/}
		{ready ? <>
            <div className='verschiebestapel'><div>
				{	
					alleVS[0].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
                            )
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					alleVS[1].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					alleVS[2].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					alleVS[3].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					alleVS[4].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					alleVS[5].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					alleVS[6].map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card, updateB)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
			</> : null }
        </div>
  )
}

export default VerschiebeStapeln