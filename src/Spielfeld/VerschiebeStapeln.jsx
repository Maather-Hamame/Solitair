import React, { useEffect, useRef, useState } from 'react'
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import {cardsData} from "./Cards/importCards"
import { getDeck, updateDeck, selectOrMoveCard, deck, randomizeCards, alleVS } from './DeckControls';



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

	
	function showUpperCards() {

		for(let i = 0; i < alleVS.length; i++) {
			for(let j = 0; j < alleVS[i].length; j++) {
				alleVS[i][j].visible = false
			}
		}

		for(let i = 0; i < 7; i++) {
			alleVS[i][alleVS[i].length - 1].visible = true
			var currentIndex = deck.findIndex(c =>{ 
				return c.type == alleVS[i][alleVS[i].length - 1].type && c.number == alleVS[i][alleVS[i].length - 1]
			})
			deck[currentIndex].visible = true
		}
			alleVS[1][alleVS[1].length - 1].visible = true
			alleVS[2][alleVS[2].length - 1].visible = true
			alleVS[3][alleVS[3].length - 1].visible = true
			alleVS[4][alleVS[4].length - 1].visible = true
			alleVS[5][alleVS[5].length - 1].visible = true
			alleVS[6][alleVS[6].length - 1].visible = true	
	}



    



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