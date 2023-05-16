import { cardsData } from "./Cards/importCards"

export var deck = [...cardsData]

export var zufallsKarten = [];
export var alleVS = []

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

    vs7 = [deck[51], deck[50], deck[49], deck[48], deck[47], deck[46], deck[45]]
    vs6 = [deck[44], deck[43], deck[42], deck[41], deck[40], deck[39]]
    vs5 = [deck[38], deck[37], deck[36], deck[35], deck[34]]
    vs4 = [deck[33], deck[32], deck[31], deck[30]]
    vs3 = [deck[29], deck[28], deck[27]]
    vs2 = [deck[26], deck[25]]
    vs1 = [deck[24]]

    alleVS = [vs1, vs2, vs3, vs4, vs5, vs6, vs7]

    for(let i = 0; i < 24; i++) {
       zufallsKarten[i] = deck[i]
    }
}

var selectedCards = []

export function selectOrMoveCard(card) {


    let firstCard = selectedCards[0]

    let firstCardId = selectedCards[1]
    let currentCardId = card.type + card.number;

    let firstCardImg = document.getElementById(firstCardId)
    let currentCardImg = document.getElementById(currentCardId)

    console.log(currentCardImg)


    if(card.visible) {

        if(typeof firstCard == 'undefined') {

            selectedCards = [card, card.type + card.number]
            currentCardImg.classList.add("selected")

        } else {

         if(firstCardId == currentCardId) {

            selectedCards = []
            currentCardImg.classList.remove("selected")

         } 
        }

    }
}
