import React, { Component } from 'react'
import Card from './Card'
import axios from 'axios'
import './Deck.css'
const API_URL = 'https://www.deckofcardsapi.com/api/deck/'

class Deck extends Component {
    constructor(props) {
        super(props)
        this.state = { deckId: '', cards: [], isDone: false }
        this.drawCard = this.drawCard.bind(this)
        this.newDeck = this.newDeck.bind(this)
    }

    componentDidMount() {
        this.newDeck()
    }

    newDeck() {
        axios.get(API_URL + 'new/shuffle/?deck_count=1').then(res => {
            console.log(res)
            this.setState({ deckId: res.data.deck_id, cards: [], isDone: false })
        }).catch(e => {
            console.log('Error', e)
        })
    }

    drawCard() {
        axios.get(API_URL + `${this.state.deckId}/draw/?count=1`)
            .then(res => {
                // console.log(res.data.cards[0].code)
                const newCard = res.data.cards[0].image
                this.setState(cur => {
                    let isDone = (res.data.remaining === 0)
                    return { cards: [...cur.cards, newCard], isDone: isDone }
                })
            }).catch(e => {
                console.log('Error', e)
            })
    }

    render() {
        const cards = this.state.cards.map(c => {
            return <Card url={c} />
        })
        const btn = this.state.isDone
            ? <div>
                <h2>Out of cards!</h2>
                <button onClick={this.newDeck}>New Deck?</button>
            </div>
            : <button onClick={this.drawCard}>Draw a Card </button>

        return (
            <div className="Deck">
                <h1>Deck of Cards</h1>
                {btn}
                <div className="Deck-cards">
                    {cards}
                </div>
            </div>
        )

    }
}

export default Deck