import { cardsData } from "./Cards/importCards"

export var deck = [...cardsData]
export var newDeck = [...cardsData]

export var zufallsKarten = [];
export var alleVS = [[], [], [], [], [], [], []]
export var alleGS = [[], [], [], []]

export function updateDeck(newDeck) {
    deck = newDeck
}

export function getDeck() {
    return(deck)
}

export function randomizeCards() {
    var vs1, vs2, vs3, vs4, vs5, vs6, vs7
    for(let i = deck.length - 1; i > 1; i--) {
        let j = Math.floor(Math.random() * i);
        [deck[i], deck[j]] = [deck[j], deck[i]]
    }

    for(let i = 24; i < 52; i++){
        deck[i].currentPosition = "vs"
    } 

    vs7 = [deck[51], deck[50], deck[49], deck[48], deck[47], deck[46], deck[45]]
    vs6 = [deck[44], deck[43], deck[42], deck[41], deck[40], deck[39]]
    vs5 = [deck[38], deck[37], deck[36], deck[35], deck[34]]
    vs4 = [deck[33], deck[32], deck[31], deck[30]]
    vs3 = [deck[29], deck[28], deck[27]]
    vs2 = [deck[26], deck[25]]
    vs1 = [deck[24]]

    alleVS = [vs1, vs2, vs3, vs4, vs5, vs6, vs7]

    for(let i = 0; i < 24; i++) {
        deck[i].currentPosition = "zk"
       zufallsKarten[i] = deck[i]
    }

    newDeck = deck
}

export function showUpperCards() {

    for(let i = 0; i < 7; i++) {
        if(typeof alleVS[i][alleVS[i].length - 1] !== "undefined"){
            alleVS[i][alleVS[i].length - 1].visible = true

        var currentIndex = newDeck.findIndex(c =>{ 
            return c.type == alleVS[i][alleVS[i].length - 1].type && c.number == alleVS[i][alleVS[i].length - 1]
        })
        
        if(currentIndex != -1) {
        newDeck[currentIndex].visible = true
        }
    }
    }
    for(let i = 0; i < alleVS.length; i++) {
        if(typeof alleVS[i][0] !== "undefined") {
            alleVS[i][alleVS[i].length - 1].visible = true

        }
    }
}

var selectedCards = []
export var selectedCardId = ""

function addToGS(gsType, card) {
    switch (gsType){
        case "pik":
            alleGS[0][alleGS[0].length] = card;
            break;
        case "kreuz":
            alleGS[1][alleGS[1].length] = card;
            break;
        case "herz":
            alleGS[2][alleGS[2].length] = card;
            break;
        case "karo":
            alleGS[3][alleGS[3].length] = card;
            break;
    }



    removeFromOrgin(card)

    newDeck[card.cardIndex].currentPosition = "gs"
    console.log(deck)
    console.log(newDeck)

}

function moveInVs(currentCard, firstCard, firstVs, newVs, cardIndexInFirstVS, isZk) {

    var iszk = isZk || false;

    var newVsIndex = -1
    var counter = 0

    var currentIndex = newDeck.findIndex(c =>{ 
        return c.type == firstCard.type && c.number == firstCard.number
    })
        firstCard.currentPosition = "vs"
        alleVS[newVs][alleVS[newVs].length] = firstCard 
        console.log(alleVS[newVs])


    if(!iszk) {
        removeFromOrgin(firstCard, firstVs, cardIndexInFirstVS)
    } else {
        removeFromOrgin(firstCard)

    }

    newDeck[currentIndex].currentPosition = "vs"


}

function removeFromOrgin(card, vsIndex, currentCardIndex){
    if(card.currentPosition == "zk"){
        var currentIndex = zufallsKarten.findIndex(c =>{ 
            return c.type == card.type && c.number == card.number
        })
        zufallsKarten.splice(currentIndex, 1)

    } else if(card.currentPosition == "vs"){

        if(typeof vsIndex === "undefined"){
            var currentIndex = -1;
            var counter = 0
           while(currentIndex == -1) {
                currentIndex = alleVS[counter].findIndex(c =>{ 
                    return c.type == card.type && c.number == card.number
                })
                if(currentIndex != -1) {
                    break;
                }
                counter++;
            }
            
            alleVS[counter].splice(currentIndex, 1)    
        } else {
            alleVS[vsIndex].splice(currentCardIndex, 1)    

        }
       showUpperCards()
    }
}


