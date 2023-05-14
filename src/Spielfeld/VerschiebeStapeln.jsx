import React, { useEffect, useRef, useState } from 'react'
import umgedrehteKarte from "./Cards/umgedrehte_karte.png";
import {cardsData} from "./Cards/importCards"



function VerschiebeStapeln() {
    const [cardDeck, setCardDeck] = useState(cardsData) 
    const refCardDeck = useRef(cardsData)

    const [vs1, setvs1] = useState([])
    const [vs2, setvs2] = useState([])
    const [vs3, setvs3] = useState([])
    const [vs4, setvs4] = useState([])
    const [vs5, setvs5] = useState([])
    const [vs6, setvs6] = useState([])
    const [vs7, setvs7] = useState([])


    const vs1LC = useRef()
    const vs2LC = useRef()
    const vs3LC = useRef()
    const vs4LC = useRef()
    const vs5LC = useRef()
    const vs6LC = useRef()
    const vs7LC = useRef()

    const selectedCard = useRef([])

    
  const  [ready, setReady] = useState(false)

  useEffect(() => {
    randomizeCards()
    }, [])


    async function randomizeCards() {


        var tempArr = cardsData;
    
            for(let i = tempArr.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * i-1);
                [tempArr[i], tempArr[j]] = [tempArr[j], tempArr[i]]
            }
    
            
            refCardDeck.current = tempArr


		setCardDeck(tempArr)

        kartenVerteilen()

	}


    function kartenVerteilen() {
		let vs7TempArr = [refCardDeck.current[51], refCardDeck.current[50], refCardDeck.current[49], refCardDeck.current[48], refCardDeck.current[47], refCardDeck.current[46], refCardDeck.current[45]]
        let vs6TempArr = [refCardDeck.current[44], refCardDeck.current[43], refCardDeck.current[42], refCardDeck.current[41], refCardDeck.current[40], refCardDeck.current[39]]
		let vs5TempArr = [refCardDeck.current[38], refCardDeck.current[37], refCardDeck.current[36], refCardDeck.current[35], refCardDeck.current[34]]
		let vs4TempArr = [refCardDeck.current[33], refCardDeck.current[32], refCardDeck.current[31], refCardDeck.current[30]]
		let vs3TempArr = [refCardDeck.current[29], refCardDeck.current[28], refCardDeck.current[27]]
		let vs2TempArr = [refCardDeck.current[26], refCardDeck.current[25]]
		let vs1TempArr = [refCardDeck.current[24]]

        

		vs1LC.current = vs1TempArr
		vs2LC.current = vs2TempArr
		vs3LC.current = vs3TempArr
		vs4LC.current = vs4TempArr
		vs5LC.current = vs5TempArr
		vs6LC.current = vs6TempArr
		vs7LC.current = vs7TempArr

			
      	setvs7([...vs7TempArr])
      	setvs6([...vs6TempArr])
      	setvs5([...vs5TempArr])
      	setvs4([...vs4TempArr])
      	setvs3([...vs3TempArr])
      	setvs2([...vs2TempArr])
      	setvs1([...vs1TempArr])

        setReady(true)

        showUpperCards()

	}


	
	const showUpperCards = () => {
		setTimeout(() => {
			let tempArr7 = vs7LC.current || [];
			let tempArr6 = vs6LC.current || [];
			let tempArr5 = vs5LC.current || [];
			let tempArr4 = vs4LC.current || [];
			let tempArr3 = vs3LC.current || [];
			let tempArr2 = vs2LC.current || [];
			let tempArr1 = vs1LC.current || [];
	
			tempArr7[6].visible = true
			tempArr6[5].visible = true
			tempArr5[4].visible = true
			tempArr4[3].visible = true
			tempArr3[2].visible = true
			tempArr2[1].visible = true
			tempArr1[0].visible = true
	
	
			setvs1(tempArr1)
			setvs2(tempArr2)
			setvs3(tempArr3)
			setvs4(tempArr4)
			setvs5(tempArr5)
			setvs6(tempArr6)
			setvs7(tempArr7)
	
	
	
		}, 400)
		
	}

    function selectOrMoveCard(card) {

        let firstCard = selectedCard.current[0]

        let firstCardId = selectedCard.current[1]
        let currentCardId = card.type + card.number;

        let firstCardImg = document.getElementById(firstCardId)
        let currentCardImg = document.getElementById(currentCardId)


        if(card.visible) {

            if(typeof firstCard == 'undefined') {

                selectedCard.current = [card, card.type + card.number]
                currentCardImg.classList.add("selected")

            } else {

             if(firstCardId == currentCardId) {

                selectedCard.current = []
                currentCardImg.classList.remove("selected")

             } 
            }

        }
    }



  return (
    <div id='verschiebeStapeln'>{/*mitte*/}
		{ready ? <>
            <div className='verschiebestapel'><div>
				{	
					vs1.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
                            )
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					vs2.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					vs3.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					vs4.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					vs5.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					vs6.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
            <div className='verschiebestapel'><div>
				{
					vs7.map(card => {
						return(
							<img key={Math.random()} onClick={() => selectOrMoveCard(card)} id={card.visible ? (card.type + card.number) : null} className={'card ' + (card.currentPosition == "vs" ? "vsCard" : card.currentPosition == "gs" ? "gsCard" : "zk")} src={card.visible ? card.image : umgedrehteKarte} alt={card.number}/>
						)
					})
				}	
			</div></div>
			</> : null }
        </div>
  )
}

export default VerschiebeStapeln