import React, { Component } from 'react'
import './ShowCard.css'

class ShowCard extends Component {

    
    render() {
        const {show, favChar, photoprop, quote} = this.props
        return (
            <div className="container">
                <img src={photoprop}/>
                <div className="text-box">
                <h1>show: {show}</h1>
                <h1>charter: {favChar}</h1>
                <h1>quote: {quote}</h1>
                </div>
            </div>
        )
    }
}

export default ShowCard;