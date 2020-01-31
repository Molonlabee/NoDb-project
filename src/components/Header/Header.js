import React, { Component } from "react";
// import "./Header.css";


class Header extends Component {
  render() {
    return (
      <div className='Header'>
        <h1>Header</h1>

      <div>
        <input placeholder="Title"/>
        <input placeholder="Date"/>

        <button>Buttton</button>
      </div>

      </div>


    );
  }
}

export default Header;