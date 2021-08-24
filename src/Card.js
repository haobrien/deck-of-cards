import React, { Component } from 'react'

class Card extends Component {
    static defaultProps = {
        // rotation: `rotate(${Math.random() * 360}deg)`
    }
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <img src={this.props.url} style={{transform: 0}}/>
            </div>
        )
    }
}

export default Card