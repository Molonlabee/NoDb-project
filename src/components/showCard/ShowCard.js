import React, { Component } from 'react'
import './ShowCard.css'


class ShowCard extends Component {

    
    render() {
        const {show, favChar, photoprop, quote, id} = this.props
        return (
            <main className="container">
                <div className="img-box">
                    <img src={photoprop}/>  
                </div>
                
                <section className="text-box">
                    <h1>show: {show}</h1>
                    <h1>charter: {favChar}</h1>
                    <h1>quote: {quote}</h1>
                    <div className="btn-box">
                        <button onClick={ () => this.props.postShow(id)}>Add Quote</button>
                        <button onClick={ () => this.props.editShow(id)}>Edit Quote</button>
                        <button onClick={ () => this.props.deleteShow(id)}>Delete</button>
                        <textarea />
                    </div>
                </section>
            </main>
        )
    }
}

export default ShowCard;