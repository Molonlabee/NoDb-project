import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="input_head">
                <h1>What Would  <input/>  say?</h1>
                </div>
            </header>
        )
    }
}

export default Header