export function selectOrMoveCard(card, updateB) {

    if(selectedCards.length >=3) {
        selectedCards = []
    }

    updateB()


    let currentCardId = card.type + card.number;
    let currentCardImg = document.getElementById(currentCardId)

    let firstCard = selectedCards[0]
    let firstCardId = selectedCards[1]

    let firstCardImg = document.getElementById(firstCardId)



    if(card.visible) {

        if(typeof firstCard == 'undefined') {
            // wenn davor keine Karte gewählt wurde

            if(card.currentPosition === "vs") {

                let cardIndex = -1;
                let cardIndexInVs = -1;
                let VSIndex = 0;

                while(cardIndex == -1) {
                    cardIndex = alleVS[VSIndex].findIndex(c =>{ 
                        return c.type == card.type && c.number == card.number
                    })
                    if(cardIndex != -1) {
                        break;
                    }
                    VSIndex++;
                } 

                cardIndexInVs = alleVS[VSIndex].findIndex(c =>{ 
                    return c.type == card.type && c.number == card.number
                })

                

                selectedCards = [{...card, cardIndex: cardIndex, vsIndex: VSIndex, cardIndexInVs: cardIndexInVs}, currentCardId]

            } else if(card.currentPosition === "zk") {

                var currentIndex = zufallsKarten.findIndex(c =>{ 
                    return c.type == card.type && c.number == card.number
                })

                selectedCards = [{...card, cardIndex: currentIndex}, currentCardId]
            } else {
                selectedCards = [card, currentCardId]
            }

            currentCardImg.className = currentCardImg.className + " selected"
            selectedCardId = currentCardId;


        } else {

         if(firstCardId == currentCardId) {
            // entferne Selection wenn selbe Karte angeklickt wird
            selectedCards = []
            currentCardImg.classList.remove("selected")
            selectedCardId = ""
         } else {

            if(firstCard.currentPosition !== "gs" && card.currentPosition === "gs"){

     
                if(firstCard.currentPosition === "vs" && firstCard.cardIndexInVs !== alleVS[firstCard.vsIndex]?.length - 1) {
                    firstCardImg.classList.remove("selected")
                    currentCardImg.classList.remove("selected")
                    selectedCards = []
                    selectedCardId = ""
                    return null;
                }

                if(firstCard.type === card.type && firstCard.number == (card.number + 1)){

                    addToGS(firstCard.type, firstCard)
                    firstCardImg.classList.remove("selected")
                    currentCardImg.classList.remove("selected")
                    selectedCards = []
                    selectedCardId = ""

                } else {

                    firstCardImg.classList.remove("selected")
                    currentCardImg.classList.remove("selected")
                    selectedCards = []
                    selectedCardId = ""

                }

            } 
            else if(firstCard.currentPosition !== "gs" && card.currentPosition === "vs") {

                if(firstCard.color !== card.color && firstCard.number == (card.number - 1)){

                    let currentCardIndex = -1;
                    let newVSIndex = 0;

                    while(currentCardIndex == -1) {
                        currentCardIndex = alleVS[newVSIndex].findIndex(c =>{ 
                            return c.type == card.type && c.number == card.number
                        })
                        if(currentCardIndex != -1) {
                            break;
                        }
                        newVSIndex++;
                    }

                    if(firstCard.currentPosition === "vs") {
                        moveInVs(card, firstCard, firstCard.VSIndex, newVSIndex, firstCard.cardIndex)
                    } else {
                        moveInVs(card, firstCard, 0, newVSIndex, firstCard.cardIndex, true)

                    }
                    firstCardImg.classList.remove("selected")
                    currentCardImg.classList.remove("selected")
                    selectedCards = []
                    selectedCardId = ""
                } else {
                    firstCardImg.classList.remove("selected")
                    currentCardImg.classList.remove("selected")
                    selectedCards = []
                    selectedCardId = ""
                } 
            }  
         }
        }

        console.log(selectedCards)
        console.log(card)

    }
}
