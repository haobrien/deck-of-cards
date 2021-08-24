import React, { Component } from 'react'

class Card extends Component {
    constructor(props) {
        super(props)
        let angle = Math.random() * 20 - 10
        let xPos = Math.random() * 30 - 15
        let yPos = Math.random() * 30 - 15
        this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`
    }
    render() {
        return (
            <img 
                style={{ transform: this._transform }}
                src={this.props.url} 
                alt="card" />
        )
    }
}

export default Card